export default {
  slug: 'mobil-uygulama-testi',
  order: 4,
  title: 'Mobil Uygulama Testi',
  titleEn: 'Mobile Application Testing',
  icon: 'Smartphone',
  summary:
    'Mobil bankacılık uygulamalarının farklı cihaz, işletim sistemi ve ağ koşullarında güvenli, doğru ve kullanılabilir çalıştığını doğrular.',
  product: 'mobilehub',
  topic: 'mobil',
  what: [
    'Mobil uygulama testi; iOS ve Android uygulamalarının işlevselliğini, güvenliğini, performansını, kullanılabilirliğini ve erişilebilirliğini farklı cihaz ve koşullarda doğrulayan test faaliyetlerinin bütünüdür. Mobil kanal, birçok banka için müşteriyle en sık temas edilen noktadır; hesap açılışından kredi başvurusuna kadar pek çok ürün yalnızca mobilde sunulabilmektedir.',
    'Mobil ortamı zorlaştıran temel etken çeşitliliktir. Farklı üreticiler, ekran boyutları, işletim sistemi sürümleri, üretici arayüz katmanları, donanım güvenlik bileşenleri ve biyometrik sensörler aynı uygulamanın farklı davranmasına neden olabilir. Buna değişken ağ koşulları, arka plana alınma, bildirimler, izinler ve uygulama mağazası süreçleri eklenir.',
    'Bankacılık uygulamaları ayrıca hassas veri işler ve güçlü müşteri kimlik doğrulaması (Strong Customer Authentication – SCA) akışları barındırır. Bu nedenle mobil testte işlevsel doğrulama ile güvenlik doğrulaması birbirinden ayrılamaz: cihazda veri saklama, iletişimin korunması, kök erişimli (root/jailbreak) cihaz tespiti ve kod karıştırma gibi kontroller test kapsamının doğal parçasıdır.',
  ],
  risks: [
    'Belirli cihaz, üretici veya işletim sistemi sürümünde uygulamanın çökmesi ya da ekranların bozuk görüntülenmesi',
    'Biyometrik doğrulama, SCA veya cihaz eşleştirme akışlarının bazı cihazlarda başarısız olması',
    'Hassas verilerin cihazda, kayıtlarda veya ekran görüntülerinde korumasız kalması',
    'Zayıf veya kesintili ağda işlemlerin yarım kalması ya da mükerrer gönderilmesi',
    'İşletim sistemi güncellemesinden sonra izin, bildirim veya arka plan davranışının değişmesi',
    'Mağaza inceleme sürecinde reddedilme veya hatalı sürümün geniş kitleye ulaşması',
    'Ekran okuyucu ve büyük yazı tipi kullanıcılarının uygulamayı kullanamaması',
  ],
  regulations: [
    {
      slug: 'psd2',
      note: 'PSD2’nin güçlü müşteri kimlik doğrulaması gereklilikleri, mobil uygulamadaki biyometrik ve cihaz bağlama akışlarının kapsamlı test edilmesini gerektirir.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'BDDK’nın elektronik bankacılık hizmetlerine ilişkin kimlik doğrulama ve güvenlik beklentileri mobil kanal için de geçerlidir.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: '6493 sayılı Kanun kapsamındaki ödeme ve elektronik para kuruluşlarının mobil uygulamaları, güvenli ve kesintisiz hizmet beklentisi altında test edilmelidir.',
    },
    {
      slug: 'kvkk',
      note: 'KVKK, mobil uygulamanın cihazda ve iletişimde işlediği kişisel verilerin uygun teknik tedbirlerle korunmasını gerektirir.',
    },
    {
      slug: 'gdpr',
      note: 'AB’de hizmet veren kurumlar için GDPR, mobil uygulamadaki veri işleme ve izin akışlarının doğrulanmasını gündeme getirir.',
    },
    {
      slug: 'eaa',
      note: 'Avrupa Erişilebilirlik Yasası kapsamındaki bankacılık hizmetleri mobil uygulamaları da içerir.',
    },
  ],
  approach: [
    {
      title: 'Veriye dayalı cihaz matrisi oluşturun',
      text: 'Müşteri tabanınızın analitik verisinden en çok kullanılan cihaz, üretici ve işletim sistemi sürümlerini belirleyin; desteklenen en eski sürümü ve yeni çıkan sürümleri matrise ekleyin.',
    },
    {
      title: 'Gerçek cihaz ve emülatörü doğru yerde kullanın',
      text: 'Geliştirme sırasındaki hızlı kontroller için emülatör ve simülatörleri, biyometri, kamera, NFC, performans ve sürüm öncesi doğrulama için gerçek cihazları kullanın.',
    },
    {
      title: 'Güvenliği OWASP MASVS ile yapılandırın',
      text: 'Veri depolama, kriptografi, kimlik doğrulama, ağ iletişimi, platform etkileşimi, kod kalitesi ve dayanıklılık (resilience) alanlarını OWASP MASVS ve test rehberi MASTG’ye göre planlayın.',
    },
    {
      title: 'Kimlik doğrulama akışlarını uçtan uca test edin',
      text: 'Biyometrik kayıt ve değişiklik, cihaz bağlama, işlem onayı, oturum zaman aşımı ve cihaz değişikliği senaryolarını olumlu ve olumsuz durumlarıyla doğrulayın.',
    },
    {
      title: 'Ağ ve kesinti koşullarını simüle edin',
      text: 'Düşük bant genişliği, yüksek gecikme, ağ değişimi, uçak modu ve işlem ortasında bağlantı kaybı senaryolarında veri tutarlılığını ve kullanıcı mesajlarını kontrol edin.',
    },
    {
      title: 'Kullanılabilirlik ve erişilebilirliği ekleyin',
      text: 'Tek elle kullanım, büyük yazı tipi, koyu tema, ekran okuyucu ve yönlendirme değişikliği gibi gerçek kullanım koşullarında kritik akışları gözden geçirin.',
    },
    {
      title: 'Mağaza yayınını kontrollü yönetin',
      text: 'Mağaza gerekliliklerini sürüm öncesinde kontrol edin; kademeli yayın ve kapalı beta kanallarıyla çökme ve hata göstergelerini izleyerek yayını genişletin.',
    },
  ],
  tools: [
    {
      category: 'Gerçek cihaz bulutu',
      text: 'Fiziksel iOS ve Android cihazlara uzaktan erişim sağlayarak geniş cihaz matrisinde manuel ve otomatik test yapmayı mümkün kılar.',
    },
    {
      category: 'Emülatör ve simülatörler',
      text: 'Geliştirme sürecinde hızlı ve düşük maliyetli işlevsel kontroller için sanal cihaz ortamı sunar.',
    },
    {
      category: 'Mobil otomasyon çerçeveleri',
      text: 'Kritik akışların regresyon testlerini cihazlar üzerinde otomatik olarak koşturur.',
    },
    {
      category: 'Mobil güvenlik test araçları',
      text: 'Statik ve dinamik analizle uygulama paketini, cihazdaki veri saklamayı ve ağ trafiğini güvenlik açısından inceler.',
    },
    {
      category: 'Ağ koşulu simülasyonu ve trafik yakalama',
      text: 'Farklı ağ kalitelerini taklit eder ve uygulama ile sunucu arasındaki istekleri inceleme imkânı verir.',
    },
    {
      category: 'Çökme raporlama ve uygulama analitiği',
      text: 'Sürüm sonrası çökmeleri, performans sorunlarını ve etkilenen cihaz dağılımını görünür kılar.',
    },
  ],
  bestPractices: [
    'Cihaz matrisini yılda bir kez değil, müşteri kullanım verisi ve işletim sistemi takvimiyle düzenli güncelleyin.',
    'Yeni işletim sistemi sürümlerinin beta dönemlerinde uyumluluk testine başlayın.',
    'Güvenlik testlerini yalnızca sürüm öncesine bırakmayın; statik analizi geliştirme hattına ekleyin.',
    'Test ve sürüm yapılandırmalarındaki güvenlik ayarlarının (ör. hata ayıklama, sertifika sabitleme) farkını kontrol edin.',
    'Olumsuz senaryoları da kapsayın: biyometri iptali, yanlış deneme, izin reddi ve arka plandan dönüş.',
    'Her kritik hata için cihaz, sürüm, ağ koşulu ve kayıtları içeren tekrarlanabilir kanıt saklayın.',
  ],
  mistakes: [
    'Testleri yalnızca ekibin kendi kullandığı birkaç güncel cihazla sınırlamak',
    'Biyometri, kamera ve donanım güvenliği gibi özellikleri yalnızca emülatörde doğrulamak',
    'Güvenlik testini sızma testine bırakıp işlevsel test sürecinden ayrı tutmak',
    'Kararlı Wi-Fi ağında test edip mobil ağ koşullarını hiç simüle etmemek',
    'Mağaza yayınını tek adımda tüm kullanıcılara açmak',
  ],
};
