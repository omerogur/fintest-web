import { ArrowRight, CircleCheck, TriangleAlert } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useParams } from 'react-router-dom';
import AttackArcs from '../components/AttackArcs';
import Icon from '../components/Icon';
import { Link, useLangPath } from '../components/L';
import { BulletList, MeetingCta, PageHeader, Paragraphs, PartnerBox, Section, Tag, usePageTitle } from '../components/blocks';
import { PAGE_IMAGES, TEST_TYPE_IMAGES } from '../config/images';
import { useContent } from '../content';

// Fotoğrafın üzerine konuya özel canlı katman
const OVERLAYS = {
  'ddos-dayaniklilik-testi': <AttackArcs className="absolute inset-0 size-full" />,
};

// titleEn alanı her zaman "diğer dildeki" başlığı taşır.
const altLang = (lng) => (lng === 'tr' ? 'en' : 'tr');

export function TestTypeCard({ item }) {
  const { t, i18n } = useTranslation();
  const { regulationsForTestType } = useContent();
  const regs = regulationsForTestType(item.slug).slice(0, 4);
  return (
    <li className="card group relative flex flex-col overflow-hidden transition-colors hover:border-accent">
      <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
        <img
          src={TEST_TYPE_IMAGES[item.slug]}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {OVERLAYS[item.slug]}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
        <span className="absolute bottom-3 left-3 grid size-10 place-items-center rounded-xl bg-accent text-on-accent shadow-lg">
          <Icon name={item.icon} className="size-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-fg">
          <Link to={`/test-turleri/${item.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">
            {item.title}
          </Link>
        </h3>
        <p className="text-xs text-muted" lang={altLang(i18n.language)}>{item.titleEn}</p>
        <p className="mt-3 flex-1 text-[15px] text-muted">{item.summary}</p>
        {regs.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            <span className="sr-only">{t('testTypes.relatedRegs')}</span>
            {regs.map(({ regulation }) => (
              <Tag key={regulation.slug}>{regulation.title}</Tag>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

export function TestTypesPage() {
  const { t } = useTranslation();
  const { TEST_TYPES, REGULATIONS, regulationBySlug } = useContent();
  usePageTitle(t('testTypes.title'));
  const [reg, setReg] = useState('');
  const list = useMemo(
    () => (reg ? TEST_TYPES.filter((x) => regulationBySlug[reg]?.testTypes?.some((l) => l.slug === x.slug)) : TEST_TYPES),
    [reg, TEST_TYPES, regulationBySlug],
  );
  return (
    <>
      <PageHeader
        crumbs={[{ label: t('nav.testTypes') }]}
        eyebrow={t('testTypes.eyebrow')}
        title={t('testTypes.title')}
        subtitle={t('testTypes.subtitle')}
        image={PAGE_IMAGES.testTypes}
      />
      <div className="container-x py-10">
        <div className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
          <label htmlFor="reg-filter" className="text-sm font-semibold text-fg">
            {t('testTypes.filterLabel')}
          </label>
          <select
            id="reg-filter"
            value={reg}
            onChange={(e) => setReg(e.target.value)}
            className="min-h-11 rounded-lg border border-line bg-surface px-3 text-fg sm:w-80"
          >
            <option value="">{t('testTypes.all')}</option>
            {REGULATIONS.map((r) => (
              <option key={r.slug} value={r.slug}>{r.title}</option>
            ))}
          </select>
          <p className="text-sm text-muted sm:ml-auto" aria-live="polite">{t('testTypes.count', { count: list.length })}</p>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((x) => (
            <TestTypeCard key={x.slug} item={x} />
          ))}
        </ul>
      </div>
    </>
  );
}

const TOC_IDS = [
  ['nedir', 'what'],
  ['riskler', 'risks'],
  ['regulasyonlar', 'regs'],
  ['yaklasim', 'approach'],
  ['araclar', 'tools'],
  ['uygulamalar', 'practices'],
];

export function TestTypeDetailPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lp = useLangPath();
  const { TEST_TYPES, testTypeBySlug, regulationBySlug, regulationsForTestType } = useContent();
  const item = testTypeBySlug[slug];
  usePageTitle(item?.title);
  if (!item) return <Navigate to={lp('/test-turleri')} replace />;

  const linked = regulationsForTestType(item.slug);
  const idx = TEST_TYPES.indexOf(item);
  const next = TEST_TYPES[(idx + 1) % TEST_TYPES.length];
  const toc = [
    ...TOC_IDS.map(([id, key]) => [id, t(`testTypes.toc.${key}`)]),
    ...(item.extra?.length ? [['ek', item.extra[0].heading]] : []),
  ];

  return (
    <>
      <PageHeader
        crumbs={[{ label: t('nav.testTypes'), to: '/test-turleri' }, { label: item.title }]}
        eyebrow={<span>{t('testTypes.detailEyebrow', { alt: '' })}<span lang={altLang(i18n.language)}>{item.titleEn}</span></span>}
        title={item.title}
        subtitle={item.summary}
        image={TEST_TYPE_IMAGES[item.slug]}
        imageOverlay={OVERLAYS[item.slug]}
      >
        <Link to={`/toplanti-talebi?konu=${item.topic}`} className="btn btn-primary no-print mt-6">
          {t('common.requestMeeting')}
        </Link>
      </PageHeader>

      <div className="container-x grid gap-10 py-12 lg:grid-cols-[220px_minmax(0,1fr)]">
        <nav aria-label={t('common.pageContents')} className="no-print hidden lg:block">
          <div className="sticky top-24">
            <p className="text-xs font-semibold tracking-wide text-muted uppercase">{t('common.onThisPage')}</p>
            <ul className="mt-3 space-y-1 border-l border-line">
              {toc.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="-ml-px block border-l-2 border-transparent py-1.5 pl-3 text-sm text-muted hover:border-accent hover:text-fg">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="flex min-w-0 flex-col gap-14">
          <Section id="nedir" title={t('testTypes.whatTitle')}>
            <Paragraphs items={item.what} />
          </Section>

          <Section id="riskler" title={t('testTypes.risksTitle')}>
            <BulletList items={item.risks} />
          </Section>

          <Section id="regulasyonlar" title={t('testTypes.regsTitle')}>
            <ul className="grid gap-3 md:grid-cols-2">
              {linked.map(({ regulation: r, link }) => {
                const own = item.regulations?.find((x) => x.slug === r.slug);
                return (
                  <li key={r.slug} className="card p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link to={`/regulasyonlar/${r.slug}`} className="font-semibold text-accent underline-offset-4 hover:underline">
                        {r.title}
                      </Link>
                      <Tag>{t(`levels.${link.level}.short`)}</Tag>
                    </div>
                    <p className="mt-1.5 text-sm text-muted">{own?.note || link.why}</p>
                  </li>
                );
              })}
              {(item.regulations || [])
                .filter((x) => !linked.some((l) => l.regulation.slug === x.slug) && regulationBySlug[x.slug])
                .map((x) => (
                  <li key={x.slug} className="card p-4">
                    <Link to={`/regulasyonlar/${x.slug}`} className="font-semibold text-accent underline-offset-4 hover:underline">
                      {regulationBySlug[x.slug].title}
                    </Link>
                    <p className="mt-1.5 text-sm text-muted">{x.note}</p>
                  </li>
                ))}
            </ul>
          </Section>

          <Section id="yaklasim" title={t('testTypes.approachTitle')}>
            <ol className="space-y-3">
              {item.approach?.map((s, i) => (
                <li key={s.title} className="card flex gap-4 p-4 sm:p-5">
                  <span className="grid size-8 flex-shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-on-accent" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-fg">
                      <span className="sr-only">{t('testTypes.step', { n: i + 1 })}</span>
                      {s.title}
                    </h3>
                    <p className="mt-1 text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="araclar" title={t('testTypes.toolsTitle')}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {item.tools?.map((x) => (
                <li key={x.category} className="rounded-xl border border-line bg-surface-2 p-4">
                  <h3 className="font-semibold text-fg">{x.category}</h3>
                  <p className="mt-1 text-sm text-muted">{x.text}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="uygulamalar" title={t('testTypes.practicesTitle')}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="card p-5">
                <h3 className="flex items-center gap-2 font-semibold text-ok">
                  <CircleCheck className="size-5" aria-hidden="true" /> {t('testTypes.best')}
                </h3>
                <div className="mt-4">
                  <BulletList items={item.bestPractices} tone="ok" />
                </div>
              </div>
              <div className="card p-5">
                <h3 className="flex items-center gap-2 font-semibold text-warn">
                  <TriangleAlert className="size-5" aria-hidden="true" /> {t('testTypes.mistakes')}
                </h3>
                <div className="mt-4">
                  <BulletList items={item.mistakes} tone="warn" />
                </div>
              </div>
            </div>
          </Section>

          {item.extra?.map((x, i) => (
            <Section key={x.heading} id={i === 0 ? 'ek' : undefined} title={x.heading}>
              <Paragraphs items={x.paragraphs} />
              {x.bullets?.length > 0 && (
                <div className="mt-4">
                  <BulletList items={x.bullets} />
                </div>
              )}
            </Section>
          ))}

          {item.product && <PartnerBox productKey={item.product} topic={item.topic} />}
          <MeetingCta topic={item.topic} />

          <Link to={`/test-turleri/${next.slug}`} className="card no-print flex items-center justify-between gap-4 p-5 hover:border-accent">
            <span>
              <span className="block text-sm text-muted">{t('common.next')}</span>
              <span className="font-semibold text-fg">{next.title}</span>
            </span>
            <ArrowRight className="size-5 text-accent" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
