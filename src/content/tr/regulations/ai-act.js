export default {
  slug: 'ai-act',
  order: 10.5,
  title: 'AB Yapay Zekâ Yasası (AI Act)',
  fullTitle: 'Yapay Zekâ Yasası — Tüzük (AB) 2024/1689',
  region: 'intl',
  kind: 'regulation',
  summary:
    'Yapay zekâ sistemlerini risk düzeyine göre sınıflandıran ve gerçek kişilerin kredi skorlaması gibi yüksek riskli kullanımlar için test, veri yönetişimi, dokümantasyon ve insan gözetimi yükümlülükleri getiren AB tüzüğü.',
  topic: 'ai',
  keyFacts: [
    { label: 'Resmi numara', value: 'Tüzük (AB) 2024/1689' },
    { label: 'Yürürlüğe giriş', value: '1 Ağustos 2024' },
    { label: 'Uygulanma', value: 'Kademeli; güncel takvim için resmi metne başvurun' },
  ],
  scope: [
    'AB Yapay Zekâ Yasası, yapay zekâ sistemlerini oluşturdukları riske göre ele alan risk temelli bir düzenlemedir. Bazı uygulamalar yasaklanmış, belirli kullanım alanları yüksek riskli olarak sınıflandırılmış, bir kısım sistem için ise şeffaflık yükümlülükleri öngörülmüştür; genel amaçlı yapay zekâ modellerine ilişkin ayrı kurallar da bulunur. Tüzük, sistemi geliştiren sağlayıcılar kadar onu kendi faaliyetinde kullanan kurumlara (deployer) da yükümlülük getirir ve AB pazarına sunulan veya AB’de kullanılan sistemler bakımından AB dışındaki kuruluşları da etkileyebilir.',
    'Bankacılık açısından en doğrudan hüküm, gerçek kişilerin kredi değerliliğini değerlendirmek veya kredi skorunu belirlemek için kullanılan sistemlerin yüksek riskli sayılmasıdır (Ek III, 5(b)); finansal dolandırıcılığın tespiti amacıyla kullanılan sistemler bu maddenin dışında tutulmuştur. Yüksek riskli sistemler için risk yönetimi (Madde 9), veri ve veri yönetişimi, teknik dokümantasyon, kayıt tutma (logging), kullanıcılara yönelik şeffaflık ve bilgilendirme, insan gözetimi ile doğruluk, sağlamlık ve siber güvenlik gereklilikleri tanımlanmıştır.',
    'Test ekipleri için kritik nokta, Madde 9’daki risk yönetimi sisteminin testi açıkça içermesidir. Yüksek riskli sistemler, piyasaya sürülmeden veya hizmete alınmadan önce, önceden tanımlanmış metrikler ve olasılıksal eşiklere göre test edilmelidir. Yükümlülükler farklı tarihlerde kademeli olarak uygulanmaya başladığından ve ayrıntılar uygulama rehberleri ile standartlarla tamamlandığından, kurumların güncel takvimi ve metni EUR-Lex ile yetkili otoritelerin açıklamalarından takip etmesi gerekir.',
    'Pratikte bu, model testinin tek seferlik bir doğrulama değil, yaşam döngüsü boyunca süren bir faaliyet olarak ele alınmasını gerektirir. Kabul metrikleri ve eşikler test öncesinde belgelenmeli; veri kalitesi, yanlılık, sağlamlık ve insan gözetimi senaryoları test planında yer almalı; sonuçlar teknik dokümantasyona izlenebilir biçimde aktarılmalıdır. Model yeniden eğitildiğinde veya kullanım amacı değiştiğinde testlerin tekrarlanması ve canlıdaki başarımın izlenmesi de aynı yaklaşımın parçasıdır. Müşteriyle doğrudan etkileşen sohbet botları gibi sistemler yüksek riskli sayılmasa da şeffaflık yükümlülükleri açısından ayrıca değerlendirilmelidir.',
    'Türkiye’de faaliyet gösteren bankalar için tüzük doğrudan bağlayıcı olmayabilir; ancak AB’de hizmet sunan grup şirketleri, AB’li müşteriler veya AB pazarına sunulan sistemler bakımından kapsam içine girilebilir. Kapsamın her kurum için ayrıca değerlendirilmesi ve hukuki görüş alınması önerilir. Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır ve hukuki danışmanlık niteliği taşımaz.',
  ],
  expects: [
    'Yüksek riskli sistemin tüm yaşam döngüsünü kapsayan, belgelenmiş ve düzenli güncellenen bir risk yönetimi sistemi',
    'Piyasaya sürülmeden önce ve gerektiğinde geliştirme boyunca, önceden tanımlanmış metrikler ve olasılıksal eşiklere göre test',
    'Eğitim, doğrulama ve test veri setleri için kalite, temsil gücü ve olası yanlılık kontrollerini içeren veri yönetişimi',
    'Sistemin amacını, tasarımını, test sonuçlarını ve sınırlamalarını açıklayan teknik dokümantasyon',
    'Sistem davranışının geriye dönük incelenebilmesi için otomatik kayıt tutma',
    'Kararların anlaşılabilmesi ve gerektiğinde müdahale edilebilmesi için etkili insan gözetimi',
    'Uygun düzeyde doğruluk, sağlamlık ve siber güvenlik ile bunların yaşam döngüsü boyunca korunması',
  ],
  testTypes: [
    {
      slug: 'yapay-zeka-model-testi',
      level: 'required',
      why: 'Madde 9, yüksek riskli sistemlerin önceden tanımlanmış metrikler ve olasılıksal eşiklere göre test edilmesini açıkça ister.',
    },
    {
      slug: 'veri-raporlama-testi',
      level: 'expected',
      why: 'Veri yönetişimi beklentisi, eğitim ve test veri setlerinin kalite ve temsil kontrolleriyle karşılanır.',
    },
    {
      slug: 'guvenlik-testi',
      level: 'supporting',
      why: 'Siber güvenlik gerekliliği, modele yönelik manipülasyon ve saldırı senaryolarının test edilmesiyle desteklenir.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Test sonuçlarının teknik dokümantasyona izlenebilir biçimde aktarılmasını ve sürümler arası karşılaştırmayı kolaylaştırır.',
    },
  ],
  officialSource: {
    label: 'Avrupa Parlamentosu ve Konseyi — Tüzük (AB) 2024/1689 (Yapay Zekâ Yasası)',
    url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
  },
};
