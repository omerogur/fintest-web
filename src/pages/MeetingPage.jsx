import { CircleCheck, Mail } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Link } from '../components/L';
import { PageHeader, usePageTitle } from '../components/blocks';
import { PAGE_IMAGES } from '../config/images';
import { SITE, TOPIC_IDS } from '../config/site.config';
import { cn } from '../lib/cn';

const FIELDS = [
  { name: 'adSoyad', autoComplete: 'name', required: true },
  { name: 'kurum', autoComplete: 'organization', required: true },
  { name: 'unvan', autoComplete: 'organization-title', required: true },
  { name: 'eposta', type: 'email', autoComplete: 'email', required: true },
  { name: 'telefon', type: 'tel', autoComplete: 'tel', required: false },
];

const inputCls = 'mt-1.5 min-h-11 w-full rounded-lg border bg-surface px-3 text-fg placeholder:text-muted';

function buildMail(t, values, topics) {
  const topicLabels = TOPIC_IDS.filter((id) => topics.includes(id)).map((id) => t(`topics.${id}`));
  const subject = t('meeting.mail.subject', { topics: topicLabels.join(', ') || t('meeting.mail.general'), org: values.kurum });
  const f = (k) => t(`meeting.fields.${k}`);
  const body = [
    `${f('adSoyad')}: ${values.adSoyad}`,
    `${f('kurum')}: ${values.kurum}`,
    `${f('unvan')}: ${values.unvan}`,
    `${f('eposta')}: ${values.eposta}`,
    `${f('telefon')}: ${values.telefon || '-'}`,
    `${t('meeting.mail.topics')}: ${topicLabels.join(', ') || '-'}`,
    `${f('tarih')}: ${values.tarih || '-'}`,
    '',
    `${t('meeting.message')}:`,
    values.mesaj || '-',
    '',
    t('meeting.mail.consent'),
  ].join('\n');
  return { subject, body, href: `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
}

export default function MeetingPage() {
  const { t } = useTranslation();
  usePageTitle(t('meeting.crumb'));
  const [params] = useSearchParams();
  const initialTopics = useMemo(() => (params.get('konu') || '').split(',').filter((id) => TOPIC_IDS.includes(id)), [params]);
  const [topics, setTopics] = useState(initialTopics);
  const [values, setValues] = useState({ adSoyad: '', kurum: '', unvan: '', eposta: '', telefon: '', mesaj: '', tarih: '' });
  const [kvkk, setKvkk] = useState(false);
  // Hatalar kod olarak tutulur; dil değişince mesajlar da yeni dilde görünür.
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);
  const summaryRef = useRef(null);
  const today = new Date().toISOString().slice(0, 10);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const toggleTopic = (id) => setTopics((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  const errorText = (name, code) =>
    code === 'required' ? t('meeting.errors.required', { field: t(`meeting.fields.${name}`) }) : t(`meeting.errors.${code}`);

  const validate = () => {
    const e = {};
    FIELDS.forEach((f) => {
      if (f.required && !values[f.name].trim()) e[f.name] = 'required';
    });
    if (values.eposta && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.eposta)) e.eposta = 'email';
    if (topics.length === 0) e.konular = 'topics';
    if (!kvkk) e.kvkk = 'kvkk';
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    const mail = buildMail(t, values, topics);
    if (SITE.formEndpoint) {
      try {
        const res = await fetch(SITE.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...values, konular: topics, kvkk }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setSent({ mode: 'api', mail });
        return;
      } catch {
        // Servis yanıt vermezse e-posta taslağına düş.
      }
    }
    window.location.href = mail.href;
    setSent({ mode: 'mailto', mail });
  };

  if (sent) {
    return (
      <>
        <PageHeader crumbs={[{ label: t('meeting.crumb') }]} title={t('meeting.doneTitle')} />
        <div className="container-x max-w-3xl py-12">
          <div role="status" className="card p-6 sm:p-8">
            <CircleCheck className="size-10 text-ok" aria-hidden="true" />
            {sent.mode === 'api' ? (
              <p className="mt-4 text-lg text-fg">{t('meeting.doneApi')}</p>
            ) : (
              <>
                <p className="mt-4 text-lg text-fg">{t('meeting.doneMail', { email: SITE.contactEmail })}</p>
                <p className="mt-3 text-muted">{t('meeting.doneFallback')}</p>
                <a href={sent.mail.href} className="btn btn-primary mt-5">
                  <Mail className="size-4" aria-hidden="true" /> {t('meeting.openDraft')}
                </a>
                <label htmlFor="mail-body" className="mt-6 block text-sm font-semibold text-fg">{t('meeting.bodyLabel')}</label>
                <textarea
                  id="mail-body"
                  readOnly
                  rows={10}
                  value={`${t('meeting.mail.subjectLabel')}: ${sent.mail.subject}\n\n${sent.mail.body}`}
                  className={cn(inputCls, 'border-line py-2 font-mono text-sm')}
                />
              </>
            )}
          </div>
        </div>
      </>
    );
  }

  const errorList = Object.entries(errors);
  const fieldError = (name) =>
    errors[name] ? (
      <p id={`${name}-hata`} className="mt-1 text-sm font-medium text-warn">
        {errorText(name, errors[name])}
      </p>
    ) : null;

  return (
    <>
      <PageHeader
        crumbs={[{ label: t('meeting.crumb') }]}
        eyebrow={t('meeting.eyebrow')}
        title={t('meeting.title')}
        subtitle={t('meeting.subtitle', { partner: SITE.partner.name })}
        image={PAGE_IMAGES.meeting}
      />
      <div className="container-x grid gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <form noValidate onSubmit={onSubmit} className="card flex flex-col gap-6 p-6 sm:p-8">
          {errorList.length > 0 && (
            <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-xl border-2 border-warn bg-surface-2 p-4">
              <p className="font-semibold text-fg">{t('meeting.errors.summary', { count: errorList.length })}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {errorList.map(([k, code]) => (
                  <li key={k}>
                    <a href={`#${k === 'konular' ? `konu-${TOPIC_IDS[0]}` : k}`} className="text-fg underline">{errorText(k, code)}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-sm text-muted">
            <span aria-hidden="true">*</span> {t('meeting.requiredNote')}
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="text-sm font-semibold text-fg">
                  {t(`meeting.fields.${f.name}`)} {f.required && <span aria-hidden="true">*</span>}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type || 'text'}
                  autoComplete={f.autoComplete}
                  required={f.required}
                  aria-required={f.required}
                  aria-invalid={!!errors[f.name]}
                  aria-describedby={errors[f.name] ? `${f.name}-hata` : undefined}
                  value={values[f.name]}
                  onChange={set(f.name)}
                  className={cn(inputCls, errors[f.name] ? 'border-warn' : 'border-line')}
                />
                {fieldError(f.name)}
              </div>
            ))}
            <div>
              <label htmlFor="tarih" className="text-sm font-semibold text-fg">{t('meeting.fields.tarih')}</label>
              <input id="tarih" type="date" min={today} value={values.tarih} onChange={set('tarih')} className={cn(inputCls, 'border-line')} />
            </div>
          </div>

          <fieldset aria-describedby={errors.konular ? 'konular-hata' : undefined}>
            <legend className="text-sm font-semibold text-fg">
              {t('meeting.topicsLegend')} <span aria-hidden="true">*</span>
              <span className="font-normal text-muted"> {t('meeting.topicsHint')}</span>
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {TOPIC_IDS.map((id) => (
                <label
                  key={id}
                  className={cn(
                    'flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border px-3 text-[15px] text-fg',
                    topics.includes(id) ? 'border-accent bg-accent-soft' : 'border-line',
                  )}
                >
                  <input
                    id={`konu-${id}`}
                    type="checkbox"
                    checked={topics.includes(id)}
                    onChange={() => toggleTopic(id)}
                    className="size-5 accent-[var(--accent)]"
                  />
                  {t(`topics.${id}`)}
                </label>
              ))}
            </div>
            {fieldError('konular')}
          </fieldset>

          <div>
            <label htmlFor="mesaj" className="text-sm font-semibold text-fg">{t('meeting.message')}</label>
            <textarea
              id="mesaj"
              rows={5}
              maxLength={2000}
              value={values.mesaj}
              onChange={set('mesaj')}
              aria-describedby="mesaj-ipucu"
              className={cn(inputCls, 'border-line py-2')}
            />
            <p id="mesaj-ipucu" className="mt-1 text-xs text-muted">{t('meeting.messageHint')}</p>
          </div>

          <div>
            <details className="rounded-lg border border-line bg-surface-2 p-4 text-sm">
              <summary className="cursor-pointer font-semibold text-fg">{t('meeting.kvkkTitle')}</summary>
              <p className="mt-3 text-muted">{t('meeting.kvkkText', { partner: SITE.partner.name, email: SITE.contactEmail })}</p>
            </details>
            <label className="mt-3 flex cursor-pointer items-start gap-3 text-[15px] text-fg">
              <input
                id="kvkk"
                type="checkbox"
                checked={kvkk}
                onChange={(e) => setKvkk(e.target.checked)}
                aria-invalid={!!errors.kvkk}
                aria-describedby={errors.kvkk ? 'kvkk-hata' : undefined}
                className="mt-0.5 size-5 flex-shrink-0 accent-[var(--accent)]"
              />
              <span>
                {t('meeting.kvkkConsent')} <span aria-hidden="true">*</span>
              </span>
            </label>
            {fieldError('kvkk')}
          </div>

          <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">{SITE.formEndpoint ? t('meeting.noteApi') : t('meeting.noteMail', { email: SITE.contactEmail })}</p>
            <button type="submit" className="btn btn-primary">
              {t('meeting.submit')}
            </button>
          </div>
        </form>
        <aside aria-labelledby="next-steps" className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
          <div className="card p-5">
            <h2 id="next-steps" className="font-semibold text-fg">{t('meeting.nextTitle')}</h2>
            <ol className="mt-4 space-y-3">
              {t('meeting.nextSteps', { returnObjects: true }).map((s, i) => (
                <li key={s} className="flex gap-3 text-sm text-fg">
                  <span className="grid size-6 flex-shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-bold text-accent" aria-hidden="true">{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="card p-5">
            <h2 className="font-semibold text-fg">{t('meeting.directTitle')}</h2>
            <p className="mt-2 text-sm text-muted">{t('meeting.directText')}</p>
            <a href={`mailto:${SITE.contactEmail}`} className="mt-3 inline-block font-semibold break-all text-accent underline">{SITE.contactEmail}</a>
          </div>
          <div className="card p-5">
            <h2 className="font-semibold text-fg">{t('meeting.prepTitle')}</h2>
            <p className="mt-2 text-sm text-muted">{t('meeting.prepText')}</p>
            <Link to="/uyum-kontrolu" className="mt-3 inline-block text-sm font-semibold text-accent underline underline-offset-2 hover:decoration-2">{t('nav.assessment')} →</Link>
          </div>
        </aside>
      </div>
    </>
  );
}
