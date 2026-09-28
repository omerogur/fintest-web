export default {
  slug: 'istqb',
  order: 6,
  title: 'ISTQB',
  fullTitle: 'International Software Testing Qualifications Board — Yazılım testi sertifikasyon şeması',
  region: 'intl',
  kind: 'framework',
  summary:
    'Yazılım test uzmanları için ortak terminoloji, müfredat ve sertifikasyon yolları sunan uluslararası bir bilgi birikimi ve sertifikasyon şeması; bir düzenleme değildir.',
  topic: 'diger',
  keyFacts: [
    { label: 'Niteliği', value: 'Kâr amacı gütmeyen sertifikasyon kuruluşu' },
    { label: 'Tür', value: 'Sertifikasyon şeması ve bilgi birikimi (regülasyon değildir)' },
  ],
  scope: [
    'ISTQB (International Software Testing Qualifications Board), yazılım testi alanında müfredatları (syllabus) ve sınav kurallarını belirleyen uluslararası bir kuruluştur. Sınavlar, ülke veya bölge düzeyindeki üye kurullar ve onların yetkilendirdiği sınav sağlayıcılar aracılığıyla yürütülür. ISTQB bir düzenleme ya da standart değildir; bankalara doğrudan bir yükümlülük getirmez.',
    'Sertifikasyon yapısı genel olarak temel (Foundation), ileri (Advanced) ve uzman (Expert) seviyeleri ile çevik test, test otomasyonu, performans testi, güvenlik testi, mobil uygulama testi ve kabul testi gibi uzmanlık modüllerinden oluşur. Müfredatlar periyodik olarak güncellenir; ekiplerin hangi müfredat sürümünü esas aldığını bilmesi eğitim planlaması açısından önemlidir. ISTQB ayrıca test terimleri için ortak bir sözlük yayımlar.',
    'Bankacılık ve fintech kurumlarında ISTQB, test ekiplerinin ortak bir dil konuşmasını sağlamak, işe alım ve kariyer yolu tanımlarını standartlaştırmak ve tedarikçi ekiplerle beklentileri hizalamak için kullanılır. Denetim veya regülasyon uyumu açısından ise sertifika tek başına bir kanıt değildir; asıl değerlendirilen, kurumun test süreçlerinin ve kayıtlarının kalitesidir.',
    'Kurumlar ISTQB içeriğini genellikle iç test süreçlerini tanımlarken bir terminoloji ve yöntem kaynağı olarak da kullanır. Örneğin risk temelli test, test seviyeleri ve test tasarım teknikleri gibi kavramların kurum içi dokümanlarda ISTQB sözlüğüyle uyumlu tanımlanması, farklı ekipler arasında yanlış anlaşılmaları azaltır. Bununla birlikte bankacılığa özgü alan bilgisi (ödeme akışları, mutabakat, regülasyon gereksinimleri) müfredatların kapsamı dışında kalır ve ayrıca geliştirilmelidir.',
  ],
  expects: [
    'Test ekibinde ortak terminoloji kullanımı; test seviyeleri, test türleri ve test tasarım teknikleri konusunda aynı dilin konuşulması.',
    'Rol bazlı yetkinlik tanımları: test analisti, teknik test analisti, test yöneticisi ve test otomasyon mühendisi gibi rollerin beklentilerinin netleştirilmesi.',
    'Risk temelli test yaklaşımının ekip genelinde anlaşılması ve uygulanması.',
    'Performans, güvenlik, mobil ve erişilebilirlik gibi uzmanlık alanlarında hedefli eğitim planlaması.',
    'Tedarikçi ve dış kaynak ekiplerle yapılan sözleşmelerde yetkinlik beklentilerinin somut biçimde tanımlanması.',
    'Sertifikasyonun, uygulamalı deneyim ve kurum içi süreç eğitimiyle birlikte ele alınması.',
  ],
  testTypes: [
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Test yönetimi müfredatları; test izleme, ölçüm ve raporlama konularında ortak bir yaklaşım sunar.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Test otomasyonu uzmanlık modülleri, otomasyon mimarisi ve bakım stratejileri için ortak bir referans sağlar.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'supporting',
      why: 'Performans testi modülü, yük modelleme ve sonuç yorumlama konusunda ekip bilgisini standartlaştırır.',
    },
    {
      slug: 'guvenlik-testi',
      level: 'supporting',
      why: 'Güvenlik testi modülü, test ekiplerinin güvenlik uzmanlarıyla ortak bir dil kurmasına yardımcı olur.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'supporting',
      why: 'Mobil uygulama testi modülü, cihaz çeşitliliği ve mobil özgü riskler için temel bir çerçeve sunar.',
    },
    {
      slug: 'erisilebilirlik-testi',
      level: 'supporting',
      why: 'Erişilebilirlik testine ilişkin uzmanlık içeriği, ekiplerin bu alandaki farkındalığını artırır.',
    },
    {
      slug: 'kullanici-kabul-testi',
      level: 'supporting',
      why: 'Kullanıcı kabul testi, ISTQB müfredatındaki test seviyelerinden biridir.',
    },
  ],
  officialSource: {
    label: 'ISTQB — International Software Testing Qualifications Board, müfredatlar ve test terimleri sözlüğü',
    url: 'https://www.istqb.org',
  },
};
