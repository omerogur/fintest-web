import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { SITE } from '../config/site.config';
import { useContent } from '../content';
import { DEFAULT_LANG, isSupported } from '../i18n';
import Header from './Header';
import { Link } from './L';

// Sayfa değişince odağı ana içeriğe taşır; ekran okuyucu yeni sayfanın başlığını okur.
function useRouteFocus(mainRef) {
  const { pathname, hash } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        el.focus({ preventScroll: true });
        return;
      }
    }
    window.scrollTo(0, 0);
    mainRef.current?.querySelector('h1')?.focus({ preventScroll: true });
  }, [pathname, hash, mainRef]);
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
            <li><Link to="/test-yaklasimi" className={linkCls}>{t('nav.approach')}</Link></li>
            <li><Link to="/cozum-ortagi" className={linkCls}>{t('nav.partner')}</Link></li>
            <li><Link to="/toplanti-talebi" className={linkCls}>{t('nav.meetingPage')}</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/70 md:flex-row md:justify-between">
          <p>{t('footer.disclaimer', { date: t('site.lastReviewed') })}</p>
          <p>
            {t('footer.partner')}{' '}
            <a href={SITE.partner.url} className="underline hover:text-white" target="_blank" rel="noreferrer">
              {SITE.partner.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// /:lng altındaki tüm sayfaların kabuğu. Desteklenmeyen dil önekinde varsayılan dile yönlendirir.
export default function Layout() {
  const { lng } = useParams();
  const { t, i18n } = useTranslation();
  const { pathname, search, hash } = useLocation();
  const mainRef = useRef(null);
  useRouteFocus(mainRef);

  const valid = isSupported(lng);
  useEffect(() => {
    if (!valid) return;
    if (i18n.language !== lng) i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  }, [lng, valid, i18n]);

  useEffect(() => {
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('site.metaDescription'));
  }, [t, lng]);

  if (!valid) return <Navigate to={`/${DEFAULT_LANG}${pathname}${search}${hash}`} replace />;
  if (i18n.language !== lng) return null;

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
      <Footer />
    </>
  );
}
