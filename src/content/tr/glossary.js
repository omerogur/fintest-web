export default [
  {
    id: 'sca',
    term: 'SCA',
    expansion: 'Strong Customer Authentication',
    definition:
      'Güçlü müşteri kimlik doğrulaması: bilgi (ör. şifre), sahip olunan unsur (ör. cihaz) ve biyometrik unsur kategorilerinden en az ikisinin birbirinden bağımsız olarak kullanılmasına dayanan kimlik doğrulama. PSD2 kapsamında elektronik ödemeler ve çevrim içi hesap erişimi için temel gerekliliktir; istisnalar ilgili teknik standartta tanımlanır.',
    testTypes: ['guvenlik-testi', 'mobil-uygulama-testi', 'api-acik-bankacilik-testi'],
    regulations: ['psd2', 'odeme-hizmetleri-6493'],
  },
  {
    id: 'rts',
    term: 'RTS',
    expansion: 'Regulatory Technical Standards',
    definition:
      'Düzenleyici teknik standartlar: AB düzenlemelerinin ayrıntılarını belirleyen ve Komisyon tarafından kabul edilen ikincil mevzuat. PSD2’de SCA ve güvenli iletişime ilişkin RTS, DORA’da ise test, olay bildirimi ve üçüncü taraf riskine ilişkin çeşitli teknik standartlar bulunur.',
    testTypes: ['guvenlik-testi', 'api-acik-bankacilik-testi'],
    regulations: ['psd2', 'dora'],
  },
  {
    id: 'tpp',
    term: 'TPP',
    expansion: 'Third Party Provider',
    definition:
      'Üçüncü taraf sağlayıcı: müşterinin rızasıyla, hesabı tutan kuruluşun API’leri üzerinden hesap bilgisi veya ödeme başlatma hizmeti sunan yetkili kuruluş. Açık bankacılık testlerinde TPP’nin kimliğinin, yetkisinin ve rıza kapsamının doğrulanması merkezi konudur.',
    testTypes: ['api-acik-bankacilik-testi', 'guvenlik-testi'],
    regulations: ['psd2', 'acik-bankacilik-ohvps'],
  },
  {
    id: 'aisp-pisp',
    term: 'AISP / PISP',
    expansion: 'Account Information Service Provider / Payment Initiation Service Provider',
    definition:
      'Hesap bilgisi hizmeti sağlayıcısı (AISP) müşterinin farklı kuruluşlardaki hesap bilgilerini rızayla toplar; ödeme emri başlatma hizmeti sağlayıcısı (PISP) müşteri adına ödeme emri başlatır. Türkiye’de bu hizmetler ÖHVPS çerçevesinde düzenlenir.',
    testTypes: ['api-acik-bankacilik-testi'],
    regulations: ['psd2', 'acik-bankacilik-ohvps', 'odeme-hizmetleri-6493'],
  },
  {
    id: 'tlpt',
    term: 'TLPT',
    expansion: 'Threat-Led Penetration Testing',
    definition:
      'Tehdit odaklı sızma testi: güncel tehdit istihbaratına dayanarak gerçek saldırgan davranışını canlı üretim sistemleri üzerinde taklit eden kapsamlı test. DORA, yetkili otoritelerce belirlenen önemli kuruluşlardan en az üç yılda bir TLPT bekler.',
    testTypes: ['guvenlik-testi'],
    regulations: ['dora'],
  },
  {
    id: 'ict-third-party-risk',
    term: 'BİT üçüncü taraf riski',
    expansion: 'ICT third-party risk',
    definition:
      'Bulut, SaaS, veri merkezi veya yazılım hizmeti gibi dış BİT sağlayıcılarına bağımlılıktan doğan operasyonel, güvenlik ve süreklilik riskleri. DORA bu riskin sözleşme hükümleri, bilgi kaydı ve çıkış stratejileriyle yönetilmesini ister; test açısından sağlayıcı değişikliklerinin kurum tarafında doğrulanması gerekir.',
    testTypes: ['core-banking-testleri', 'api-acik-bankacilik-testi', 'performans-yuk-testi'],
    regulations: ['dora', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'ddos',
    term: 'DDoS',
    expansion: 'Distributed Denial of Service',
    definition:
      'Dağıtık hizmet dışı bırakma saldırısı: çok sayıda kaynaktan üretilen trafikle bir hizmetin ağ, altyapı veya uygulama katmanında erişilemez hale getirilmesi. Bankalarda internet ve mobil bankacılık ile dışa açık API’ler başlıca hedeflerdir.',
    testTypes: ['ddos-dayaniklilik-testi', 'performans-yuk-testi'],
    regulations: ['dora', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'waf',
    term: 'WAF',
    expansion: 'Web Application Firewall',
    definition:
      'Web uygulama güvenlik duvarı: HTTP trafiğini kurallara göre inceleyerek enjeksiyon, bot trafiği ve uygulama katmanı saldırılarını engelleyen bileşen. Kuralların meşru müşteri işlemlerini engellemeden etkili olduğunun test edilmesi gerekir.',
    testTypes: ['ddos-dayaniklilik-testi', 'guvenlik-testi'],
    regulations: ['pci-dss', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'scrubbing',
    term: 'Scrubbing (trafik temizleme)',
    expansion: '',
    definition:
      'Saldırı sırasında trafiğin bir temizleme merkezine yönlendirilip kötü niyetli paketlerin ayıklanması ve temiz trafiğin kuruma geri iletilmesi. Yönlendirmenin ne kadar sürede devreye girdiği ve meşru trafiği nasıl etkilediği DDoS tatbikatlarında doğrulanır.',
    testTypes: ['ddos-dayaniklilik-testi'],
    regulations: ['dora'],
  },
  {
    id: 'load-test',
    term: 'Yük testi',
    expansion: 'Load testing',
    definition:
      'Sistemin beklenen kullanıcı ve işlem hacmi altında yanıt süresi, işlem kapasitesi ve hata oranını ölçen performans testi. Gerçekçi iş karışımı ve test verisi, sonuçların anlamlı olması için belirleyicidir.',
    testTypes: ['performans-yuk-testi'],
    regulations: ['dora', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'stress-test',
    term: 'Stres testi',
    expansion: 'Stress testing',
    definition:
      'Yükün beklenen seviyenin üzerine çıkarılarak sistemin kırılma noktasının ve bu noktadaki davranışının incelendiği test. Amaç yalnızca sınırı bulmak değil, sistemin kontrollü biçimde yavaşlayıp toparlanabildiğini görmektir.',
    testTypes: ['performans-yuk-testi', 'ddos-dayaniklilik-testi'],
    regulations: ['dora'],
  },
  {
    id: 'soak-test',
    term: 'Dayanıklılık testi',
    expansion: 'Soak / endurance testing',
    definition:
      'Sistemin saatler veya günler boyunca sürekli yük altında çalıştırıldığı test. Bellek sızıntısı, bağlantı havuzu tükenmesi ve kademeli yavaşlama gibi kısa testlerde görünmeyen sorunları ortaya çıkarır.',
    testTypes: ['performans-yuk-testi'],
    regulations: ['dora'],
  },
  {
    id: 'slo-sla',
    term: 'SLO / SLA',
    expansion: 'Service Level Objective / Service Level Agreement',
    definition:
      'SLO, bir hizmet için iç hedeftir (ör. belirli bir yüzdelik dilimde yanıt süresi); SLA ise bu tür hedeflerin bir sağlayıcı ile müşteri arasında sözleşmeye bağlandığı hâlidir. Performans testlerinin başarı kriterleri SLO’lardan türetilmelidir.',
    testTypes: ['performans-yuk-testi', 'test-analizi-kalite-metrikleri'],
    regulations: ['dora'],
  },
  {
    id: 'regression-test',
    term: 'Regresyon testi',
    expansion: 'Regression testing',
    definition:
      'Bir değişikliğin daha önce çalışan işlevleri bozmadığını doğrulamak için mevcut testlerin yeniden koşulması. Sık sürüm çıkan bankacılık kanallarında otomasyonun en yüksek getiri sağladığı alandır.',
    testTypes: ['test-otomasyonu', 'core-banking-testleri'],
    regulations: ['iso-29119', 'istqb'],
  },
  {
    id: 'test-pyramid',
    term: 'Test piramidi',
    expansion: 'Test pyramid',
    definition:
      'Çok sayıda hızlı birim testi, daha az servis/API testi ve en az sayıda uçtan uca arayüz testinden oluşan dengeli otomasyon yapısını tarif eden model. Arayüz testlerinin ağırlıkta olduğu “ters piramit”, yavaş ve kırılgan test setlerine yol açar.',
    testTypes: ['test-otomasyonu'],
    regulations: ['istqb'],
  },
  {
    id: 'flaky-test',
    term: 'Kararsız test',
    expansion: 'Flaky test',
    definition:
      'Kodda değişiklik olmadan bazen geçen bazen kalan test. Zamanlama, paylaşılan test verisi veya ortam bağımlılığı tipik nedenlerdir; kararsız testler sonuçlara güveni azalttığı için karantinaya alınıp kök nedeni giderilmelidir.',
    testTypes: ['test-otomasyonu', 'test-analizi-kalite-metrikleri'],
    regulations: [],
  },
  {
    id: 'self-healing',
    term: 'Kendi kendini onaran test',
    expansion: 'Self-healing test automation',
    definition:
      'Arayüzdeki bir öğenin tanımlayıcısı değiştiğinde alternatif niteliklerle öğeyi yeniden bulup testi sürdüren otomasyon yaklaşımı. Bakım yükünü azaltır; ancak yapılan her onarımın gözden geçirilmesi, gerçek hataların gizlenmemesi için gereklidir.',
    testTypes: ['test-otomasyonu', 'mobil-uygulama-testi'],
    regulations: [],
  },
  {
    id: 'shift-left',
    term: 'Shift-left',
    expansion: '',
    definition:
      'Test ve kalite faaliyetlerinin yazılım yaşam döngüsünde mümkün olduğunca erkene, gereksinim ve geliştirme aşamalarına çekilmesi. Hataların bulunma maliyetini düşürür ve güvenlik, erişilebilirlik gibi alanları sürüm sonu kontrolü olmaktan çıkarır.',
    testTypes: ['test-otomasyonu', 'guvenlik-testi', 'erisilebilirlik-testi'],
    regulations: ['iso-29119'],
  },
  {
    id: 'risk-based-testing',
    term: 'Risk temelli test',
    expansion: 'Risk-based testing',
    definition:
      'Test kapsamının, derinliğinin ve sırasının; hata olasılığı ve iş etkisine göre belirlendiği yaklaşım. Bankacılıkta para hareketi, müşteri verisi ve düzenleyici yükümlülük içeren işlevler genellikle en yüksek önceliği alır.',
    testTypes: ['test-analizi-kalite-metrikleri', 'test-otomasyonu'],
    regulations: ['iso-29119', 'istqb', 'dora'],
  },
  {
    id: 'contract-testing',
    term: 'Sözleşme testi',
    expansion: 'Contract testing',
    definition:
      'Bir API’yi sağlayan ve tüketen taraflar arasındaki beklentilerin (istek/yanıt yapısı, alanlar, hata kodları) ayrı ayrı ve otomatik olarak doğrulanması. Açık bankacılıkta yayımlanan standarda uyumun sürüm değişikliklerinde korunmasına yardımcı olur.',
    testTypes: ['api-acik-bankacilik-testi', 'test-otomasyonu'],
    regulations: ['acik-bankacilik-ohvps', 'psd2'],
  },
  {
    id: 'api-sandbox',
    term: 'API sandbox',
    expansion: '',
    definition:
      'Üçüncü tarafların gerçek müşteri verisi kullanmadan API’leri deneyebildiği, canlı ortamı taklit eden test ortamı. Sandbox davranışının canlı ortamla tutarlı olması, entegrasyon sorunlarının erken yakalanması için önemlidir.',
    testTypes: ['api-acik-bankacilik-testi'],
    regulations: ['psd2', 'acik-bankacilik-ohvps'],
  },
  {
    id: 'oauth-fapi',
    term: 'OAuth 2.0 / FAPI',
    expansion: 'Financial-grade API',
    definition:
      'OAuth 2.0, bir istemciye kullanıcının kimlik bilgilerini paylaşmadan sınırlı erişim yetkisi veren yetkilendirme çerçevesidir. FAPI, OpenID Foundation’ın finansal hizmetler gibi yüksek riskli senaryolar için OAuth 2.0 ve OpenID Connect üzerine tanımladığı sıkılaştırılmış güvenlik profilidir.',
    testTypes: ['api-acik-bankacilik-testi', 'guvenlik-testi'],
    regulations: ['acik-bankacilik-ohvps', 'psd2'],
  },
  {
    id: 'owasp-asvs',
    term: 'OWASP ASVS',
    expansion: 'Application Security Verification Standard',
    definition:
      'Web uygulamaları ve API’ler için güvenlik gereksinimlerini seviyelere ayrılmış biçimde tanımlayan açık doğrulama standardı. Güvenlik testlerinin kapsamını ölçülebilir gereksinimlere bağlamak için kullanılır.',
    testTypes: ['guvenlik-testi', 'api-acik-bankacilik-testi'],
    regulations: ['pci-dss', 'iso-27001'],
  },
  {
    id: 'owasp-masvs',
    term: 'OWASP MASVS',
    expansion: 'Mobile Application Security Verification Standard',
    definition:
      'Mobil uygulamalar için veri depolama, kriptografi, kimlik doğrulama, ağ iletişimi ve dayanıklılık gibi alanlarda güvenlik gereksinimlerini tanımlayan standart. Test yöntemleri eşlik eden OWASP MASTG rehberinde yer alır.',
    testTypes: ['mobil-uygulama-testi', 'guvenlik-testi'],
    regulations: ['bddk-bilgi-sistemleri'],
  },
  {
    id: 'sast-dast',
    term: 'SAST / DAST',
    expansion: 'Static / Dynamic Application Security Testing',
    definition:
      'SAST, kaynak kodu veya derlenmiş kodu çalıştırmadan inceleyerek zafiyet arar; DAST ise çalışan uygulamaya dışarıdan istekler göndererek zafiyetleri tespit eder. İkisi birbirini tamamlar ve geliştirme hattına entegre edildiğinde erken geri bildirim sağlar.',
    testTypes: ['guvenlik-testi', 'test-otomasyonu'],
    regulations: ['pci-dss', 'dora'],
  },
  {
    id: 'penetration-test',
    term: 'Sızma testi',
    expansion: 'Penetration testing',
    definition:
      'Yetkili uzmanların, saldırgan bakış açısıyla sistemlerdeki zafiyetleri bulup istismar edilebilirliğini gösterdiği kontrollü güvenlik testi. Kapsam, kurallar ve yetkilendirme test öncesinde yazılı olarak belirlenir.',
    testTypes: ['guvenlik-testi'],
    regulations: ['dora', 'pci-dss', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'wcag-22-aa',
    term: 'WCAG 2.2 AA',
    expansion: 'Web Content Accessibility Guidelines 2.2, Level AA',
    definition:
      'W3C’nin 5 Ekim 2023’te tavsiye olarak yayımladığı erişilebilirlik yönergelerinin AA uyum seviyesi. Pratikte bankacılık kanalları için en yaygın hedef seviyedir ve EN 301 549 üzerinden EAA uyumunun temel referansıdır.',
    testTypes: ['erisilebilirlik-testi', 'mobil-uygulama-testi'],
    regulations: ['wcag-22', 'eaa', 'turkiye-erisilebilirlik'],
  },
  {
    id: 'screen-reader',
    term: 'Ekran okuyucu',
    expansion: 'Screen reader',
    definition:
      'Ekrandaki içeriği sese veya Braille çıktısına dönüştüren yardımcı teknoloji. Otomatik taramaların yakalayamadığı etiket, odak sırası ve dinamik içerik sorunlarını görmek için ekran okuyucuyla elle test yapılması gerekir.',
    testTypes: ['erisilebilirlik-testi', 'mobil-uygulama-testi'],
    regulations: ['wcag-22', 'eaa'],
  },
  {
    id: 'test-data-masking',
    term: 'Test verisi maskeleme',
    expansion: 'Test data masking',
    definition:
      'Üretim verisindeki kişisel ve hassas alanların, veri yapısını ve iş kurallarını koruyarak geri döndürülemez biçimde değiştirilmesi. Maskelenmiş verinin başka verilerle birleştirilerek kişiyi yeniden tanımlamaya imkân vermemesi ayrıca değerlendirilmelidir.',
    testTypes: ['test-analizi-kalite-metrikleri', 'core-banking-testleri'],
    regulations: ['kvkk', 'gdpr', 'pci-dss'],
  },
  {
    id: 'synthetic-test-data',
    term: 'Sentetik test verisi',
    expansion: 'Synthetic test data',
    definition:
      'Gerçek kişilere ait olmayan, kurallar veya istatistiksel modellerle üretilen test verisi. Kişisel veri riskini azaltır; ancak uç durumları ve gerçek veri dağılımlarını yeterince temsil edip etmediği doğrulanmalıdır.',
    testTypes: ['performans-yuk-testi', 'test-otomasyonu'],
    regulations: ['kvkk', 'gdpr'],
  },
  {
    id: 'migration-reconciliation',
    term: 'Veri göçü mutabakatı',
    expansion: 'Data migration reconciliation',
    definition:
      'Eski sistemden yeni sisteme taşınan verinin kayıt sayıları, bakiyeler, faiz tahakkukları ve muhasebe toplamları düzeyinde karşılaştırılarak doğrulanması. Core banking geçişlerinde en kritik test faaliyetlerinden biridir.',
    testTypes: ['core-banking-testleri'],
    regulations: ['bddk-bilgi-sistemleri', 'dora'],
  },
  {
    id: 'parametric-product-testing',
    term: 'Parametrik ürün testi',
    expansion: 'Parametric product testing',
    definition:
      'Faiz oranı, ücret, vade, limit gibi parametrelerle konfigüre edilen bankacılık ürünlerinin bu parametre kombinasyonları üzerinden sistematik olarak test edilmesi. Sınır değer ve karar tablosu teknikleri sık kullanılır.',
    testTypes: ['core-banking-testleri', 'test-otomasyonu'],
    regulations: ['istqb'],
  },
  {
    id: 'core-banking',
    term: 'Core banking',
    expansion: 'Çekirdek bankacılık',
    definition:
      'Mevduat, kredi, hesap yönetimi, faiz hesaplama ve muhasebe gibi temel bankacılık işlemlerini yürüten merkezi sistem. Kanallar ve entegrasyonlar bu sisteme bağlı olduğundan değişiklikleri geniş bir etki alanına sahiptir.',
    testTypes: ['core-banking-testleri', 'performans-yuk-testi'],
    regulations: ['bddk-bilgi-sistemleri', 'dora'],
  },
  {
    id: 'iso-20022',
    term: 'ISO 20022',
    expansion: '',
    definition:
      'Finansal mesajlaşma için ortak bir veri sözlüğü ve XML tabanlı mesaj yapıları tanımlayan uluslararası standart; pain, pacs ve camt mesaj aileleri örnektir. Test tarafında şema doğrulaması, alan eşleştirmesi ve zenginleştirilmiş verinin uçtan uca korunması önemlidir.',
    testTypes: ['core-banking-testleri', 'api-acik-bankacilik-testi'],
    regulations: ['iso-20022'],
  },
  {
    id: 'traceability',
    term: 'İzlenebilirlik',
    expansion: 'Traceability',
    definition:
      'Gereksinimler, riskler, test senaryoları, test koşumları ve hatalar arasındaki bağlantıların kayıt altında tutulması. Denetimde bir gereksinimin nasıl test edildiğini ve sonucunu göstermenin temelidir.',
    testTypes: ['test-analizi-kalite-metrikleri'],
    regulations: ['iso-29119', 'dora', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'defect-escape-rate',
    term: 'Hata kaçış oranı',
    expansion: 'Defect escape rate',
    definition:
      'Belirli bir dönemde canlı ortamda bulunan hataların, test ve canlı ortamda bulunan toplam hatalara oranı. Test sürecinin etkinliğini izlemek için kullanılır; tanımın kurum içinde tutarlı uygulanması karşılaştırma için gereklidir.',
    testTypes: ['test-analizi-kalite-metrikleri'],
    regulations: ['iso-29119'],
  },
  {
    id: 'mttr',
    term: 'MTTR',
    expansion: 'Mean Time to Restore / Recover',
    definition:
      'Bir arıza veya olay sonrasında hizmetin yeniden kullanılabilir hale gelmesi için geçen ortalama süre. Kısaltma bazı kaynaklarda “onarım” anlamında da kullanıldığından, raporlamada hangi tanımın esas alındığı belirtilmelidir.',
    testTypes: ['test-analizi-kalite-metrikleri', 'ddos-dayaniklilik-testi'],
    regulations: ['dora'],
  },
];
