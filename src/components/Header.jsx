import { Check, ChevronDown, Globe, Menu, Moon, Search, Sun, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RRLink, useLocation } from 'react-router-dom';
import { useContent } from '../content';
import { LANGUAGES } from '../i18n';
import { cn } from '../lib/cn';
import { Link, NavLink, useLangPath } from './L';
import SearchDialog from './SearchDialog';

function useNav() {
  const { t } = useTranslation();
  const { TEST_TYPES, REGULATIONS } = useContent();
  return useMemo(
    () => [
      {
        label: t('nav.testTypes'),
        to: '/test-turleri',
        items: TEST_TYPES.map((x) => ({ label: x.title, to: `/test-turleri/${x.slug}` })),
      },
      {
        label: t('nav.regulations'),
        to: '/regulasyonlar',
        items: [
          ...REGULATIONS.map((r) => ({ label: r.title, to: `/regulasyonlar/${r.slug}`, group: r.region })),
          { label: t('nav.matrix'), to: '/regulasyonlar#matris', group: 'matrix' },
        ],
      },
      { label: t('nav.approach'), to: '/test-yaklasimi' },
      { label: t('nav.partner'), to: '/cozum-ortagi' },
    ],
    [t, TEST_TYPES, REGULATIONS],
  );
}

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* depolama kapalıysa tema yalnızca bu oturumda geçerli */
    }
    setTheme(next);
  };
  return [theme, toggle];
}

