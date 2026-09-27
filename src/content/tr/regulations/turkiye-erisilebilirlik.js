export default {
  slug: 'turkiye-erisilebilirlik',
  order: 15,
  title: 'Türkiye’de Dijital Erişilebilirlik',
  fullTitle: '5378 sayılı Engelliler Hakkında Kanun ve web/mobil erişilebilirliğe ilişkin ikincil düzenlemeler',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Engelli bireylerin hizmetlere erişimini güvence altına alan kanun ve dijital kanalların erişilebilirliğine yönelik, WCAG ölçütlerine dayanan ulusal düzenlemeler.',
  topic: 'wcag',
  keyFacts: [
    { label: 'Kanun', value: '5378 sayılı Engelliler Hakkında Kanun (2005)' },
    { label: 'Sorumlu bakanlık', value: 'Aile ve Sosyal Hizmetler Bakanlığı' },
  ],
  scope: [
    '5378 sayılı Engelliler Hakkında Kanun, engelli bireylerin hizmetlere diğer bireylerle eşit koşullarda erişebilmesini temel bir ilke olarak belirler ve erişilebilirlik yükümlülüklerinin dayanağını oluşturur. Kanunun ilk halinde ağırlık fiziksel çevre ve ulaşımdaydı; zaman içinde bilgi ve iletişim teknolojilerinin erişilebilirliği de gündemin merkezine yerleşti. Bu alandaki politika ve düzenlemelerden Aile ve Sosyal Hizmetler Bakanlığı sorumludur.',
    'Son yıllarda web siteleri ve mobil uygulamaların erişilebilirliğine yönelik ikincil düzenleme, rehber ve belgelendirme çalışmaları yayımlandığı; bunların uluslararası WCAG ölçütlerine atıf yaptığı bilinmektedir. Ancak hangi kurumların kapsama girdiği, hangi WCAG sürüm ve seviyesinin esas alındığı, uyum süreleri ve denetim usulü gibi ayrıntılar bu sayfada kesin olarak verilmemektedir. Güncel yükümlülükler için Bakanlığın ve Resmî Gazete’nin güncel metinleri mutlaka kontrol edilmelidir.',
    'Bankacılık sektörü için konu yalnızca yasal uyum meselesi değildir. İnternet ve mobil bankacılık, çoğu müşteri için bankaya erişimin ana yoludur; ekran okuyucu kullanan, görme veya motor engeli bulunan ya da yaşa bağlı sınırlamaları olan müşteriler bu kanalları kullanamadığında temel bankacılık hizmetinden yararlanamaz. Yurt dışında faaliyet gösteren veya AB müşterilerine hizmet veren kurumlar için Avrupa Erişilebilirlik Yasası (EAA) da ayrıca değerlendirilmelidir.',
    'Ulusal düzenlemenin ayrıntıları netleşene kadar bile WCAG’in güncel sürümünü AA seviyesinde hedeflemek, bankalar için savunulabilir ve yaygın bir başlangıç noktasıdır. Test tarafında bu; otomatik tarama araçlarıyla hızlı kontrol, uzman incelemesiyle bağlamsal değerlendirme ve ekran okuyucu gibi yardımcı teknolojilerle gerçek kullanım testinin bir arada yürütülmesi demektir; otomatik araçlar ölçütlerin yalnızca bir bölümünü yakalayabilir. Tek seferlik denetim yerine erişilebilirliği her sürümde kontrol edilen bir kalite kapısına dönüştürmek, sonradan yapılan pahalı düzeltmeleri azaltır.',
  ],
  expects: [
    'İnternet ve mobil bankacılık kanallarının WCAG ölçütleri esas alınarak tasarlanması ve test edilmesi',
    'Giriş, kimlik doğrulama, para transferi ve başvuru gibi kritik akışların yardımcı teknolojilerle tamamlanabilmesi',
    'Erişilebilirlik kontrollerinin tasarımdan itibaren sürece dahil edilmesi; otomatik taramaların uzman incelemesi ve gerçek yardımcı teknoloji testleriyle desteklenmesi',
    'Bulguların önceliklendirilmesi, giderilmesi ve düzenli yeniden denetimle takip edilmesi',
    'Kimlik doğrulama adımlarında (tek kullanımlık şifre, zaman sınırlı ekranlar, görsel doğrulama) alternatif ve erişilebilir yolların sunulması',
    'PDF dekont, hesap özeti ve sözleşme gibi dijital belgelerin de erişilebilirlik açısından değerlendirilmesi',
    'Güncel ulusal düzenlemelerin ve kapsam kararlarının hukuk ve uyum birimlerince izlenmesi',
  ],
  testTypes: [
    {
      slug: 'erisilebilirlik-testi',
      level: 'expected',
      why: 'Dijital kanalların WCAG ölçütlerine uygunluğu ancak otomatik tarama ve uzman incelemesiyle gösterilebilir.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Mobil bankacılıkta ekran okuyucu, yazı boyutu ve dokunma hedefi gibi kontroller gerçek cihazlarda doğrulanmalıdır.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Otomatik erişilebilirlik kontrollerinin regresyon setine eklenmesi yeni sürümlerde gerilemeyi erken yakalar.',
    },
  ],
  officialSource: {
    label:
      'T.C. Aile ve Sosyal Hizmetler Bakanlığı — 5378 sayılı Engelliler Hakkında Kanun ve dijital erişilebilirliğe ilişkin düzenlemeler',
    url: 'https://www.mevzuat.gov.tr',
  },
};
