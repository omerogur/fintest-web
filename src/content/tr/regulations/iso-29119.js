export default {
  slug: 'iso-29119',
  order: 5,
  title: 'ISO/IEC/IEEE 29119',
  fullTitle: 'ISO/IEC/IEEE 29119 — Software and systems engineering — Software testing (standart serisi)',
  region: 'intl',
  kind: 'standard',
  summary:
    'Yazılım testi için kavramları, süreçleri, dokümantasyonu ve test tekniklerini tanımlayan; kurumların test yaklaşımını ortak bir çerçeveye oturtmasına yardımcı olan uluslararası standart serisi.',
  topic: 'diger',
  keyFacts: [
    { label: 'Yayımlayan', value: 'ISO, IEC ve IEEE (ortak yayın)' },
    { label: 'Yapı', value: 'Çok bölümlü standart serisi' },
  ],
  scope: [
    'ISO/IEC/IEEE 29119 serisi, yazılım testinin her tür yaşam döngüsü modelinde (şelale, çevik, DevOps) kullanılabilecek ortak bir terminoloji ve süreç çerçevesi sunar. Bir düzenleme değildir ve bankalar için doğrudan bir yasal yükümlülük doğurmaz. Ancak test süreçlerinin denetçilere, iç kontrol birimlerine ve tedarikçilere tutarlı biçimde açıklanması gerektiğinde referans çerçeve olarak değer taşır.',
    'Serinin temel bölümleri genel olarak şu konuları kapsar: kavramlar ve tanımlar; kurumsal, test yönetimi ve dinamik test düzeylerinde tanımlanan test süreçleri; test planı, test tasarım belirtimi ve test tamamlama raporu gibi test dokümantasyonu şablonları; eşdeğerlik bölümleme, sınır değer analizi, karar tablosu ve durum geçişi gibi test tasarım teknikleri. Anahtar kelime tabanlı test (keyword-driven testing) ve diğer özel konular için ek bölümler ve teknik raporlar da yayımlanmıştır.',
    'Standart, uyumun “tam” veya “uyarlanmış” biçimde beyan edilebilmesine imkân tanır. Bu esneklik, bankaların kendi risk yaklaşımlarına göre süreçleri ölçeklendirmesini sağlar; ancak neyin uyarlandığının ve neden uyarlandığının belgelenmesini de gerektirir. Bölümler periyodik olarak revize edildiğinden, kurumların hangi sürümü referans aldığını belirtmesi önerilir.',
    'Bankacılık ortamında standardın pratik değeri, farklı ekiplerin ve tedarikçilerin test çıktılarının aynı yapıda üretilmesidir. Özellikle regülasyon kaynaklı projelerde, bir gereksinimin hangi test durumlarıyla doğrulandığının ve sonuçların nasıl değerlendirildiğinin gösterilmesi gerekir; 29119 bu izlenebilirlik için ortak bir iskelet sunar. Standardın bazı yönleri test topluluğunda tartışılmıştır; bu nedenle birçok kurum onu katı bir reçete olarak değil, süreçlerini gözden geçirmek için bir referans olarak kullanır.',
  ],
  expects: [
    'Kurum düzeyinde bir test politikası ve bu politikayla uyumlu kurumsal test uygulamaları tanımlanması.',
    'Proje veya ürün bazında risk temelli test planlaması; kapsam, yaklaşım, kaynak ve tamamlanma ölçütlerinin belirlenmesi.',
    'Test tasarımı, uygulama ve raporlama adımlarının izlenebilir biçimde işletilmesi; gereksinimden test durumuna ve sonuca kadar iz sürülebilmesi.',
    'Test tasarım tekniklerinin bilinçli seçilmesi ve hangi tekniğin hangi risk için kullanıldığının belgelenmesi.',
    'Test dokümantasyonunun ihtiyaca göre uyarlanması ve uyarlama gerekçelerinin kayıt altına alınması.',
    'Test izleme ve kontrol faaliyetleriyle ilerlemenin, risklerin ve olay kayıtlarının yönetime raporlanması.',
  ],
  testTypes: [
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'expected',
      why: 'Standart, test izleme ve kontrol ile tamamlanma raporlamasını sürecin çekirdeğine koyar; bu da ölçülebilir kalite göstergeleri gerektirir.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'expected',
      why: 'Anahtar kelime tabanlı test ve tekrarlanabilir test yürütme, serinin ilgili bölümleriyle doğrudan örtüşür.',
    },
    {
      slug: 'core-banking-testleri',
      level: 'supporting',
      why: 'Yüksek riskli çekirdek süreçlerde test tasarım tekniklerinin sistematik uygulanmasına çerçeve sağlar.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'supporting',
      why: 'Sınır değer ve durum geçişi gibi teknikler API sözleşmelerinin test tasarımında doğrudan kullanılabilir.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'supporting',
      why: 'İşlevsel olmayan testlerin de planlama ve raporlama süreçlerine aynı çerçevede dahil edilmesine yardımcı olur.',
    },
    {
      slug: 'kullanici-kabul-testi',
      level: 'expected',
      why: 'Kabul testi, standardın tanımladığı test seviyeleri arasında yer alır.',
    },
  ],
  officialSource: {
    label: 'ISO / IEC / IEEE — ISO/IEC/IEEE 29119 Software and systems engineering — Software testing (Bölüm 1–5 ve ilgili belgeler)',
    url: '',
  },
};
