export default {
  slug: 'yapay-zeka-model-testi',
  order: 14,
  title: 'Yapay Zekâ ve Makine Öğrenmesi Model Testi',
  titleEn: 'AI & Machine Learning Model Testing',
  icon: 'BrainCircuit',
  summary:
    'Kredi skorlama, dolandırıcılık tespiti ve sohbet botu gibi yapay zekâ modellerinin doğruluğunu, adilliğini, sağlamlığını ve açıklanabilirliğini canlıya almadan önce ve canlıdayken sistematik olarak doğrular.',
  product: null,
  topic: 'ai',
  what: [
    'Yapay zekâ ve makine öğrenmesi model testi, bir modelin eğitildiği veriden canlıdaki davranışına kadar beklenen kalitede, adil ve güvenli çalıştığının doğrulanmasıdır. Klasik yazılım testinden farkı, modelin davranışının kodla değil veriyle belirlenmesi ve sonuçların deterministik değil olasılıksal olmasıdır. Bu nedenle “doğru çıktı” tek bir beklenen değerle değil, önceden tanımlanmış metrikler ve kabul eşikleriyle ölçülür.',
    'Bankacılıkta yapay zekâ; kredi skorlama ve limit belirleme, dolandırıcılık ve anormal işlem tespiti, müşteri segmentasyonu, belge okuma ve müşteri hizmetlerindeki sohbet botları gibi doğrudan müşteriyi etkileyen kararlarda kullanılır. Hatalı bir model, kredi başvurularının haksız yere reddedilmesine, gerçek dolandırıcılığın kaçırılmasına veya müşteriye yanlış bilgi verilmesine yol açabilir. Bu kararların çoğu hem müşteri hakları hem de denetim açısından açıklanabilir olmak zorundadır.',
    'AB Yapay Zekâ Yasası (Tüzük (AB) 2024/1689), gerçek kişilerin kredi değerliliğinin değerlendirilmesi veya kredi skorunun belirlenmesi amacıyla kullanılan sistemleri yüksek riskli olarak sınıflandırır (Ek III, 5(b)); finansal dolandırıcılığın tespiti amacıyla kullanılan sistemler bu maddenin dışında tutulmuştur. Yüksek riskli sistemler için Madde 9’daki risk yönetimi sistemi, testlerin piyasaya sürülmeden önce, önceden tanımlanmış metrikler ve olasılıksal eşiklere göre yapılmasını ister. Yükümlülükler kademeli olarak uygulamaya girdiğinden, kurumların güncel takvimi resmi metinden ve yetkili otoritelerin açıklamalarından takip etmesi gerekir.',
  ],
  risks: [
    'Belirli müşteri gruplarını sistematik olarak dezavantajlı duruma düşüren yanlı (biased) kredi kararları',
    'Eğitim verisindeki eksiklik, hata veya temsil sorunlarının modele taşınması',
    'Canlıdaki veri dağılımı değiştikçe model başarımının fark edilmeden düşmesi (drift)',
    'Açıklanamayan kararlar nedeniyle müşteri şikâyetleri ve denetim bulgularına cevap verilememesi',
    'Sohbet botlarının gerçek dışı bilgi üretmesi (halüsinasyon) veya yetkisiz işlem ve bilgi ifşasına yönlendirilmesi (prompt injection)',
    'Kötü niyetli veya sınır durumdaki girdilerle modelin kolayca yanıltılması',
    'Model güncellemelerinin önceki sürüme göre kötüleşmeyi tespit etmeden canlıya alınması',
  ],
  regulations: [
    {
      slug: 'ai-act',
      note: 'Gerçek kişilerin kredi skorlaması yüksek riskli sayılır; risk yönetimi kapsamında önceden tanımlanmış metriklere göre test, veri yönetişimi ve insan gözetimi beklenir.',
    },
    {
      slug: 'kvkk',
      note: 'Model eğitimi ve testinde kullanılan kişisel verinin amaçla sınırlı, ölçülü ve güvenli işlenmesi gerekir.',
    },
    {
      slug: 'gdpr',
      note: 'Yalnızca otomatik işlemeye dayalı ve kişiyi önemli ölçüde etkileyen kararlara ilişkin kurallar, açıklanabilirlik ve insan müdahalesi testlerini doğrudan ilgilendirir.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Bilgi sistemleri değişiklik yönetimi ve test ortamı beklentileri, model sürümlerinin kontrollü biçimde test edilip canlıya alınmasını da kapsar.',
    },
    {
      slug: 'dora',
      note: 'Kritik işlevleri destekleyen model tabanlı sistemler, BİT risk yönetimi ve dayanıklılık testi programının kapsamına girer.',
    },
  ],
  approach: [
    {
      title: 'Kullanım amacını ve risk sınıfını belirleyin',
      text: 'Modelin hangi karar için kullanıldığını, kimleri etkilediğini ve düzenleyici açıdan yüksek riskli sayılıp sayılmadığını baştan netleştirin; test derinliği buna göre belirlenir.',
    },
    {
      title: 'Veri kalitesini modelden önce test edin',
      text: 'Eğitim, doğrulama ve test veri setlerinde eksiklik, tekrar, etiket hatası, temsil dengesizliği ve veri sızıntısı (leakage) kontrollerini yapın.',
    },
    {
      title: 'Metrikleri ve kabul eşiklerini önceden tanımlayın',
      text: 'Doğruluk, kesinlik (precision), duyarlılık (recall), AUC veya hata maliyeti gibi metrikleri ve kabul eşiklerini test başlamadan belgeleyin; eşiği sonuç görüldükten sonra ayarlamayın.',
    },
    {
      title: 'Adillik ve yanlılık testleri yapın',
      text: 'Model başarımını ve onay oranlarını anlamlı müşteri grupları arasında karşılaştırın; dolaylı olarak korunan özellikleri temsil eden değişkenleri (proxy) inceleyin.',
    },
    {
      title: 'Sağlamlık ve güvenliği sınayın',
      text: 'Eksik, aşırı, bozuk veya kötü niyetli girdilerle modelin davranışını test edin; üretken yapay zekâda halüsinasyon, prompt injection ve hassas bilgi ifşası senaryolarını ayrı bir set olarak koşturun.',
    },
    {
      title: 'Açıklanabilirlik ve insan gözetimini doğrulayın',
      text: 'Kararların gerekçesinin anlaşılır biçimde üretilebildiğini, insan onayının ve itirazın süreç içinde gerçekten işlediğini ve modelin gerektiğinde devre dışı bırakılabildiğini test edin.',
    },
    {
      title: 'Canlıda izleyin ve her değişikliği regresyona sokun',
      text: 'Veri ve başarım kaymasını sürekli izleyin; yeniden eğitim veya parametre değişikliklerinde yeni modeli sabit bir referans veri setiyle önceki sürüme karşı karşılaştırın ve sonuçları belgeleyin.',
    },
  ],
  tools: [
    {
      category: 'Veri doğrulama ve profilleme araçları',
      text: 'Veri setlerinin şemasını, dağılımını ve kalite kurallarını otomatik olarak kontrol eder.',
    },
    {
      category: 'Model değerlendirme ve deney takip platformları',
      text: 'Model sürümlerini, eğitim verisini, metrikleri ve karşılaştırmaları izlenebilir biçimde kaydeder.',
    },
    {
      category: 'Adillik ve açıklanabilirlik kütüphaneleri',
      text: 'Grup bazlı başarım farklarını ölçer ve tekil kararlar için özellik katkılarını görünür kılar.',
    },
    {
      category: 'Model izleme (monitoring) araçları',
      text: 'Canlıdaki girdi ve çıktı dağılımlarını izleyerek kayma ve başarım düşüşü için uyarı üretir.',
    },
    {
      category: 'Üretken yapay zekâ değerlendirme ve kırmızı takım araçları',
      text: 'Sohbet botlarını hazır ve özel soru setleriyle, halüsinasyon ve saldırı senaryolarına karşı toplu olarak sınar.',
    },
  ],
  bestPractices: [
    'Test veri setini eğitim sürecinden tamamen ayrı tutun ve modeli seçerken bu sete bakmayın.',
    'Her model için amacı, veri kaynaklarını, metrikleri, bilinen sınırlamaları ve test sonuçlarını içeren bir model dokümantasyonu tutun.',
    'Model, veri ve kodu birlikte sürümleyin; hangi sonucun hangi model ve veriyle üretildiği her zaman geri izlenebilir olsun.',
    'Modeli geliştiren ekipten bağımsız bir doğrulama (model validation) adımı kurun.',
    'Sohbet botlarında ürün, faiz ve ücret gibi bilgileri yalnızca onaylı kaynaklardan yanıtlatın ve bu kuralı testle doğrulayın.',
    'Test verisinde gerçek müşteri verisi yerine maskelenmiş veya sentetik veri kullanın.',
  ],
  mistakes: [
    'Modeli yalnızca tek bir genel doğruluk metriğine bakarak onaylamak',
    'Korunan özellikleri modelden çıkarmanın adilliği tek başına garanti ettiğini varsaymak',
    'Canlıya alınan modeli izlememek ve başarımın zamanla düştüğünü şikâyetlerle öğrenmek',
    'Üretken yapay zekâ çıktılarını birkaç örnek soruyla elle deneyip yeterli saymak',
    'Yeniden eğitilen modeli “aynı model” kabul edip regresyon testine sokmamak',
  ],
};
