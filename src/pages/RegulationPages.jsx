import { Circle, CircleCheck, Minus, Printer } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useParams } from 'react-router-dom';
import { Link, useLangPath } from '../components/L';
import { BulletList, MeetingCta, OfficialSourceNote, PageHeader, Paragraphs, Section, Tag, usePageTitle } from '../components/blocks';
import { PAGE_IMAGES, REGION_IMAGES } from '../config/images';
import { LEVEL_RANK, levelFor, useContent } from '../content';
import { cn } from '../lib/cn';

// Renk tek başına anlam taşımasın diye her seviyenin ikonu ve metni var.
const LEVEL_MARK = {
  required: { icon: CircleCheck, className: 'bg-accent text-on-accent' },
  expected: { icon: Circle, className: 'bg-accent-soft text-accent border border-accent/50' },
  supporting: { icon: Minus, className: 'bg-surface-2 text-muted border border-line' },
};
const byLevel = (a, b) => LEVEL_RANK[b.level] - LEVEL_RANK[a.level];

function LevelBadge({ level, compact }) {
  const { t } = useTranslation();
  const m = LEVEL_MARK[level];
  const I = m.icon;
  const label = t(`levels.${level}.short`);
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-semibold whitespace-nowrap', m.className)}>
      <I className="size-3.5" aria-hidden="true" />
      {compact ? <span className="sr-only">{label}</span> : label}
    </span>
  );
}

