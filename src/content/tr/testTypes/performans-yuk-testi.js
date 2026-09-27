export default {
  slug: 'performans-yuk-testi',
  order: 1,
  title: 'Performans ve Yük Testi',
  titleEn: 'Performance & Load Testing',
  icon: 'Gauge',
  summary:
    'Dijital bankacılık kanallarının ve API’lerin beklenen ve olağanüstü yük altında hızlı, kararlı ve doğru çalıştığını ölçülebilir biçimde doğrular.',
  product: 'performance',
  topic: 'performans',
  what: [
    'Performans testi, bir sistemin belirli bir yük altında ne kadar hızlı yanıt verdiğini, ne kadar işlem taşıyabildiğini ve kaynaklarını nasıl kullandığını ölçen test türlerinin ortak adıdır. Yük testi (load testing) beklenen kullanıcı ve işlem hacmini, stres testi (stress testing) bu hacmin üzerindeki koşulları, dayanıklılık testi (soak/endurance testing) ise uzun süreli sürekli yükü inceler. Ani yük testi (spike testing) ve kapasite testi (capacity testing) de aynı ailenin parçasıdır.',
    'Bankacılıkta performans, kullanıcı deneyiminin ötesinde bir hizmet sürekliliği konusudur. Maaş günleri, kampanya dönemleri, vergi ve fatura son ödeme tarihleri ya da piyasa hareketliliği gibi anlarda işlem hacmi kısa sürede katlanabilir. Bu anlarda yaşanan yavaşlama veya kesinti; başarısız ödemelere, çağrı merkezi yüküne, itibar kaybına ve düzenleyici bildirim yükümlülüklerine dönüşebilir.',
    'Modern bankacılık mimarisi mobil uygulama, internet şubesi, açık bankacılık API’leri, ödeme sistemleri entegrasyonları ve core banking platformundan oluşan zincirli bir yapıdır. Zincirin en yavaş halkası tüm müşteri yolculuğunu belirler. Bu nedenle performans testi yalnızca ön yüzü değil; ara katmanları, veritabanını, üçüncü taraf servisleri ve bunlar arasındaki bağımlılıkları birlikte ele almalıdır.',
  ],
  risks: [
    'Yoğun dönemlerde para transferi, ödeme veya giriş işlemlerinin zaman aşımına uğraması',
    'Kapasite sınırının canlı ortamda, müşteri etkilendikten sonra öğrenilmesi',
    'Yeni sürümlerle fark edilmeden biriken performans gerilemesi (performance regression)',
    'Bellek sızıntısı, bağlantı havuzu tükenmesi gibi yalnızca uzun süreli yükte ortaya çıkan hatalar',
    'Üçüncü taraf ve iç servislerdeki yavaşlığın zincirleme etkiyle tüm kanalları etkilemesi',
    'Otomatik ölçeklendirme ve yük dengeleme kurallarının beklenen şekilde çalışmaması',
    'Yük altında veri tutarlılığının bozulması; mükerrer veya yarım kalan işlemler',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'DORA’nın dijital operasyonel dayanıklılık testi çerçevesinde performans ve kapasite testleri, kritik işlevlerin sürekliliğini göstermenin olağan yollarındandır.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'BDDK bilgi sistemleri düzenlemesinin kapasite yönetimi ve iş sürekliliği beklentileri, sistemlerin öngörülen yükü taşıyabildiğinin gösterilmesini gerektirir.',
    },
    {
      slug: 'psd2',
      note: 'PSD2 kapsamındaki erişim arayüzlerinin performans ve erişilebilirlik (availability) açısından izlenmesi beklenir; yük testleri bu arayüzlerin kapasitesini doğrular.',
    },
    {
      slug: 'acik-bankacilik-ohvps',
      note: 'Açık bankacılık API’lerinin yetkili üçüncü taraflara kesintisiz ve makul sürede yanıt vermesi, bu API’ler için düzenli yük testi yapılmasını anlamlı kılar.',
    },
    {
      slug: 'iso-29119',
      note: 'ISO/IEC/IEEE 29119, performans testinin planlanması, tasarımı ve raporlanması için ortak bir süreç ve terminoloji çerçevesi sunar.',
    },
  ],
  approach: [
    {
      title: 'Hedefleri iş diliyle tanımlayın',
      text: 'Kritik müşteri yolculuklarını belirleyin ve her biri için kabul edilebilir yanıt süresi, hata oranı ve işlem hacmi hedeflerini iş birimleriyle birlikte yazılı hale getirin.',
    },
    {
      title: 'Gerçekçi iş yükü modeli kurun',
      text: 'Canlı ortam izleme verilerinden işlem dağılımını, yoğun saat profillerini ve kullanıcı davranışını çıkarın; senaryoları tahmine değil gözleme dayandırın.',
    },
    {
      title: 'Temsil gücü yüksek bir ortam hazırlayın',
      text: 'Test ortamının donanım, yapılandırma ve veri hacmi açısından canlıya ne kadar benzediğini belgeleyin; farkları sonuç yorumunda açıkça belirtin.',
    },
    {
      title: 'Test verisini ve bağımlılıkları yönetin',
      text: 'Maskelenmiş veya sentetik veriyle yeterli hacimde müşteri ve hesap oluşturun; test dışı tutulan üçüncü taraf servisler için davranışı gerçekçi simülatörler kullanın.',
    },
    {
      title: 'Kademeli yük uygulayın',
      text: 'Önce temel ölçüm, ardından beklenen yük, sonra stres ve uzun süreli yük senaryolarını koşturun; her kademede sistem davranışını ve kaynak kullanımını izleyin.',
    },
    {
      title: 'Darboğazı bulun ve doğrulayın',
      text: 'Uygulama performans izleme verileriyle darboğazın hangi katmanda olduğunu tespit edin; iyileştirmeden sonra aynı senaryoyu tekrarlayarak etkisini ölçün.',
    },
    {
      title: 'Sonuçları karşılaştırılabilir raporlayın',
      text: 'Her koşunun ortamını, sürümünü ve metriklerini standart bir formatta saklayın; sürümler arası eğilimi yönetime ve denetime sunulabilir hale getirin.',
    },
  ],
  tools: [
    {
      category: 'Yük üretim araçları',
      text: 'HTTP, WebSocket ve mesajlaşma protokolleri üzerinden çok sayıda sanal kullanıcı ve işlem üreterek hedef sisteme kontrollü yük uygular.',
    },
    {
      category: 'Uygulama performans izleme (APM)',
      text: 'Yük altında hangi servis, sorgu veya dış çağrının yavaşladığını dağıtık izleme (distributed tracing) ile görünür kılar.',
    },
    {
      category: 'Altyapı ve kaynak izleme',
      text: 'İşlemci, bellek, disk, ağ ve bağlantı havuzu gibi kaynak metriklerini test süresince toplar.',
    },
    {
      category: 'Servis sanallaştırma',
      text: 'Test ortamında bulunmayan veya yüklenmemesi gereken dış sistemlerin davranışını ve gecikmesini taklit eder.',
    },
    {
      category: 'Test verisi üretim ve maskeleme araçları',
      text: 'Kişisel veri içermeyen, ancak hacim ve dağılım olarak gerçeğe yakın test verisi hazırlar.',
    },
  ],
  bestPractices: [
    'Ortalama yerine yüzdelik dilimleri (ör. p95, p99) izleyin; ortalama, müşteriyi etkileyen uç gecikmeleri gizler.',
    'Performans testlerini sürüm takvimine bağlayın; kritik yolculuklar için hafif bir yük testini CI/CD hattına ekleyin.',
    'Düşünme süresi (think time), oturum süresi ve işlem karışımını gerçek kullanıcı davranışına göre ayarlayın.',
    'Hata oranını ve fonksiyonel doğruluğu yanıt süresiyle birlikte ölçün; hızlı ama hatalı yanıt başarı değildir.',
    'Kapasite planlamasını test sonuçlarıyla besleyin ve büyüme projeksiyonlarına göre düzenli güncelleyin.',
    'Ortam farklılıklarını, varsayımları ve kapsam dışı bileşenleri raporda açıkça belirtin.',
  ],
  mistakes: [
    'Tek bir API uç noktasına yük verip tüm sistemin kapasitesi hakkında sonuç çıkarmak',
    'Canlıdan çok farklı veri hacmine sahip bir ortamda elde edilen sonuçları doğrudan canlıya genellemek',
    'Yük üreten makinenin kendi sınırına takılmasını sistemin darboğazı sanmak',
    'Önbellek (cache) etkisini hesaba katmadan aynı veriyle tekrar tekrar test koşmak',
    'Performans testini yalnızca büyük sürümlerden önce yapılan tek seferlik bir etkinlik olarak görmek',
  ],
};
