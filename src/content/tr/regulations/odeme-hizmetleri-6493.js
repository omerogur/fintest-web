export default {
  slug: 'odeme-hizmetleri-6493',
  order: 12,
  title: '6493 sayılı Kanun',
  fullTitle:
    '6493 sayılı Ödeme ve Menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve Elektronik Para Kuruluşları Hakkında Kanun',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Türkiye’de ödeme hizmetlerini, elektronik para ihracını ve ödeme sistemlerini düzenleyen temel kanun; ödeme ve elektronik para kuruluşlarında yetkili kurum TCMB’dir.',
  topic: 'psd2',
  keyFacts: [
    { label: 'Kanun', value: '6493 sayılı Kanun (2013)' },
    { label: 'Yetkili kurum', value: 'Türkiye Cumhuriyet Merkez Bankası (TCMB)' },
    { label: 'Yetki devri', value: '7192 sayılı Kanun ile yapılan değişiklik (2019)' },
  ],
  scope: [
    '6493 sayılı Kanun; ödeme sistemlerini, ödeme hizmetlerini, ödeme kuruluşlarını ve elektronik para kuruluşlarını tek çatı altında düzenler. Para transferi, kart ile ödeme, fatura ödemesi, elektronik para ihracı gibi hizmetlerin hangi koşullarda ve hangi izinle sunulabileceğini belirler. Kanunun yaklaşımı, AB’deki ödeme hizmetleri düzenlemelerine benzer biçimde kullanıcı fonlarının korunması, şeffaflık ve işlem güvenliği üzerine kuruludur.',
    '2019 yılında 7192 sayılı Kanun ile yapılan değişiklikle ödeme ve elektronik para kuruluşlarına ilişkin düzenleme ve denetim yetkisi BDDK’dan TCMB’ye geçmiştir. Bu tarihten sonra TCMB, ödeme hizmetleri ve elektronik para ihracına, ödeme hizmeti sağlayıcılarının bilgi sistemlerine ve veri paylaşım servislerine ilişkin ikincil düzenlemeleri yayımlamıştır. Bankalar da ödeme hizmeti sunduklarında bu çerçevenin ilgili hükümlerine tabidir; BDDK düzenlemeleriyle birlikte değerlendirilmelidir.',
    'Test ekipleri açısından kanun ve TCMB düzenlemeleri; işlem bütünlüğü, müşteri kimlik doğrulaması, bilgi sistemleri güvenliği, olay yönetimi ve hizmet sürekliliği gibi başlıklarda somut beklentiler doğurur. Lisans başvurusu ve sonrasındaki denetimlerde bilgi sistemlerinin yeterliliğinin gösterilmesi beklenir. Ayrıntılı yükümlülükler ve olası değişiklikler için TCMB’nin güncel mevzuat sayfası esas alınmalıdır.',
    'Ödeme alanında test tasarımı, “işlem başarılı oldu mu” sorusunun ötesine geçmelidir. Zaman aşımı, ağ kesintisi, tekrar gönderilen istekler, kısmi iadeler ve gün sonu mutabakatı gibi durumlar, müşteri fonlarının doğru kaydedilmesini doğrudan etkiler. Ödeme ve elektronik para kuruluşları çoğu zaman hızlı sürüm döngüleriyle çalıştığından, bu senaryoların otomatik regresyon setine alınması ve her sürümde koşulması önemlidir. Güçlü müşteri kimlik doğrulaması ve dolandırıcılık kontrollerinin kullanıcı deneyimini bozmadan çalıştığı da gerçek cihaz ve kanal testleriyle doğrulanmalıdır.',
  ],
  expects: [
    'Ödeme işlemlerinin doğru, eksiksiz ve mükerrer olmadan işlenmesi; mutabakatın güvence altına alınması',
    'Müşteri kimlik doğrulamasının ve işlem onay akışlarının güvenli biçimde tasarlanması',
    'Bilgi sistemlerinin güvenlik, erişim yönetimi ve kayıt tutma açısından TCMB düzenlemelerine uygun olması',
    'Kullanıcı fonlarının korunmasına ilişkin kuralların sistemlerde doğru uygulanması',
    'Operasyonel ve güvenlik olaylarının tespit edilmesi, yönetilmesi ve gerektiğinde bildirilmesi',
    'Hizmet sürekliliği ve felaket kurtarma düzenlerinin kurulması ve test edilmesi',
    'Dış hizmet alımlarında risklerin değerlendirilmesi ve sorumluluğun kurumda kalması',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'Bilgi sistemleri güvenliği beklentileri, sızma ve zafiyet testleriyle düzenli olarak doğrulanmadıkça gösterilemez.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'expected',
      why: 'Ödeme hizmetlerinin büyük bölümü API üzerinden sunulduğundan sözleşme, hata ve yetkilendirme davranışlarının test edilmesi gerekir.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Ödeme trafiğinin yoğunlaştığı dönemlerde işlem sürelerinin ve kapasitenin korunması ölçümle doğrulanmalıdır.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Ödeme akışlarında sık değişen kurallar, regresyonun otomatik ve tekrarlanabilir biçimde kontrol edilmesini kolaylaştırır.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'supporting',
      why: 'Elektronik para ve cüzdan hizmetlerinin önemli bir kısmı mobil kanaldan sunulur.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'supporting',
      why: 'Hizmet sürekliliği beklentisi, dışa açık ödeme kanallarının hizmet dışı bırakma saldırılarına dayanıklılığını da kapsar.',
    },
    {
      slug: 'is-surekliligi-felaket-kurtarma-testi',
      level: 'required',
      why: 'TCMB tebliği, bilgi sistemleri süreklilik planının en az yılda bir test edilmesini ve bir tam iş gününün ikincil merkezden yürütülmesini öngörür (güncel metne başvurun).',
    },
    {
      slug: 'aml-kyc-dolandiricilik-testi',
      level: 'expected',
      why: 'TCMB tebliğine göre uzaktan kimlik tespiti ve müşteri edinimi süreçleri en az yılda iki kez test edilmelidir.',
    },
    {
      slug: 'odeme-kart-sertifikasyon-testi',
      level: 'expected',
      why: 'Ödeme hizmetlerinin ödeme sistemleri ve kart altyapılarıyla entegrasyonu uçtan uca doğrulanmalıdır.',
    },
  ],
  officialSource: {
    label:
      'TBMM / Resmî Gazete — 6493 sayılı Kanun; TCMB — ödeme hizmetleri, elektronik para ve ödeme hizmeti sağlayıcılarının bilgi sistemlerine ilişkin düzenlemeler',
    url: 'https://www.tcmb.gov.tr',
  },
};
