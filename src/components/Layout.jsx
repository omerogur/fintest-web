import { ArrowUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { SITE } from '../config/site.config';
import { isContentLoaded, loadContent, useContent } from '../content';
import { DEFAULT_LANG, LANGUAGES, isSupported } from '../i18n';
import Header from './Header';
import { Link } from './L';

// Sayfa değişince odağı ana içeriğe taşır; ekran okuyucu yeni sayfanın başlığını okur.
// Adreste #bölüm varsa (ilk açılışta da) o bölüme gider; SSS sorusuysa açar.
// Yalnızca dil öneki değiştiyse (aynı sayfa, başka dil) kaydırma ve odak yerinde kalır.
function useRouteFocus(mainRef, ready) {
  const { pathname, hash } = useLocation();
  const first = useRef(true);
  const prev = useRef(null);
  useEffect(() => {
    if (!ready) return;
    const initial = first.current;
    first.current = false;
    const key = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') + hash;
    const languageOnly = prev.current === key;
    prev.current = key;
    if (languageOnly) return;
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        if (el.tagName === 'DETAILS') el.open = true;
        el.scrollIntoView();
        el.focus({ preventScroll: true });
        return;
      }
    }
    if (initial) return;
    window.scrollTo(0, 0);
    mainRef.current?.querySelector('h1')?.focus({ preventScroll: true });
  }, [pathname, hash, mainRef, ready]);
}

function BackToTop() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        document.querySelector('main h1')?.focus({ preventScroll: true });
      }}
      className="no-print fixed right-4 bottom-4 z-30 grid size-12 place-items-center rounded-full border border-line bg-surface text-fg shadow-lg hover:border-accent"
      aria-label={t('common.backToTop')}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}

