export default {
  intro: [
    'Bankacılıkta test stratejisi, “her şeyi test etmek” yerine hatanın müşteriye, kuruma ve regülasyona etkisine göre nereye ne kadar emek harcanacağına karar vermekle başlar. Ödeme akışındaki bir hata ile bir kampanya sayfasındaki yazım hatası aynı öncelikte ele alınamaz. Bu sayfadaki yaklaşım; risk bazlı önceliklendirme, testin yaşam döngüsünde erkene çekilmesi, CI/CD hattına entegre otomasyon ve disiplinli test verisi yönetimi olmak üzere dört temel üzerine kuruludur.',
    'Anlatılanlar tek bir kuruma özgü bir reçete değil, bankacılık ve fintech projelerinde genel kabul gören uygulamaların özetidir. Kurumun büyüklüğü, mimarisi, dış hizmet yapısı ve tabi olduğu düzenlemeler bu çerçevenin nasıl uyarlanacağını belirler. Regülasyona ilişkin ifadeler bilgilendirme amaçlıdır; yükümlülükler için ilgili düzenlemenin güncel metni ve kurumun uyum birimi esas alınmalıdır.',
  ],
  pillars: [
    {
      id: 'risk-bazli',
      title: 'Risk Bazlı Test',
      icon: 'Target',
      summary:
        'Test kapsamını ve derinliğini, olası bir hatanın etkisi ve gerçekleşme olasılığına göre belirlemek.',
      paragraphs: [
        'Risk bazlı test, her fonksiyonu iki soruyla değerlendirir: Bu alanda hata çıkarsa sonucu ne olur ve bu alanda hata çıkma olasılığı ne kadardır? Etki; finansal kayıp, müşteri mağduriyeti, regülasyon ihlali ve itibar kaybı gibi boyutlarla, olasılık ise değişikliğin büyüklüğü, kodun karmaşıklığı, entegrasyon sayısı ve geçmiş hata yoğunluğu ile ölçülür.',
        'Bu değerlendirmenin çıktısı, hangi alanın hangi test türleriyle ve hangi derinlikte test edileceğini gösteren bir önceliklendirmedir. Yüksek riskli alanlarda uçtan uca senaryolar, negatif testler, performans ve güvenlik testleri birlikte planlanır; düşük riskli alanlarda ise hafif bir regresyon kontrolü yeterli olabilir. Risk değerlendirmesi her sürümde güncellenmeli, üretimde yaşanan olaylar değerlendirmeye geri beslenmelidir.',
        'Risk bazlı yaklaşımın bankacılıkta ek bir faydası, regülasyon beklentileriyle doğal olarak örtüşmesidir. BDDK bilgi sistemleri düzenlemesi ve DORA gibi çerçeveler, kurumların bilgi ve iletişim teknolojisi risklerini tanımlayıp bunlara orantılı kontroller kurmasını bekler. Test kapsamının risk envanterine bağlı olması, denetimde “neden bu alanı bu derinlikte test ettiniz” sorusuna belgelenmiş bir yanıt verilmesini sağlar.',
      ],
      bullets: [
        'Risk envanterini iş birimleri, uyum ve operasyon ekipleriyle birlikte oluşturun',
        'Her gereksinimi ve değişikliği bir risk seviyesiyle etiketleyin',
        'Test kapsamını ve çıkış kriterlerini risk seviyesine bağlayın',
        'Canlıda yaşanan olayları ve kaçan hataları risk değerlendirmesine geri besleyin',
        'Risk kararlarını denetimde gösterilebilecek biçimde kayıt altına alın',
        'Düşük riskli alanlarda bilinçli olarak kapsamı daraltmayı ve bunun gerekçesini yazmayı ihmal etmeyin',
      ],
    },
    {
      id: 'shift-left',
      title: 'Shift-Left',
      icon: 'ArrowLeftToLine',
      summary:
        'Kalite faaliyetlerini geliştirme sonrasından gereksinim ve tasarım aşamasına çekerek hataları daha ucuz oldukları noktada yakalamak.',
      paragraphs: [
        'Shift-left yaklaşımında test, kod yazıldıktan sonra başlayan bir aşama değildir. Gereksinimler yazılırken belirsizlik, eksiklik ve test edilebilirlik açısından incelenir; kabul kriterleri geliştirme başlamadan netleştirilir. Bankacılıkta özellikle ücret, limit, faiz ve yetki kuralları gibi iş kurallarında erken yapılan bu inceleme, geç fark edilen yorum farklarını önler.',
        'Geliştirme sırasında birim testleri, statik kod analizi, güvenlik taramaları ve API sözleşme testleri geliştiricinin günlük akışına dahil edilir. Böylece test ekibi zamanını tekrarlayan kontrollere değil, keşif testlerine, iş senaryolarına ve risk analizine ayırabilir. Shift-left, sürüm öncesi kabul testlerini ortadan kaldırmaz; onların daha az sürprizle geçmesini sağlar.',
        'Bu yaklaşımın işlemesi için organizasyonel destek gerekir. Test mühendisleri gereksinim ve tasarım toplantılarında söz sahibi olmalı, geliştiriciler ise test yazmayı teslimatın doğal bir parçası olarak görmelidir. Kalite metrikleri de yalnızca bulunan hata sayısıyla değil, hataların hangi aşamada yakalandığıyla izlenmelidir; hataların giderek daha erken aşamalarda yakalanması, yaklaşımın işlediğinin en açık göstergesidir.',
      ],
      bullets: [
        'Gereksinimleri geliştirme öncesinde test edilebilirlik açısından gözden geçirin',
        'Kabul kriterlerini örnek verilerle ve ölçülebilir biçimde yazın',
        'Güvenlik ve erişilebilirlik gereksinimlerini tasarım aşamasında tanımlayın',
        'API sözleşmelerini önce tanımlayıp tüketici ve sağlayıcı taraflarını buna göre test edin',
        'Test ekibini sprint planlama ve tasarım incelemelerine dahil edin',
        'Hataların hangi aşamada yakalandığını ölçün ve sürümler arasında karşılaştırın',
      ],
    },
    {
      id: 'ci-cd',
      title: 'CI/CD’ye Entegre Otomasyon',
      icon: 'Workflow',
      summary:
        'Otomatik testleri teslimat hattının her aşamasına yerleştirerek her değişikliğin aynı kalite kapılarından geçmesini sağlamak.',
      paragraphs: [
        'Otomasyonun değeri, testlerin var olmasından değil, her değişiklikte güvenilir biçimde koşmasından gelir. Teslimat hattına yerleştirilen testler, değişikliğin ilerlediği her aşamada farklı bir soruyu yanıtlar: Kod derleniyor mu, bileşenler birbirine uyuyor mu, iş akışları çalışıyor mu, sistem yük altında ayakta kalıyor mu?',
        'Hızlı ve kararlı testler hattın başına, uzun süren ve ortam gerektiren testler sonraki aşamalara konur. Her aşamanın açık bir geçiş kriteri olmalı; kırmızıya dönen bir kalite kapısı gerekçesi kayıt altına alınmadan atlanmamalıdır. Kararsız (flaky) testler güveni hızla aşındırdığı için ayrı izlenmeli ve öncelikle giderilmelidir. Hattın ürettiği test sonuçları ve onay kayıtları, değişiklik yönetimi denetimlerinde doğrudan kanıt olarak kullanılabilir.',
        'Bankacılıkta sık karşılaşılan bir zorluk, çekirdek bankacılık, kart sistemleri ve dış servisler gibi her zaman erişilemeyen bağımlılıklardır. Bu bağımlılıklar için servis sanallaştırma veya taklit (mock) servisler erken aşamalarda kullanılabilir; ancak gerçek entegrasyonun staging veya UAT aşamasında mutlaka doğrulanması gerekir. Otomasyon kapsamı genişlerken bakım maliyeti de artar; bu nedenle hangi senaryonun otomatikleştirileceği yine risk ve tekrar sıklığına göre seçilmelidir.',
      ],
      bullets: [
        'Her aşama için yazılı ve ölçülebilir bir geçiş kriteri belirleyin',
        'Kararsız testleri ayrı etiketleyin ve düzeltilene kadar izleyin',
        'Test sonuçlarını sürüm ve değişiklik kaydıyla ilişkilendirin',
        'Kalite kapısının atlanmasını istisna olarak onaya bağlayın',
        'Erişilemeyen bağımlılıklar için servis sanallaştırmayı erken aşamalarla sınırlı tutun',
        'Otomasyon setinin bakım maliyetini ve kararsız test oranını düzenli raporlayın',
      ],
      pipeline: [
        {
          stage: 'Commit',
          tests: ['Birim testleri', 'Statik kod analizi', 'Bağımlılık ve gizli anahtar taraması'],
        },
        {
          stage: 'Build',
          tests: ['Bileşen ve entegrasyon testleri', 'API sözleşme testleri', 'Kapsayıcı imaj güvenlik taraması'],
        },
        {
          stage: 'Test ortamı',
          tests: [
            'Otomatik regresyon (web, mobil, API)',
            'Otomatik erişilebilirlik kontrolleri',
            'Dinamik uygulama güvenlik taraması',
          ],
        },
        {
          stage: 'Staging / UAT',
          tests: [
            'Uçtan uca iş senaryoları ve kullanıcı kabul testleri',
            'Performans ve yük testleri',
            'Gerçek cihazlarda mobil testler',
            'Geri dönüş (rollback) provası',
          ],
        },
        {
          stage: 'Canlı',
          tests: ['Duman (smoke) testleri', 'Sentetik izleme', 'Kademeli açılışta hata ve performans takibi'],
        },
      ],
    },
    {
      id: 'test-verisi',
      title: 'Test Ortamı ve Test Verisi Yönetimi',
      icon: 'Database',
      summary:
        'Canlıya yeterince benzeyen ancak gerçek müşteri verisini korumasız bırakmayan test ortamları ve veri setleri kurmak.',
      paragraphs: [
        'Bankacılık testlerinin önemli bir kısmı, kod hatası yerine ortam ve veri sorunları nedeniyle gecikir ya da yanıltıcı sonuç verir. Test ortamı canlıdan yapılandırma, sürüm veya entegrasyon açısından farklıysa, testte geçen bir değişiklik canlıda başarısız olabilir. Bu nedenle ortam eşdeğerliği (environment parity) sürümler, parametreler ve dış bağlantılar düzeyinde düzenli olarak kontrol edilmelidir.',
        'Canlı verinin test ortamına kopyalanması hem KVKK hem de bankacılık sırrı açısından ciddi bir risk taşır; test ortamları çoğu zaman canlı kadar sıkı korunmaz. Tercih edilen yol; kural setine dayalı sentetik veri üretimi, zorunlu durumlarda ise geri döndürülemez maskeleme ve anonimleştirmedir. Maskelenmiş verinin iş kurallarını bozmadan tutarlı kalması (ör. aynı müşterinin tüm sistemlerde aynı sahte kimliği taşıması) ayrıca tasarlanmalıdır.',
        'Test verisinin yönetimi, ortamların paylaşımıyla da ilgilidir. Aynı test ortamını kullanan birden fazla ekip, birbirinin verisini değiştirerek yanıltıcı sonuçlara yol açabilir. Test verisinin talep üzerine üretilmesi, her koşunun kendi verisini hazırlayıp sonunda temizlemesi ve ortamların rezervasyon düzeniyle kullanılması bu sorunu azaltır. Performans testleri için ise veri hacminin ve dağılımının canlıya yakın olması, sonuçların anlamlı olmasının ön koşuludur.',
      ],
      bullets: [
        'Test ortamlarının sürüm, parametre ve entegrasyon envanterini canlıyla karşılaştırarak tutun',
        'Sentetik veriyi öncelikli seçenek yapın; canlı veri kullanımını gerekçe ve onaya bağlayın',
        'Maskeleme ve anonimleştirmeyi sistemler arası tutarlılığı koruyacak biçimde uygulayın',
        'Test ortamlarında erişim yetkilerini ve kayıtları düzenli gözden geçirin',
        'Test verisinin saklama süresini tanımlayın ve süresi dolan veriyi silin',
        'Dış hizmet sağlayıcılarının test ortamlarına erişimini sözleşme ve teknik kontrollerle sınırlayın',
      ],
    },
  ],
  riskMatrix: {
    note: 'Aşağıdaki tablo genel bir örnektir; etki ve olasılık seviyeleri her kurumun mimarisine, değişiklik sıklığına ve geçmiş olay verisine göre yeniden değerlendirilmelidir. Etki sütunu bir hatanın müşteri, finansal sonuç ve regülasyon üzerindeki olası sonucunu; olasılık sütunu ise değişiklik sıklığı, entegrasyon yoğunluğu ve karmaşıklığa bağlı hata çıkma ihtimalini ifade eder. Odak sütunu, o alanda test planlamasına başlarken ilk ele alınması önerilen konuları özetler.',
    rows: [
      {
        area: 'Ödeme / EFT / FAST',
        impact: 'Yüksek',
        likelihood: 'Orta',
        focus: 'İşlem bütünlüğü, mükerrer işlem önleme, mutabakat, kesinti sonrası tutarlılık, yoğun saatlerde performans',
      },
      {
        area: 'Kart işlemleri',
        impact: 'Yüksek',
        likelihood: 'Orta',
        focus: 'Provizyon ve iptal/iade akışları, limit kontrolleri, dolandırıcılık kuralları, kart verisinin korunması',
      },
      {
        area: 'Müşteri onboarding / KYC',
        impact: 'Yüksek',
        likelihood: 'Orta',
        focus: 'Kimlik doğrulama adımları, dış servis entegrasyonları, hata ve yarıda kalma senaryoları, kişisel verinin korunması',
      },
      {
        area: 'Mobil / internet bankacılığı girişi ve SCA',
        impact: 'Yüksek',
        likelihood: 'Yüksek',
        focus: 'Güçlü kimlik doğrulama akışları, oturum yönetimi, cihaz ve işletim sistemi çeşitliliği, erişilebilirlik, yük altında giriş',
      },
      {
        area: 'Açık bankacılık API',
        impact: 'Yüksek',
        likelihood: 'Orta',
        focus: 'Standart uyumluluğu, rıza yaşam döngüsü, yetkilendirme, hız sınırlama, üçüncü taraf hata senaryoları',
      },
      {
        area: 'Raporlama / muhasebe',
        impact: 'Orta',
        likelihood: 'Orta',
        focus: 'Hesaplama doğruluğu, gün sonu ve dönem sonu işlemleri, veri tutarlılığı, düzenleyici raporların doğruluğu',
      },
    ],
  },
  releaseChecklist: [
    {
      group: 'Fonksiyonel',
      items: [
        'Değişikliğin kabul kriterleri karşılandı ve iş birimi onayı alındı',
        'Etkilenen alanların regresyon testleri koşuldu, açık kritik hata yok',
        'Negatif ve sınır değer senaryoları test edildi',
        'Uçtan uca iş akışları entegre sistemlerle birlikte doğrulandı',
      ],
    },
    {
      group: 'Performans ve dayanıklılık',
      items: [
        'Beklenen yük altında yanıt süreleri ve hata oranları kabul sınırları içinde',
        'Önceki sürümle karşılaştırmalı performans sonuçları incelendi',
        'Bağımlı servislerin yavaşlaması veya kesilmesi senaryoları test edildi',
        'Kapasite ve ölçekleme ayarları canlı ortam için gözden geçirildi',
      ],
    },
    {
      group: 'Güvenlik',
      items: [
        'Statik ve dinamik güvenlik taramalarında açık kritik veya yüksek bulgu yok',
        'Yetkilendirme ve erişim kontrolleri rol bazında doğrulandı',
        'Kapsamlı değişikliklerde sızma testi ihtiyacı değerlendirildi',
        'Gizli anahtarlar ve yapılandırma değerleri kod deposu dışında tutuluyor',
      ],
    },
    {
      group: 'Erişilebilirlik',
      items: [
        'Değişen ekranlar otomatik erişilebilirlik kontrolünden geçti',
        'Kritik akışlar ekran okuyucu ve klavye ile tamamlanabiliyor',
        'Renk kontrastı, odak sırası ve form etiketleri kontrol edildi',
        'Mobil uygulamada yazı boyutu büyütme ve erişilebilirlik ayarları test edildi',
      ],
    },
    {
      group: 'Veri ve uyum',
      items: [
        'Testlerde kullanılan veri sentetik veya maskelenmiş; canlı veri kullanımı varsa onaylı',
        'Yeni veya değişen kişisel veri işleme faaliyetleri uyum birimince değerlendirildi',
        'İlgili regülasyon gereksinimlerinin test kanıtları kayıt altında',
        'Değişiklik kaydı, test sonuçları ve onaylar birbirine bağlı ve izlenebilir',
      ],
    },
    {
      group: 'Operasyon ve geri dönüş',
      items: [
        'Geri dönüş (rollback) planı hazır ve prova edildi',
        'İzleme, alarm ve kayıt ayarları yeni işlevleri kapsıyor',
        'Canlıya alım sonrası duman testleri tanımlı ve sorumlusu belli',
        'Operasyon ve destek ekipleri değişiklikten haberdar edildi',
        'Veritabanı ve yapılandırma değişiklikleri geri alınabilir biçimde hazırlandı',
      ],
    },
  ],
  relatedTestTypes: [
    'test-analizi-kalite-metrikleri',
    'test-otomasyonu',
    'performans-yuk-testi',
    'guvenlik-testi',
    'erisilebilirlik-testi',
    'api-acik-bankacilik-testi',
    'mobil-uygulama-testi',
    'core-banking-testleri',
  ],
};