export function Matrix({ regulations }) {
  const { t } = useTranslation();
  const { TEST_TYPES, REGULATIONS, testTypeBySlug } = useContent();
  const rows = regulations || REGULATIONS;
  return (
    <div>
      <ul className="mb-4 flex flex-wrap gap-4 text-sm text-muted" aria-label={t('regs.legend')}>
        {Object.keys(LEVEL_MARK).map((k) => (
          <li key={k} className="flex items-center gap-2">
            <LevelBadge level={k} /> {t(`levels.${k}.label`)}
          </li>
        ))}
      </ul>

      {/* Masaüstü: tablo */}
      <div className="card hidden overflow-x-auto lg:block">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">{t('regs.caption')}</caption>
          <thead>
            <tr>
              <th scope="col" className="sticky left-0 bg-surface p-3 text-left font-semibold text-fg">{t('regs.colHeader')}</th>
              {TEST_TYPES.map((x) => (
                <th key={x.slug} scope="col" className="min-w-[92px] border-l border-line p-2 text-left align-bottom text-xs font-semibold text-fg">
                  <Link to={`/test-turleri/${x.slug}`} className="hover:text-accent underline underline-offset-2 hover:decoration-2">{x.title}</Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.slug} className="border-t border-line">
                <th scope="row" className="sticky left-0 bg-surface p-3 text-left font-medium">
                  <Link to={`/regulasyonlar/${r.slug}`} className="text-accent underline underline-offset-2 hover:decoration-2">{r.title}</Link>
                  <span className="block text-xs font-normal text-muted">{t(`region.${r.region}`)}</span>
                </th>
                {TEST_TYPES.map((x) => {
                  const lv = levelFor(r, x.slug);
                  return (
                    <td key={x.slug} className="border-l border-line p-2 text-center">
                      {lv ? <LevelBadge level={lv} compact /> : <span className="sr-only">{t('regs.noRelation')}</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobil: kartlar */}
      <ul className="grid gap-3 lg:hidden">
        {rows.map((r) => (
          <li key={r.slug} className="card p-4">
            <Link to={`/regulasyonlar/${r.slug}`} className="font-semibold text-accent underline underline-offset-2 hover:decoration-2">{r.title}</Link>
            <ul className="mt-3 space-y-2">
              {[...(r.testTypes || [])].sort(byLevel).map((x) => (
                <li key={x.slug} className="flex items-center justify-between gap-3 text-sm">
                  <Link to={`/test-turleri/${x.slug}`} className="text-fg hover:underline">{testTypeBySlug[x.slug]?.title || x.slug}</Link>
                  <LevelBadge level={x.level} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RegulationCard({ r }) {
  const { t } = useTranslation();
  return (
    <li className="card relative flex flex-col p-5 hover:border-accent">
      <div className="flex flex-wrap gap-1.5">
        <Tag>{t(`region.${r.region}`)}</Tag>
        <Tag>{t(`kind.${r.kind}`)}</Tag>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-fg">
        <Link to={`/regulasyonlar/${r.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">{r.title}</Link>
      </h3>
      <p className="text-xs text-muted">{r.fullTitle}</p>
      <p className="mt-3 text-[15px] text-muted">{r.summary}</p>
    </li>
  );
}

function Filter({ label, value, onChange, options }) {
  return (
    <fieldset className="flex flex-wrap items-center gap-2">
      <legend className="sr-only">{label}</legend>
      <span className="mr-1 text-sm font-semibold text-fg" aria-hidden="true">{label}:</span>
      {options.map(([v, l]) => (
        <button
          key={v}
          type="button"
          aria-pressed={value === v}
          onClick={() => onChange(v)}
          className={cn(
            'min-h-10 rounded-lg border px-3 text-sm font-medium',
            value === v ? 'border-accent bg-accent text-on-accent' : 'border-line bg-surface text-fg hover:border-accent',
          )}
        >
          {l}
        </button>
      ))}
    </fieldset>
  );
}

export function RegulationsPage() {
  const { t } = useTranslation();
  const { REGULATIONS } = useContent();
  usePageTitle(t('regs.title'));
  const [region, setRegion] = useState('all');
  const [kind, setKind] = useState('all');
  const list = useMemo(
    () => REGULATIONS.filter((r) => (region === 'all' || r.region === region) && (kind === 'all' || r.kind === kind)),
    [region, kind, REGULATIONS],
  );
  return (
    <>
      <PageHeader
        crumbs={[{ label: t('nav.regulationsFull') }]}
        eyebrow={t('regs.eyebrow')}
        title={t('regs.title')}
        subtitle={t('regs.subtitle')}
        image={PAGE_IMAGES.regulations}
      />
      <div className="container-x py-10">
        <div className="card flex flex-col gap-4 p-4 md:flex-row md:items-center md:gap-8">
          <Filter
            label={t('regs.region')}
            value={region}
            onChange={setRegion}
            options={[['all', t('regs.all')], ['intl', t('region.intl')], ['tr', t('region.tr')]]}
          />
          <Filter
            label={t('regs.kind')}
            value={kind}
            onChange={setKind}
            options={[['all', t('regs.all')], ['regulation', t('kind.regulation')], ['standard', t('kind.standard')], ['framework', t('kind.framework')]]}
          />
          <p className="text-sm text-muted md:ml-auto" aria-live="polite">{t('regs.results', { count: list.length })}</p>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => <RegulationCard key={r.slug} r={r} />)}
        </ul>

        <Section id="matris" title={t('regs.matrixTitle')} className="mt-16">
          <p className="mb-6 max-w-3xl text-muted">{t('regs.matrixText')}</p>
          <Matrix regulations={list.length ? list : REGULATIONS} />
        </Section>
      </div>
    </>
  );
}

export function RegulationDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const lp = useLangPath();
  const { regulationBySlug, testTypeBySlug } = useContent();
  const r = regulationBySlug[slug];
  usePageTitle(r?.title, r?.summary);
  if (!r) return <Navigate to={lp('/regulasyonlar')} replace />;
  const tests = [...(r.testTypes || [])].sort(byLevel);

  return (
    <>
      <PageHeader
        crumbs={[{ label: t('nav.regulationsFull'), to: '/regulasyonlar' }, { label: r.title }]}
        eyebrow={`${t(`region.${r.region}`)} · ${t(`kind.${r.kind}`)}`}
        title={r.title}
        subtitle={r.fullTitle}
        image={REGION_IMAGES[r.region]}
      >
        <p className="mt-4 max-w-3xl text-fg">{r.summary}</p>
        {r.keyFacts?.length > 0 && (
          <dl className="mt-6 flex flex-wrap gap-3">
            {r.keyFacts.map((f) => (
              <div key={f.label} className="rounded-xl border border-line bg-surface-2 px-4 py-2">
                <dt className="text-xs text-muted">{f.label}</dt>
                <dd className="font-semibold text-fg">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <button type="button" onClick={() => window.print()} className="btn btn-outline no-print mt-6">
          <Printer className="size-4" aria-hidden="true" /> {t('common.print')}
        </button>
      </PageHeader>

      <div className="container-x flex max-w-5xl flex-col gap-14 py-12">
        <Section id="kapsam" title={t('regs.scope')}>
          <Paragraphs items={r.scope} />
        </Section>
        <Section id="beklentiler" title={t('regs.expects')}>
          <BulletList items={r.expects} />
        </Section>
        <Section id="test-turleri" title={t('regs.tests')}>
          <ul className="grid gap-3 md:grid-cols-2">
            {tests.map((x) => {
              const tt = testTypeBySlug[x.slug];
              if (!tt) return null;
              return (
                <li key={x.slug} className="card p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Link to={`/test-turleri/${x.slug}`} className="font-semibold text-accent underline underline-offset-2 hover:decoration-2">{tt.title}</Link>
                    <LevelBadge level={x.level} />
                  </div>
                  <p className="mt-1.5 text-sm text-muted">{x.why}</p>
                </li>
              );
            })}
          </ul>
        </Section>
        <OfficialSourceNote source={r.officialSource} />
        <MeetingCta topic={r.topic} title={t('regs.ctaTitle', { title: r.title })} />
      </div>
    </>
  );
}