// Küre düğmesi ile açılan dil menüsü. Aynı sayfanın diğer dildeki adresine gider; yalnızca dil öneki değişir.
function LanguageMenu({ className, align = 'right' }) {
  const { t, i18n } = useTranslation();
  const { pathname, search, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '');
  const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        ref.current?.querySelector('button')?.focus();
      }
    };
    const onClick = (e) => !ref.current?.contains(e.target) && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn('relative', className)} onBlur={(e) => !ref.current?.contains(e.relatedTarget) && setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="lang-menu"
        aria-label={`${t('nav.language')}: ${current.label}`}
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-11 items-center gap-1.5 rounded-lg border border-line bg-surface px-3 text-sm font-semibold text-fg hover:border-accent"
      >
        <Globe className="size-5" aria-hidden="true" />
        <span aria-hidden="true">{current.short}</span>
        <ChevronDown className={cn('size-4 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>
      {open && (
        <ul id="lang-menu" className={cn('card absolute top-full z-50 mt-2 w-48 p-1.5 shadow-xl', align === 'right' ? 'right-0' : 'left-0')}>
          {LANGUAGES.map((l) => {
            const active = l.code === current.code;
            return (
              <li key={l.code}>
                <RRLink
                  to={`/${l.code}${rest}${search}${hash}`}
                  lang={l.code}
                  hrefLang={l.code}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] hover:bg-surface-2',
                    active ? 'font-semibold text-accent' : 'text-fg',
                  )}
                >
                  <span className="w-7 text-xs font-bold text-muted">{l.short}</span>
                  <span className="flex-1">{l.label}</span>
                  {active && <Check className="size-4" aria-hidden="true" />}
                </RRLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Dropdown({ item }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();
  const lp = useLangPath();
  const active = pathname.startsWith(lp(item.to));
  const id = `menu-${item.to.slice(1)}`;

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        ref.current?.querySelector('button')?.focus();
      }
    };
    const onClick = (e) => !ref.current?.contains(e.target) && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  const regs = item.items.filter((i) => i.group && i.group !== 'matrix');
  const grouped = regs.length
    ? [
        { title: t('region.intl'), items: regs.filter((i) => i.group === 'intl') },
        { title: t('region.tr'), items: regs.filter((i) => i.group === 'tr') },
      ]
    : [{ title: null, items: item.items }];
  const matrix = item.items.find((i) => i.group === 'matrix');

  return (
    <li ref={ref} className="relative" onBlur={(e) => !ref.current?.contains(e.relatedTarget) && setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'flex min-h-11 items-center gap-1 rounded-lg px-3 text-[15px] font-medium whitespace-nowrap hover:text-accent',
          active ? 'text-accent' : 'text-fg',
        )}
      >
        {item.label}
        <ChevronDown className={cn('size-4 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>
      {open && (
        <div id={id} className={cn('card absolute top-full left-0 z-50 mt-2 p-3 shadow-xl', grouped.length > 1 ? 'w-[520px]' : 'w-[340px]')}>
          <Link to={item.to} className="mb-2 block rounded-lg px-3 py-2 text-sm font-semibold text-accent hover:bg-surface-2">
            {t('nav.seeAll')}
          </Link>
          <div className={cn('grid gap-3', grouped.length > 1 && 'grid-cols-2')}>
            {grouped.map((g) => (
              <div key={g.title || 'all'}>
                {g.title && <p className="px-3 pb-1 text-xs font-semibold tracking-wide text-muted uppercase">{g.title}</p>}
                <ul>
                  {g.items.map((i) => (
                    <li key={i.to}>
                      <Link to={i.to} className="block rounded-lg px-3 py-2 text-sm text-fg hover:bg-surface-2">
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {matrix && (
            <Link to={matrix.to} className="mt-2 block rounded-lg border-t border-line px-3 pt-3 pb-1 text-sm font-medium text-fg hover:text-accent">
              {matrix.label}
            </Link>
          )}
        </div>
      )}
    </li>
  );
}

export default function Header() {
  const { t } = useTranslation();
  const nav = useNav();
  const [theme, toggleTheme] = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const siteName = t('site.name');

  useEffect(() => setMobileOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e) => {
      const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName);
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="container-x flex h-16 items-center gap-4">
        <Link to="/" className="flex items-center gap-2.5 rounded-lg" aria-label={t('nav.homeLabel', { name: siteName })}>
          <img src="/favicon.svg" alt="" className="size-8" />
          <span className="font-display text-lg font-bold tracking-tight whitespace-nowrap text-fg">{siteName}</span>
        </Link>

        <nav aria-label={t('nav.mainMenu')} className="ml-2 hidden xl:block">
          <ul className="flex items-center">
            {nav.map((item) =>
              item.items ? (
                <Dropdown key={item.to} item={item} />
              ) : (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn('flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium whitespace-nowrap hover:text-accent', isActive ? 'text-accent' : 'text-fg')
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex min-h-11 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-sm text-muted hover:border-accent"
          >
            <Search className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">{t('nav.search')}</span>
            <kbd className="hidden rounded border border-line px-1.5 text-xs md:inline">/</kbd>
          </button>
          <LanguageMenu className="hidden sm:block" />
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('nav.toLight') : t('nav.toDark')}
            className="grid size-11 place-items-center rounded-lg border border-line bg-surface text-fg hover:border-accent"
          >
            {theme === 'dark' ? <Sun className="size-5" aria-hidden="true" /> : <Moon className="size-5" aria-hidden="true" />}
          </button>
          <Link to="/toplanti-talebi" className="btn btn-primary hidden whitespace-nowrap md:inline-flex">
            {t('nav.meeting')}
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-lg border border-line xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" aria-label={t('nav.mobileMenu')} className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-surface xl:hidden">
          <ul className="container-x flex flex-col py-3">
            <li className="pb-2 sm:hidden">
              <LanguageMenu className="w-fit" align="left" />
            </li>
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="block rounded-lg px-2 py-3 font-semibold text-fg">
                  {item.label}
                </Link>
                {item.items && (
                  <ul className="mb-2 ml-3 border-l border-line pl-3">
                    {item.items.map((i) => (
                      <li key={i.to}>
                        <Link to={i.to} className="block py-2 text-sm text-muted hover:text-accent">
                          {i.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Link to="/toplanti-talebi" className="btn btn-primary w-full">
                {t('nav.meeting')}
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
