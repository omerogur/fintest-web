import { LEVEL_RANK } from '../content';

// Uyum ön değerlendirmesi: kurum profiline göre öne çıkan regülasyonlar ve test türleri.
// Kurallar bilinçli olarak genel tutuldu; sonuç hukuki görüş değil, bir başlangıç listesidir.

export const ORG_TYPES = ['bank', 'payment', 'fintech'];
export const REGIONS = ['tr', 'eu', 'both'];
export const CHANNELS = ['mobile', 'web', 'openApi', 'cards', 'payments'];
export const INITIATIVES = ['coreMigration', 'thirdParty', 'frequentReleases'];

const REG_TOPIC = {
  psd2: 'psd2',
  'odeme-hizmetleri-6493': 'psd2',
  'acik-bankacilik-ohvps': 'psd2',
  dora: 'dora',
  'bddk-bilgi-sistemleri': 'bddk',
  'wcag-22': 'wcag',
  eaa: 'wcag',
  'turkiye-erisilebilirlik': 'wcag',
};
const TEST_TOPIC = {
  'performans-yuk-testi': 'performans',
  'ddos-dayaniklilik-testi': 'ddos',
  'test-otomasyonu': 'otomasyon',
  'api-acik-bankacilik-testi': 'otomasyon',
  'mobil-uygulama-testi': 'mobil',
  'core-banking-testleri': 'corebanking',
};

export function assess({ org, region, channels = [], initiatives = [] }, regulationBySlug) {
  const has = (c) => channels.includes(c);
  const inTR = region === 'tr' || region === 'both';
  const inEU = region === 'eu' || region === 'both';
  const regulated = org === 'bank' || org === 'payment';
  const consumerChannels = has('web') || has('mobile');

  const regs = new Map();
  const addReg = (slug, reason) => {
    if (!regulationBySlug[slug]) return;
    regs.set(slug, [...(regs.get(slug) || []), reason]);
  };

  if (inTR && org === 'bank') addReg('bddk-bilgi-sistemleri', 'trBank');
  if (inTR && org === 'payment') addReg('odeme-hizmetleri-6493', 'trPayment');
  if (inTR && regulated && has('openApi')) addReg('acik-bankacilik-ohvps', 'trOpenBanking');
  if (inTR) addReg('kvkk', 'trData');
  if (inTR && consumerChannels) addReg('turkiye-erisilebilirlik', 'trAccessibility');
  if (inEU && regulated) addReg('psd2', 'euPayments');
  if (inEU && regulated) addReg('dora', 'euDora');
  if (inEU && org === 'fintech') addReg('dora', 'euIctProvider');
  if (inEU) addReg('gdpr', 'euData');
  if (inEU && regulated && consumerChannels) addReg('eaa', 'euEaa');
  if (consumerChannels) addReg('wcag-22', 'channelsWcag');
  if (has('cards')) addReg('pci-dss', 'cards');
  if (has('payments')) addReg('iso-20022', 'payments');
  if (initiatives.includes('thirdParty') && inTR && org === 'bank') addReg('bddk-bilgi-sistemleri', 'thirdParty');
  addReg('iso-27001', 'baseline');

  // Test türleri: seçilen regülasyonların beklentilerinden en yüksek seviye + kanal/girişim kaynaklı ekler.
  const tests = new Map();
  const addTest = (slug, level, reason) => {
    const cur = tests.get(slug);
    if (!cur) tests.set(slug, { level, reasons: [reason] });
    else {
      if (LEVEL_RANK[level] > LEVEL_RANK[cur.level]) cur.level = level;
      if (!cur.reasons.includes(reason)) cur.reasons.push(reason);
    }
  };
  for (const slug of regs.keys()) {
    for (const link of regulationBySlug[slug].testTypes || []) addTest(link.slug, link.level, `reg:${slug}`);
  }
  if (has('mobile')) addTest('mobil-uygulama-testi', 'expected', 'ch:mobile');
  if (consumerChannels) addTest('erisilebilirlik-testi', 'expected', 'ch:web');
  if (has('openApi')) addTest('api-acik-bankacilik-testi', 'expected', 'ch:openApi');
  if (has('cards')) addTest('guvenlik-testi', 'expected', 'ch:cards');
  if (initiatives.includes('coreMigration')) addTest('core-banking-testleri', 'expected', 'in:coreMigration');
  if (initiatives.includes('frequentReleases')) addTest('test-otomasyonu', 'expected', 'in:frequentReleases');
  addTest('test-analizi-kalite-metrikleri', 'supporting', 'baseline');

  const regulations = [...regs.entries()].map(([slug, reasons]) => ({ slug, reasons }));
  const testTypes = [...tests.entries()]
    .map(([slug, v]) => ({ slug, ...v }))
    .sort((a, b) => LEVEL_RANK[b.level] - LEVEL_RANK[a.level]);
  const topics = [
    ...new Set([...regulations.map((r) => REG_TOPIC[r.slug]), ...testTypes.filter((x) => x.level !== 'supporting').map((x) => TEST_TOPIC[x.slug])].filter(Boolean)),
  ];
  return { regulations, testTypes, topics };
}

// Cevaplar adreste tutulur; sonuç paylaşılabilir ve yenilemede kaybolmaz.
export function readAnswers(params) {
  const list = (k, allowed) => (params.get(k) || '').split(',').filter((x) => allowed.includes(x));
  const org = params.get('kurum');
  const region = params.get('bolge');
  return {
    org: ORG_TYPES.includes(org) ? org : '',
    region: REGIONS.includes(region) ? region : '',
    channels: list('kanal', CHANNELS),
    initiatives: list('girisim', INITIATIVES),
  };
}

export function writeAnswers(a) {
  const p = new URLSearchParams();
  if (a.org) p.set('kurum', a.org);
  if (a.region) p.set('bolge', a.region);
  if (a.channels.length) p.set('kanal', a.channels.join(','));
  if (a.initiatives.length) p.set('girisim', a.initiatives.join(','));
  return p;
}
