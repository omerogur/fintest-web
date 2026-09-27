export default {
  slug: 'core-banking-testleri',
  order: 8,
  title: 'Core Banking Testleri',
  titleEn: 'Core Banking Testing',
  icon: 'Landmark',
  summary:
    'Çekirdek bankacılık ve dijital bankacılık platformlarında ürün parametreleri, entegrasyonlar, veri migrasyonu, gün sonu işlemleri ve muhasebe doğruluğunu sürüm sürüm güvence altına alan test disiplini.',
  product: 'corebanking',
  topic: 'corebanking',
  what: [
    'Core banking sistemi; müşteri, hesap, kredi, mevduat, faiz, ücret ve muhasebe kayıtlarının tutulduğu bankanın işlem merkezidir. Buradaki bir hata çoğu zaman ekranda değil, bakiyede, faiz tahakkukunda veya genel muhasebede ortaya çıkar ve fark edildiğinde çok sayıda müşteriyi etkilemiş olabilir. Bu yüzden core banking testi, arayüz testinden çok iş kuralı ve veri doğruluğu testidir.',
    'Modern bulut tabanlı çekirdek platformlarda ürünler büyük ölçüde kodla değil parametreyle tanımlanır. Faiz oranı, faiz hesaplama yöntemi, ödeme planı, ücret ve ceza kuralları konfigürasyon olarak girilir; bu da doğru parametre setinin kendisini test edilmesi gereken bir “kod” haline getirir. Platform sağlayıcısının sık yayınladığı sürümler ise bankanın kendi değişikliği olmasa bile sürekli regresyon ihtiyacı doğurur.',
    'Çekirdek sistem tek başına çalışmaz: ödeme sistemleri, kart işlemcileri, CRM, dijital kanallar, raporlama ve genel muhasebe ile sürekli veri alışverişi içindedir. Yeni bir çekirdeğe geçişte ise yıllara yayılan hesap, bakiye ve işlem geçmişinin eksiksiz ve tutarlı taşınması gerekir. Kapsamlı bir core banking test stratejisi bu dört alanı —parametre, entegrasyon, migrasyon ve regresyon— birlikte ele alır.',
  ],
  risks: [
    'Yanlış faiz, ücret veya ödeme planı parametresi nedeniyle müşteriye hatalı tahsilat ya da eksik tahakkuk.',
    'Gün sonu veya toplu işlemlerde yarıda kalan adımlar sonucu bakiyelerin ve muhasebe kayıtlarının tutarsızlaşması.',
    'Migrasyonda kaybolan, çift taşınan veya yanlış eşlenen hesap, bakiye ve işlem geçmişi.',
    'Platform sürüm güncellemesinden sonra mevcut ürün davranışının sessizce değişmesi.',
    'Ödeme, kart veya kanal entegrasyonlarında işlemlerin çekirdek ile diğer sistemler arasında uyuşmaması.',
    'Genel muhasebeye yanlış hesap koduyla aktarılan kayıtlar nedeniyle hatalı finansal ve düzenleyici raporlama.',
    'Tarih, tatil günü, ay sonu ve yıl sonu gibi takvim kenar durumlarında yanlış hesaplama.',
  ],
  regulations: [
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Bilgi sistemleri değişiklik yönetimi, veri bütünlüğü ve geçiş projelerinin kontrollü yürütülmesi beklentileri core banking testleriyle kanıtlanır.',
    },
    {
      slug: 'dora',
      note: 'Kritik fonksiyonları destekleyen çekirdek sistemlerin ve üçüncü taraf bulut sağlayıcılarının dayanıklılığı test programı kapsamında değerlendirilir.',
    },
    {
      slug: 'iso-20022',
      note: 'Ödeme entegrasyonlarında çekirdek sistemle alışverişi yapılan mesajların yapısı ve iş kuralları doğrulanır.',
    },
    {
      slug: 'kvkk',
      note: 'Migrasyon ve test ortamlarında kişisel verilerin maskelenmesi ve korunması test planının parçası olmalıdır.',
    },
    {
      slug: 'gdpr',
      note: 'AB’de faaliyet gösteren kurumlarda test ve migrasyon verisinin işlenmesi veri koruma ilkelerine uygun kurgulanmalıdır.',
    },
    {
      slug: 'iso-29119',
      note: 'Test süreci, dokümantasyonu ve izlenebilirliği için ortak bir çerçeve sunar.',
    },
  ],
  approach: [
    {
      title: 'Ürün parametre testleri',
      text: 'Her kredi ve mevduat ürünü için faiz yöntemi, ödeme planı, ücret, ceza ve limit kurallarını beklenen sonuç tablolarıyla karşılaştıran veri odaklı senaryolar kurun.',
    },
    {
      title: 'Yaşam döngüsü senaryoları',
      text: 'Hesap açılışından kapanışa kadar kullandırım, erken ödeme, yapılandırma, gecikme ve tahsilat gibi olayları zaman ilerletilerek uçtan uca test edin.',
    },
    {
      title: 'Entegrasyon testleri',
      text: 'Ödeme sistemleri, kart, CRM, dijital kanallar ve genel muhasebe ile olan her arayüzü hem başarılı hem hata ve zaman aşımı durumlarıyla sınayın.',
    },
    {
      title: 'Gün sonu ve toplu işlem testleri',
      text: 'Faiz tahakkuku, dönem sonu işlemleri ve toplu dosya akışlarını ay sonu, yıl sonu ve tatil günleri dahil takvim senaryolarıyla çalıştırın.',
    },
    {
      title: 'Muhasebe doğrulaması',
      text: 'Her işlem tipinin ürettiği muhasebe kayıtlarını hesap planına göre kontrol edin ve alt defter ile genel muhasebe toplamlarını mutabakatla doğrulayın.',
    },
    {
      title: 'Migrasyon testleri',
      text: 'Deneme taşımalarıyla kayıt sayısı, bakiye, açık kalemler ve işlem geçmişini kaynak sistemle mutabık hale getirin; kabul kriterlerini önceden yazılı tanımlayın.',
    },
    {
      title: 'Sürüm regresyonu',
      text: 'Platform ve banka konfigürasyonu değişikliklerinde çalışan otomatik regresyon paketi ile kritik ürün ve entegrasyon davranışını her sürümde yeniden doğrulayın.',
    },
  ],
  tools: [
    {
      category: 'API test otomasyon çatıları',
      text: 'API öncelikli çekirdek platformlarda ürün, hesap ve işlem senaryolarını arayüzden bağımsız ve hızlı biçimde koşar.',
    },
    {
      category: 'Veri karşılaştırma ve mutabakat araçları',
      text: 'Kaynak ve hedef sistemdeki kayıtları, bakiyeleri ve toplamları alan düzeyinde karşılaştırarak farkları raporlar.',
    },
    {
      category: 'Test verisi üretim ve maskeleme araçları',
      text: 'Ürün kombinasyonlarını kapsayan sentetik veri üretir veya üretim verisini kişisel veriden arındırarak test ortamına taşır.',
    },
    {
      category: 'Servis sanallaştırma araçları',
      text: 'Ödeme, kart veya dış servis bağımlılıklarını test ortamında kontrol edilebilir yanıtlarla taklit eder.',
    },
    {
      category: 'Olay ve mesaj izleme araçları',
      text: 'Webhook ve olay akışlarıyla yayınlanan bildirimleri yakalayıp içerik ve sıra doğruluğunu kontrol eder.',
    },
  ],
  bestPractices: [
    'Ürün parametrelerini sürüm kontrolünde tutun ve her parametre değişikliğini kod değişikliği gibi test ve onay sürecinden geçirin.',
    'Faiz ve ödeme planı beklenen sonuçlarını iş biriminin onayladığı bağımsız hesap tablolarından üretin; sistemin kendi çıktısını beklenen sonuç olarak kullanmayın.',
    'Sağlayıcı sürüm notlarını düzenli okuyun ve her sürüm için etki analizi yapıp regresyon kapsamını buna göre güncelleyin.',
    'Migrasyonda en az birkaç tam deneme taşıması planlayın ve her denemede mutabakat sonuçlarını karşılaştırın.',
    'Test ortamlarında zaman ilerletme (tarih simülasyonu) imkânını kullanarak uzun vadeli ürün davranışını kısa sürede test edin.',
    'Muhasebe ve finans ekiplerini kabul testlerine başından dahil edin.',
  ],
  mistakes: [
    'Core banking testini ekran testine indirgemek ve bakiye ile muhasebe sonuçlarını doğrulamamak.',
    'SaaS sağlayıcı test ediyor diye banka konfigürasyonunun sürüm güncellemelerinden etkilenmeyeceğini varsaymak.',
    'Migrasyonu yalnızca kayıt sayısı eşleşmesiyle kabul etmek, bakiye ve işlem geçmişi doğruluğunu örneklemle bile kontrol etmemek.',
    'Gün sonu, ay sonu ve yıl sonu senaryolarını takvimde o tarih gelene kadar test etmemek.',
    'Entegrasyon hatalarında yeniden deneme ve çift kayıt (idempotency) davranışını test kapsamı dışında bırakmak.',
  ],
  extra: [
    {
      heading: 'Mambu nedir?',
      paragraphs: [
        'Mambu, 2011’de kurulan, bulut tabanlı (cloud-native) ve hizmet olarak yazılım (SaaS) modeliyle sunulan bir bankacılık platformudur. Kredi, mevduat ve hesap yönetimi gibi çekirdek bankacılık yeteneklerini API öncelikli (API-first) ve birleştirilebilir (composable) bir yapıyla sağlar; kurumlar ürünlerini büyük ölçüde konfigürasyonla tanımlar ve diğer sistemleri API’ler üzerinden bağlar.',
        'Bu mimari test stratejisini doğrudan etkiler. Ürün davranışı kod yerine parametreyle belirlendiği için konfigürasyonun kendisi test edilmelidir. Platform sağlayıcı tarafından sık aralıklarla güncellendiği için regresyon bir proje fazı değil sürekli bir faaliyettir. Entegrasyonun API ve olay bildirimleri üzerinden kurulması ise testlerin büyük kısmının arayüz yerine servis katmanında yapılmasını mümkün ve gerekli kılar.',
      ],
      bullets: [
        'Konfigürasyon önce kod gibi ele alınır: ürün tanımları sürümlenir, gözden geçirilir ve test edilir.',
        'Sık sağlayıcı sürümleri, otomatik ve hızlı koşan bir API regresyon paketi gerektirir.',
        'Webhook ve akış (streaming) API’leriyle yayınlanan olayların içerik, sıra ve tekrar davranışı test edilmelidir.',
        'Dış sistemlerle entegrasyon API üzerinden kurulduğu için sözleşme testleri ve servis sanallaştırma önem kazanır.',
        'Sağlayıcının sunduğu test ve ön üretim ortamları, sürüm geçişlerini canlıdan önce doğrulamak için planlı kullanılmalıdır.',
      ],
    },
    {
      heading: 'Fimple nedir?',
      paragraphs: [
        'Fimple, Türkiye kökenli bir dijital bankacılık ve çekirdek bankacılık altyapı sağlayıcısıdır. Bulut tabanlı ve modüler bir mimariyle, bankaların ve finansal kuruluşların dijital ürünlerini daha hızlı hayata geçirmesini hedefleyen bir platform sunar.',
        'Test açısından değerlendirildiğinde, bulut tabanlı ve modüler çekirdek platformların genel test ihtiyaçları Fimple tabanlı projeler için de geçerlidir: ürün parametrelerinin doğrulanması, servisler arası entegrasyon testleri, yerel ödeme sistemleri ve düzenleyici raporlama ile uyum ve sürüm güncellemelerinde regresyon. Türkiye’de faaliyet gösteren kurumlarda BDDK ve TCMB düzenlemelerine uygunluğun test kanıtlarıyla desteklenmesi de kapsamın parçasıdır.',
      ],
      bullets: [
        'Modüler yapıda her servisin ayrı ayrı ve birlikte (uçtan uca) test edilmesi planlanmalıdır.',
        'Yerel ödeme altyapıları ve düzenleyici raporlama entegrasyonları için ayrı test senaryoları kurulmalıdır.',
        'Platform güncellemeleri için etki analizi ve otomatik regresyon süreci tanımlanmalıdır.',
        'Kişisel verilerin test ortamlarında KVKK’ya uygun maskelendiği doğrulanmalıdır.',
      ],
    },
    {
      heading: 'Migrasyon testinde kontrol listesi',
      paragraphs: [
        'Çekirdek sistem geçişi, bankanın en yüksek riskli projelerinden biridir. Aşağıdaki kontroller her deneme taşımasında ve canlı geçiş öncesi son provada tekrarlanmalıdır.',
      ],
      bullets: [
        'Kaynak ve hedef sistemde müşteri, hesap ve ürün bazında kayıt sayıları eşleşiyor mu?',
        'Hesap bazında bakiyeler, bloke tutarlar ve limitler kuruşu kuruşuna mutabık mı?',
        'Kredilerde anapara, tahakkuk etmiş faiz, gecikme ve kalan ödeme planı doğru taşındı mı?',
        'İşlem geçmişi gerekli süre için eksiksiz ve doğru tarih ve açıklamayla aktarıldı mı?',
        'Genel muhasebe hesap bakiyeleri taşıma öncesi ve sonrası uyumlu mu?',
        'Kaynak sistemdeki kod değerlerinin hedef platform parametrelerine eşlemesi (ürün, durum, para birimi kodları) belgelendi ve test edildi mi?',
        'Taşıma sonrası ilk gün sonu ve ilk faiz tahakkuku doğru çalışıyor mu?',
        'Geri dönüş (rollback) planı prova edildi mi ve karar kriterleri yazılı mı?',
        'Mutabakat farkları sınıflandırılıp iş birimi tarafından onaylandı mı?',
      ],
    },
  ],
};
