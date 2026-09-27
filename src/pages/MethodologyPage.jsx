import { Printer } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../components/Icon';
import { Link } from '../components/L';
import { BulletList, MeetingCta, PageHeader, Paragraphs, Section, usePageTitle } from '../components/blocks';
import { PAGE_IMAGES } from '../config/images';
import { useContent } from '../content';

function Pipeline({ stages }) {
  const { t } = useTranslation();
  return (
    <ol className="mt-6 grid gap-3 md:grid-cols-5" aria-label={t('method.pipelineLabel')}>
      {stages.map((s, i) => (
        <li key={s.stage} className="relative rounded-xl border border-line bg-surface-2 p-4">
          <span className="text-xs font-semibold text-accent">{t('method.stage', { n: i + 1 })}</span>
          <h4 className="font-semibold text-fg">{s.stage}</h4>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {s.tests.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function Checklist({ groups }) {
  const { t } = useTranslation();
  const [checked, setChecked] = useState({});
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;
  return (
    <div>
      <div className="no-print mb-4 flex flex-wrap items-center gap-4">
        <p className="text-sm text-muted" aria-live="polite">
          {t('method.checked', { done, total })}
        </p>
        <button type="button" onClick={() => window.print()} className="btn btn-outline">
          <Printer className="size-4" aria-hidden="true" /> {t('method.print')}
        </button>
        {done > 0 && (
          <button type="button" onClick={() => setChecked({})} className="text-sm font-medium text-accent underline">
            {t('method.clear')}
          </button>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((g) => (
          <fieldset key={g.group} className="card p-5">
            <legend className="px-1 font-semibold text-fg">{g.group}</legend>
            <ul className="mt-2 space-y-2">
              {g.items.map((item) => {
                const id = `${g.group}-${item}`;
                return (
                  <li key={item}>
                    <label className="flex cursor-pointer gap-3 text-[15px] text-fg">
                      <input
                        type="checkbox"
                        checked={!!checked[id]}
                        onChange={(e) => setChecked((c) => ({ ...c, [id]: e.target.checked }))}
                        className="mt-1 size-5 flex-shrink-0 accent-[var(--accent)]"
                      />
                      <span>{item}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}
      </div>
    </div>
  );
}

export default function MethodologyPage() {
  const { t, i18n } = useTranslation();
  const { METHODOLOGY: m, testTypeBySlug } = useContent();
  usePageTitle(t('method.crumb'));
  return (
    <>
      <PageHeader
        crumbs={[{ label: t('method.crumb') }]}
        eyebrow={t('method.eyebrow')}
        title={t('method.title')}
        subtitle={t('method.subtitle')}
        image={PAGE_IMAGES.methodology}
      />
      <div className="container-x flex max-w-5xl flex-col gap-16 py-12">
        <Paragraphs items={m.intro} />

        {m.pillars?.map((p) => (
          <Section key={p.id} id={p.id} title={p.title}>
            <div className="flex items-start gap-4">
              <span className="grid size-11 flex-shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon name={p.icon} className="size-5" />
              </span>
              <p className="pt-2 font-medium text-fg">{p.summary}</p>
            </div>
            <div className="mt-5">
              <Paragraphs items={p.paragraphs} />
            </div>
            {p.bullets?.length > 0 && (
              <div className="mt-5">
                <BulletList items={p.bullets} />
              </div>
            )}
            {p.pipeline && <Pipeline stages={p.pipeline} />}
            {p.id === 'risk-bazli' && m.riskMatrix && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-fg">{t('method.riskTitle')}</h3>
                <p className="mt-1 text-sm text-muted">{m.riskMatrix.note}</p>
                <div className="card mt-4 overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <caption className="sr-only">{t('method.riskCaption')}</caption>
                    <thead className="bg-surface-2">
                      <tr>
                        <th scope="col" className="p-3 font-semibold">{t('method.cols.area')}</th>
                        <th scope="col" className="p-3 font-semibold">{t('method.cols.impact')}</th>
                        <th scope="col" className="p-3 font-semibold">{t('method.cols.likelihood')}</th>
                        <th scope="col" className="p-3 font-semibold">{t('method.cols.focus')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {m.riskMatrix.rows.map((r) => (
                        <tr key={r.area} className="border-t border-line align-top">
                          <th scope="row" className="p-3 font-medium text-fg">{r.area}</th>
                          <td className="p-3 text-fg">{r.impact}</td>
                          <td className="p-3 text-fg">{r.likelihood}</td>
                          <td className="p-3 text-muted">{r.focus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </Section>
        ))}

        <Section id="kontrol-listesi" title={t('method.checklistTitle')}>
          <p className="mb-6 max-w-3xl text-muted">{t('method.checklistText')}</p>
          {m.releaseChecklist && <Checklist key={i18n.language} groups={m.releaseChecklist} />}
        </Section>

        {m.relatedTestTypes?.length > 0 && (
          <Section id="ilgili" title={t('method.related')}>
            <ul className="flex flex-wrap gap-2">
              {m.relatedTestTypes.map((s) =>
                testTypeBySlug[s] ? (
                  <li key={s}>
                    <Link to={`/test-turleri/${s}`} className="inline-flex min-h-10 items-center rounded-lg border border-line bg-surface px-3 text-sm font-medium text-fg hover:border-accent">
                      {testTypeBySlug[s].title}
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </Section>
        )}

        <MeetingCta topic="diger" title={t('method.ctaTitle')} />
      </div>
    </>
  );
}
