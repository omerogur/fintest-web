import { ArrowRight, CornerDownLeft, Search, X } from 'lucide-react';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MIN_QUERY, useContent } from '../content';
import { cn } from '../lib/cn';
import { useLangNavigate } from './L';

const QUICK_LINKS = [
  { key: 'assess', href: '/uyum-kontrolu' },
  { key: 'tests', href: '/test-turleri' },
  { key: 'matrix', href: '/regulasyonlar#matris' },
  { key: 'checklist', href: '/test-yaklasimi#kontrol-listesi' },
  { key: 'meeting', href: '/toplanti-talebi' },
];

export default function SearchDialog({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const returnFocus = useRef(null);
  const { t } = useTranslation();
  const { search } = useContent();
  const navigate = useLangNavigate();
  const listId = useId();
  const results = useMemo(() => search(query).slice(0, 20), [query, search]);
  const suggested = t('search.suggested', { returnObjects: true });
  const tooShort = query.trim().length > 0 && query.trim().length < MIN_QUERY;
  const searching = query.trim().length >= MIN_QUERY;

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) {
      returnFocus.current = document.activeElement;
      d.showModal();
      setQuery('');
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (!open && d.open) {
      d.close();
      returnFocus.current?.focus?.();
    }
  }, [open]);

  // Klavyeyle seçilen sonuç görünür alanda kalsın.
  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const go = (href) => {
    onClose();
    navigate(href);
  };

  const setQ = (v) => {
    setQuery(v);
    setActive(0);
    inputRef.current?.focus();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      go(results[active].href);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-labelledby={`${listId}-title`}
      className="mx-auto mt-[10vh] mb-auto h-[min(560px,80vh)] w-[min(680px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/50 open:flex open:flex-col"
    >
      <h2 id={`${listId}-title`} className="sr-only">
        {t('search.title')}
      </h2>

      <div className="focus-within-ring flex flex-shrink-0 items-center gap-3 border-b border-line px-4">
        <Search className="size-5 flex-shrink-0 text-muted" aria-hidden="true" />
        <input
          ref={inputRef}
          type="text"
          inputMode="search"
          enterKeyHint="search"
          autoComplete="off"
          spellCheck={false}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={onKeyDown}
          placeholder={t('search.placeholder')}
          aria-label={t('search.label')}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={results.length > 0}
          aria-controls={listId}
          aria-activedescendant={results[active] ? `${listId}-${active}` : undefined}
          className="focus-inset h-14 min-w-0 flex-1 bg-transparent text-base placeholder:text-muted"
        />
        {query && (
          <button type="button" onClick={() => setQ('')} className="rounded-md px-2 py-1 text-sm text-muted hover:bg-surface-2 hover:text-fg">
            {t('search.clear')}
          </button>
        )}
        <button type="button" onClick={onClose} aria-label={t('search.close')} className="grid size-11 flex-shrink-0 place-items-center rounded-lg hover:bg-surface-2">
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-2">
        {!searching && (
          <div className="p-3">
            {tooShort && <p className="mb-4 text-sm text-muted">{t('search.minChars', { count: MIN_QUERY })}</p>}
            <p className="text-xs font-semibold tracking-wide text-muted uppercase">{t('search.popular')}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {suggested.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQ(s)}
                  className="min-h-9 rounded-lg border border-line bg-surface-2 px-3 text-sm text-fg hover:border-accent"
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="mt-7 text-xs font-semibold tracking-wide text-muted uppercase">{t('search.quick')}</p>
            <ul className="mt-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    type="button"
                    onClick={() => go(l.href)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[15px] text-fg hover:bg-surface-2"
                  >
                    {t(`search.quickLinks.${l.key}`)}
                    <ArrowRight className="size-4 text-muted" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {searching && results.length === 0 && (
          <div className="grid h-full place-items-center p-6 text-center">
            <div>
              <p className="font-semibold text-fg">{t('search.noResults', { query })}</p>
              <p className="mt-1 text-sm text-muted">{t('search.tryOther')}</p>
            </div>
          </div>
        )}

        <ul ref={listRef} id={listId} role="listbox" aria-label={t('search.results')} hidden={!searching || results.length === 0}>
          {results.map((r, i) => (
            <li
              key={r.href}
              id={`${listId}-${i}`}
              data-index={i}
              role="option"
              aria-selected={i === active}
              onMouseMove={() => setActive(i)}
              onClick={() => go(r.href)}
              className={cn('flex cursor-pointer items-start gap-3 rounded-xl px-3 py-2.5', i === active && 'bg-surface-2')}
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="truncate font-semibold">{r.title}</span>
                  <span className="flex-shrink-0 text-xs font-semibold text-accent">{t(`kind.${r.kind}`)}</span>
                </div>
                <span className="line-clamp-1 block text-sm text-muted">{r.summary}</span>
              </div>
              {i === active && <CornerDownLeft className="mt-1 size-4 flex-shrink-0 text-muted" aria-hidden="true" />}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-shrink-0 items-center justify-between border-t border-line px-4 py-2.5 text-xs text-muted">
        <span>
          <kbd className="rounded border border-line px-1">↑</kbd> <kbd className="rounded border border-line px-1">↓</kbd> {t('search.navigate')} ·{' '}
          <kbd className="rounded border border-line px-1">Enter</kbd> {t('search.open')} · <kbd className="rounded border border-line px-1">Esc</kbd> {t('search.closeHint')}
        </span>
        <span aria-live="polite">{searching ? t('search.count', { count: results.length }) : ''}</span>
      </div>
    </dialog>
  );
}
