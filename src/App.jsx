import { useTranslation } from 'react-i18next';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { PageHeader, usePageTitle } from './components/blocks';
import { Link } from './components/L';
import Layout from './components/Layout';
import { DEFAULT_LANG, isSupported } from './i18n';
import i18n from './i18n';
import HomePage from './pages/HomePage';
import MeetingPage from './pages/MeetingPage';
import MethodologyPage from './pages/MethodologyPage';
import PartnerPage from './pages/PartnerPage';
import { RegulationDetailPage, RegulationsPage } from './pages/RegulationPages';
import { TestTypeDetailPage, TestTypesPage } from './pages/TestTypePages';

function NotFound() {
  const { t } = useTranslation();
  usePageTitle(t('notFound.title'));
  return (
    <PageHeader title={t('notFound.title')} subtitle={t('notFound.text')}>
      <Link to="/" className="btn btn-primary mt-6">{t('notFound.back')}</Link>
    </PageHeader>
  );
}

// Önek olmadan gelen adresleri (ör. eski /test-turleri linkleri) algılanan dile yönlendirir.
function RedirectToLang() {
  const { pathname, search, hash } = useLocation();
  const detected = i18n.resolvedLanguage;
  const lng = isSupported(detected) ? detected : DEFAULT_LANG;
  return <Navigate to={`/${lng}${pathname === '/' ? '' : pathname}${search}${hash}`} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectToLang />} />
        <Route path=":lng" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="test-turleri" element={<TestTypesPage />} />
          <Route path="test-turleri/:slug" element={<TestTypeDetailPage />} />
          <Route path="regulasyonlar" element={<RegulationsPage />} />
          <Route path="regulasyonlar/:slug" element={<RegulationDetailPage />} />
          <Route path="test-yaklasimi" element={<MethodologyPage />} />
          <Route path="cozum-ortagi" element={<PartnerPage />} />
          <Route path="toplanti-talebi" element={<MeetingPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
