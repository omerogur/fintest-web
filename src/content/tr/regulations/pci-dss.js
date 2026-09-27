export default {
  slug: 'pci-dss',
  order: 3,
  title: 'PCI DSS',
  fullTitle: 'Payment Card Industry Data Security Standard — v4.0 / v4.0.1',
  region: 'intl',
  kind: 'standard',
  summary:
    'Kart hamili verisini saklayan, işleyen veya ileten tüm kuruluşlar için kart şemalarının ortak olarak benimsediği, test ve doğrulama ağırlıklı veri güvenliği standardı.',
  topic: 'diger',
  keyFacts: [
    { label: 'Yayımlayan', value: 'PCI Security Standards Council (PCI SSC)' },
    { label: 'Güncel ana sürüm', value: 'v4.0 (Mart 2022), v4.0.1 (Haziran 2024)' },
    { label: 'v3.2.1’in emekliye ayrılması', value: '31 Mart 2024' },
    { label: 'İleri tarihli gereksinimlerin zorunlu hale gelmesi', value: '31 Mart 2025' },
    { label: 'Ana gereksinim sayısı', value: '12' },
  ],
  scope: [
    'PCI DSS, kart ödeme ekosisteminde kart hamili verisinin (kart numarası gibi) ve hassas kimlik doğrulama verisinin korunması için asgari teknik ve operasyonel gereksinimleri tanımlar. Standart, büyük kart şemalarının kurduğu PCI Security Standards Council tarafından yayımlanır; uyum yükümlülüğü ise kart şemaları ve edinen bankalarla yapılan sözleşmeler üzerinden doğar. Kart çıkaran bankalar, üye iş yeri hizmeti veren kuruluşlar, işlemciler ve hizmet sağlayıcılar kapsamdadır.',
    'Kapsam, kart hamili veri ortamı (Cardholder Data Environment, CDE) ve bu ortama bağlanan veya güvenliğini etkileyebilen sistemlerle belirlenir. Ağ segmentasyonu kapsamı daraltabilir; ancak segmentasyonun etkinliği de test edilerek doğrulanmalıdır. Bu nedenle kapsam belirleme, uyum çalışmasının ilk ve en kritik adımıdır.',
    'v4.0 ile birlikte gereksinimlerin güvenlik hedefi üzerinden tanımlanması, kurumların aynı hedefe farklı yollarla ulaşmasına imkân veren özelleştirilmiş yaklaşım (customized approach), hedefli risk analizleri ve daha güçlü kimlik doğrulama beklentileri öne çıkmıştır. Standart 12 ana gereksinim altında toplanır; bunların arasında güvenli sistem ve yazılım geliştirme ile sistem ve ağ güvenliğinin düzenli olarak test edilmesi doğrudan yazılım kalitesi ekiplerini ilgilendirir.',
    'Uyumun doğrulanması, kuruluşun işlem hacmine ve rolüne göre nitelikli güvenlik değerlendiricisi (QSA) tarafından yapılan yerinde değerlendirme veya öz değerlendirme anketi (SAQ) ile yapılır; hangi yöntemin geçerli olduğunu kart şemaları ve edinen banka belirler. Test ekipleri için pratik sonuç, güvenlik testlerinin tek seferlik bir denetim hazırlığı değil, yıl boyunca süren ve kanıt üreten bir faaliyet olmasıdır. Kart verisine dokunan her yeni özellik veya altyapı değişikliği, kapsam ve test planı açısından yeniden değerlendirilmelidir.',
  ],
  expects: [
    'Kart hamili veri ortamının ve bağlı sistemlerin kapsamının belgelenmesi ve düzenli olarak teyit edilmesi.',
    'Güvenli yazılım geliştirme süreçleri; özel yazılımların üretime alınmadan önce zafiyetlere karşı incelenmesi ve web uygulamalarının yaygın saldırılara karşı korunması.',
    'İç ve dış zafiyet taramalarının düzenli yapılması; dış taramaların onaylı tarama sağlayıcıları (ASV) tarafından gerçekleştirilmesi.',
    'İç ve dış sızma testlerinin tanımlı bir metodolojiyle, düzenli aralıklarla ve önemli değişikliklerden sonra yapılması; segmentasyon kontrollerinin de test edilmesi.',
    'Kart verisinin saklanmasının en aza indirilmesi, saklanan verinin okunamaz hale getirilmesi ve iletimde güçlü kriptografi kullanılması.',
    'Kart verisine erişimin iş gereksinimiyle sınırlandırılması, çok faktörlü kimlik doğrulama ve erişimlerin kayıt altına alınıp izlenmesi.',
    'Test ortamlarında gerçek kart verisi kullanımının engellenmesi ve test verisinin üretime geçmeden önce temizlenmesi.',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'required',
      why: 'Standart; zafiyet taramalarını, sızma testlerini ve segmentasyon testlerini açık ve periyodik gereksinimler olarak tanımlar.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'expected',
      why: 'Kart verisini taşıyan servislerin yetkilendirme, girdi doğrulama ve veri maskeleme davranışı API düzeyinde doğrulanır.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Kart bilgisi giren veya gösteren mobil uygulamalarda güvenli saklama, iletim ve ekran maskeleme kontrolleri test edilmelidir.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Güvenlik kontrollerinin her sürümde yeniden doğrulanmasını ve değişiklik sonrası regresyonu kolaylaştırır.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Bulguların giderilme süreleri ve tekrar test sonuçları, değerlendirme (assessment) sırasında kanıt olarak kullanılır.',
    },
  ],
  officialSource: {
    label: 'PCI Security Standards Council — PCI DSS v4.0.1 (Requirements and Testing Procedures)',
    url: 'https://www.pcisecuritystandards.org',
  },
};
