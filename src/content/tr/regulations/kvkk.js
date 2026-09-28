export default {
  slug: 'kvkk',
  order: 14,
  title: 'KVKK',
  fullTitle: '6698 sayılı Kişisel Verilerin Korunması Kanunu',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Kişisel verilerin işlenmesi, aktarılması ve korunmasına ilişkin temel kanun; test ortamlarında gerçek müşteri verisinin kullanımını doğrudan etkiler.',
  topic: 'diger',
  keyFacts: [
    { label: 'Kanun', value: '6698 sayılı Kanun (2016)' },
    { label: 'Denetim otoritesi', value: 'Kişisel Verileri Koruma Kurumu / Kurulu' },
  ],
  scope: [
    '6698 sayılı Kanun, gerçek kişilere ait her türlü bilginin işlenmesini düzenler ve bankalar dahil tüm veri sorumlularını kapsar. Kanun; hukuka ve dürüstlük kuralına uygunluk, belirli ve meşru amaçla işleme, amaçla sınırlı ve ölçülü olma (veri minimizasyonu) ile gerektiği kadar saklama ilkelerine dayanır. Veri sorumlusu, verilerin güvenliğini sağlamak için gerekli teknik ve idari tedbirleri almakla yükümlüdür.',
    'Yazılım testi açısından en kritik soru, gerçek müşteri verisinin test ve geliştirme ortamlarında kullanılıp kullanılamayacağıdır. Test amacıyla canlı verinin kopyalanması ayrı bir işleme faaliyetidir ve amaçla sınırlılık, ölçülülük ve güvenlik ilkeleriyle bağdaşması gerekir. Bu nedenle maskeleme, anonimleştirme, takma adlandırma (pseudonymisation) ve sentetik veri kullanımı olağan yaklaşımlardır. Anonim hale getirilen veri kural olarak kişisel veri sayılmaz; takma adlandırılmış veri ise geri bağlanabildiği sürece kişisel veri olmaya devam eder.',
    'Yurt dışına veri aktarımına ilişkin kurallar 2024 yılında yapılan kanun değişikliğiyle yeniden düzenlenmiş, uygun güvence mekanizmaları ve standart sözleşme gibi araçlar getirilmiştir. Bu durum yurt dışında barındırılan test araçları, bulut tabanlı hizmetler ve dış kaynaklı test ekipleri için önem taşır. Veri ihlallerinin ilgili kişilere ve Kurula bildirilmesi yükümlülüğü de bulunmaktadır; süre ve usul için Kurul kararları ve güncel metin esas alınmalıdır. Bankalar ayrıca bankacılık mevzuatındaki sır ve müşteri sırrı hükümlerini birlikte değerlendirmelidir.',
    'Test organizasyonu açısından pratik bir yol, test verisi politikasını yazılı hale getirmektir. Bu politika; hangi ortamda hangi veri sınıfının kullanılabileceğini, maskeleme ve anonimleştirme yöntemlerini, canlı veri kullanımının hangi istisnai durumda ve kimin onayıyla mümkün olduğunu ve test verisinin ne zaman silineceğini tanımlar. Test senaryoları da yalnızca ihtiyaç duyulan veri alanlarını kullanacak şekilde tasarlanmalıdır. Ekran görüntüleri, hata kayıtları ve test raporları da kişisel veri içerebileceğinden aynı politikanın kapsamında ele alınmalıdır.',
  ],
  expects: [
    'Test ve geliştirme ortamlarında gerçek kişisel verinin kullanımının amaçla sınırlı ve gerekçeli olması',
    'Canlı veriden türetilen test verisinin maskelenmesi, anonimleştirilmesi veya sentetik veriyle değiştirilmesi',
    'Test ortamlarında erişim yetkileri, kayıt ve şifreleme önlemlerinin canlıya benzer düzeyde tutulması; dış kaynaklı ekiplerin erişiminin sözleşme ve yetki kontrolleriyle sınırlandırılması',
    'Test verisinin saklama süresinin tanımlanması ve süresi dolan verinin silinmesi veya yok edilmesi',
    'Yurt dışında barındırılan araç ve hizmetlere veri aktarımında güncel aktarım kurallarına uyulması',
    'Ekran görüntüsü, hata kaydı ve test raporlarında yer alan kişisel verinin de aynı koruma kurallarına tabi tutulması',
    'Olası veri ihlallerinin tespiti ve bildirimine yönelik sürecin test ortamlarını da kapsaması',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'Kişisel verinin güvenliği için alınan teknik tedbirlerin etkinliği güvenlik testleriyle doğrulanır.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'supporting',
      why: 'API yanıtlarında gereğinden fazla kişisel veri döndürülmemesi veri minimizasyonunun somut kontrolüdür.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Sentetik veya maskelenmiş veriyle çalışan otomasyon, canlı veri kopyalama ihtiyacını azaltır.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Hangi testin hangi veri sınıfını kullandığının izlenmesi, uyum kanıtı üretmeyi kolaylaştırır.',
    },
    {
      slug: 'veri-raporlama-testi',
      level: 'expected',
      why: 'Test ortamlarında kişisel veri yerine maskelenmiş veya sentetik veri kullanımı, veri minimizasyonu ilkesinin pratik karşılığıdır.',
    },
  ],
  officialSource: {
    label: 'Kişisel Verileri Koruma Kurumu — 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ikincil düzenlemeler',
    url: 'https://www.kvkk.gov.tr',
  },
};
