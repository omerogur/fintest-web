export default [
  {
    id: 'dora-scope',
    q: 'DORA bize ve BİT hizmet sağlayıcılarımıza uygulanır mı?',
    a: [
      'DORA, AB’de faaliyet gösteren bankalar, ödeme ve elektronik para kuruluşları, yatırım kuruluşları, sigorta şirketleri ve kripto varlık hizmet sağlayıcıları gibi geniş bir finansal kuruluş yelpazesine 17 Ocak 2025’ten itibaren doğrudan uygulanır. Türkiye’de yerleşik bir kuruluş doğrudan kapsamda olmayabilir; ancak AB’de yetkilendirilmiş bir iştiraki veya AB’deki finansal kuruluşlara hizmet veren bir iş kolu varsa durum değişebilir. Kapsam değerlendirmesi hukuk ve uyum birimlerince, güncel metin esas alınarak yapılmalıdır.',
      'BİT hizmet sağlayıcıları çoğunlukla dolaylı olarak etkilenir: DORA, finansal kuruluşlardan sözleşmelerde asgari hükümler, test ve denetim hakları ile çıkış stratejileri bekler. Kritik olarak belirlenen BİT üçüncü taraf sağlayıcılar ise AB düzeyinde ayrı bir gözetim çerçevesine tabidir.',
    ],
    links: [
      { kind: 'regulation', slug: 'dora' },
      { kind: 'regulation', slug: 'bddk-bilgi-sistemleri' },
      { kind: 'page', slug: 'uyum-kontrolu' },
    ],
  },
  {
    id: 'pentest-vs-ddos',
    q: 'Sızma testi ile DDoS dayanıklılık testi arasındaki fark nedir?',
    a: [
      'Sızma testi, sistemlerdeki zafiyetlerin bir saldırgan tarafından istismar edilip edilemeyeceğini gösterir; odak noktası gizlilik ve bütünlüktür (yetkisiz erişim, veri sızıntısı, yetki yükseltme). DDoS dayanıklılık testi ise hizmetin yoğun kötü niyetli trafik altında erişilebilir kalıp kalmadığını ve koruma katmanlarının (trafik temizleme, WAF, hız sınırlama) beklendiği gibi devreye girip girmediğini ölçer; odak noktası erişilebilirliktir.',
      'İkisi birbirinin yerine geçmez. DDoS tatbikatları ayrıca servis sağlayıcılar, altyapı ekipleri ve olay yönetimi süreçleriyle koordinasyon gerektirir ve canlı ortamı etkileyebileceği için dikkatli planlanmalıdır.',
    ],
    links: [
      { kind: 'testType', slug: 'guvenlik-testi' },
      { kind: 'testType', slug: 'ddos-dayaniklilik-testi' },
      { kind: 'page', slug: 'sozluk' },
    ],
  },
  {
    id: 'performance-test-frequency',
    q: 'Performans testlerini ne sıklıkla koşmalıyız?',
    a: [
      'Tek bir doğru sıklık yoktur; bu sitedeki regülasyon içerikleri arasında performans testleri için sabit bir takvim öngören bir hüküm yer almaz. DORA, kritik veya önemli işlevleri destekleyen BİT sistemlerinin en az yılda bir uygun testlere tabi tutulmasını bekler; performans testleri bu programın olağan parçalarındandır.',
      'Uygulamada yaygın yaklaşım, büyük sürümler ve mimari değişikliklerden önce kapsamlı yük testleri, maaş günü veya kampanya gibi beklenen yoğunluklardan önce hedefli testler ve teslimat hattında küçük ölçekli performans kontrolleriyle gerilemenin erken yakalanmasıdır.',
    ],
    links: [
      { kind: 'testType', slug: 'performans-yuk-testi' },
      { kind: 'regulation', slug: 'dora' },
      { kind: 'page', slug: 'test-yaklasimi' },
    ],
  },
  {
    id: 'production-data-in-test',
    q: 'Test ortamlarında üretim verisi kullanabilir miyiz (KVKK/GDPR)?',
    a: [
      'KVKK ve GDPR, üretim verisinin test ortamında kullanılmasını her durumda açıkça yasaklamaz; ancak kişisel verinin amaçla sınırlı, ölçülü ve uygun güvenlik önlemleriyle işlenmesini gerektirir. Test ortamları çoğunlukla canlı ortamla aynı erişim kontrollerine sahip olmadığından, kopyalanan gerçek veri ciddi bir risk kaynağıdır.',
      'Olağan yaklaşım; maskelenmiş, anonimleştirilmiş veya sentetik veri kullanmak, gerçek veri gerekiyorsa bunu gerekçelendirip erişimi ve saklama süresini sınırlamaktır. Kart verisi için ayrıca PCI DSS gereksinimleri dikkate alınmalıdır. Kurumunuza özgü değerlendirme için veri koruma sorumlunuza ve güncel mevzuata başvurun.',
    ],
    links: [
      { kind: 'regulation', slug: 'kvkk' },
      { kind: 'regulation', slug: 'gdpr' },
      { kind: 'testType', slug: 'test-analizi-kalite-metrikleri' },
    ],
  },
  {
    id: 'wcag-eaa',
    q: 'WCAG 2.2 ve Avrupa Erişilebilirlik Yasası (EAA) neyi değiştiriyor?',
    a: [
      'WCAG 2.2, W3C tarafından 5 Ekim 2023’te tavsiye olarak yayımlandı; 2.1’e göre dokuz yeni başarı kriteri ekledi ve 4.1.1 Parsing kriterini kaldırdı. Yeni kriterler özellikle odak görünürlüğü, sürükleme hareketlerine alternatifler, hedef boyutu ve kimlik doğrulamanın erişilebilirliği gibi bankacılık akışlarını doğrudan etkileyen konulara değinir.',
      'EAA ise tüketici bankacılığı hizmetlerini kapsayan ve hizmetler için 28 Haziran 2025’ten itibaren uygulanan bir AB direktifidir. Uyumlaştırılmış standart EN 301 549 web ve mobil içerikte WCAG’e dayandığından, pratikte WCAG AA seviyesi temel referanstır. Direktif üye devletlerce ulusal mevzuata aktarıldığından ayrıntılar ülkeye göre değişebilir.',
    ],
    links: [
      { kind: 'regulation', slug: 'wcag-22' },
      { kind: 'regulation', slug: 'eaa' },
      { kind: 'testType', slug: 'erisilebilirlik-testi' },
    ],
  },
  {
    id: 'real-devices',
    q: 'Gerçek cihazda test etmek emülatöre göre gerçekten fark yaratır mı?',
    a: [
      'Emülatör ve simülatörler geliştirme sırasında hızlı geri bildirim için değerlidir. Ancak biyometrik doğrulama, kamera ile belge veya yüz tarama, NFC, bildirimler, üretici özelleştirmeleri, gerçek ağ koşulları ve pil/ısı kaynaklı davranışlar gibi konuları güvenilir biçimde yansıtamazlar.',
      'Bankacılık uygulamalarında bu özellikler müşteri kaydı, kimlik doğrulama ve ödeme gibi kritik akışların parçası olduğundan, öncelikli akışların müşteri tabanını temsil eden bir gerçek cihaz matrisinde doğrulanması olağan uygulamadır. Ekran okuyucu ile erişilebilirlik testleri de gerçek cihazda daha anlamlı sonuç verir.',
    ],
    links: [
      { kind: 'testType', slug: 'mobil-uygulama-testi' },
      { kind: 'testType', slug: 'erisilebilirlik-testi' },
    ],
  },
  {
    id: 'saas-core-banking',
    q: 'Mambu gibi SaaS core banking platformlarını test etmenin farkı nedir?',
    a: [
      'SaaS modelinde platformun kendisi sağlayıcı tarafından geliştirilip test edilir ve güncellenir; bankanın sorumluluğu ise kendi konfigürasyonu, ürün parametreleri, entegrasyonları ve iş süreçleridir. Sağlayıcının sürüm güncellemeleri bankanın takviminden bağımsız gelebileceğinden, konfigürasyon ve entegrasyonları kapsayan otomatik bir regresyon seti belirleyici hale gelir.',
      'Ürünler büyük ölçüde parametrelerle tanımlandığı için parametrik ürün testleri, API tabanlı entegrasyon testleri ve geçiş projelerinde veri göçü mutabakatı öne çıkar. Sağlayıcı bir BİT üçüncü tarafı olduğundan, test ve denetim haklarının sözleşmede ele alınması da gerekebilir.',
    ],
    links: [
      { kind: 'testType', slug: 'core-banking-testleri' },
      { kind: 'regulation', slug: 'dora' },
      { kind: 'page', slug: 'sozluk' },
    ],
  },
  {
    id: 'audit-evidence',
    q: 'Testlerden denetim kanıtını nasıl hazırlamalıyız?',
    a: [
      'Denetçiler genellikle tek tek test sonuçlarından çok, bir gereksinim veya riskin nasıl test edildiğini baştan sona izleyebilmek ister. Bu nedenle gereksinim, risk, test senaryosu, koşum sonucu, bulunan hata ve giderilme doğrulaması arasındaki izlenebilirlik zinciri kanıtın omurgasıdır.',
      'Test planları ve kapsam kararlarının gerekçesi, koşum tarihleri ve ortamları, bağımsız testlerin raporları, bulguların sınıflandırılması ve kapanış kayıtları değiştirilemez ve erişilebilir biçimde saklanmalıdır. Hangi kanıtın hangi biçimde beklendiği için ilgili düzenleyicinin güncel metinleri ve rehberleri esas alınmalıdır.',
    ],
    links: [
      { kind: 'testType', slug: 'test-analizi-kalite-metrikleri' },
      { kind: 'regulation', slug: 'iso-29119' },
      { kind: 'regulation', slug: 'bddk-bilgi-sistemleri' },
    ],
  },
  {
    id: 'automation-start',
    q: 'Bir bankada test otomasyonuna nereden başlamalıyız?',
    a: [
      'En sık önerilen başlangıç noktası, sık değişen ve iş etkisi yüksek akışların regresyonudur: giriş, para transferi, ödeme, kart ve hesap işlemleri. Arayüz testleriyle başlamak yerine, mümkün olan yerde API ve servis katmanında otomasyon kurmak daha hızlı ve kararlı sonuç verir.',
      'Kalıcı başarı için test verisi yönetimi, kararlı test ortamları, teslimat hattına entegrasyon ve kararsız testlerin takibi baştan ele alınmalıdır. Küçük ama güvenilir bir setle başlayıp kapsamı risk sırasına göre genişletmek, büyük ama bakımı zor bir setten daha değerlidir.',
    ],
    links: [
      { kind: 'testType', slug: 'test-otomasyonu' },
      { kind: 'page', slug: 'test-yaklasimi' },
    ],
  },
  {
    id: 'open-banking-tr',
    q: 'Türkiye’de açık bankacılık (ÖHVPS) API testleri neleri kapsar?',
    a: [
      'ÖHVPS, TCMB tarafından 6493 sayılı Kanun dayanağıyla düzenlenen ve hesap bilgisi ile ödeme emri başlatma hizmetlerinin API’ler üzerinden sunulmasını kapsayan çerçevedir. Test kapsamı tipik olarak dört alanda toplanır: yayımlanan API standardına uyumluluk, rıza yaşam döngüsü (oluşturma, kapsam, süre sonu, iptal), güvenlik (belirteçler, yetkilendirme, başka müşterinin verisine erişim) ve performans.',
      'Ortak altyapı ve API standardının güncel sürümü ile katılım koşulları TCMB ve BKM kaynaklarından teyit edilmelidir. Standart sürümleri değiştikçe uyumluluk setinin otomatik olarak yeniden koşulması önerilir.',
    ],
    links: [
      { kind: 'regulation', slug: 'acik-bankacilik-ohvps' },
      { kind: 'testType', slug: 'api-acik-bankacilik-testi' },
      { kind: 'regulation', slug: 'odeme-hizmetleri-6493' },
    ],
  },
  {
    id: 'risk-based-prioritisation',
    q: 'Risk temelli test önceliklendirmeyi nasıl yapar?',
    a: [
      'Her işlev veya değişiklik için iki boyut değerlendirilir: hata olasılığı (değişikliğin büyüklüğü, karmaşıklık, geçmiş hata yoğunluğu, yeni teknoloji) ve etki (para hareketi, müşteri sayısı, kişisel veri, düzenleyici yükümlülük, itibar). Bu iki boyutun birleşimi, hangi alanın ne derinlikte ve hangi sırayla test edileceğini belirler.',
      'Risk değerlendirmesi iş birimleri, geliştirme, güvenlik ve uyum ekipleriyle birlikte yapılmalı ve belgelenmelidir. Böylece test kapsamı kararlarının gerekçesi denetimde de gösterilebilir; risk profili değiştikçe öncelikler güncellenmelidir.',
    ],
    links: [
      { kind: 'testType', slug: 'test-analizi-kalite-metrikleri' },
      { kind: 'regulation', slug: 'iso-29119' },
      { kind: 'page', slug: 'test-yaklasimi' },
    ],
  },
  {
    id: 'compliance-check-tool',
    q: 'Bu sitedeki uyum kontrolü aracını nasıl kullanmalıyım?',
    a: [
      'Uyum kontrolü aracı, kurum türü, faaliyet bölgesi, sunduğunuz kanallar ve yürüttüğünüz girişimler (ör. core banking geçişi, üçüncü taraf entegrasyonları) hakkındaki yanıtlarınıza göre ilgili olabilecek regülasyonları ve bunlarla ilişkili test türlerini listeler. Amaç, hangi konulara öncelik verilebileceğine dair hızlı bir başlangıç noktası sunmaktır.',
      'Araç ön değerlendirme niteliğindedir ve hukuki görüş yerine geçmez. Sonuçlar, kurumunuzun hukuk ve uyum birimleriyle ve ilgili regülasyonların güncel resmi metinleriyle birlikte değerlendirilmelidir.',
    ],
    links: [
      { kind: 'page', slug: 'uyum-kontrolu' },
      { kind: 'page', slug: 'toplanti-talebi' },
    ],
  },
];
