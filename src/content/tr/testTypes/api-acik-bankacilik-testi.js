export default {
  slug: 'api-acik-bankacilik-testi',
  order: 7,
  title: 'API ve Açık Bankacılık Testi',
  titleEn: 'API & Open Banking Testing',
  icon: 'Plug',
  summary:
    'Banka API’lerinin sözleşmeye uygunluğunu, rıza ve kimlik doğrulama akışlarını, güvenliğini ve performansını üçüncü taraf erişimi açılmadan önce doğrulayan test disiplini.',
  product: 'automation',
  topic: 'psd2',
  what: [
    'API testi; kullanıcı arayüzü olmadan, doğrudan servis katmanında isteklerin ve yanıtların doğruluğunu, hata davranışını, güvenliğini ve performansını sınar. Mobil ve internet bankacılığı kanalları, iç sistemler ve iş ortakları aynı API’leri kullandığı için bu katmandaki bir hata birden fazla kanala aynı anda yansır.',
    'Açık bankacılıkta API’ler bankanın dışına açılır. Avrupa’da PSD2, hesap bilgisi ve ödeme başlatma hizmeti sağlayıcılarının müşteri rızasıyla hesaplara erişmesini düzenler ve bankalardan bu erişim için özel bir arayüz (dedicated interface) sunmasını, bu arayüzün müşteri kanallarıyla benzer erişilebilirlik ve performans göstermesini bekler. Türkiye’de ise TCMB’nin düzenlediği ödeme hizmetleri veri paylaşım servisleri (ÖHVPS) çerçevesi, açık bankacılık API’leri için ortak ilke ve kurallar tanımlar.',
    'API’ler bankanın dışına açıldığında her hata aynı zamanda bir iş ortağı ve müşteri deneyimi sorununa dönüşür. Üçüncü taraf sağlayıcılar entegrasyonlarını bankanın yayımladığı sözleşmeye ve sandbox davranışına göre kurar; beklenmeyen bir alan değişikliği ya da tutarsız hata kodu, onların uygulamalarında da kesintiye yol açar. Bu yüzden API sözleşmesi ve sürüm politikası, test edilmesi gereken bir taahhüt olarak ele alınmalıdır.',
    'Bu nedenle açık bankacılık testi yalnızca fonksiyonel doğrulama değildir. Rıza yaşam döngüsü, güçlü müşteri kimlik doğrulaması (SCA), OAuth 2.0 tabanlı yetkilendirme, finansal sınıf güvenlik profilleri, sürümleme, test ortamı (sandbox) ve ISO 20022 mesaj yapıları birlikte ele alınmalıdır.',
  ],
  risks: [
    'Rızası geri alınmış veya süresi dolmuş bir erişim belirtecinin hâlâ hesap verisi döndürmesi.',
    'Bir üçüncü taraf sağlayıcının, rıza kapsamı dışındaki hesap veya işlemlere erişebilmesi.',
    'Sözleşmede tanımlı alanların, hata kodlarının veya sayfalama davranışının sürüm değişikliğinde sessizce bozulması.',
    'SCA’nın bazı akışlarda atlanabilmesi ya da muafiyet kurallarının yanlış uygulanması.',
    'Özel arayüzün müşteri kanallarına göre yavaş veya kesintili çalışması nedeniyle düzenleyici uyumsuzluk.',
    'Hatalı ISO 20022 mesajlarının ödeme sistemlerinde reddedilmesi veya yanlış işlenmesi.',
    'Sandbox ile canlı ortam davranışı arasındaki farkların iş ortaklarının entegrasyonunu bozması.',
  ],
  regulations: [
    {
      slug: 'psd2',
      note: 'Üçüncü taraf erişimi için özel arayüz, SCA ve güvenli iletişim gereklilikleri API testlerinin temel kapsamını belirler.',
    },
    {
      slug: 'acik-bankacilik-ohvps',
      note: 'TCMB’nin ÖHVPS çerçevesindeki API ilke ve kurallarına uygunluk, sözleşme ve akış testleriyle doğrulanır.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'Ödeme hizmetleri ve ödeme başlatma süreçlerinin API üzerinden doğru ve güvenli işlendiği bu testlerle gösterilir.',
    },
    {
      slug: 'iso-20022',
      note: 'Ödeme ve raporlama mesajlarının şema ve iş kuralı düzeyinde doğrulanması API testinin parçasıdır.',
    },
    {
      slug: 'dora',
      note: 'Üçüncü taraflara açılan arayüzlerin dayanıklılığı ve güvenliği operasyonel dayanıklılık testi programına dahil edilir.',
    },
    {
      slug: 'gdpr',
      note: 'Rıza ve veri minimizasyonu ilkelerinin API yanıtlarında korunduğu test edilir.',
    },
  ],
  approach: [
    {
      title: 'Sözleşmeyi tek doğruluk kaynağı yapın',
      text: 'OpenAPI veya eşdeğer tanımları sürüm kontrolünde tutun; sağlayıcı ve tüketici tarafında sözleşme testleriyle her değişikliği otomatik doğrulayın.',
    },
    {
      title: 'Fonksiyonel ve negatif senaryolar',
      text: 'Geçerli istekler kadar eksik alan, hatalı format, sınır değer, yetkisiz erişim ve tekrarlanan istek senaryolarını da test edin; hata kodlarının tutarlı olduğunu doğrulayın.',
    },
    {
      title: 'Rıza ve SCA akışlarını uçtan uca test edin',
      text: 'Rıza oluşturma, onay, kullanım, yenileme, geri alma ve süre dolumu adımlarını; SCA yönlendirmesi, muafiyetler ve başarısız doğrulama durumlarıyla birlikte sınayın.',
    },
    {
      title: 'Güvenlik profilini doğrulayın',
      text: 'OAuth 2.0 akışlarını, istemci kimlik doğrulamasını (ör. karşılıklı TLS), belirteç ömrünü, kapsam kısıtlarını ve finansal sınıf API (FAPI) tarzı sıkılaştırılmış profillerin gerekliliklerini test edin.',
    },
    {
      title: 'Mesaj doğrulama',
      text: 'ISO 20022 tabanlı mesajları şemaya ve iş kurallarına göre doğrulayın; karakter seti, tutar hassasiyeti ve zorunlu alan kurallarını ayrıca kontrol edin.',
    },
    {
      title: 'Performans ve erişilebilirlik ölçümü',
      text: 'Özel arayüzün yanıt süresi ve erişilebilirliğini müşteri kanallarıyla karşılaştırmalı ölçün; sonuçları düzenli raporlanabilir biçimde saklayın.',
    },
    {
      title: 'Sürümleme ve sandbox yönetimi',
      text: 'Geriye uyumluluğu her sürümde regresyonla doğrulayın, kullanımdan kaldırma sürecini test edin ve sandbox davranışını canlı ortamla uyumlu tutun.',
    },
  ],
  tools: [
    {
      category: 'Sözleşme testi araçları',
      text: 'Sağlayıcı ile tüketici arasındaki API sözleşmesinin iki tarafta da bozulmadığını otomatik olarak doğrular.',
    },
    {
      category: 'API test otomasyon çatıları',
      text: 'Fonksiyonel, negatif ve regresyon senaryolarını kod veya tanım tabanlı olarak CI/CD hattında koşar.',
    },
    {
      category: 'Servis sanallaştırma ve taklit sunucular',
      text: 'Henüz hazır olmayan veya test ortamında erişilemeyen bağımlı sistemleri kontrollü yanıtlarla simüle eder.',
    },
    {
      category: 'API güvenlik test araçları',
      text: 'Yetkilendirme, belirteç yönetimi ve enjeksiyon gibi zafiyetleri API uç noktaları üzerinden sınar.',
    },
    {
      category: 'Mesaj şema doğrulayıcıları',
      text: 'XML/JSON mesajlarını ISO 20022 şemalarına ve kurum içi iş kurallarına göre denetler.',
    },
    {
      category: 'Yük üretim araçları',
      text: 'API’ler üzerinde gerçekçi eşzamanlı çağrı yükü oluşturarak yanıt süresi ve kapasite sınırlarını ölçer.',
    },
  ],
  bestPractices: [
    'Her API değişikliğini sözleşme testinden geçirmeden birleştirmeyin; kırıcı değişiklikleri ancak yeni sürümle yayınlayın.',
    'Rıza durum makinesinin her geçişi için ayrı test senaryosu tutun ve geri alma sonrası erişimin gerçekten kesildiğini doğrulayın.',
    'Test verisinde gerçek müşteri bilgisi kullanmayın; sentetik veya maskelenmiş veri ile sandbox kullanıcıları tanımlayın.',
    'Hata yanıtlarını da sözleşmenin parçası sayın; hata kodu ve mesaj yapısının tutarlılığını regresyona ekleyin.',
    'Özel arayüzün performans ve erişilebilirlik metriklerini sürekli izleyin ve müşteri kanallarıyla kıyaslayan raporlar üretin.',
    'Üçüncü taraf geliştiricilerin kullandığı sandbox’ı gerçek bir ürün gibi test edin; dokümantasyon örneklerinin çalıştığını otomatik doğrulayın.',
  ],
  mistakes: [
    'Yalnızca başarılı yanıt (happy path) senaryolarını test edip negatif ve yetkisiz erişim durumlarını atlamak.',
    'Rıza akışını arayüz üzerinden bir kez test edip belirteç yenileme ve geri alma davranışını doğrulamamak.',
    'Sandbox’ın sabit yanıtlar dönmesi nedeniyle canlıdaki iş kuralı hatalarını gözden kaçırmak.',
    'Sürüm yükseltmesinde eski sürümü kullanan iş ortaklarını regresyon kapsamına almamak.',
    'ISO 20022 doğrulamasını yalnızca şema kontrolüyle sınırlayıp iş kurallarını test etmemek.',
  ],
};
