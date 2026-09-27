import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { DEFAULT_LANG } from '../i18n';

const RAW = {
  tr: {
    testTypes: import.meta.glob('./tr/testTypes/*.js', { eager: true }),
    regulations: import.meta.glob('./tr/regulations/*.js', { eager: true }),
    methodology: import.meta.glob('./tr/methodology.js', { eager: true }),
  },
  en: {
    testTypes: import.meta.glob('./en/testTypes/*.js', { eager: true }),
    regulations: import.meta.glob('./en/regulations/*.js', { eager: true }),
    methodology: import.meta.glob('./en/methodology.js', { eager: true }),
  },
  de: {
    testTypes: import.meta.glob('./de/testTypes/*.js', { eager: true }),
    regulations: import.meta.glob('./de/regulations/*.js', { eager: true }),
    methodology: import.meta.glob('./de/methodology.js', { eager: true }),
  },
};

export const LEVEL_RANK = { required: 3, expected: 2, supporting: 1 };
export const MIN_QUERY = 2;

const list = (mods) => Object.values(mods).map((m) => m.default);

// Bir dilde eksik kalan içerik varsayılan dilden tamamlanır; site çeviri sürerken de çalışır.
function merge(primary, fallback) {
  const bySlug = Object.fromEntries(primary.map((x) => [x.slug, x]));
  return fallback.map((x) => bySlug[x.slug] || x).sort((a, b) => a.order - b.order);
}

const normalize = (s) =>
  s
    .toLocaleLowerCase('tr')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ı/g, 'i');

// Eksik içerik için yedek sırası: Türkçe dışındaki diller önce İngilizceye, sonra Türkçeye düşer.
const fallbackChain = (lng) => [...new Set([lng, ...(lng === DEFAULT_LANG ? [] : ['en']), DEFAULT_LANG])].filter((l) => RAW[l]);

function build(lng) {
  const chain = fallbackChain(lng).map((l) => RAW[l]);
  const pick = (key) => chain.reduceRight((acc, src) => merge(list(src[key]), acc), list(RAW[DEFAULT_LANG][key]));
  const TEST_TYPES = pick('testTypes');
  const REGULATIONS = pick('regulations');
  const METHODOLOGY = chain.map((src) => list(src.methodology)[0]).find(Boolean) ?? {};
  const testTypeBySlug = Object.fromEntries(TEST_TYPES.map((t) => [t.slug, t]));
  const regulationBySlug = Object.fromEntries(REGULATIONS.map((r) => [r.slug, r]));

  const regulationsForTestType = (testSlug) =>
    REGULATIONS.map((r) => ({ regulation: r, link: r.testTypes?.find((t) => t.slug === testSlug) }))
      .filter((x) => x.link)
      .sort((a, b) => LEVEL_RANK[b.link.level] - LEVEL_RANK[a.link.level]);

  const index = [
    ...TEST_TYPES.map((t) => ({
      kind: 'testType',
      title: t.title,
      subtitle: t.titleEn,
      summary: t.summary,
      href: `/test-turleri/${t.slug}`,
      text: [t.title, t.titleEn, t.summary, ...(t.risks || []), ...(t.what || [])].join(' '),
    })),
    ...REGULATIONS.map((r) => ({
      kind: r.kind,
      title: r.title,
      subtitle: r.fullTitle,
      summary: r.summary,
      href: `/regulasyonlar/${r.slug}`,
      text: [r.title, r.fullTitle, r.summary, ...(r.scope || []), ...(r.expects || [])].join(' '),
    })),
    {
      kind: 'guide',
      title: METHODOLOGY.title || { en: 'Testing Approach and Methodology', de: 'Testvorgehen und Methodik' }[lng] || 'Test Yaklaşımı ve Metodoloji',
      subtitle: (METHODOLOGY.pillars || []).map((p) => p.title).join(', '),
      summary: METHODOLOGY.intro?.[0] || '',
      href: '/test-yaklasimi',
      text: [...(METHODOLOGY.intro || []), ...(METHODOLOGY.pillars || []).flatMap((p) => [p.title, p.summary, ...(p.paragraphs || [])])].join(' '),
    },
  ].map((item) => ({
    ...item,
    titleWords: normalize(`${item.title} ${item.subtitle || ''}`).split(/[^a-z0-9]+/),
    words: [...new Set(normalize(item.text).split(/[^a-z0-9]+/))],
  }));

  // Her sorgu kelimesi, içerikteki bir kelimenin BAŞIYLA eşleşmeli ("yük" → "yük testi" evet, "x" → "ödeme" değil).
  const search = (query) => {
    const words = normalize(query.trim()).split(/\s+/).filter(Boolean);
    if (words.join('').length < MIN_QUERY) return [];
    return index
      .map((item) => {
        let score = 0;
        for (const w of words) {
          if (item.titleWords.some((t) => t.startsWith(w))) score += 3;
          else if (item.words.some((t) => t.startsWith(w))) score += 1;
          else return null;
        }
        return { ...item, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score);
  };

  return { TEST_TYPES, REGULATIONS, METHODOLOGY, testTypeBySlug, regulationBySlug, regulationsForTestType, search };
}

const CACHE = {};
export function getContent(lng) {
  const key = RAW[lng] ? lng : DEFAULT_LANG;
  CACHE[key] ??= build(key);
  return CACHE[key];
}

export function useContent() {
  const { i18n } = useTranslation();
  return useMemo(() => getContent(i18n.language), [i18n.language]);
}

export const levelFor = (regulation, testSlug) => regulation.testTypes?.find((t) => t.slug === testSlug)?.level ?? null;
