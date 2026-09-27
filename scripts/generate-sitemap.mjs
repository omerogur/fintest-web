// Build öncesi public/sitemap.xml ve public/robots.txt üretir.
// Yayındaki adres SITE_URL ortam değişkeninden ya da site.config.js → siteUrl alanından okunur.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const config = readFileSync('src/config/site.config.js', 'utf8');
const fromConfig = config.match(/siteUrl:\s*'([^']*)'/)?.[1] || '';
const base = (process.env.SITE_URL || fromConfig).replace(/\/$/, '');
const langs = [...readFileSync('src/i18n.js', 'utf8').matchAll(/code: '([a-z]{2})'/g)].map((m) => m[1]);

const indexing = /indexing:\s*true/.test(config);
if (!indexing) {
  writeFileSync('public/robots.txt', 'User-agent: *\nDisallow: /\n');
  console.log('[sitemap] Sunum modu (indexing: false): arama motoru taraması kapalı, site haritası üretilmedi.');
  process.exit(0);
}

if (!base) {
  writeFileSync('public/robots.txt', 'User-agent: *\nAllow: /\n');
  console.log('[sitemap] siteUrl tanımlı değil; yalnızca robots.txt yazıldı.');
  process.exit(0);
}

const slugs = (dir) => readdirSync(`src/content/tr/${dir}`).map((f) => f.replace(/\.js$/, ''));
const paths = [
  '',
  '/test-turleri',
  ...slugs('testTypes').map((s) => `/test-turleri/${s}`),
  '/regulasyonlar',
  ...slugs('regulations').map((s) => `/regulasyonlar/${s}`),
  '/test-yaklasimi',
  '/uyum-kontrolu',
  '/sozluk',
  '/sss',
  '/cozum-ortagi',
  '/toplanti-talebi',
  '/erisilebilirlik-beyani',
  '/gizlilik',
];

const url = (p) =>
  langs
    .map((l) => {
      const alts = langs.map((a) => `    <xhtml:link rel="alternate" hreflang="${a}" href="${base}/${a}${p}"/>`).join('\n');
      return `  <url>\n    <loc>${base}/${l}${p}</loc>\n${alts}\n  </url>`;
    })
    .join('\n');

writeFileSync(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${paths.map(url).join('\n')}\n</urlset>\n`,
);
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);
console.log(`[sitemap] ${paths.length * langs.length} adres yazıldı (${base}).`);
