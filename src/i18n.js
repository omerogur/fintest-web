import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import de from './locales/de/common.json';
import en from './locales/en/common.json';
import tr from './locales/tr/common.json';

export const LANGUAGES = [
  { code: 'tr', label: 'Türkçe', short: 'TR' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
];
export const DEFAULT_LANG = 'tr';
export const isSupported = (lng) => LANGUAGES.some((l) => l.code === lng);

// Dil, adresteki önekten gelir (/tr, /en). Önek yoksa kayıtlı tercih, sonra tarayıcı dili kullanılır.
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { tr: { common: tr }, en: { common: en }, de: { common: de } },
    defaultNS: 'common',
    fallbackLng: DEFAULT_LANG,
    supportedLngs: LANGUAGES.map((l) => l.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
    },
  });

export default i18n;
