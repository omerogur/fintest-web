export default {
  slug: 'iso-20022',
  order: 10,
  title: 'ISO 20022',
  fullTitle: 'ISO 20022 — Financial services — Universal financial industry message scheme',
  region: 'intl',
  kind: 'standard',
  summary:
    'Ödeme, menkul kıymet ve raporlama alanlarında zengin ve yapılandırılmış veri taşıyan finansal mesajlaşma standardı; ödeme sistemleri ve sınır ötesi ödemelerde ortak dil haline gelmektedir.',
  topic: 'diger',
  keyFacts: [
    { label: 'Yayımlayan', value: 'ISO (Uluslararası Standardizasyon Örgütü)' },
    { label: 'Mesaj ailesi örnekleri', value: 'pain, pacs, camt' },
  ],
  scope: [
    'ISO 20022, finansal mesajların tanımlanması için bir yöntem, ortak bir veri sözlüğü ve bu yöntemle geliştirilmiş mesaj tanımlarından oluşan bir standarttır. Mesajlar genellikle XML biçiminde ifade edilir ve ödeme başlatma (pain), bankalar arası takas ve mutabakat (pacs) ile hesap ve nakit yönetimi (camt) gibi iş alanlarına göre gruplanır. Standart bir düzenleme değildir; ancak ödeme sistemi operatörleri ve SWIFT gibi altyapılar kullanımını zorunlu hale getirdiğinde bankalar için fiili bir yükümlülüğe dönüşür.',
    'Sınır ötesi ödemelerde SWIFT ağı, geleneksel MT mesajlarından ISO 20022 tabanlı MX mesajlarına geçiş programı yürütmüştür. Birçok yüksek tutarlı ödeme sistemi de ulusal ve bölgesel düzeyde ISO 20022’ye geçmiş veya geçmektedir. Geçiş sürecinin ayrıntıları ve takvimi altyapıya göre değiştiğinden, her kurumun bağlı olduğu altyapının güncel yayınlarını takip etmesi gerekir.',
    'Test açısından en büyük değişim, verinin zenginleşmesi ve yapılandırılmasıdır. Yapılandırılmış adres alanları, genişletilmiş havale bilgisi ve taraf tanımlayıcıları, uyum kontrolleri ile otomatik işlemeyi güçlendirir; ancak eski sistemlerle birlikte çalışma döneminde dönüştürme, eşleme (mapping) ve kırpılma (truncation) riskleri doğurur. Zengin verinin çekirdek bankacılık, yaptırım tarama, muhasebe ve raporlama sistemlerine kayıpsız aktarıldığının doğrulanması, geçiş projelerinin kritik kalite başlığıdır.',
    'Test yaklaşımı açısından şema doğrulaması tek başına yeterli değildir; bir mesaj şemaya uygun olup yine de iş kuralları veya altyapının kullanım kuralları açısından geçersiz olabilir. Bu nedenle testler şema, kullanım kuralı, eşleme ve uçtan uca iş sonucu olmak üzere katmanlı kurgulanmalıdır. Karşı taraf bankalardan gelen mesajların beklenen yapıdan sapabileceği de dikkate alınmalı; eksik, fazla veya beklenmeyen alanlara karşı sistem davranışı ayrıca doğrulanmalıdır.',
  ],
  expects: [
    'Gönderilen ve alınan mesajların şema (XSD) ile altyapıya özgü kullanım kurallarına (usage guidelines) göre doğrulanması.',
    'Eski formatlar ile ISO 20022 arasında alan düzeyinde eşleme kurallarının belgelenmesi ve test edilmesi.',
    'Uzun veya zengin alanların eski formatlı sistemlere aktarılırken kırpılma ya da bilgi kaybı durumlarının tespiti ve yönetimi.',
    'Yapılandırılmış adres ve taraf bilgilerinin yaptırım tarama ve uyum kontrollerinde doğru kullanıldığının doğrulanması.',
    'Çekirdek bankacılık, ödeme ağ geçidi, muhasebe ve raporlama sistemleri arasında uçtan uca veri bütünlüğü.',
    'Geçiş dönemlerinde hem eski hem yeni formatlı mesaj akışlarının birlikte çalışabilirliğinin sağlanması.',
    'Altyapı operatörlerinin sunduğu test ve sertifikasyon ortamlarında gerekli testlerin tamamlanması.',
  ],
  testTypes: [
    {
      slug: 'core-banking-testleri',
      level: 'expected',
      why: 'Zengin mesaj verisinin çekirdek sistemlerde kayıpsız işlendiğinin ve muhasebeleştirildiğinin doğrulanması geçişin merkezindedir.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'expected',
      why: 'Mesaj ve servis arayüzlerinde şema doğrulama, eşleme ve hata yanıtı davranışı arayüz düzeyinde test edilir.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'expected',
      why: 'Çok sayıda mesaj türü ve varyasyonu için şema ve eşleme doğrulamalarının tekrarlanabilir biçimde yürütülmesi gerekir.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'supporting',
      why: 'Daha büyük ve zengin mesajların işleme süreleri ile gün sonu ve yoğun saat hacimleri üzerindeki etkisi ölçülmelidir.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Mesaj türü bazında kapsam, reddedilen mesaj oranları ve kırpılma bulguları geçiş hazırlığının izlenmesine yardımcı olur.',
    },
    {
      slug: 'odeme-kart-sertifikasyon-testi',
      level: 'expected',
      why: 'Mesaj doğrulama, alan eşlemesi ve kesilme (truncation) senaryoları ödeme sistemi testlerinin merkezindedir.',
    },
    {
      slug: 'veri-raporlama-testi',
      level: 'supporting',
      why: 'Zengin mesaj verisinin raporlama ve veri ambarı süreçlerine doğru aktarıldığı doğrulanır.',
    },
  ],
  officialSource: {
    label: 'ISO — ISO 20022 Financial services — Universal financial industry message scheme; iso20022.org mesaj kataloğu',
    url: 'https://www.iso20022.org',
  },
};
