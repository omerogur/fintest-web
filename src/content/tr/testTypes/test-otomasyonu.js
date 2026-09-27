export default {
  slug: 'test-otomasyonu',
  order: 3,
  title: 'Test Otomasyonu',
  titleEn: 'Test Automation',
  icon: 'Bot',
  summary:
    'Tekrarlanan regresyon, API ve uçtan uca testleri otomatikleştirerek sık sürüm çıkarılan bankacılık sistemlerinde hızlı ve güvenilir geri bildirim sağlar.',
  product: 'automation',
  topic: 'otomasyon',
  what: [
    'Test otomasyonu, tekrarlanabilir test senaryolarının yazılım araçlarıyla koşturulması, sonuçların otomatik olarak doğrulanması ve raporlanmasıdır. Birim (unit), entegrasyon, API, arayüz ve uçtan uca (end-to-end) testler farklı otomasyon katmanlarını oluşturur. Otomasyon, manuel testin yerini tamamen almaz; keşif testi (exploratory testing) ve kullanılabilirlik değerlendirmesi gibi insan yargısı gerektiren alanları tamamlar.',
    'Bankacılık uygulamaları sık sürüm çıkarır, çok sayıda kanal ve entegrasyon barındırır ve küçük bir değişikliğin beklenmedik bir yerde hata üretme olasılığı yüksektir. Her sürümde yüzlerce kritik akışın elle yeniden doğrulanması hem zaman hem de tutarlılık açısından sürdürülebilir değildir. İyi kurgulanmış bir otomasyon seti, regresyon riskini düşürürken test sonuçlarını denetime sunulabilir, tekrarlanabilir kanıtlara dönüştürür.',
    'Otomasyonun değeri, kaç test yazıldığıyla değil; güvenilirliği, bakım maliyeti ve geliştirme sürecine ne kadar erken geri bildirim verdiğiyle ölçülür. Kararsız (flaky) testlerle dolu veya bakımı yapılamayan bir otomasyon seti, ekiplerin sonuçlara güvenini kaybetmesine ve otomasyonun fiilen devre dışı kalmasına yol açar.',
  ],
  risks: [
    'Yeni sürümlerde mevcut işlevlerin fark edilmeden bozulması (regresyon)',
    'Manuel regresyon süresinin sürüm hızını sınırlaması ve testlerin kısaltılarak atlanması',
    'Elle yürütülen testlerde adım atlama ve tutarsız kanıt üretimi',
    'API sözleşmelerindeki değişikliklerin tüketici kanalları bozduktan sonra fark edilmesi',
    'Hataların geç yakalanması nedeniyle düzeltme maliyetinin artması',
    'Kararsız testler nedeniyle gerçek hataların “yine aynı test kırıldı” denilerek gözden kaçırılması',
    'Test kanıtlarının denetim ve değişiklik yönetimi süreçlerinde yetersiz kalması',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'DORA’nın BİT değişiklik yönetimi ve test beklentileri, değişikliklerin canlıya alınmadan önce tekrarlanabilir biçimde doğrulanmasıyla desteklenir.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'BDDK bilgi sistemleri düzenlemesinin değişiklik yönetimi ve test ortamı beklentileri, otomatik regresyon testlerinin ürettiği kayıtlarla kanıtlanabilir.',
    },
    {
      slug: 'pci-dss',
      note: 'PCI DSS’in güvenli yazılım geliştirme ve değişiklik kontrolü gereklilikleri, otomatik testlerin sürekli entegrasyon hattında koşturulmasıyla desteklenebilir.',
    },
    {
      slug: 'iso-29119',
      note: 'ISO/IEC/IEEE 29119, otomatik testlerin de tabi olduğu test süreçleri, dokümantasyon ve test tasarım teknikleri için bir çerçeve sunar.',
    },
    {
      slug: 'istqb',
      note: 'ISTQB, test otomasyonu mühendisliği ve stratejisi için ortak terminoloji ve yetkinlik çerçevesi sağlar.',
    },
  ],
  approach: [
    {
      title: 'Otomasyon stratejisini yazılı hale getirin',
      text: 'Hangi testlerin hangi katmanda otomatikleştirileceğini, başarı ölçütlerini ve sorumlulukları tanımlayın; “her şeyi otomatikleştir” hedefinden kaçının.',
    },
    {
      title: 'Test piramidine göre dağılım kurun',
      text: 'Testlerin çoğunu hızlı ve kararlı birim ve API katmanında konumlandırın; arayüz üzerinden uçtan uca testleri kritik müşteri yolculuklarıyla sınırlayın.',
    },
    {
      title: 'Kritik akışları önceliklendirin',
      text: 'Giriş, para transferi, ödeme, kart işlemleri ve hesap açılışı gibi iş etkisi yüksek ve sık değişen akışlarla başlayın.',
    },
    {
      title: 'Test verisi ve ortam bağımlılığını çözün',
      text: 'Her testin kendi verisini hazırlayıp temizleyebildiği bir yapı kurun; paylaşılan ve kirlenen veri, kararsız testlerin en yaygın nedenidir.',
    },
    {
      title: 'CI/CD hattına entegre edin',
      text: 'Hızlı test setlerini her değişiklikte, geniş regresyon setlerini planlı aralıklarla koşturun; sonuçları sürüm onay kapılarına bağlayın.',
    },
    {
      title: 'Kararsız testleri yönetin',
      text: 'Tutarsız sonuç veren testleri işaretleyip karantinaya alın, kök nedenini çözün; otomatik yeniden denemeyi kalıcı çözüm olarak kullanmayın.',
    },
    {
      title: 'Bakım maliyetini ölçün',
      text: 'Test başına bakım süresini, bozulma nedenlerini ve yakalanan gerçek hata sayısını izleyerek değer üretmeyen testleri düzenli olarak ayıklayın.',
    },
  ],
  tools: [
    {
      category: 'Web arayüz otomasyon çerçeveleri',
      text: 'Tarayıcı üzerinde kullanıcı etkileşimlerini taklit ederek uçtan uca web akışlarını doğrular.',
    },
    {
      category: 'Mobil otomasyon çerçeveleri',
      text: 'iOS ve Android uygulamalarında gerçek cihaz veya emülatör üzerinde arayüz testlerini koşturur.',
    },
    {
      category: 'API test ve sözleşme testi araçları',
      text: 'REST, SOAP ve mesajlaşma arayüzlerini fonksiyonel ve sözleşme (contract) düzeyinde doğrular.',
    },
    {
      category: 'CI/CD sunucuları',
      text: 'Testleri kod değişikliklerine, zamanlamalara veya sürüm adımlarına bağlı olarak otomatik tetikler.',
    },
    {
      category: 'Test yönetimi ve raporlama',
      text: 'Otomatik ve manuel test sonuçlarını gereksinimlerle ilişkilendirerek izlenebilirlik ve denetim kanıtı sağlar.',
    },
    {
      category: 'Servis sanallaştırma ve test verisi araçları',
      text: 'Bağımlı sistemleri taklit eder ve testlerin ihtiyaç duyduğu veriyi izole biçimde hazırlar.',
    },
  ],
  bestPractices: [
    'Seçicileri (locator) kararlı, anlamlı niteliklere dayandırın; görsel konuma veya uzun XPath ifadelerine bağlı testlerden kaçının.',
    'Sabit bekleme süreleri yerine koşula dayalı bekleme kullanın.',
    'Her testi bağımsız tutun; testlerin çalışma sırasına bağımlı olması kararsızlığın başlıca kaynağıdır.',
    'Test kodunu ürün kodu kadar ciddiye alın: kod incelemesi, sürüm kontrolü ve ortak yardımcı bileşenler kullanın.',
    'Başarısız testlerde ekran görüntüsü, kayıt ve ağ bilgisi gibi teşhisi hızlandıran kanıtları otomatik toplayın.',
    'Otomasyon sonuçlarını gereksinimlere bağlayarak hangi riskin kapsandığını görünür kılın.',
  ],
  mistakes: [
    'Test piramidini tersine çevirip ağırlığı yavaş ve kırılgan arayüz testlerine vermek',
    'Manuel test senaryolarını olduğu gibi otomasyona aktarmak; otomasyon farklı bir tasarım yaklaşımı gerektirir',
    'Kararsız testleri görmezden gelmek ve ekiplerin kırmızı sonuçları olağan saymasına izin vermek',
    'Otomasyonun kurulum maliyetini hesaplayıp süregelen bakım maliyetini planlamamak',
    'Başarıyı otomatik test sayısıyla ölçmek',
  ],
};
