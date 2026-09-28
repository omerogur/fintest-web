export default {
  slug: 'bddk-bilgi-sistemleri',
  order: 11,
  title: 'BDDK Bilgi Sistemleri Yönetmeliği',
  fullTitle: 'Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Bankaların bilgi sistemleri yönetişimi, değişiklik ve test yönetimi, güvenlik testleri, iş sürekliliği ve elektronik bankacılık kanallarına ilişkin temel BDDK düzenlemesi.',
  topic: 'bddk',
  keyFacts: [
    { label: 'Düzenleyen kurum', value: 'Bankacılık Düzenleme ve Denetleme Kurumu (BDDK)' },
    { label: 'Yayım', value: 'Resmî Gazete, 2020' },
    { label: 'Kapsam', value: 'Türkiye’de faaliyet gösteren bankalar' },
  ],
  scope: [
    'Yönetmelik, bankaların bilgi sistemlerini nasıl yöneteceğini, denetleyeceğini ve elektronik bankacılık hizmetlerini hangi güvenlik ilkeleriyle sunacağını düzenler. Önceki düzenlemenin yerini alan metin, bilgi sistemlerini yalnızca bir teknoloji konusu olarak değil, yönetim kurulunun sorumluluğunda olan bir risk alanı olarak ele alır. Bilgi güvenliği, varlık yönetimi, erişim yönetimi, olay yönetimi ve kayıt (log) tutma gibi başlıklar aynı çerçeve içinde yer alır.',
    'Yazılım kalitesi açısından en doğrudan ilgili bölümler değişiklik yönetimi, geliştirme ve test ortamlarının canlı ortamdan ayrılması, güvenlik testleri ve iş sürekliliğidir. Yönetmelik, bir değişikliğin canlıya alınmadan önce test edilmesini, test ve onay adımlarının kayıt altına alınmasını ve görevler ayrılığının gözetilmesini bekler. İnternet ve mobil bankacılık kanallarında kimlik doğrulama ve işlem güvenliğine ilişkin ayrıntılı hükümler de bulunur.',
    'Birincil ve ikincil bilgi sistemlerinin yurt içinde bulundurulması yönündeki genel yaklaşım, bulut ve dış hizmet tercihlerini doğrudan etkiler. Dış kaynak kullanımı ayrıca BDDK’nın destek hizmeti alımına ilişkin yönetmeliği ile düzenlenir; bu metin hizmet sağlayıcının değerlendirilmesi, sözleşme içeriği ve risklerin izlenmesi gibi konuları kapsar. İki düzenleme birlikte okunmalı, güncel metin ve değişiklikler resmi kaynaklardan teyit edilmelidir.',
    'QA ekipleri için pratik sonuç, test faaliyetinin denetlenebilir bir süreç olarak yürütülmesidir. Hangi değişikliğin hangi testlerden geçtiği, kimin onayladığı, test ortamında hangi verinin kullanıldığı ve bulunan hataların nasıl kapatıldığı sonradan gösterilebilmelidir. Test ortamlarının canlıdan ayrı tutulması, canlı verinin bu ortamlara korumasız taşınmaması anlamına da gelir; bu konu KVKK ve bankacılık sırrı hükümleriyle birlikte değerlendirilmelidir. Dış kaynaklı test ekipleri ve bulut tabanlı test araçları kullanıldığında, destek hizmeti düzenlemesinin getirdiği değerlendirme ve sözleşme adımları da test organizasyonunun bir parçası haline gelir.',
  ],
  expects: [
    'Bilgi sistemleri yönetişiminin yönetim kurulu sorumluluğunda, tanımlı rol ve politikalarla kurulması',
    'Değişikliklerin planlı, test edilmiş, onaylanmış ve kayıt altına alınmış biçimde canlıya alınması',
    'Geliştirme ve test ortamlarının canlı ortamdan ayrılması; canlı verinin test ortamında korumasız kullanılmaması',
    'Bağımsız taraflarca yürütülen sızma testleri ve bulguların giderilmesinin takibi',
    'İş sürekliliği ve felaket kurtarma planlarının düzenli olarak test edilmesi',
    'Dış hizmet alımlarında hizmet sağlayıcı risklerinin değerlendirilmesi ve sözleşmeyle güvence altına alınması',
    'Birincil ve ikincil sistemlerin yurt içinde bulundurulmasına ilişkin kurallara uyum',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'required',
      why: 'Yönetmelik bankaların bilgi sistemlerinde bağımsız sızma testleri yaptırmasını açıkça bekler.',
    },
    {
      slug: 'core-banking-testleri',
      level: 'expected',
      why: 'Çekirdek bankacılık değişikliklerinin canlı öncesi test ve onaydan geçmesi değişiklik yönetiminin merkezindedir.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'expected',
      why: 'Sık değişiklik yapılan sistemlerde regresyon kontrolünün tekrarlanabilir ve kayıtlı olması en pratik yoldan otomasyonla sağlanır.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Kapasite yönetimi ve hizmet sürekliliği, kanalların beklenen yük altında ölçülmesini gerektirir.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'expected',
      why: 'Elektronik bankacılık kanallarının erişilebilirliğini tehdit eden hizmet dışı bırakma saldırılarına karşı önlemlerin etkinliği ancak kontrollü testle doğrulanabilir.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Mobil bankacılık kanalındaki kimlik doğrulama ve işlem güvenliği hükümleri uygulamanın gerçek cihazlarda doğrulanmasını gerektirir.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Test kapsamı ve kalite metrikleri, değişiklik onaylarına ve denetimlere izlenebilir kanıt sağlar.',
    },
    {
      slug: 'is-surekliligi-felaket-kurtarma-testi',
      level: 'required',
      why: 'Yedek verilerin geri yükleme yapılarak düzenli test edilmesi ve en az yılda bir, işlemlerin ikincil merkezden yürütüldüğü felaket senaryosu testi beklenir (güncel metne başvurun).',
    },
    {
      slug: 'kullanici-kabul-testi',
      level: 'expected',
      why: 'Değişikliklerin uygun test planlarıyla test edilmesi ve ardından kullanıcı ve ilgili birim onaylarının alınması beklenir.',
    },
    {
      slug: 'veri-raporlama-testi',
      level: 'expected',
      why: 'Test verisinin üretim işlemlerini temsil etmesi ve müşteri üretim verisinden arındırılmış olması beklenir.',
    },
  ],
  officialSource: {
    label:
      'BDDK — Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik; Bankaların Destek Hizmeti Almalarına İlişkin Yönetmelik',
    url: 'https://www.bddk.org.tr',
  },
};
