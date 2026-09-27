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

function Footer() {
  const { t } = useTranslation();
  const { TEST_TYPES, REGULATIONS } = useContent();
  const linkCls = 'text-white/75 hover:text-white hover:underline';
  return (
    <footer className="mt-24 bg-navy text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold">{t('site.name')}</p>
          <p className="mt-2 text-sm text-white/75">{t('site.tagline')}</p>
        </div>
        <nav aria-label={t('nav.testTypes')}>
          <h2 className="text-sm font-semibold">{t('nav.testTypes')}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {TEST_TYPES.map((x) => (
              <li key={x.slug}>
                <Link to={`/test-turleri/${x.slug}`} className={linkCls}>{x.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={t('nav.regulationsFull')}>
          <h2 className="text-sm font-semibold">{t('nav.regulationsFull')}</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {REGULATIONS.map((r) => (
              <li key={r.slug}>
                <Link to={`/regulasyonlar/${r.slug}`} className={linkCls}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={t('nav.guide')}>
          <h2 className="text-sm font-semibold">{t('nav.guide')}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/uyum-kontrolu" className={linkCls}>{t('nav.assessment')}</Link></li>
            <li><Link to="/test-yaklasimi" className={linkCls}>{t('nav.approach')}</Link></li>
            <li><Link to="/sozluk" className={linkCls}>{t('glossary.title')}</Link></li>
            <li><Link to="/sss" className={linkCls}>{t('faq.title')}</Link></li>
            <li><Link to="/cozum-ortagi" className={linkCls}>{t('nav.partner')}</Link></li>
            <li><Link to="/toplanti-talebi" className={linkCls}>{t('nav.meetingPage')}</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/70 md:flex-row md:justify-between">
          <p>{t('footer.disclaimer', { date: t('site.lastReviewed') })}</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link to="/erisilebilirlik-beyani" className="underline hover:text-white">{t('footer.accessibility')}</Link>
            <Link to="/gizlilik" className="underline hover:text-white">{t('footer.privacy')}</Link>
            <span>
            {t('footer.partner')}{' '}
            <a href={SITE.partner.url} className="underline hover:text-white" target="_blank" rel="noreferrer">
              {SITE.partner.name}
            </a>
            </span>
          </p>
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
