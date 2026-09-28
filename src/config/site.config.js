// Dile bağlı olmayan site bilgileri. Metinler (ürün açıklamaları, sloganlar, konu adları)
// her dil için src/locales/<dil>/common.json dosyasında.
export const SITE = {
  // Yayındaki adres (ör. https://fintest.example.com). Boşsa tarayıcıdaki adres kullanılır; site haritası için gereklidir.
  siteUrl: '',
  // Sunum modu: false iken robots.txt taramayı kapatır ve site haritası üretilmez. Yayına alırken true yapın.
  indexing: false,

  partner: {
    name: 'RabbitQA',
    url: 'https://rabbitqa.com',
  },

  // Toplantı talepleri bu adrese e-posta taslağı olarak gider.
  contactEmail: 'oogur348@gmail.com',
  // İleride bir form servisi bağlanırsa adresini buraya yazın (ör. Formspree). Boşsa mailto kullanılır.
  formEndpoint: '',

  // Mambu kullanan kurum örneği (metni: locales → site.clientNote). false yapılırsa hiçbir dilde görünmez.
  showClientReference: true,

  // Ürün anahtarları ve varsa dış bağlantıları. Ad, tür ve açıklama: locales → products.<anahtar>
  products: {
    ddos: { url: 'https://ddosphere.com' },
    performance: {},
    automation: {},
    mobilehub: {},
    analyzer: {},
    accessibility: {},
    corebanking: {},
    testmanagement: {},
    datacrate: {},
    browserhub: {},
  },
};

// Toplantı formundaki konu seçenekleri; etiketler locales → topics.<id>. Sayfalar ?konu=<id> ile önceden seçili getirir.
export const TOPIC_IDS = ['psd2', 'dora', 'bddk', 'wcag', 'performans', 'ddos', 'otomasyon', 'mobil', 'corebanking', 'bcpdr', 'odeme', 'uat', 'amlkyc', 'ai', 'veri', 'diger'];
