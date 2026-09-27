export default {
  slug: 'test-analizi-kalite-metrikleri',
  order: 9,
  title: 'Test Analizi ve Kalite Metrikleri',
  titleEn: 'Test Analysis & Quality Metrics',
  icon: 'BarChart3',
  summary:
    'Gereksinimleri test edilebilir hale getiren analiz çalışmasını, gereksinim-test-hata izlenebilirliğini ve yönetime anlamlı kalite metriklerini bir araya getiren disiplin.',
  product: 'analyzer',
  topic: 'diger',
  what: [
    'Test analizi, test yazılmadan önce neyin test edileceğini belirleme çalışmasıdır. Gereksinimler belirsizlik, eksiklik, çelişki ve test edilebilirlik açısından gözden geçirilir; bu statik test faaliyeti, hataları henüz kod yazılmadan yakalar. Bankacılıkta “uygun müşteriye”, “makul sürede” gibi ölçülemeyen ifadeler hem yanlış geliştirmeye hem de denetimde savunulamayan test kapsamına yol açar.',
    'İzlenebilirlik, her gereksinimin hangi testlerle doğrulandığını ve hangi hataların hangi gereksinime bağlı olduğunu gösterir. Bu bağ, bir regülasyon maddesinin veya iş kuralının test edildiğini kanıtlamanın en doğrudan yoludur. ISO/IEC/IEEE 29119 test süreçleri ve dokümantasyonu için, ISTQB ise test analizi teknikleri ve terminoloji için yaygın kabul gören referanslardır.',
    'Temel metriklerin anlamı kısaca şöyledir: hata yoğunluğu, bulunan hataların ürün büyüklüğüne oranıdır; hata kaçış oranı, canlıda bulunan hataların toplam hatalara oranıdır; gereksinim kapsamı, en az bir testle doğrulanmış gereksinimlerin oranıdır. Test etkinliği test aşamasında yakalanan hataların payını, MTTR bir hatanın tespitinden çözümüne kadar geçen ortalama süreyi, kararsız test oranı aynı kodda farklı sonuç veren testlerin payını, teslim süresi ise bir değişikliğin onaydan canlıya ulaşma süresini gösterir.',
    'Kalite metrikleri bu yapının üzerine kurulur. İyi seçilmiş metrikler yönetime sürüm riskini, test sürecinin etkinliğini ve iyileşme eğilimini gösterir; kötü seçilmiş metrikler ise yalnızca faaliyet hacmini ölçer ve yanlış güven yaratır. Amaç çok sayıda gösterge değil, karar almayı destekleyen az sayıda doğru göstergedir.',
  ],
  risks: [
    'Belirsiz gereksinimler nedeniyle geliştirme ve test ekiplerinin aynı kuralı farklı yorumlaması.',
    'Düzenleyici bir gereksinimin hiçbir testle ilişkilendirilmemiş olması ve bunun denetimde ortaya çıkması.',
    'Hataların geç, en pahalı aşamada, hatta canlıda müşteri tarafından bulunması.',
    'Yönetimin, faaliyet hacmini gösteren metriklere bakarak sürüm riskini olduğundan düşük algılaması.',
    'Kararsız (flaky) testler nedeniyle otomasyon sonuçlarına güvenin kaybolması ve gerçek hataların gözden kaçması.',
    'Değişiklik etkisinin analiz edilememesi nedeniyle regresyon kapsamının ya gereksiz geniş ya da eksik tutulması.',
  ],
  regulations: [
    {
      slug: 'iso-29119',
      note: 'Test süreçleri, test dokümantasyonu ve test teknikleri için uluslararası çerçeve sunar; izlenebilirlik ve raporlama yapısını destekler.',
    },
    {
      slug: 'istqb',
      note: 'Statik test, test analizi ve tasarım teknikleri ile metrik terminolojisi için ortak dil sağlar.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Değişiklik yönetimi ve test süreçlerinin kanıtlanabilirliği, izlenebilirlik ve düzenli raporlamayla desteklenir.',
    },
    {
      slug: 'dora',
      note: 'Dayanıklılık testi programının sonuçlarının yönetim organına raporlanması ve iyileştirmelerin takibi anlamlı metrikler gerektirir.',
    },
    {
      slug: 'iso-27001',
      note: 'Güvenlik gereksinimlerinin test edildiğinin ve bulguların izlendiğinin gösterilmesinde izlenebilirlik kayıtları kanıt işlevi görür.',
    },
  ],
  approach: [
    {
      title: 'Gereksinimleri statik olarak gözden geçirin',
      text: 'Her gereksinimi açıklık, tamlık, tutarlılık ve ölçülebilirlik açısından inceleyin; belirsiz ifadeleri kabul kriterine dönüştürün.',
    },
    {
      title: 'Test koşullarını türetin',
      text: 'Denklik sınıfları, sınır değer analizi, karar tabloları ve durum geçişi gibi tekniklerle gereksinimlerden test koşulları çıkarın.',
    },
    {
      title: 'İzlenebilirlik matrisini kurun',
      text: 'Gereksinim, test senaryosu, test koşumu ve hata kayıtlarını tek bir zincirde ilişkilendirin; düzenleyici gereksinimleri ayrıca etiketleyin.',
    },
    {
      title: 'Metrik setini karar sorularından seçin',
      text: 'Önce “Bu sürüm canlıya çıkabilir mi?”, “Test sürecimiz hataları yakalıyor mu?” gibi soruları belirleyin, metrikleri bu sorulara yanıt verecek şekilde seçin.',
    },
    {
      title: 'Veriyi otomatik toplayın',
      text: 'Metrikleri test yönetim, hata takip ve CI/CD sistemlerinden otomatik üretin; elle derlenen tablolara bağımlılığı azaltın.',
    },
    {
      title: 'Eğilimle raporlayın',
      text: 'Tek bir sürümün değerinden çok sürümler arası eğilimi gösterin ve her metriğin yanında yorum ile aksiyon önerisi verin.',
    },
  ],
  tools: [
    {
      category: 'Gereksinim analizi araçları',
      text: 'Gereksinim metinlerindeki belirsiz, eksik veya test edilemez ifadeleri tespit ederek gözden geçirmeyi hızlandırır.',
    },
    {
      category: 'Test yönetim sistemleri',
      text: 'Test senaryolarını, koşum sonuçlarını ve gereksinim bağlantılarını tek yerde tutarak izlenebilirlik sağlar.',
    },
    {
      category: 'Hata takip sistemleri',
      text: 'Hataların yaşam döngüsünü, kök neden ve bulunduğu aşama bilgisini kaydederek metriklere veri sağlar.',
    },
    {
      category: 'Kalite gösterge panelleri',
      text: 'Farklı kaynaklardan gelen test ve hata verisini birleştirip eğilim ve risk görünümü üretir.',
    },
    {
      category: 'CI/CD analitiği',
      text: 'Otomasyon koşumlarından kararsız test oranı, koşum süresi ve değişiklik teslim süresi gibi verileri çıkarır.',
    },
  ],
  bestPractices: [
    'Gereksinim gözden geçirmesine test ekibini tasarım aşamasında dahil edin; statik testi takvime ayrı bir adım olarak koyun.',
    'Hata kaçış oranı, gereksinim kapsamı, hata yoğunluğu, test etkinliği, hata çözüm süresi (MTTR), kararsız test oranı ve teslim süresi gibi sonuç odaklı metrikleri tercih edin.',
    'Her metriğin tanımını, formülünü ve veri kaynağını yazılı hale getirin; sürümler arasında tanımı değiştirmeyin.',
    'Yönetime giden raporda az sayıda metrik, net bir risk yorumu ve karar önerisi sunun.',
    'Düzenleyicilere ve iç denetime yönelik raporlarda metriği izlenebilirlik kanıtıyla (hangi gereksinim, hangi test, hangi sonuç) destekleyin.',
    'Metrikleri ekip performansını cezalandırmak için değil süreç iyileştirmek için kullanın; aksi halde veri kalitesi bozulur.',
  ],
  mistakes: [
    'Yazılan test sayısı, koşulan test sayısı veya bulunan hata sayısı gibi gösteriş metriklerini (vanity metrics) kalite göstergesi saymak.',
    'Kod kapsamı yüzdesini tek başına kalite hedefi yapmak ve doğrulama içermeyen testlerle bu hedefi şişirmek.',
    'İzlenebilirliği denetimden hemen önce geriye dönük olarak elle kurmak.',
    'Kararsız testleri yeniden koşup geçti sayarak otomasyon sonuçlarının güvenilirliğini gizlemek.',
    'Metrikleri bağlam ve eğilim olmadan tek bir sayı olarak raporlamak.',
  ],
};
