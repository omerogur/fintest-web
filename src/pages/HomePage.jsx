import { ArrowRight, ClipboardCheck, Handshake, Scale, Search } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../components/Icon';
import { Link } from '../components/L';
import { MeetingCta, Photo, Tag, usePageTitle } from '../components/blocks';
import { PAGE_IMAGES } from '../config/images';
import { SITE } from '../config/site.config';
import { useContent } from '../content';
import { cn } from '../lib/cn';
import { Matrix } from './RegulationPages';
import { FaqList } from './ResourcePages';
import { TestTypeCard } from './TestTypePages';

const FEATURED = ['dora', 'psd2', 'bddk-bilgi-sistemleri', 'wcag-22', 'acik-bankacilik-ohvps'];

export default function HomePage() {
  const { t } = useTranslation();
  const { METHODOLOGY, REGULATIONS, TEST_TYPES, FAQ, regulationBySlug } = useContent();
  usePageTitle(null);
  const [region, setRegion] = useState('intl');
  const why = t('home.why', { returnObjects: true });
  const regs = REGULATIONS.filter((r) => r.region === region);

  return (
    <>
      <section aria-labelledby="hero-title" className="hero relative overflow-hidden border-b border-line">
        {/* Fotoğraf yalnızca koyu temada görünür; açık tema sade ve aydınlık kalır. */}
        <img src={PAGE_IMAGES.home} alt="" decoding="async" className="hero-photo absolute inset-0 size-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 hidden bg-gradient-to-r from-navy via-navy/85 to-navy/40 dark:block" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 85% 0%, var(--glow-1), transparent 55%), radial-gradient(ellipse at 0% 100%, var(--glow-2), transparent 50%)' }}
        />
        <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          <div>
            <p className="text-sm font-semibold text-[var(--hero-accent)]">{t('home.eyebrow')}</p>
            <h1 id="hero-title" tabIndex={-1} className="h-display mt-4 max-w-4xl text-4xl outline-none sm:text-6xl">
              {t('home.title')}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--hero-muted)]">{t('home.lead')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/test-turleri" className="btn btn-primary">
                {t('home.ctaTests')} <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link to="/regulasyonlar" className="btn hero-outline">
                <Scale className="size-4" aria-hidden="true" /> {t('home.ctaRegs')}
              </Link>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-[var(--hero-muted)]">
              <Search className="size-4" aria-hidden="true" />
              {t('home.searchHintBefore')} <kbd className="rounded border border-[var(--hero-panel-border)] px-1.5">/</kbd> {t('home.searchHintAfter')}
            </p>
          </div>
          <nav aria-label={t('home.featured')} className="hero-panel rounded-2xl p-5 sm:p-6">
            <p className="text-sm font-semibold">{t('home.featured')}</p>
            <ul className="mt-4 divide-y divide-[var(--hero-panel-border)]">
              {FEATURED.map((slug) => {
                const r = regulationBySlug[slug];
                if (!r) return null;
                return (
                  <li key={slug}>
                    <Link to={`/regulasyonlar/${slug}`} className="group flex items-center gap-4 py-3">
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold group-hover:underline">{r.title}</span>
                        <span className="block truncate text-sm text-[var(--hero-muted)]">{r.fullTitle}</span>
                      </span>
                      <span className="flex-shrink-0 rounded-md bg-accent-soft px-2 py-1 text-xs font-semibold text-accent">
                        {t('home.testCount', { count: r.testTypes?.length || 0 })}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>

      <div className="container-x flex flex-col gap-20 py-16">
        <section aria-labelledby="why-title">
          <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <Photo src={PAGE_IMAGES.homeWhy} className="min-h-64" />
            <div>
              <h2 id="why-title" className="h-display text-3xl text-fg">{t('home.whyTitle')}</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {why.map((w, i) => (
                  <li key={w.title} className="card flex gap-4 p-5">
                    <span className="grid size-9 flex-shrink-0 place-items-center rounded-full bg-accent-soft font-bold text-accent" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-fg">{w.title}</h3>
                      <p className="mt-1 text-muted">{w.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="assess-teaser" className="grid items-center gap-8 overflow-hidden rounded-2xl border border-accent/40 bg-accent-soft p-6 sm:p-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-accent">
              <ClipboardCheck className="size-4" aria-hidden="true" /> {t('home.assessEyebrow')}
            </p>
            <h2 id="assess-teaser" className="h-display mt-2 text-3xl text-fg">{t('home.assessTitle')}</h2>
            <p className="mt-3 max-w-2xl text-fg">{t('home.assessText')}</p>
            <Link to="/uyum-kontrolu" className="btn btn-primary mt-6">
              {t('home.assessCta')} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ol className="grid gap-2">
            {t('home.assessSteps', { returnObjects: true }).map((s, i) => (
              <li key={s} className="flex items-center gap-3 rounded-xl border border-line bg-surface p-3">
                <span className="grid size-8 flex-shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-on-accent" aria-hidden="true">{i + 1}</span>
                <span className="text-fg">{s}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="tests-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="tests-title" className="h-display text-3xl text-fg">{t('home.testsTitle')}</h2>
              <p className="mt-2 max-w-2xl text-muted">{t('home.testsLead')}</p>
            </div>
            <Link to="/test-turleri" className="font-semibold text-accent underline underline-offset-2 hover:decoration-2">{t('nav.seeAll')}</Link>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEST_TYPES.map((x) => (
              <TestTypeCard key={x.slug} item={x} />
            ))}
          </ul>
        </section>

        <section aria-labelledby="regs-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="regs-title" className="h-display text-3xl text-fg">{t('home.regsTitle')}</h2>
              <p className="mt-2 max-w-2xl text-muted">{t('home.regsLead')}</p>
            </div>
            <div role="group" aria-label={t('home.regionGroup')} className="flex gap-2">
              {[
                ['intl', t('region.intl')],
                ['tr', t('region.tr')],
              ].map(([v, l]) => (
                <button
                  key={v}
                  type="button"
                  aria-pressed={region === v}
                  onClick={() => setRegion(v)}
                  className={cn(
                    'min-h-11 rounded-lg border px-4 text-sm font-semibold',
                    region === v ? 'border-accent bg-accent text-on-accent' : 'border-line bg-surface text-fg hover:border-accent',
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {regs.map((r) => (
              <li key={r.slug} className="card relative p-4 hover:border-accent">
                <Tag>{t(`kind.${r.kind}`)}</Tag>
                <h3 className="mt-2 font-semibold text-fg">
                  <Link to={`/regulasyonlar/${r.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">{r.title}</Link>
                </h3>
                <p className="mt-1 line-clamp-3 text-sm text-muted">{r.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="matrix-title">
          <h2 id="matrix-title" className="h-display text-3xl text-fg">{t('home.matrixTitle')}</h2>
          <p className="mt-2 mb-6 max-w-2xl text-muted">{t('home.matrixLead')}</p>
          <Matrix regulations={regs} />
          <Link to="/regulasyonlar#matris" className="mt-4 inline-block font-semibold text-accent underline underline-offset-2 hover:decoration-2">{t('home.matrixFull')}</Link>
        </section>

        <section aria-labelledby="method-title" className="card grid gap-8 p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <h2 id="method-title" className="h-display text-3xl text-fg">{t('home.methodTitle')}</h2>
            <p className="mt-3 text-muted">{METHODOLOGY.intro?.[0]}</p>
            <Link to="/test-yaklasimi" className="btn btn-outline mt-6">
              {t('home.methodCta')} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {METHODOLOGY.pillars?.map((p) => (
              <li key={p.id} className="rounded-xl border border-line bg-surface-2 p-4">
                <Icon name={p.icon} className="size-5 text-accent" />
                <h3 className="mt-2 font-semibold text-fg">
                  <Link to={`/test-yaklasimi#${p.id}`} className="hover:underline">{p.title}</Link>
                </h3>
                <p className="mt-1 text-sm text-muted">{p.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        {FAQ.length > 0 && (
          <section aria-labelledby="faq-home" className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <h2 id="faq-home" className="h-display text-3xl text-fg">{t('faq.title')}</h2>
              <p className="mt-2 text-muted">{t('faq.subtitle')}</p>
              <Link to="/sss" className="mt-4 inline-block font-semibold text-accent underline underline-offset-2 hover:decoration-2">{t('home.faqAll', { count: FAQ.length })}</Link>
            </div>
            <FaqList items={FAQ.slice(0, 4)} headingLevel="h3" />
          </section>
        )}

        <section aria-labelledby="partner-home" className="card flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <span className="grid size-14 flex-shrink-0 place-items-center rounded-2xl bg-accent text-on-accent">
            <Handshake className="size-7" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-accent">{t('partner.eyebrow')}</p>
            <h2 id="partner-home" className="mt-1 text-xl font-semibold text-fg">{SITE.partner.name}</h2>
            <p className="mt-2 line-clamp-3 text-muted">{t('site.partnerSummary')}</p>
          </div>
          <Link to="/cozum-ortagi" className="btn btn-outline flex-shrink-0">
            {t('home.partnerCta')} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </section>

        <MeetingCta
          topic="diger"
          title={t('home.ctaTitle')}
          text={t('home.ctaText', { partner: SITE.partner.name })}
        />
      </div>
    </>
  );
}

