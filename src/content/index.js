import { useTranslation } from 'react-i18next';
import { DEFAULT_LANG } from '../i18n';

// Her dilin içeriği ayrı bir paket olarak, yalnızca o dil gerektiğinde yüklenir.
const LOADERS = {
  testTypes: import.meta.glob('./*/testTypes/*.js'),
  regulations: import.meta.glob('./*/regulations/*.js'),
  methodology: import.meta.glob('./*/methodology.js'),
  glossary: import.meta.glob('./*/glossary.js'),
  faq: import.meta.glob('./*/faq.js'),
  legal: import.meta.glob('./*/legal.js'),
};

export const LEVEL_RANK = { required: 3, expected: 2, supporting: 1 };
export const MIN_QUERY = 2;

async function loadLang(lng) {
  const out = {};
  await Promise.all(
    Object.entries(LOADERS).map(async ([key, mods]) => {
      const paths = Object.keys(mods).filter((p) => p.startsWith(`./${lng}/`));
      out[key] = (await Promise.all(paths.map((p) => mods[p]()))).map((m) => m.default);
    }),
  );
  return out;
}

// Eksik içerik için yedek sırası: Türkçe dışındaki diller önce İngilizceye, sonra Türkçeye düşer.
const fallbackChain = (lng) => [...new Set([lng, ...(lng === DEFAULT_LANG ? [] : ['en']), DEFAULT_LANG])];

// Bir dilde eksik kalan öğe yedek dilden tamamlanır.
function mergeBySlug(sources) {
  const all = new Map();
  for (const list of [...sources].reverse()) for (const item of list) all.set(item.slug, item);
  return [...all.values()].sort((a, b) => a.order - b.order);
}

// Bir içerik nesnesindeki tüm metinleri (iç içe alanlar dahil) tek dizede toplar; arama her bölümü kapsar.
const allText = (value) =>
  typeof value === 'string'
    ? value
    : Array.isArray(value)
      ? value.map(allText).join(' ')
      : value && typeof value === 'object'
        ? Object.entries(value)
            .filter(([k]) => !['slug', 'icon', 'product', 'topic', 'region', 'kind', 'level', 'url'].includes(k))
            .map(([, v]) => allText(v))
            .join(' ')
        : '';

const normalize = (s) =>
  s
    .toLocaleLowerCase('tr')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ı/g, 'i');

const GUIDE_TITLE = { tr: 'Test Yaklaşımı ve Metodoloji', en: 'Testing Approach and Methodology', de: 'Testvorgehen und Methodik' };

function build(lng, packs, extraIndex = []) {
  const first = (key) => packs.map((p) => p[key]?.[0]).find(Boolean);
  const TEST_TYPES = mergeBySlug(packs.map((p) => p.testTypes || []));
  const REGULATIONS = mergeBySlug(packs.map((p) => p.regulations || []));
  const METHODOLOGY = first('methodology') ?? {};
  const GLOSSARY = first('glossary') ?? [];
  const FAQ = first('faq') ?? [];
  const LEGAL = first('legal') ?? {};
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
      text: allText(t),
    })),
    ...REGULATIONS.map((r) => ({
      kind: r.kind,
      title: r.title,
      subtitle: r.fullTitle,
      summary: r.summary,
      href: `/regulasyonlar/${r.slug}`,
      text: allText(r),
    })),
    {
      kind: 'guide',
      title: GUIDE_TITLE[lng] || GUIDE_TITLE[DEFAULT_LANG],
      subtitle: (METHODOLOGY.pillars || []).map((p) => p.title).join(', '),
      summary: METHODOLOGY.intro?.[0] || '',
      href: '/test-yaklasimi',
      text: allText(METHODOLOGY),
    },
    ...GLOSSARY.map((g) => ({
      kind: 'term',
      title: g.term,
      subtitle: g.expansion,
      summary: g.definition,
      href: `/sozluk#${g.id}`,
      text: allText(g),
    })),
    ...FAQ.map((f) => ({
      kind: 'faq',
      title: f.q,
      subtitle: '',
      summary: f.a?.[0] || '',
      href: `/sss#${f.id}`,
      text: allText(f),
    })),
    ...extraIndex,
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

  return { TEST_TYPES, REGULATIONS, METHODOLOGY, GLOSSARY, FAQ, LEGAL, testTypeBySlug, regulationBySlug, regulationsForTestType, search };
}

const PACKS = {};
const CONTENT = {};

// Arayüz metinlerinden gelen sayfalar (ör. çözüm ortağı, ürünler) arama dizinine Layout tarafından eklenir.
export async function loadContent(lng, extraIndex = []) {
  if (CONTENT[lng]) return CONTENT[lng];
  const packs = await Promise.all(fallbackChain(lng).map((l) => (PACKS[l] ??= loadLang(l))));
  CONTENT[lng] = build(lng, packs, extraIndex);
  return CONTENT[lng];
}

export const isContentLoaded = (lng) => Boolean(CONTENT[lng]);

const EMPTY = build(DEFAULT_LANG, []);

// Layout sayfaları ancak içerik yüklendikten sonra çizer; bu yüzden burada senkron okunabilir.
export function useContent() {
  const { i18n } = useTranslation();
  return CONTENT[i18n.language] || CONTENT[DEFAULT_LANG] || EMPTY;
}

export const levelFor = (regulation, testSlug) => regulation.testTypes?.find((t) => t.slug === testSlug)?.level ?? null;
