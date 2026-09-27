export default {
  slug: 'gdpr',
  order: 7,
  title: 'GDPR',
  fullTitle: 'General Data Protection Regulation — (AB) 2016/679',
  region: 'intl',
  kind: 'regulation',
  summary:
    'AB’de kişisel verilerin işlenmesini düzenleyen; tasarımdan itibaren veri koruma, işleme güvenliği ve ihlal bildirimi gibi yükümlülüklerle test verisi yönetimini doğrudan etkileyen tüzük.',
  topic: 'diger',
  keyFacts: [
    { label: 'Resmi numara', value: 'Tüzük (AB) 2016/679' },
    { label: 'Uygulanma', value: '25 Mayıs 2018' },
    { label: 'Tasarımdan ve varsayılan olarak veri koruma', value: 'Madde 25' },
    { label: 'İşleme güvenliği', value: 'Madde 32' },
    { label: 'Otoriteye ihlal bildirimi', value: 'Madde 33 — gecikmeksizin, mümkünse 72 saat içinde' },
    { label: 'Üst sınır idari para cezası', value: '20 milyon Avro veya küresel yıllık cironun %4’ü (hangisi yüksekse)' },
  ],
  scope: [
    'GDPR (Genel Veri Koruma Tüzüğü), AB’de yerleşik kuruluşların kişisel veri işlemelerine ve AB’deki kişilere mal veya hizmet sunan ya da onların davranışlarını izleyen AB dışı kuruluşlara uygulanır. Bankalar, müşteri kimlik bilgilerinden işlem geçmişine kadar yoğun kişisel veri işlediği için kapsamın merkezindedir. Türkiye’deki kurumlar için ulusal çerçeve KVKK’dır; ancak AB’deki müşterilere hizmet sunan veya AB’li kurumlarla veri paylaşan yapılar GDPR’ı da dikkate almalıdır.',
    'Yazılım geliştirme ve test açısından en önemli ilke, tasarımdan ve varsayılan olarak veri korumadır (data protection by design and by default). Sistemler, yalnızca amaç için gerekli verinin işlenmesini sağlayacak şekilde tasarlanmalı; takma adlandırma (pseudonymisation) gibi teknik önlemler baştan düşünülmelidir. İşleme güvenliği maddesi ise teknik ve organizasyonel önlemlerin etkinliğinin düzenli olarak test edilmesi, değerlendirilmesi ve ölçülmesi için bir süreç öngörür.',
    'Test ortamlarında üretimden kopyalanmış gerçek müşteri verisi kullanımı da bir kişisel veri işlemesidir ve hukuki dayanak, amaçla sınırlılık, veri minimizasyonu ve güvenlik ilkelerine tabidir. Bu nedenle maskeleme, anonimleştirme ve sentetik veri üretimi, GDPR uyumunun test süreçlerindeki en somut karşılığıdır. Anonimleştirilmiş veri kapsam dışında kalır; ancak takma adlandırılmış veri hâlâ kişisel veri sayılır.',
    'QA ekipleri için pratik sonuçlar şunlardır: test verisi stratejisi yazılı olmalı, üretim verisinin test ortamına aktarılması istisna ve onaya bağlı olmalı, test ortamlarındaki erişim ve saklama süreleri de üretim kadar ciddiye alınmalıdır. Log ve hata mesajlarında kişisel verinin açığa çıkıp çıkmadığı ayrıca kontrol edilmelidir. Bu bilgiler hukuki danışmanlık niteliği taşımaz; uygulamada kurumun veri koruma görevlisi ve hukuk birimiyle birlikte değerlendirilmelidir.',
  ],
  expects: [
    'Yeni sistem ve değişikliklerde veri korumanın tasarım aşamasından itibaren ele alınması; varsayılan ayarların en az veriyi işleyecek şekilde kurgulanması.',
    'Yüksek risk taşıyan işlemeler için veri koruma etki değerlendirmesi (DPIA) yapılması.',
    'Teknik ve organizasyonel güvenlik önlemlerinin etkinliğinin düzenli olarak test edilmesi ve değerlendirilmesi.',
    'Test ve geliştirme ortamlarında gerçek kişisel veri yerine maskelenmiş, anonimleştirilmiş veya sentetik veri kullanılması; kullanılıyorsa erişimin sınırlandırılması.',
    'Kişisel veri ihlallerinin tespiti, kayıt altına alınması ve gerektiğinde denetim otoritesine zamanında bildirilmesi.',
    'İlgili kişi haklarının (erişim, düzeltme, silme, taşınabilirlik gibi) sistemlerde işlevsel olarak desteklenmesi.',
    'Veri işleyen tedarikçilerle (test hizmeti sağlayıcıları dahil) uygun sözleşmelerin yapılması.',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'İşleme güvenliği, önlemlerin etkinliğinin düzenli olarak test edilmesini öngörür; bu beklenti olağan olarak güvenlik testleriyle karşılanır.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'supporting',
      why: 'Servislerin yalnızca gerekli alanları döndürmesi ve yetkisiz veri ifşası olmaması API düzeyinde doğrulanabilir.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Sentetik test verisi üretimi ve ilgili kişi hakları senaryolarının (silme, dışa aktarma) tekrarlanabilir doğrulanmasına yardımcı olur.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Hesap verebilirlik ilkesi, yapılan kontrollerin ve test sonuçlarının kayıt altında tutulmasını destekleyen kanıtlar gerektirir.',
    },
  ],
  officialSource: {
    label: 'Avrupa Parlamentosu ve Konseyi — Tüzük (AB) 2016/679 (Genel Veri Koruma Tüzüğü)',
    url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
  },
};
