export default {
  slug: 'iso-27001',
  order: 4,
  title: 'ISO/IEC 27001',
  fullTitle: 'ISO/IEC 27001:2022 — Bilgi güvenliği, siber güvenlik ve gizliliğin korunması — Bilgi güvenliği yönetim sistemleri — Gereksinimler',
  region: 'intl',
  kind: 'standard',
  summary:
    'Bilgi güvenliği yönetim sistemi (BGYS) kurmak, işletmek ve sürekli iyileştirmek için gereksinimleri tanımlayan, belgelendirilebilir uluslararası standart.',
  topic: 'diger',
  keyFacts: [
    { label: 'Yayımlayan', value: 'ISO ve IEC (ortak teknik komite ISO/IEC JTC 1/SC 27)' },
    { label: 'Güncel sürüm', value: 'ISO/IEC 27001:2022 (Ekim 2022)' },
    { label: 'Ek A kontrol sayısı', value: '93 kontrol, 4 tema' },
    { label: '2013 sürümü sertifikaları için geçiş sonu', value: '31 Ekim 2025' },
  ],
  scope: [
    'ISO/IEC 27001, sektörden bağımsız olarak her büyüklükteki kuruluşa uygulanabilen bir yönetim sistemi standardıdır. Bir düzenleme değildir; ancak bankacılık ve fintech alanında pek çok denetim, sözleşme ve tedarikçi değerlendirmesinde güvenlik olgunluğunun kabul görmüş bir göstergesi olarak kullanılır. Uyum, akredite belgelendirme kuruluşlarının yaptığı denetimlerle belgelendirilebilir.',
    'Standardın ana gövdesi; kuruluşun bağlamı, liderlik, planlama, destek, operasyon, performans değerlendirme ve iyileştirme başlıkları altında yönetim sistemi gereksinimlerini içerir. Risk değerlendirmesi ve risk işleme süreci merkezdedir: kuruluş, Ek A’daki kontrollerden hangilerini uyguladığını ve hangilerini neden dışarıda bıraktığını Uygulanabilirlik Beyanı’nda (Statement of Applicability) gerekçelendirir.',
    '2022 sürümünde Ek A, ISO/IEC 27002:2022 ile uyumlu olarak organizasyonel, insan, fiziksel ve teknolojik olmak üzere dört temada 93 kontrole yeniden düzenlenmiştir. Güvenli kodlama, veri maskeleme, yapılandırma yönetimi ve tehdit istihbaratı gibi kontroller bu sürümde eklenmiştir. Yazılım ekipleri için güvenli geliştirme yaşam döngüsü, geliştirme ve kabul aşamasında güvenlik testi, test bilgisinin korunması ve geliştirme, test ve üretim ortamlarının ayrılması kontrolleri doğrudan ilgilidir.',
    'Test ekipleri açısından ISO/IEC 27001, testin kendisinden çok testin nasıl yönetildiğine odaklanır: test ortamlarına erişimin kontrolü, test verisinin korunması, güvenlik gereksinimlerinin kabul kriterlerine dönüştürülmesi ve bulguların risk sürecine geri beslenmesi. Belgelendirme denetimlerinde bu konular genellikle kayıtlar ve örnekler üzerinden değerlendirilir. Bu nedenle test planları, sonuç raporları ve bulgu takip kayıtlarının erişilebilir ve tutarlı olması, denetim hazırlığını belirgin biçimde kolaylaştırır.',
  ],
  expects: [
    'Kapsamı tanımlı, üst yönetim tarafından sahiplenilen ve belgelenmiş bir bilgi güvenliği yönetim sistemi.',
    'Tekrarlanabilir bir risk değerlendirme yöntemi, risk işleme planı ve gerekçeli Uygulanabilirlik Beyanı.',
    'Güvenli geliştirme yaşam döngüsü kuralları ve güvenli kodlama ilkelerinin uygulanması.',
    'Geliştirme ve kabul süreçlerinde güvenlik testlerinin tanımlanması ve uygulanması.',
    'Geliştirme, test ve üretim ortamlarının ayrılması; test için kullanılan bilginin uygun şekilde seçilmesi, korunması ve yönetilmesi.',
    'Teknik zafiyetlerin yönetimi, kapasite yönetimi ve değişiklik yönetimi süreçlerinin işletilmesi.',
    'İç denetim, yönetimin gözden geçirmesi ve düzeltici faaliyetlerle sürekli iyileştirme.',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'Geliştirme ve kabul aşamasında güvenlik testi ile teknik zafiyet yönetimi kontrolleri, olağan olarak güvenlik testleriyle karşılanır.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Performans değerlendirme ve sürekli iyileştirme maddeleri, ölçülebilir göstergeler ve izlenebilir test kayıtları gerektirir.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Değişiklik yönetiminde güvenlik ve işlev kontrollerinin tutarlı biçimde tekrarlanmasına yardımcı olur.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'supporting',
      why: 'Kapasite yönetimi kontrolü, sistemlerin beklenen yükü karşılayabildiğine dair kanıtla desteklenebilir.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'supporting',
      why: 'Erişilebilirlik ve iş sürekliliği risklerinin işlenmesinde hizmet kesintisi senaryolarının doğrulanmasına katkı sağlar.',
    },
    {
      slug: 'is-surekliligi-felaket-kurtarma-testi',
      level: 'expected',
      why: 'Kesinti sırasında bilgi güvenliğinin sürdürülmesine yönelik kontroller, iş sürekliliği testleriyle doğrulanır.',
    },
  ],
  officialSource: {
    label: 'ISO / IEC — ISO/IEC 27001:2022 Information security, cybersecurity and privacy protection — Information security management systems — Requirements',
    url: 'https://www.iso.org/standard/27001',
  },
};
