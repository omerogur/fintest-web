export default {
  slug: 'uyumluluk-capraz-tarayici-testi',
  order: 16,
  title: 'Uyumluluk ve Çapraz Tarayıcı Testi',
  titleEn: 'Compatibility & Cross-Browser Testing',
  icon: 'MonitorSmartphone',
  summary:
    'İnternet ve mobil bankacılık kanallarının müşterilerin gerçekte kullandığı tarayıcı, işletim sistemi, cihaz ve ekran boyutlarında doğru çalıştığını ve diğer sistemlerle sorunsuz birlikte var olduğunu doğrular.',
  product: 'browserhub',
  topic: 'mobil',
  what: [
    'Uyumluluk testi (compatibility testing), bir uygulamanın farklı tarayıcı, işletim sistemi, cihaz, ekran boyutu ve yazılım sürümü kombinasyonlarında beklendiği gibi çalıştığının doğrulanmasıdır. Çapraz tarayıcı testi bunun web kanalına özgü parçasıdır ve aynı sayfanın farklı tarayıcı motorlarında aynı işlevi ve kabul edilebilir bir görünümü sunduğunu sınar. Uyumluluğun diğer yüzü ise uygulamanın aynı ortamdaki başka sistemlerle veri alışverişi yapabilmesi (interoperability) ve onlarla çakışmadan birlikte çalışabilmesidir (co-existence).',
    'Banka müşterileri çok çeşitli cihaz ve tarayıcılar kullanır; bir kısmı güncel sürümlerdeyken bir kısmı eski işletim sistemi veya tarayıcı sürümlerinde kalır. Tek bir tarayıcıda çalışmayan bir onay butonu, kaymış bir form alanı veya yüklenmeyen bir doğrulama ekranı, o müşteri grubu için hizmetin fiilen kesilmesi anlamına gelir. İşletim sistemi ve tarayıcı üreticilerinin sık ve bankanın kontrolü dışında güncelleme yayımlaması, bu riski sürekli hale getirir.',
    'DORA (Tüzük (AB) 2022/2554) Madde 25(1), dijital operasyonel dayanıklılık test programında kullanılabilecek testler arasında uyumluluk testini (compatibility testing) açıkça sayar. ISO/IEC 25010 yazılım ürün kalitesi modeli de uyumluluğu temel kalite özelliklerinden biri olarak tanımlar. Bu nedenle uyumluluk testi yalnızca bir kullanıcı deneyimi konusu değil, hizmet sürekliliği ve kalite yönetiminin de parçasıdır.',
  ],
  risks: [
    'Belirli bir tarayıcı veya sürümde kritik işlemlerin (giriş, transfer, ödeme onayı) tamamlanamaması',
    'İşletim sistemi veya tarayıcı güncellemesi sonrası daha önce çalışan akışların bozulması',
    'Küçük veya çok büyük ekranlarda içeriğin kayması, butonların görünmez veya tıklanamaz hale gelmesi',
    'Eski sürümleri kullanan müşterilerin fark edilmeden hizmet dışında kalması',
    'Kimlik doğrulama, doğrulama kodu veya belge görüntüleme bileşenlerinin bazı ortamlarda çalışmaması',
    'Uygulamanın aynı cihazdaki veya kurum içindeki diğer yazılımlarla çakışması ya da veri alışverişinde hata üretmesi',
    'Uyumluluk sorunlarının müşteri şikâyetleriyle geç ve dağınık biçimde öğrenilmesi',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'Madde 25(1), uyumluluk testini dijital operasyonel dayanıklılık test programında kullanılabilecek testler arasında açıkça sayar.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Elektronik bankacılık kanallarının hizmet sürekliliği ve değişiklik yönetimi beklentileri, desteklenen ortamların düzenli olarak doğrulanmasını gerektirir.',
    },
    {
      slug: 'wcag-22',
      note: 'Yardımcı teknolojilerle uyumluluk, erişilebilirlik başarı ölçütlerinin farklı tarayıcı ve cihazlarda da sağlandığının test edilmesini gerektirir.',
    },
    {
      slug: 'eaa',
      note: 'Bankacılık hizmetlerinin erişilebilirlik gereklilikleri, farklı cihaz ve tarayıcılarda tutarlı bir deneyim sunulmasıyla desteklenir.',
    },
    {
      slug: 'iso-29119',
      note: 'Test süreçleri standardı, ortam kombinasyonlarının kapsam kararlarının belgelenmesi ve izlenebilir biçimde yönetilmesi için çerçeve sunar.',
    },
  ],
  approach: [
    {
      title: 'Gerçek kullanım verisinden bir uyumluluk matrisi çıkarın',
      text: 'Web analitiği ve uygulama telemetrisinden müşterilerin kullandığı tarayıcı, sürüm, işletim sistemi ve cihaz dağılımını çıkarın; matrisi tahminle değil bu veriyle kurun.',
    },
    {
      title: 'Ortamları öncelik katmanlarına ayırın',
      text: 'Müşteri payı yüksek kombinasyonları tam kapsamla, düşük paylı olanları kritik akışlarla, desteklenmeyenleri ise açıkça belgelenmiş bir liste olarak yönetin.',
    },
    {
      title: 'Kritik müşteri yolculuklarını tüm katmanlarda koşturun',
      text: 'Giriş, para transferi, ödeme onayı, kart işlemleri ve belge görüntüleme gibi akışları öncelikli ortamların tamamında otomatik olarak doğrulayın.',
    },
    {
      title: 'Ekran boyutu ve yönlendirme testlerini ekleyin',
      text: 'Duyarlı (responsive) tasarımın farklı çözünürlük, yakınlaştırma düzeyi ve yatay-dikey yönlendirmede bozulmadığını görsel karşılaştırmayla kontrol edin.',
    },
    {
      title: 'Geriye dönük uyumluluğu izleyin',
      text: 'Tarayıcı ve işletim sistemi üreticilerinin beta ve yeni sürümlerini erken test ederek güncellemenin müşteriye ulaşmasından önce sorunları tespit edin.',
    },
    {
      title: 'Birlikte çalışabilirliği doğrulayın',
      text: 'Uygulamanın dış servisler, kurum içi sistemler ve cihazdaki diğer yazılımlarla veri alışverişini ve aynı ortamda çakışmadan çalışmasını test edin.',
    },
    {
      title: 'Matrisi düzenli olarak güncelleyin',
      text: 'Kullanım verisi değiştikçe matrisi gözden geçirin; destek sona erdirilecek ortamları müşteri iletişimiyle birlikte planlayın.',
    },
  ],
  tools: [
    {
      category: 'Bulut tabanlı tarayıcı ve cihaz laboratuvarları',
      text: 'Çok sayıda tarayıcı, sürüm ve işletim sistemi kombinasyonuna fiziksel altyapı kurmadan erişim sağlar.',
    },
    {
      category: 'Gerçek cihaz bulutları',
      text: 'Mobil tarayıcı ve uygulamaları farklı üretici, model ve işletim sistemi sürümlerinde gerçek donanım üzerinde test eder.',
    },
    {
      category: 'Web arayüz otomasyon çerçeveleri',
      text: 'Aynı test senaryosunu birden fazla tarayıcı motorunda paralel olarak koşturur.',
    },
    {
      category: 'Görsel regresyon araçları',
      text: 'Ekran görüntülerini referans görüntülerle karşılaştırarak ortamlara özgü yerleşim bozulmalarını tespit eder.',
    },
    {
      category: 'Web analitiği ve gerçek kullanıcı izleme araçları',
      text: 'Müşterilerin kullandığı ortamları ve bu ortamlara özgü hata oranlarını ölçerek matrisin güncel kalmasını sağlar.',
    },
  ],
  bestPractices: [
    'Desteklenen tarayıcı ve işletim sistemi listesini yazılı hale getirin ve müşteriye açık biçimde duyurun.',
    'Emülatör ve simülatörleri hızlı geri bildirim için, gerçek cihazları ise sürüm öncesi son doğrulama için kullanın.',
    'Tarayıcıya özgü davranışları tarayıcı adını kontrol ederek değil, özellik varlığını kontrol ederek (feature detection) yönetin.',
    'Canlıdaki hataları ortam bilgisiyle birlikte kaydedin; belirli bir sürümde yoğunlaşan hatalar uyumluluk sorununun en erken işaretidir.',
    'Uyumluluk testlerini sürüm onay kapısına bağlayın; öncelikli ortamlardaki başarısızlık sürümü durdurmalıdır.',
    'Uyumluluk kararlarını ve test sonuçlarını denetimde gösterilebilecek biçimde saklayın.',
  ],
  mistakes: [
    'Yalnızca ekibin kullandığı tarayıcı ve cihazlarda test yapmak',
    'Uyumluluk matrisini bir kez oluşturup yıllarca güncellememek',
    'Tüm ortam kombinasyonlarını eşit derinlikte test etmeye çalışıp maliyeti kontrolden çıkarmak',
    'Tarayıcı ve işletim sistemi güncellemelerini müşteri şikâyetleri gelene kadar beklemek',
    'Uyumluluğu yalnızca görsel görünüm olarak ele alıp işlevsel akışları ve diğer sistemlerle birlikte çalışmayı test etmemek',
  ],
};
