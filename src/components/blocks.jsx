import { ArrowRight, CalendarCheck, ChevronRight, ExternalLink, Handshake } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGE_IMAGES } from '../config/images';
import { SITE } from '../config/site.config';
import { cn } from '../lib/cn';
import { Link } from './L';

export function usePageTitle(title) {
  const { t } = useTranslation();
  const name = t('site.name');
  const fallback = t('site.defaultTitle');
  useEffect(() => {
    document.title = title ? `${title} | ${name}` : `${name} — ${fallback}`;
  }, [title, name, fallback]);
}

export function Breadcrumbs({ items }) {
  const { t } = useTranslation();
  return (
    <nav aria-label={t('common.breadcrumb')} className="text-sm">
      <ol className="flex flex-wrap items-center gap-1 text-muted">
        <li>
          <Link to="/" className="hover:text-accent hover:underline">{t('common.home')}</Link>
        </li>
        {items.map((i) => (
          <li key={i.label} className="flex items-center gap-1">
            <ChevronRight className="size-3.5" aria-hidden="true" />
            {i.to ? (
              <Link to={i.to} className="hover:text-accent hover:underline">{i.label}</Link>
            ) : (
              <span aria-current="page" className="text-fg">{i.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({ crumbs, eyebrow, title, subtitle, image, imageOverlay, children }) {
  return (
    <div className="border-b border-line bg-surface">
      <div className={cn('container-x py-10 sm:py-14', image && 'grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]')}>
        <div className="min-w-0">
          {crumbs && <Breadcrumbs items={crumbs} />}
          {eyebrow && <p className="mt-6 text-sm font-semibold text-accent">{eyebrow}</p>}
          <h1 tabIndex={-1} className="h-display mt-2 max-w-4xl text-3xl text-fg outline-none sm:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-4 max-w-3xl text-lg text-muted">{subtitle}</p>}
          {children}
        </div>
        {image && <Photo src={image} overlay={imageOverlay} className="aspect-[16/10] lg:aspect-[4/3]" priority />}
      </div>
    </div>
  );
}

// Dekoratif fotoğraf: ekran okuyucular atlar, metin tek başına anlamlıdır.
export function Photo({ src, className, overlay, priority = false }) {
  return (
    <div className={cn('relative overflow-hidden rounded-2xl border border-line bg-surface-2', className)}>
      <img src={src} alt="" loading={priority ? 'eager' : 'lazy'} decoding="async" className="absolute inset-0 size-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
      {overlay}
    </div>
  );
}

export function Section({ id, title, children, className }) {
  const hid = id ? `${id}-baslik` : undefined;
  return (
    <section id={id} aria-labelledby={hid} className={cn('scroll-mt-24', className)} tabIndex={-1}>
      {title && (
        <h2 id={hid} className="h-display mb-4 text-2xl text-fg">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

export function Paragraphs({ items }) {
  return (
    <div className="prose-body max-w-3xl text-[17px] text-fg">
      {items?.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
    </div>
  );
}

export function BulletList({ items, tone = 'default' }) {
  const dot = { default: 'bg-accent', ok: 'bg-ok', warn: 'bg-warn' }[tone];
  return (
    <ul className="space-y-2.5">
      {items?.map((t) => (
        <li key={t.slice(0, 40)} className="flex gap-3 text-[16px] text-fg">
          <span className={cn('mt-2.5 size-1.5 flex-shrink-0 rounded-full', dot)} aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Tag({ children, className }) {
  return (
    <span className={cn('inline-flex items-center rounded-md border border-line bg-surface-2 px-2 py-0.5 text-xs font-medium text-fg', className)}>
      {children}
    </span>
  );
}

// Konuyla ilgili ürünü tarafsız metnin sonunda gösterir.
export function PartnerBox({ productKey, topic }) {
  const { t } = useTranslation();
  const config = SITE.products[productKey];
  if (!config) return null;
  const product = t(`products.${productKey}`, { returnObjects: true });
  const partner = SITE.partner.name;
  return (
    <aside aria-labelledby="partner-box-title" className="rounded-2xl border-2 border-accent/40 bg-accent-soft p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="grid size-11 flex-shrink-0 place-items-center rounded-xl bg-accent text-on-accent">
          <Handshake className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-accent">{t('partnerBox.eyebrow', { kind: product.kind })}</p>
          <h2 id="partner-box-title" className="h-display mt-1 text-xl text-fg">
            {t('partnerBox.title', { name: product.name })}
          </h2>
          <p className="mt-3 max-w-3xl text-fg">{product.summary}</p>
          {productKey === 'corebanking' && SITE.showClientReference && <p className="mt-3 max-w-3xl text-sm text-muted">{t('site.clientNote')}</p>}
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to={`/toplanti-talebi?konu=${topic}`} className="btn btn-primary">
              <CalendarCheck className="size-4" aria-hidden="true" /> {t('common.requestMeeting')}
            </Link>
            {config.url ? (
              <a href={config.url} target="_blank" rel="noreferrer" className="btn btn-outline">
                {product.name} <ExternalLink className="size-4" aria-hidden="true" />
                <span className="sr-only">{t('common.newTab')}</span>
              </a>
            ) : (
              <Link to="/cozum-ortagi" className="btn btn-outline">
                {t('partnerBox.about', { name: partner })} <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            )}
          </div>
          <p className="mt-4 text-xs text-muted">{t('partnerBox.note', { name: partner })}</p>
        </div>
      </div>
    </aside>
  );
}

export function MeetingCta({ topic = 'diger', title, text }) {
  const { t } = useTranslation();
  return (
    <section aria-labelledby="meeting-cta" className="no-print grid overflow-hidden rounded-2xl border border-line bg-navy text-white md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <div className="p-6 sm:p-10">
        <h2 id="meeting-cta" className="h-display text-2xl sm:text-3xl">
          {title || t('cta.title')}
        </h2>
        <p className="mt-3 max-w-2xl text-white/80">{text || t('cta.text')}</p>
        <Link to={`/toplanti-talebi?konu=${topic}`} className="btn mt-6 bg-white text-navy hover:bg-white/90">
          <CalendarCheck className="size-4" aria-hidden="true" /> {t('common.requestMeeting')}
        </Link>
      </div>
      <div className="relative hidden min-h-56 md:block">
        <img src={PAGE_IMAGES.cta} alt="" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy via-navy/30 to-transparent" />
      </div>
    </section>
  );
}

export function OfficialSourceNote({ source }) {
  const { t } = useTranslation();
  return (
    <div role="note" className="rounded-xl border border-line bg-surface-2 p-4 text-sm text-fg">
      <p className="font-semibold">{t('source.title')}</p>
      <p className="mt-1 text-muted">
        {t('source.text')}
        {source?.label ? ':' : '.'}
      </p>
      {source?.label &&
        (source.url ? (
          <a href={source.url} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 font-medium text-accent underline">
            {source.label} <ExternalLink className="size-3.5" aria-hidden="true" />
            <span className="sr-only">{t('common.newTab')}</span>
          </a>
        ) : (
          <p className="mt-2 font-medium">{source.label}</p>
        ))}
    </div>
  );
}
