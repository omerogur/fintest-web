import { ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../components/L';
import { BulletList, MeetingCta, PageHeader, Paragraphs, Section, Tag, usePageTitle } from '../components/blocks';
import { PAGE_IMAGES } from '../config/images';
import { SITE } from '../config/site.config';
import { useContent } from '../content';

const norm = (s) => s.toLocaleLowerCase('tr').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i');

export function GlossaryPage() {
  const { t } = useTranslation();
  const { GLOSSARY, testTypeBySlug, regulationBySlug } = useContent();
  usePageTitle(t('glossary.title'), t('glossary.subtitle'));
  const [q, setQ] = useState('');
  const sorted = useMemo(() => [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term)), [GLOSSARY]);
  const list = useMemo(() => {
    const n = norm(q.trim());
    return n ? sorted.filter((g) => norm(`${g.term} ${g.expansion} ${g.definition}`).includes(n)) : sorted;
  }, [q, sorted]);
  const letters = [...new Set(sorted.map((g) => g.term[0].toLocaleUpperCase()))];

  return (
    <>
      <PageHeader crumbs={[{ label: t('glossary.title') }]} eyebrow={t('nav.resources')} title={t('glossary.title')} subtitle={t('glossary.subtitle')} image={PAGE_IMAGES.glossary} />
      <div className="container-x flex max-w-5xl flex-col gap-6 py-10">
        <div className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
          <label htmlFor="glossary-filter" className="text-sm font-semibold text-fg">{t('glossary.filter')}</label>
          <input
            id="glossary-filter"
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="min-h-11 flex-1 rounded-lg border border-line bg-surface px-3 text-fg"
            autoComplete="off"
          />
          <p className="text-sm text-muted" aria-live="polite">{t('glossary.count', { count: list.length })}</p>
        </div>
        {!q && (
          <nav aria-label={t('glossary.letters')} className="flex flex-wrap gap-1.5">
            {letters.map((l) => (
              <a key={l} href={`#harf-${l}`} className="grid size-9 place-items-center rounded-lg border border-line bg-surface text-sm font-semibold text-fg hover:border-accent">
                {l}
              </a>
            ))}
          </nav>
        )}
        <dl className="flex flex-col gap-3">
          {list.map((g, i) => {
            const letter = g.term[0].toLocaleUpperCase();
            const firstOfLetter = !q && (i === 0 || list[i - 1].term[0].toLocaleUpperCase() !== letter);
            return (
              <div key={g.id} id={g.id} className="card scroll-mt-24 p-5" tabIndex={-1}>
                <dt>
                  {firstOfLetter && <span id={`harf-${letter}`} className="scroll-mt-24" />}
                  <span className="text-lg font-semibold text-fg">{g.term}</span>
                  {g.expansion && <span className="ml-2 text-sm text-muted">{g.expansion}</span>}
                </dt>
                <dd className="mt-2 text-fg">{g.definition}</dd>
                {(g.testTypes?.length > 0 || g.regulations?.length > 0) && (
                  <dd className="mt-3 flex flex-wrap gap-1.5">
                    {g.testTypes?.filter((s) => testTypeBySlug[s]).map((s) => (
                      <Link key={s} to={`/test-turleri/${s}`} className="inline-flex min-h-7 items-center rounded-md border border-line bg-surface-2 px-2.5 text-xs font-medium text-fg hover:border-accent">
                        {testTypeBySlug[s].title}
                      </Link>
                    ))}
                    {g.regulations?.filter((s) => regulationBySlug[s]).map((s) => (
                      <Link key={s} to={`/regulasyonlar/${s}`} className="inline-flex min-h-7 items-center rounded-md border border-line bg-surface-2 px-2.5 text-xs font-medium text-fg hover:border-accent">
                        {regulationBySlug[s].title}
                      </Link>
                    ))}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
        {list.length === 0 && <p className="text-muted">{t('glossary.none')}</p>}
      </div>
    </>
  );
}

const PAGE_LABEL_KEY = { 'test-yaklasimi': 'nav.approach', 'uyum-kontrolu': 'nav.assessment', sozluk: 'glossary.title', 'toplanti-talebi': 'nav.meetingPage' };

export function FaqList({ items, headingLevel = 'h2' }) {
  const { t } = useTranslation();
  const { testTypeBySlug, regulationBySlug } = useContent();
  const H = headingLevel;
  const linkFor = (l) => {
    if (l.kind === 'testType' && testTypeBySlug[l.slug]) return { to: `/test-turleri/${l.slug}`, label: testTypeBySlug[l.slug].title };
    if (l.kind === 'regulation' && regulationBySlug[l.slug]) return { to: `/regulasyonlar/${l.slug}`, label: regulationBySlug[l.slug].title };
    if (l.kind === 'page' && PAGE_LABEL_KEY[l.slug]) return { to: `/${l.slug}`, label: t(PAGE_LABEL_KEY[l.slug]) };
    return null;
  };
  return (
    <div className="flex flex-col gap-3">
      {items.map((f) => (
        <details key={f.id} id={f.id} className="card group scroll-mt-24 p-0 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5">
            <H className="text-[17px] font-semibold text-fg">{f.q}</H>
            <ChevronDown className="size-5 flex-shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="border-t border-line px-5 pt-4 pb-5">
            <Paragraphs items={f.a} />
            {f.links?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {f.links.map(linkFor).filter(Boolean).map((l) => (
                  <Link key={l.to} to={l.to} className="text-sm font-semibold text-accent underline underline-offset-2 hover:decoration-2">
                    {l.label} →
                  </Link>
                ))}
              </div>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}

export function FaqPage() {
  const { t } = useTranslation();
  const { FAQ } = useContent();
  usePageTitle(t('faq.title'), t('faq.subtitle'));
  return (
    <>
      <PageHeader crumbs={[{ label: t('faq.title') }]} eyebrow={t('nav.resources')} title={t('faq.title')} subtitle={t('faq.subtitle')} image={PAGE_IMAGES.faq} />
      <div className="container-x flex max-w-4xl flex-col gap-12 py-10">
        <FaqList items={FAQ} />
        <MeetingCta topic="diger" title={t('faq.ctaTitle')} />
      </div>
    </>
  );
}

// Yasal metinlerdeki {{email}} / {{partner}} yer tutucuları yapılandırmadan doldurulur.
function fill(s) {
  return s.replaceAll('{{email}}', SITE.contactEmail).replaceAll('{{partner}}', SITE.partner.name);
}

export function LegalPage({ doc }) {
  const { t } = useTranslation();
  const { LEGAL } = useContent();
  const d = LEGAL[doc];
  usePageTitle(d?.title);
  if (!d) return null;
  return (
    <>
      <PageHeader crumbs={[{ label: d.title }]} title={d.title}>
        <p className="mt-4">
          <Tag>{t('legal.updated', { date: d.updated })}</Tag>
        </p>
      </PageHeader>
      <div className="container-x flex max-w-3xl flex-col gap-10 py-10">
        <Paragraphs items={d.intro?.map(fill)} />
        {d.sections?.map((s, i) => (
          <Section key={s.heading} id={`bolum-${i + 1}`} title={s.heading}>
            <Paragraphs items={s.paragraphs?.map(fill)} />
            {s.bullets?.length > 0 && (
              <div className="mt-4">
                <BulletList items={s.bullets.map(fill)} />
              </div>
            )}
          </Section>
        ))}
        <p className="text-sm text-muted">
          <a href={`mailto:${SITE.contactEmail}`} className="font-medium text-accent underline">{SITE.contactEmail}</a>
        </p>
      </div>
    </>
  );
}
