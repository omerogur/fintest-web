export default {
  slug: 'aml-kyc-dolandiricilik-testi',
  order: 13,
  title: 'AML/KYC ve Dolandırıcılık Kural Testi',
  titleEn: 'AML/KYC & Fraud Rule Testing',
  icon: 'ScanFace',
  summary:
    'İşlem izleme, yaptırım ve PEP taraması, dolandırıcılık kuralları ve uzaktan kimlik doğrulama süreçlerinin şüpheli durumları doğru yakalayıp gereksiz alarmı sınırladığını kanıtlayan test disiplini.',
  product: 'datacrate',
  topic: 'amlkyc',
  what: [
    'AML/KYC ve dolandırıcılık testleri, bankanın suç gelirlerinin aklanması, terörün finansmanı, yaptırım ihlali ve dolandırıcılığa karşı kurduğu kontrollerin gerçekten çalıştığını doğrular. Bu kontroller çoğu zaman bir kural motoru, bir eşleştirme algoritması veya bir istatistiksel model olarak çalışır; hatalı bir eşik, eksik bir liste güncellemesi veya bozuk bir veri beslemesi, sistem “sorunsuz” görünürken şüpheli işlemlerin gözden kaçmasına yol açabilir.',
    'Testin iki yönü vardır. Birincisi etkinliktir: bilinen şüpheli örüntüler ve yaptırım listesindeki kişiler yakalanıyor mu (yanlış negatif)? İkincisi verimliliktir: masum müşteri ve işlemler için ne kadar gereksiz alarm üretiliyor (yanlış pozitif)? Aşırı alarm analist kapasitesini tüketir ve gerçek vakaların gecikmesine neden olur; yetersiz alarm ise doğrudan uyum ve itibar riskidir. Eşik ayarı (threshold tuning) bu ikisi arasındaki dengeyi veriye dayalı kurmayı amaçlar.',
    'Müşteri edinimi tarafında uzaktan kimlik tespiti (eKYC) süreçleri de bu disiplinin parçasıdır. TCMB’nin ödeme ve elektronik para kuruluşlarına yönelik bilgi sistemleri tebliği, uzaktan kimlik tespiti ve müşteri edinimi süreçlerinin NFC çip kontrolü, canlılık testi ve biyometrik eşleştirme dahil en az yılda iki kez test edilmesini öngörür; bankalar için de ilgili BDDK düzenlemeleri benzer teknik kontroller içerir. MASAK mevzuatı ise müşterinin tanınması ve şüpheli işlem bildirimi yükümlülüklerinin çerçevesini çizer. Güncel metinleri teyit edin.',
  ],
  risks: [
    'Yaptırım veya PEP listesindeki bir kişinin, yazım farkı veya Türkçe karakter dönüşümü nedeniyle eşleşmemesi.',
    'Eşik değerlerin yanlış ayarlanması sonucu şüpheli işlem örüntülerinin sistematik olarak kaçırılması.',
    'Aşırı yanlış pozitif nedeniyle analist kuyruğunun birikmesi ve gerçek vakaların geç incelenmesi.',
    'Veri beslemesindeki eksik alanlar veya gecikmeler yüzünden kuralların sessizce çalışmaması.',
    'Kural veya model değişikliğinden sonra daha önce yakalanan senaryoların artık yakalanmaması.',
    'Uzaktan kimlik tespitinde sahte belge, fotoğraf, video veya derin sahte (deepfake) ile hesap açılması.',
    'Kart ve transfer dolandırıcılığı kurallarının yeni saldırı yöntemlerine karşı güncelliğini yitirmesi.',
  ],
  regulations: [
    {
      slug: 'masak-aml',
      note: 'Müşterinin tanınması, işlemlerin izlenmesi ve şüpheli işlem bildirimi yükümlülüklerinin sistemlerde doğru uygulandığı bu testlerle gösterilir.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'TCMB’nin ödeme ve elektronik para kuruluşlarına yönelik bilgi sistemleri tebliği, uzaktan kimlik tespiti ve müşteri edinimi süreçlerinin en az yılda iki kez test edilmesini ister.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Bilgi sistemlerinde yapılan kural ve yapılandırma değişikliklerinin test edilip onaylanması değişiklik yönetimi beklentisinin parçasıdır.',
    },
    {
      slug: 'ai-act',
      note: 'Gerçek kişilerin kredi değerliliğini değerlendiren yapay zekâ sistemleri yüksek riskli sayılır; aynı veri ve modelleri paylaşan müşteri değerlendirme süreçlerinde test ve belgeleme bu açıdan da ele alınmalıdır.',
    },
    {
      slug: 'kvkk',
      note: 'Test senaryolarında gerçek müşteri ve biyometrik veri yerine sentetik veya arındırılmış veri kullanılması kişisel veri riskini azaltır.',
    },
    {
      slug: 'gdpr',
      note: 'Biyometrik veriler özel nitelikli veri olarak ek koruma gerektirir; eKYC testlerinde veri kullanımı buna göre sınırlandırılmalıdır.',
    },
  ],
  approach: [
    {
      title: 'Kural ve senaryo envanteri',
      text: 'Tüm izleme, tarama ve dolandırıcılık kurallarını hangi riski karşıladıkları, hangi veriyi kullandıkları ve hangi eşiklerle çalıştıklarıyla listeleyin.',
    },
    {
      title: 'Sentetik senaryo verisi üretin',
      text: 'Parçalı nakit yatırma, hızlı para geçişi, olağan dışı coğrafya veya müşteri profiline uymayan işlem gibi örüntüleri içeren, gerçek müşteri içermeyen veri setleri kurun.',
    },
    {
      title: 'Yaptırım ve PEP tarama testi',
      text: 'İsim varyasyonları, harf çevirisi, Türkçe karakterler, kısaltmalar ve sıra değişiklikleriyle eşleştirme motorunun duyarlılığını ve liste güncelleme sürecini sınayın.',
    },
    {
      title: 'Yanlış pozitif ve negatif analizi',
      text: 'Bilinen pozitif ve negatif örneklerle kuralları koşup yakalama ve gereksiz alarm oranlarını ölçün; sonuçları analist geri bildirimiyle karşılaştırın.',
    },
    {
      title: 'Eşik ayarı',
      text: 'Eşikleri, sınırın hemen altı ve üstündeki değerlerle test edin; ayar önerilerini gerekçesiyle belgeleyip uyum biriminin onayına sunun.',
    },
    {
      title: 'Veri besleme ve uçtan uca doğrulama',
      text: 'Kaynak sistemlerden izleme platformuna akan verinin eksiksiz, zamanında ve doğru eşlendiğini; alarmın vaka yönetimine ulaştığını doğrulayın.',
    },
    {
      title: 'Değişiklik regresyonu',
      text: 'Her kural, model veya liste yapılandırması değişikliğinde sabit bir senaryo paketini yeniden koşarak önceki yakalama davranışının korunduğunu gösterin.',
    },
  ],
  tools: [
    {
      category: 'Sentetik test verisi üretim araçları',
      text: 'Gerçek müşteri içermeden şüpheli ve olağan işlem örüntülerini istenen oranlarda üretir.',
    },
    {
      category: 'Kural ve model simülasyon ortamları',
      text: 'Yeni eşik veya kural setini geçmiş ya da sentetik veri üzerinde canlıyı etkilemeden çalıştırıp sonuçlarını karşılaştırır.',
    },
    {
      category: 'İsim eşleştirme test kütüphaneleri',
      text: 'Yaptırım ve PEP taramasında kullanılan varyasyon, harf çevirisi ve bulanık eşleştirme vakalarını hazır test seti olarak sunar.',
    },
    {
      category: 'Veri kalitesi ve mutabakat araçları',
      text: 'Kaynak sistemlerle izleme platformu arasındaki kayıt sayısı ve alan doğruluğunu kontrol eder.',
    },
    {
      category: 'Belge ve biyometri test setleri',
      text: 'eKYC süreçlerinde sahte belge, sunum saldırısı ve farklı ışık ile cihaz koşullarını temsil eden kontrollü test örnekleri sağlar.',
    },
  ],
  bestPractices: [
    'Her kural için “bu kural neyi yakalamalı” sorusunu yanıtlayan en az bir pozitif ve bir negatif test senaryosu tanımlayın.',
    'Eşik değişikliklerini tahminle değil, simülasyon sonuçları ve analist geri bildirimiyle gerekçelendirin; kararları belgeleyin.',
    'Test verisinde gerçek kişi ve biyometrik veri kullanmayın; sentetik veya arındırılmış veriyle çalışın.',
    'Liste güncellemelerinin taramaya ne kadar sürede yansıdığını düzenli ölçün.',
    'Dolandırıcılık ekibinden gelen yeni vaka örüntülerini hızla test senaryosuna dönüştürün.',
    'Kural ve model değişikliklerini geliştirme ekibinden bağımsız bir doğrulama adımından geçirin.',
  ],
  mistakes: [
    'Yalnızca alarm sayısını düşürmeye odaklanıp yakalama oranının da düştüğünü ölçmemek.',
    'İsim taramasını yalnızca birebir yazımlarla test etmek.',
    'Kural motorunu test edip ona veri taşıyan entegrasyonların eksik alan göndermesini gözden kaçırmak.',
    'eKYC testlerini yalnızca başarılı kimlik doğrulama akışıyla sınırlı tutmak, sahte belge ve sunum saldırılarını denememek.',
    'Test sonuçlarını ve eşik kararlarını denetimde gösterilebilir biçimde saklamamak.',
  ],
  extra: [
    {
      heading: 'Uzaktan kimlik doğrulama (eKYC) testi',
      paragraphs: [
        'Uzaktan kimlik tespiti, müşterinin şubeye gelmeden kimlik belgesi, yüz görüntüsü ve canlılık kontrolüyle tanınmasını sağlar. Süreç; belgenin gerçekliğinin doğrulanması, belgedeki çipten verinin okunması, başvuranın canlı bir kişi olduğunun anlaşılması ve yüzün belgedeki fotoğrafla eşleştirilmesi gibi birbirine bağlı adımlardan oluşur. Zincirin herhangi bir halkası zayıfsa sahte hesap açılabilir.',
        'TCMB tebliği ödeme ve elektronik para kuruluşları için bu süreçlerin en az yılda iki kez NFC çip kontrolü, canlılık testi ve biyometrik eşleştirme dahil test edilmesini öngörür. Testlerin yalnızca başarı oranını değil, saldırılara karşı direnci ve farklı kullanıcı koşullarındaki davranışı da ölçmesi gerekir.',
      ],
      bullets: [
        'NFC çip okuma: farklı kimlik kartı nesilleri ve cihaz modellerinde okuma başarısı, çip verisinin ve imzasının doğrulanması, okuma kesildiğinde süreç davranışı.',
        'Canlılık tespiti: basılı fotoğraf, ekrandan gösterilen görüntü, önceden kaydedilmiş video, maske ve derin sahte gibi sunum saldırılarına karşı direnç.',
        'Biyometrik eşleştirme: aynı kişi için doğru kabul, farklı kişi için doğru ret; ışık, açı, gözlük ve yaş farkı gibi koşullarda sonuç tutarlılığı.',
        'Belge doğrulama: süresi dolmuş, değiştirilmiş veya başka kişiye ait belgelerin reddedildiği senaryolar.',
        'Süreç bütünlüğü: adımların atlanamaması, oturumun ele geçirilememesi ve her adımın kanıtının kayıt altına alınması.',
        'Test sonuçlarının, kullanılan cihaz, sürüm ve senaryo bilgisiyle birlikte düzenleyiciye sunulabilecek biçimde saklanması.',
      ],
    },
  ],
};
