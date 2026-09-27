export default {
  slug: 'acik-bankacilik-ohvps',
  order: 13,
  title: 'Açık Bankacılık (ÖHVPS)',
  fullTitle: 'Ödeme Hizmetleri Veri Paylaşım Servisleri (ÖHVPS) — TCMB düzenlemeleri',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Hesap bilgisi ve ödeme emri başlatma hizmetlerinin API’ler üzerinden, müşteri rızasına dayalı ve güvenli biçimde sunulmasını düzenleyen Türkiye açık bankacılık çerçevesi.',
  topic: 'psd2',
  keyFacts: [
    { label: 'Yetkili kurum', value: 'Türkiye Cumhuriyet Merkez Bankası (TCMB)' },
    { label: 'Yasal dayanak', value: '6493 sayılı Kanun' },
  ],
  scope: [
    'Ödeme Hizmetleri Veri Paylaşım Servisleri (ÖHVPS), Türkiye’de açık bankacılığın düzenleyici adıdır. Çerçeve; müşterinin açık rızasıyla hesap bilgilerinin yetkili üçüncü taraflarla paylaşılmasını (hesap bilgisi hizmeti) ve müşteri adına ödeme emri başlatılmasını (ödeme emri başlatma hizmeti) kapsar. Dayanağı 6493 sayılı Kanun olup ayrıntılar TCMB’nin ödeme hizmeti sağlayıcılarının bilgi sistemleri ve veri paylaşım servislerine ilişkin düzenlemelerinde ve ilgili tebliğlerde yer alır.',
    'Hesabı tutan kuruluşlar (bankalar ve ilgili ödeme kuruluşları) ile bu hizmetleri sunan üçüncü taraflar, ortak bir API standardı ve merkezi bir yönlendirme altyapısı üzerinden haberleşir. Bu altyapının Bankalararası Kart Merkezi (BKM) tarafından GEÇİT adıyla işletildiği ve API standartlarının BKM ile sektör katılımıyla yayımlandığı bilinmektedir. Altyapının güncel rolü, standardın sürümleri ve katılım koşulları BKM ve TCMB kaynaklarından teyit edilmelidir.',
    'Test açısından ÖHVPS, klasik kanal testlerinden farklı bir yük getirir: kurum yalnızca kendi uygulamasını değil, standarda uyumlu bir API sağlayıcısı olarak dış taraflara karşı davranışını da doğrulamak zorundadır. Rıza yaşam döngüsü, kimlik doğrulama yönlendirmeleri, hata kodları, erişim belirteçlerinin geçerliliği ve performans taahhütleri test kapsamının merkezindedir.',
    'Uygulamada öne çıkan dört test alanından ilki olan API uyumluluk testleri, uç noktaların standartta tanımlanan istek ve yanıt yapılarına, zorunlu alanlara ve hata kodlarına uyduğunu doğrular. Rıza testleri; rızanın oluşturulması, kapsamının doğru uygulanması, süresinin dolması ve müşteri tarafından geri alınması sonrasında erişimin kesildiğini kontrol eder. Güvenlik testleri, belirteç kötüye kullanımı, yetki aşımı ve başka bir müşterinin verisine erişim gibi riskleri hedefler. Performans testleri ise üçüncü taraf trafiğinin müşteri kanallarını yavaşlatmadığını ve API’nin kendi yanıt süresi hedeflerini koruduğunu ölçer.',
  ],
  expects: [
    'API’lerin yayımlanan ÖHVPS standardına ve sürümüne uyumlu olması (uç noktalar, veri modelleri, hata kodları)',
    'Rızanın oluşturulması, sorgulanması, süresinin dolması ve iptal edilmesinin doğru işlenmesi',
    'Müşteri kimlik doğrulamasının hesabı tutan kuruluşun kanalında güvenli biçimde yapılması',
    'Yalnızca rıza kapsamındaki verinin, yalnızca yetkili tarafa paylaşılması',
    'API güvenliği: kimlik doğrulama, yetkilendirme, şifreli iletişim, kötüye kullanım ve hız sınırlaması',
    'Erişilebilirlik ve performans açısından API kanalının müşteri kanallarıyla tutarlı hizmet sunması',
    'API trafiğinin izlenmesi, kayıt altına alınması ve olayların yönetilmesi',
  ],
  testTypes: [
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'required',
      why: 'Standarda uyumlu API sunmak çerçevenin özüdür; uyumluluk ancak sözleşme ve senaryo testleriyle gösterilebilir.',
    },
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'Dış taraflara açılan API’ler yetkilendirme açıkları ve veri sızıntısı açısından düzenli güvenlik testine tabi tutulmalıdır.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Üçüncü taraf trafiğinin öngörülmesi zor olduğundan API yanıt süreleri ve kapasitesi yük altında ölçülmelidir.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'expected',
      why: 'Standart sürümleri değiştikçe uyumluluk setinin her sürümde otomatik koşulması regresyonu önler.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'supporting',
      why: 'İnternete açık API geçitleri hizmet dışı bırakma saldırılarının doğal hedefidir.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'supporting',
      why: 'Rıza onayı ve kimlik doğrulama yönlendirmeleri çoğunlukla bankanın mobil uygulamasında tamamlanır.',
    },
  ],
  officialSource: {
    label:
      'TCMB — Ödeme hizmeti sağlayıcılarının bilgi sistemleri ve ödeme hizmetleri alanında veri paylaşım servislerine ilişkin düzenlemeler; BKM — ÖHVPS API standartları',
    url: 'https://www.tcmb.gov.tr',
  },
};
