export default {
  slug: 'eaa',
  order: 9,
  title: 'Avrupa Erişilebilirlik Yasası (EAA)',
  fullTitle: 'European Accessibility Act — Direktif (AB) 2019/882',
  region: 'intl',
  kind: 'regulation',
  summary:
    'Tüketici bankacılığı hizmetleri ve e-ticaret dahil belirli ürün ve hizmetler için AB genelinde ortak erişilebilirlik gereksinimleri getiren direktif.',
  topic: 'wcag',
  keyFacts: [
    { label: 'Resmi numara', value: 'Direktif (AB) 2019/882' },
    { label: 'Uygulanma', value: '28 Haziran 2025' },
    { label: 'İlgili uyumlaştırılmış standart', value: 'EN 301 549' },
  ],
  scope: [
    'Avrupa Erişilebilirlik Yasası (European Accessibility Act, EAA), AB iç pazarında belirli ürün ve hizmetlerin erişilebilirlik gereksinimlerini uyumlaştırır. Direktif olduğu için her üye devlet kendi mevzuatına aktarır; denetim, yaptırım ve bazı ayrıntılar ülkeden ülkeye farklılık gösterebilir. Hizmetler için gereksinimler 28 Haziran 2025’ten itibaren uygulanmaktadır.',
    'Kapsamdaki hizmetler arasında tüketici bankacılığı hizmetleri, e-ticaret hizmetleri, elektronik iletişim hizmetleri, e-kitaplar ve yolcu taşımacılığına ilişkin bazı dijital hizmetler bulunur. Ürün tarafında ise ATM’ler, ödeme terminalleri ve bilet makineleri gibi self-servis terminaller ile genel amaçlı bilgisayar donanımı ve işletim sistemleri yer alır. Bankalar için bu, internet ve mobil bankacılık kanallarını, bu kanallardaki belgeleri ve müşteriyle etkileşime giren terminalleri kapsar.',
    'Direktif, gereksinimleri işlevsel düzeyde tanımlar; uyumlaştırılmış standartlara uyum ise uygunluk karinesi sağlar. Bilgi ve iletişim teknolojileri için Avrupa standardı EN 301 549, web ve mobil içerik bölümlerinde WCAG’e dayanır; bu nedenle pratikte WCAG AA seviyesi temel referans olarak kullanılır. Mikro işletmeler hizmet gereksinimlerinden muaftır; orantısız yük veya ürün ve hizmetin temel niteliğini değiştirme gerekçeleri ise belgelenerek ileri sürülebilir. Geçiş hükümleri de bulunduğundan, mevcut sözleşme ve terminaller için güncel metin ile ulusal mevzuat kontrol edilmelidir.',
    'Test ekipleri açısından EAA, erişilebilirliği tek seferlik bir proje olmaktan çıkarıp sürekli bir kalite gereksinimine dönüştürür. Her yeni sürümde erişilebilirlik kontrollerinin tanım-bitti (definition of done) kriterlerine dahil edilmesi, tasarım sistemindeki bileşenlerin erişilebilir biçimde doğrulanması ve yardımcı teknoloji kullanıcılarıyla yapılan testler olağan uygulamalardır. Ulusal piyasa gözetim otoritelerinin talepleri için kanıt niteliğinde kayıtların tutulması da önerilir.',
  ],
  expects: [
    'Web sitesi ve mobil uygulamaların algılanabilir, işletilebilir, anlaşılabilir ve sağlam biçimde sunulması.',
    'Hesap açma, kimlik doğrulama, ödeme ve müşteri iletişimi gibi temel akışların yardımcı teknolojilerle kullanılabilmesi.',
    'Tüketici bankacılığı hizmetlerinde bilgilerin anlaşılır biçimde verilmesi; kimlik tespiti, elektronik imza ve ödeme hizmetleri için erişilebilir yöntemler sunulması.',
    'Hizmetin erişilebilirlik gereksinimlerini nasıl karşıladığına ilişkin bilginin genel şartlar veya eşdeğer bir yolla kamuya açık tutulması.',
    'ATM ve ödeme terminalleri gibi self-servis ürünlerde birden fazla duyusal kanal ve bağımsız kullanım imkânı.',
    'Hizmette yapılan değişikliklerde erişilebilirliğin korunması ve uyumsuzlukların giderilmesi.',
    'Orantısız yük istisnası kullanılıyorsa değerlendirmenin belgelenmesi.',
  ],
  testTypes: [
    {
      slug: 'erisilebilirlik-testi',
      level: 'expected',
      why: 'Uyumlaştırılmış standarda uygunluğun gösterilmesi, olağan olarak EN 301 549 ve WCAG kriterlerine göre yapılan erişilebilirlik testleriyle sağlanır.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Mobil bankacılık uygulamaları kapsamda olduğundan platform erişilebilirlik özellikleri ve ekran okuyucu uyumu cihaz üzerinde test edilmelidir.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Sık yayın döngülerinde erişilebilirlik regresyonlarını erken yakalamaya yardımcı olur.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Erişilebilirlik bilgisinin kamuya açıklanması ve piyasa gözetimine yanıt için izlenebilir uyum kayıtları gerekir.',
    },
    {
      slug: 'uyumluluk-capraz-tarayici-testi',
      level: 'supporting',
      why: 'Hizmetin farklı cihaz, tarayıcı ve yardımcı teknolojilerde erişilebilir kalması uyumluluk testleriyle doğrulanır.',
    },
  ],
  officialSource: {
    label: 'Avrupa Parlamentosu ve Konseyi — Direktif (AB) 2019/882 (Ürün ve hizmetlere ilişkin erişilebilirlik gereksinimleri)',
    url: 'https://eur-lex.europa.eu/eli/dir/2019/882/oj',
  },
};
