# İçerik şeması

Her dil kendi klasöründe (`src/content/tr`, `src/content/en`). Dosya adları, `slug`, `order`, `icon`,
`product`, `topic`, `region`, `kind`, `testTypes[].slug/level` tüm dillerde AYNI kalır; yalnızca metinler
çevrilir. Test türlerinde `titleEn` alanı her zaman diğer dildeki başlığı taşır.

Tüm içerik Türkçe, profesyonel, bağımsız bir bilgi kaynağı tonunda yazılır. Teknik terimlerin
İngilizcesi parantez içinde verilebilir: "yük testi (load testing)".

## Kurallar (zorunlu)

- Uydurma istatistik, sahte müşteri yorumu, doğrulanmamış iddia YOK. Rakam yalnızca resmi metinde
  geçen kesin değerlerse kullanılır (ör. DORA 17 Ocak 2025'ten itibaren uygulanır).
- Emin olunmayan madde numarası, tarih, eşik değer yazılmaz; genel düzeyde anlatılır.
- Her regülasyon sayfasında `officialSource` (resmi yayımlayan kurum + belge adı) bulunur; site
  otomatik olarak "Güncel metne başvurun" notu ekler.
- Ürün adı / satış dili ana metne girmez. Ürün yalnızca `product` alanıyla bağlanır; kutuyu site
  çizer. Araç bölümünde marka değil KATEGORİ yazılır ("yük üretim araçları", "gerçek cihaz bulutu").
- Metinler paragraf başına 2–4 cümle; madde işaretleri kısa ve somut.

## Test türü dosyası — `src/content/<dil>/testTypes/<slug>.js`

```js
export default {
  slug: 'performans-yuk-testi',
  order: 1,
  title: 'Performans ve Yük Testi',
  titleEn: 'Performance & Load Testing',
  icon: 'Gauge',               // lucide-react ikon adı
  summary: 'Tek cümlelik özet (kartlarda görünür).',
  product: 'performance',       // site.config.js → products anahtarı, yoksa null
  topic: 'performans',          // site.config.js → TOPICS id
  what: ['Nedir ve bankacılıkta neden kritiktir — 2–3 paragraf'],
  risks: ['Önlediği risk 1', '...'],                      // 5–7 madde
  regulations: [{ slug: 'dora', note: 'Bu regülasyonla ilişkisi — 1 cümle' }],
  approach: [{ title: 'Adım başlığı', text: '1–2 cümle' }], // 5–7 adım
  tools: [{ category: 'Yük üretim araçları', text: 'Ne işe yarar — 1 cümle' }], // 4–6
  bestPractices: ['...'],       // 5–6 madde
  mistakes: ['...'],            // 4–5 madde
  // opsiyonel ek bölüm (ör. core banking'de platform tanıtımı):
  extra: [{ heading: 'Mambu nedir?', paragraphs: ['...'], bullets: ['...'] }],
};
```

## Regülasyon / standart dosyası — `src/content/<dil>/regulations/<slug>.js`

```js
export default {
  slug: 'dora',
  order: 2,
  title: 'DORA',
  fullTitle: 'Digital Operational Resilience Act — (AB) 2022/2554',
  region: 'intl',              // 'intl' | 'tr'
  kind: 'regulation',          // 'regulation' | 'standard' | 'framework'
  summary: 'Tek cümlelik özet.',
  topic: 'dora',               // TOPICS id (uygun yoksa 'diger')
  keyFacts: [{ label: 'Uygulanma', value: '17 Ocak 2025' }], // YALNIZCA kesin bilgiler, yoksa []
  scope: ['Kapsamı — 2–3 paragraf'],
  expects: ['Bankalardan beklediği 1', '...'],             // 5–7 madde
  testTypes: [
    { slug: 'performans-yuk-testi', level: 'expected', why: '1 cümle' },
    // level: 'required' (açıkça istenir) | 'expected' (beklentiyi karşılamanın olağan yolu) | 'supporting'
  ],
  officialSource: { label: 'Resmi yayımlayan kurum ve belge adı', url: 'https://...' }, // url emin değilsen ''
};
```

## Sabit slug listesi (çapraz linkler bunlara uymalı)

Test türleri: `performans-yuk-testi`, `ddos-dayaniklilik-testi`, `test-otomasyonu`,
`mobil-uygulama-testi`, `erisilebilirlik-testi`, `guvenlik-testi`, `api-acik-bankacilik-testi`,
`core-banking-testleri`, `test-analizi-kalite-metrikleri`, `is-surekliligi-felaket-kurtarma-testi`,
`odeme-kart-sertifikasyon-testi`, `kullanici-kabul-testi`, `aml-kyc-dolandiricilik-testi`,
`yapay-zeka-model-testi`, `veri-raporlama-testi`, `uyumluluk-capraz-tarayici-testi`

Regülasyonlar (intl): `psd2`, `dora`, `pci-dss`, `iso-27001`, `iso-29119`, `istqb`, `gdpr`,
`wcag-22`, `eaa`, `iso-20022`, `ai-act`
Regülasyonlar (tr): `bddk-bilgi-sistemleri`, `odeme-hizmetleri-6493`, `acik-bankacilik-ohvps`,
`kvkk`, `turkiye-erisilebilirlik`, `masak-aml`

Ürün anahtarları: `ddos`, `performance`, `automation`, `mobilehub`, `analyzer`, `accessibility`,
`corebanking`, `testmanagement`, `datacrate`, `browserhub`, `null`
Konu id'leri: `psd2`, `dora`, `bddk`, `wcag`, `performans`, `ddos`, `otomasyon`, `mobil`,
`corebanking`, `bcpdr`, `odeme`, `uat`, `amlkyc`, `ai`, `veri`, `diger`
