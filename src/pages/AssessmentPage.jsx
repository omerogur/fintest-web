import { ClipboardCheck, Link2, Printer, RotateCcw } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Link } from '../components/L';
import { MeetingCta, PageHeader, Tag, usePageTitle } from '../components/blocks';
import { PAGE_IMAGES } from '../config/images';
import { useContent } from '../content';
import { CHANNELS, INITIATIVES, ORG_TYPES, REGIONS, assess, readAnswers, writeAnswers } from '../lib/assessment';
import { cn } from '../lib/cn';

function Choice({ type, name, value, checked, onChange, label, hint }) {
  return (
    <label
      className={cn(
        'flex min-h-14 cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
        checked ? 'border-accent bg-accent-soft' : 'border-line bg-surface hover:border-accent',
      )}
    >
      <input type={type} name={name} value={value} checked={checked} onChange={onChange} className="mt-0.5 size-5 flex-shrink-0 accent-[var(--accent)]" />
      <span>
        <span className="block font-semibold text-fg">{label}</span>
        {hint && <span className="mt-0.5 block text-sm text-muted">{hint}</span>}
      </span>
    </label>
  );
}

function Question({ n, title, hint, children }) {
  return (
    <fieldset className="card p-5 sm:p-6">
      <legend className="sr-only">{title}</legend>
      <p className="text-xs font-semibold tracking-wide text-accent uppercase" aria-hidden="true">
        {n}
      </p>
      <p className="mt-1 text-lg font-semibold text-fg" aria-hidden="true">{title}</p>
      {hint && <p className="mt-1 text-sm text-muted">{hint}</p>}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export default function AssessmentPage() {
  const { t } = useTranslation();
  const { regulationBySlug, testTypeBySlug } = useContent();
  usePageTitle(t('assess.title'), t('assess.subtitle'));
  const [params, setParams] = useSearchParams();
  const answers = readAnswers(params);
  const [copied, setCopied] = useState(false);

  const update = (patch) => setParams(writeAnswers({ ...answers, ...patch }), { replace: true });
  const toggle = (key, value) => {
    const cur = answers[key];
    update({ [key]: cur.includes(value) ? cur.filter((x) => x !== value) : [...cur, value] });
  };
  const ready = answers.org && answers.region;
  const result = useMemo(() => (ready ? assess(answers, regulationBySlug) : null), [ready, answers, regulationBySlug]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* pano erişimi yoksa kullanıcı adresi kendisi kopyalayabilir */
    }
  };

  const reasonText = (r) => {
    if (r.startsWith('reg:')) return t('assess.reason.fromReg', { title: regulationBySlug[r.slice(4)]?.title });
    if (r.startsWith('ch:')) return t(`assess.reason.channel.${r.slice(3)}`);
    if (r.startsWith('in:')) return t(`assess.reason.initiative.${r.slice(3)}`);
    return t(`assess.reason.${r}`);
  };

  return (
    <>
      <PageHeader
        crumbs={[{ label: t('assess.crumb') }]}
        eyebrow={t('assess.eyebrow')}
        title={t('assess.title')}
        subtitle={t('assess.subtitle')}
        image={PAGE_IMAGES.assessment}
      />
      <div className="container-x grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <form className="flex flex-col gap-5 no-print" onSubmit={(e) => e.preventDefault()} aria-describedby="assess-disclaimer">
          <Question n={t('assess.q', { n: 1 })} title={t('assess.orgTitle')}>
            {ORG_TYPES.map((v) => (
              <Choice
                key={v}
                type="radio"
                name="org"
                value={v}
                checked={answers.org === v}
                onChange={() => update({ org: v })}
                label={t(`assess.org.${v}.label`)}
                hint={t(`assess.org.${v}.hint`)}
              />
            ))}
          </Question>
          <Question n={t('assess.q', { n: 2 })} title={t('assess.regionTitle')}>
            {REGIONS.map((v) => (
              <Choice key={v} type="radio" name="region" value={v} checked={answers.region === v} onChange={() => update({ region: v })} label={t(`assess.region.${v}`)} />
            ))}
          </Question>
          <Question n={t('assess.q', { n: 3 })} title={t('assess.channelsTitle')} hint={t('assess.multi')}>
            {CHANNELS.map((v) => (
              <Choice
                key={v}
                type="checkbox"
                name="channels"
                value={v}
                checked={answers.channels.includes(v)}
                onChange={() => toggle('channels', v)}
                label={t(`assess.channel.${v}`)}
              />
            ))}
          </Question>
          <Question n={t('assess.q', { n: 4 })} title={t('assess.initiativesTitle')} hint={t('assess.multi')}>
            {INITIATIVES.map((v) => (
              <Choice
                key={v}
                type="checkbox"
                name="initiatives"
                value={v}
                checked={answers.initiatives.includes(v)}
                onChange={() => toggle('initiatives', v)}
                label={t(`assess.initiative.${v}`)}
              />
            ))}
          </Question>
          <p id="assess-disclaimer" className="rounded-xl border border-line bg-surface-2 p-4 text-sm text-muted">
            {t('assess.disclaimer')}
          </p>
        </form>

        <section aria-labelledby="assess-result" aria-live="polite" className="lg:sticky lg:top-24 lg:self-start">
          <div className="card overflow-hidden">
            <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-5 py-4">
              <ClipboardCheck className="size-5 text-accent" aria-hidden="true" />
              <h2 id="assess-result" className="font-display text-lg font-bold text-fg">{t('assess.resultTitle')}</h2>
            </div>

            {!result ? (
              <p className="p-6 text-muted">{t('assess.empty')}</p>
            ) : (
              <div className="flex flex-col gap-7 p-5 sm:p-6">
                <div>
                  <h3 className="font-semibold text-fg">{t('assess.regsTitle', { count: result.regulations.length })}</h3>
                  <ul className="mt-3 space-y-2">
                    {result.regulations.map(({ slug, reasons }) => (
                      <li key={slug} className="rounded-xl border border-line p-3">
                        <Link to={`/regulasyonlar/${slug}`} className="font-semibold text-accent hover:underline">{regulationBySlug[slug].title}</Link>
                        <p className="mt-0.5 text-sm text-muted">{reasons.map(reasonText).join(' · ')}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-fg">{t('assess.testsTitle', { count: result.testTypes.length })}</h3>
                  <ul className="mt-3 space-y-2">
                    {result.testTypes.map(({ slug, level, reasons }) => (
                      <li key={slug} className="flex items-start justify-between gap-3 rounded-xl border border-line p-3">
                        <div className="min-w-0">
                          <Link to={`/test-turleri/${slug}`} className="font-semibold text-fg hover:text-accent hover:underline">{testTypeBySlug[slug]?.title}</Link>
                          <p className="mt-0.5 line-clamp-2 text-sm text-muted">{reasons.slice(0, 3).map(reasonText).join(' · ')}</p>
                        </div>
                        <Tag className={cn(level === 'required' && 'border-accent bg-accent text-on-accent')}>{t(`levels.${level}.short`)}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="no-print flex flex-wrap gap-2 border-t border-line pt-5">
                  <Link to={`/toplanti-talebi?konu=${result.topics.join(',') || 'diger'}`} className="btn btn-primary">{t('assess.cta')}</Link>
                  <button type="button" onClick={copyLink} className="btn btn-outline">
                    <Link2 className="size-4" aria-hidden="true" /> {copied ? t('assess.copied') : t('assess.copy')}
                  </button>
                  <button type="button" onClick={() => window.print()} className="btn btn-outline">
                    <Printer className="size-4" aria-hidden="true" /> {t('method.print')}
                  </button>
                  <button type="button" onClick={() => setParams({}, { replace: true })} className="btn btn-outline">
                    <RotateCcw className="size-4" aria-hidden="true" /> {t('assess.reset')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <div className="container-x pb-4">
        <MeetingCta topic={result?.topics?.join(',') || 'diger'} />
      </div>
    </>
  );
}
