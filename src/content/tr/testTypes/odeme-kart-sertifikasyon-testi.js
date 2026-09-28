export default {
  slug: 'odeme-kart-sertifikasyon-testi',
  order: 11,
  title: 'Ödeme Sistemleri ve Kart Sertifikasyon Testi',
  titleEn: 'Payment Systems & Card Certification Testing',
  icon: 'CreditCard',
  summary:
    'Kartlı ödeme terminallerinin, sanal POS ve 3-D Secure akışlarının, anlık ödeme ve uluslararası mesajlaşma entegrasyonlarının kart şeması, operatör ve standart gereksinimlerine uygun çalıştığını doğrulayan test disiplini.',
  product: 'automation',
  topic: 'odeme',
  what: [
    'Ödeme sistemleri testi, paranın bir hesaptan diğerine veya kart sahibinden üye işyerine doğru, eksiksiz ve güvenli aktarıldığını doğrular. Bu alanda banka tek başına karar verici değildir: kart şemaları, yerli kart ağı, ödeme sistemi operatörleri ve uluslararası mesajlaşma ağları kendi kurallarını ve test programlarını işletir. Bu nedenle ödeme testi, bankanın iç kalite kontrollerinin yanında dış tarafların sertifikasyon ve uyum testlerini de kapsar.',
    'Kartlı ödemelerde EMV çip ve temassız işlemler katmanlı bir sertifikasyon yapısıyla güvence altına alınır. Kart okuyucu donanımı ve çekirdek yazılım EMVCo düzeyinde onaylanırken, terminalin bankanın ve işlemcinin uçtan uca ortamında doğru çalıştığı kart şemalarının terminal entegrasyon (L3) test programlarıyla gösterilir. Visa ve Mastercard gibi uluslararası şemalar ile yerli şema TROY ve BKM, kendi test ve sertifikasyon süreçlerini yürütür; kapsam, test kartları ve kabul kriterleri şemaya ve ürün tipine göre değişir.',
    'Kart dışı ödemelerde odak entegrasyon doğruluğudur. EFT ve FAST gibi TCMB tarafından işletilen sistemlere bağlantı, QR ödemeler, sanal POS ve 3-D Secure kimlik doğrulama akışları, SWIFT ve ISO 20022 mesajlaşması; her biri doğru mesaj yapısı, iş kuralı, zaman aşımı ve hata yönetimi gerektirir. Bu sistemlere bağlanma veya değişiklik yapma için gerekli test ve sertifikasyon adımları operatöre göre belirlenir; güncel gereksinimleri kart şeması, operatör ve TCMB ile teyit edin.',
  ],
  risks: [
    'Terminalin belirli kart tiplerinde, temassız limitlerde veya çevrimdışı durumlarda yanlış karar vermesi ve işlemin reddedilmesi ya da hatalı onaylanması.',
    'Sertifikasyonda kalan bir terminal veya uygulama nedeniyle ürünün canlıya çıkışının gecikmesi.',
    'Zaman aşımı ve iptal (reversal) senaryolarında müşterinin hesabından çift çekim yapılması veya paranın askıda kalması.',
    '3-D Secure akışında kimlik doğrulama sonucunun yanlış yorumlanması ve sorumluluk kaymasının kaybedilmesi.',
    'Anlık ödeme entegrasyonunda mesaj doğrulama, mutabakat veya kesinti sonrası yeniden deneme hataları.',
    'ISO 20022 ile eski formatlar arasındaki eşlemede alan kaybı veya kırpılma nedeniyle eksik alıcı ve amaç bilgisi.',
    'Test ortamında gerçek kart verisinin kullanılması nedeniyle kart verisi güvenliği ihlali.',
  ],
  regulations: [
    {
      slug: 'pci-dss',
      note: 'Kart verisini işleyen sistemlerde güvenli geliştirme, test ortamı ayrımı ve test sırasında gerçek kart verisi kullanılmaması beklentilerini içerir.',
    },
    {
      slug: 'iso-20022',
      note: 'Ödeme mesajlarının yapısı, zorunlu alanları ve iş kuralları mesaj doğrulama ve eşleme testlerinin temelini oluşturur.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'Ödeme hizmetleri ve ödeme sistemlerinin güvenli ve kesintisiz işleyişine dair yükümlülükler, entegrasyon ve dayanıklılık testleriyle desteklenir.',
    },
    {
      slug: 'psd2',
      note: 'Güçlü müşteri kimlik doğrulaması gereklilikleri, 3-D Secure ve kartsız ödeme akışlarının test kapsamını doğrudan etkiler.',
    },
    {
      slug: 'dora',
      note: 'Kritik ödeme hizmetlerini destekleyen sistemler ve üçüncü taraf bağlantıları uçtan uca ve uyumluluk testleriyle dayanıklılık programına dahil edilir.',
    },
  ],
  approach: [
    {
      title: 'Kapsam ve sertifikasyon haritası',
      text: 'Hangi ürün, terminal, kanal ve bağlantının hangi şema veya operatörün testine tabi olduğunu çıkarın; her biri için güncel gereksinimleri resmi kaynaktan teyit edin.',
    },
    {
      title: 'Ön sertifikasyon (pre-certification) testleri',
      text: 'Şema test kart setleri ve senaryolarına benzeyen iç test paketini, resmi teste girmeden önce kendi ortamınızda eksiksiz çalıştırın.',
    },
    {
      title: 'Kart ve terminal senaryoları',
      text: 'Çip, temassız, manyetik şerit yedeği, PIN doğrulama, limit, çevrimdışı onay ve iptal senaryolarını farklı kart profilleriyle test edin.',
    },
    {
      title: 'E-ticaret ve 3-D Secure',
      text: 'Sanal POS, QR ve 3-D Secure akışlarında sürtünmesiz ve doğrulamalı yolları, kimlik doğrulama başarısızlığını ve yarıda kalan oturumları sınayın.',
    },
    {
      title: 'Anlık ödeme ve EFT entegrasyonu',
      text: 'Mesaj doğrulama, zaman aşımı, tekrar gönderim, iade ve mutabakat senaryolarını operatörün test ortamında uçtan uca çalıştırın.',
    },
    {
      title: 'SWIFT ve ISO 20022 mesaj testi',
      text: 'Şema doğrulama, zorunlu alan kontrolü, karakter seti, eski formatlarla eşleme ve kırpılma durumlarını örnek mesaj kütüphanesiyle test edin.',
    },
    {
      title: 'Regresyon ve yeniden sertifikasyon',
      text: 'Terminal yazılımı, anahtar yönetimi veya işlemci değişikliklerinde regresyon paketini koşun ve yeniden sertifikasyon gerekip gerekmediğini şema ile netleştirin.',
    },
  ],
  tools: [
    {
      category: 'Kart ve terminal test simülatörleri',
      text: 'Test kartlarını, kart şeması ağını ve yetkilendirme sunucusunu taklit ederek terminal ve işlemci davranışını kontrollü koşullarda sınar.',
    },
    {
      category: 'EMV işlem analiz araçları',
      text: 'Kart ile terminal arasındaki komut ve yanıtları kaydedip çözümler; sertifikasyon hatalarının kök nedenini bulmayı kolaylaştırır.',
    },
    {
      category: 'Donanım döngüde (hardware-in-the-loop) test düzenekleri',
      text: 'Gerçek ATM ve POS cihazlarını otomasyonla sürerek tuş takımı, kart okuyucu, yazıcı ve ekran etkileşimlerini tekrarlanabilir biçimde test eder.',
    },
    {
      category: 'Mesaj doğrulama ve dönüştürme araçları',
      text: 'ISO 20022 ve ISO 8583 mesajlarını şemaya göre doğrular, formatlar arası eşlemeyi karşılaştırır.',
    },
    {
      category: 'Servis sanallaştırma araçları',
      text: 'Operatör, şema veya karşı banka sistemlerini test ortamında hata ve zaman aşımı üretebilen sanal servislerle taklit eder.',
    },
    {
      category: 'API ve uçtan uca test otomasyon çatıları',
      text: 'Sanal POS, QR ve ödeme API’lerindeki akışları her sürümde otomatik regresyonla doğrular.',
    },
  ],
  bestPractices: [
    'Resmi sertifikasyon takvimini proje planına erkenden ekleyin; test ortamı ve laboratuvar randevularının sınırlı olabileceğini hesaba katın.',
    'Her sertifikasyonda kullanılan terminal donanımı, yazılım sürümü ve parametre setini kayıt altına alın ve değişiklik yönetimine bağlayın.',
    'Test ortamlarında yalnızca şema veya operatör tarafından sağlanan test kartlarını ve sentetik verileri kullanın.',
    'Zaman aşımı, iptal ve tekrar gönderim senaryolarını başarılı akışlar kadar ayrıntılı test edin.',
    'Mutabakat dosyalarını ve muhasebe kayıtlarını test sonucunun parçası olarak doğrulayın; ekrandaki onay mesajı yeterli değildir.',
    'Güncel gereksinimleri kart şeması, operatör ve TCMB ile teyit edin; eski bir test paketine dayanarak sertifikasyona girmeyin.',
  ],
  mistakes: [
    'Donanım üreticisinin onayını, terminalin bankanın ortamında sertifikalı olduğu anlamında yorumlamak.',
    'Yalnızca başarılı işlem senaryolarını test edip çevrimdışı, kısmi onay ve iptal durumlarını atlamak.',
    'ISO 20022 geçişini yalnızca şema doğrulamasından geçen mesajlarla tamamlanmış saymak, iş kuralı ve eşleme kayıplarını kontrol etmemek.',
    'Küçük bir terminal yazılım güncellemesinin yeniden test gerektirmeyeceğini varsaymak.',
    'Test ortamlarına gerçek kart numarası veya müşteri verisi taşımak.',
  ],
  extra: [
    {
      heading: 'ATM ve POS terminal testi',
      paragraphs: [
        'ATM ve POS testleri yazılımla donanımın birlikte doğrulanmasını gerektirir. Aynı yazılım farklı cihaz modellerinde, yazıcı ve kart okuyucu sürümlerinde farklı davranabilir; bu yüzden gerçek cihazlarla yürütülen, mümkün olduğunca otomatikleştirilmiş donanım döngüde testler, simülatör testlerini tamamlar.',
        'Terminal testinin önemli bir kısmı olağan dışı durumlarla ilgilidir. Bağlantı kesildiğinde, kağıt bittiğinde, para çekmecesi takıldığında veya kart okuyucu hata verdiğinde cihazın müşteriyi, hesabı ve kayıtları tutarlı bırakması gerekir.',
      ],
      bullets: [
        'Tuş takımı, PIN girişi, ekran yönlendirmeleri ve erişilebilirlik özellikleri her cihaz modelinde doğru çalışıyor mu?',
        'Fiş ve dekontlar doğru tutar, tarih, maskeli kart numarası ve işlem sonucunu gösteriyor mu?',
        'Çevrimdışı işlem, iletişim kesintisi ve yeniden bağlanma sonrası bekleyen işlemler doğru gönderiliyor mu?',
        'ATM’de para verilemediği veya kısmen verildiği durumlarda iptal ve hesap düzeltmesi doğru işliyor mu?',
        'Kart yutma, zaman aşımı ve işlem iptali senaryolarında cihaz ve kayıtlar tutarlı kalıyor mu?',
        'Uzaktan yazılım ve parametre güncellemesi sonrası regresyon paketi çalıştırılıyor mu?',
      ],
    },
    {
      heading: 'Sertifikasyon sürecine hazırlık kontrol listesi',
      paragraphs: [
        'Sertifikasyon testleri genellikle sınırlı zaman ve deneme hakkıyla yürütülür; hazırlıksız girilen bir test proje takvimini haftalarca kaydırabilir. Aşağıdaki kontroller şemadan ve operatörden bağımsız olarak iyi bir başlangıç noktasıdır; ayrıntılı gereksinimler için ilgili kuruluşun güncel dokümanlarına başvurun.',
      ],
      bullets: [
        'Hangi şema, ürün ve kanal için hangi test programının gerektiği yazılı olarak teyit edildi mi?',
        'Güncel test planı, test kartları ve beklenen sonuçlar ilgili kuruluştan temin edildi mi?',
        'Test edilecek donanım, yazılım sürümü ve parametre seti dondurulup kayıt altına alındı mı?',
        'İç ön sertifikasyon paketi tamamen ve hatasız koşuldu mu?',
        'Test ortamı bağlantıları, anahtarlar ve sertifikalar önceden doğrulandı mı?',
        'Log ve işlem kayıtları, hata durumunda analiz için yeterli ayrıntıda tutuluyor mu?',
        'Başarısız test sonrası düzeltme ve yeniden başvuru süreci planlandı mı?',
      ],
    },
  ],
};
