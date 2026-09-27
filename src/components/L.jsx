import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RRLink, NavLink as RRNavLink, useNavigate } from 'react-router-dom';

// Site içi yollar dil önekini otomatik alır: '/test-turleri' → '/en/test-turleri'.
export function useLangPath() {
  const { i18n } = useTranslation();
  return useCallback((to) => (typeof to === 'string' && to.startsWith('/') ? `/${i18n.language}${to === '/' ? '' : to}` : to), [i18n.language]);
}

export function Link({ to, ...props }) {
  const lp = useLangPath();
  return <RRLink to={lp(to)} {...props} />;
}

export function NavLink({ to, ...props }) {
  const lp = useLangPath();
  return <RRNavLink to={lp(to)} {...props} />;
}

export function useLangNavigate() {
  const navigate = useNavigate();
  const lp = useLangPath();
  return useCallback((to, opts) => navigate(lp(to), opts), [navigate, lp]);
}