function FooterList({ title, items }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm leading-snug">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-white/75 hover:text-white hover:underline">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Footer() {
  const { t } = useTranslation();
  const { TEST_TYPES, REGULATIONS } = useContent();
  return (
    <footer className="mt-24 bg-navy text-white">
      <div className="container-x grid gap-x-8 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="sm:col-span-2 lg:col-span-3">
          <p className="font-display text-lg font-bold">{t('site.name')}</p>
          <p className="mt-2 max-w-xs text-sm text-white/75">{t('site.tagline')}</p>
          <Link to="/toplanti-talebi" className="btn mt-6 bg-white text-[#0a2540] hover:bg-[#e8effc]">
            {t('nav.meeting')}
          </Link>
          <p className="mt-4 text-sm">
            <a href={`mailto:${SITE.contactEmail}`} className="break-all text-white/75 underline hover:text-white">
              {SITE.contactEmail}
            </a>
          </p>
        </div>
        <div className="lg:col-span-3">
          <FooterList title={t('nav.testTypes')} items={TEST_TYPES.map((x) => ({ to: `/test-turleri/${x.slug}`, label: x.title }))} />
        </div>
        <nav aria-label={t('nav.regulationsFull')} className="sm:col-span-2 lg:col-span-4">
          <h2 className="text-sm font-semibold text-white">{t('nav.regulationsFull')}</h2>
          <div className="mt-4 grid grid-cols-2 gap-x-8">
            {['intl', 'tr'].map((region) => (
              <div key={region}>
                <p className="text-xs font-semibold tracking-wide text-white/55 uppercase">{t(`region.${region}`)}</p>
                <ul className="mt-2.5 space-y-2.5 text-sm leading-snug">
                  {REGULATIONS.filter((r) => r.region === region).map((r) => (
                    <li key={r.slug}>
                      <Link to={`/regulasyonlar/${r.slug}`} className="text-white/75 hover:text-white hover:underline">
                        {r.shortTitle || r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
        <div className="lg:col-span-2">
          <FooterList
            title={t('nav.guide')}
            items={[
              { to: '/uyum-kontrolu', label: t('nav.assessment') },
              { to: '/regulasyonlar#matris', label: t('nav.matrix') },
              { to: '/test-yaklasimi', label: t('nav.approach') },
              { to: '/sozluk', label: t('glossary.title') },
              { to: '/sss', label: t('faq.title') },
              { to: '/cozum-ortagi', label: t('nav.partner') },
            ]}
          />
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-white/70 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <p className="max-w-3xl">{t('footer.disclaimer', { date: t('site.lastReviewed') })}</p>
          <ul className="flex flex-shrink-0 flex-wrap gap-x-5 gap-y-2">
            <li><Link to="/erisilebilirlik-beyani" className="underline hover:text-white">{t('footer.accessibility')}</Link></li>
            <li><Link to="/gizlilik" className="underline hover:text-white">{t('footer.privacy')}</Link></li>
            <li>
              {t('footer.partner')}{' '}
              <a href={SITE.partner.url} className="underline hover:text-white" target="_blank" rel="noreferrer">
                {SITE.partner.name}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

// Arayüz metinlerinde duran ama aranabilir olması gereken sayfalar.
function uiSearchIndex(t) {
  const products = t('products', { returnObjects: true });
  const partnerText = [
    t('site.partnerSummary'),
    t('partner.mambuText'),
    t('partner.fimpleText'),
    ...t('partner.expertise', { returnObjects: true }),
    ...Object.values(products).map((p) => `${p.name} ${p.kind} ${p.summary}`),
    SITE.showClientReference ? t('site.clientNote') : '',
  ].join(' ');
  return [
    { kind: 'guide', title: t('partner.pageTitle'), subtitle: SITE.partner.name, summary: t('site.partnerSummary'), href: '/cozum-ortagi', text: partnerText },
    ...Object.entries(products).map(([key, p]) => ({
      kind: 'guide',
      title: p.name,
      subtitle: p.kind,
      summary: p.summary,
      href: key === 'corebanking' ? '/cozum-ortagi#core-banking' : '/cozum-ortagi#cozumler',
      text: `${p.name} ${p.kind} ${p.summary}`,
    })),
    { kind: 'guide', title: t('assess.title'), subtitle: t('nav.assessment'), summary: t('assess.subtitle'), href: '/uyum-kontrolu', text: `${t('assess.title')} ${t('assess.subtitle')} ${t('home.assessText')}` },
    { kind: 'guide', title: t('meeting.title'), subtitle: t('nav.meetingPage'), summary: t('meeting.subtitle', { partner: SITE.partner.name }), href: '/toplanti-talebi', text: `${t('meeting.title')} ${t('meeting.subtitle', { partner: SITE.partner.name })}` },
  ];
}

// /:lng altındaki tüm sayfaların kabuğu. Desteklenmeyen dil önekinde varsayılan dile yönlendirir.
export default function Layout() {
  const { lng } = useParams();
  const { t, i18n } = useTranslation();
  const { pathname, search, hash } = useLocation();
  const mainRef = useRef(null);

  const valid = isSupported(lng);
  const [loadedLng, setLoadedLng] = useState(() => (valid && isContentLoaded(lng) ? lng : null));
  useEffect(() => {
    if (!valid) return undefined;
    let alive = true;
    loadContent(lng, uiSearchIndex(i18n.getFixedT(lng))).then(() => {
      if (!alive) return;
      if (i18n.language !== lng) i18n.changeLanguage(lng);
      document.documentElement.lang = lng;
      setLoadedLng(lng);
    });
    return () => {
      alive = false;
    };
  }, [lng, valid, i18n]);

  // Dil alternatifleri ve canonical adres: arama motorları her dili ayrı ama bağlantılı sayfa olarak görür.
  useEffect(() => {
    if (!valid) return;
    const base = SITE.siteUrl || window.location.origin;
    const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '');
    document.head.querySelectorAll('link[data-seo]').forEach((l) => l.remove());
    const add = (rel, href, hreflang) => {
      const l = document.createElement('link');
      l.rel = rel;
      l.href = href;
      if (hreflang) l.hreflang = hreflang;
      l.dataset.seo = '';
      document.head.appendChild(l);
    };
    add('canonical', `${base}/${lng}${rest}`);
    LANGUAGES.forEach((l) => add('alternate', `${base}/${l.code}${rest}`, l.code));
    add('alternate', `${base}/${DEFAULT_LANG}${rest}`, 'x-default');
  }, [pathname, lng, valid]);

  const ready = valid && loadedLng === lng && i18n.language === lng;
  useRouteFocus(mainRef, ready);

  // İlk sayfa hazır olunca diğer dillerin içeriği arka planda yüklenir; dil değişimi anında olur.
  useEffect(() => {
    if (!ready) return undefined;
    const id = setTimeout(() => {
      LANGUAGES.filter((l) => l.code !== lng).forEach((l) => loadContent(l.code, uiSearchIndex(i18n.getFixedT(l.code))));
    }, 1500);
    return () => clearTimeout(id);
  }, [ready, lng, i18n]);

  if (!valid) return <Navigate to={`/${DEFAULT_LANG}${pathname}${search}${hash}`} replace />;
  if (!loadedLng) return null;

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-lg bg-accent px-4 py-3 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {t('nav.skip')}
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
