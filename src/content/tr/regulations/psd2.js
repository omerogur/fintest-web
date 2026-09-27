export default {
  slug: 'psd2',
  order: 1,
  title: 'PSD2',
  fullTitle: 'Revised Payment Services Directive — (AB) 2015/2366',
  region: 'intl',
  kind: 'regulation',
  summary:
    'AB ödeme hizmetleri pazarını düzenleyen; güçlü müşteri kimlik doğrulaması, üçüncü taraf erişimi ve güvenlik gereksinimleriyle bankaların dijital kanallarını doğrudan etkileyen direktif.',
  topic: 'psd2',
  keyFacts: [
    { label: 'Resmi numara', value: 'Direktif (AB) 2015/2366' },
    { label: 'Üye devletlerde uygulanma', value: '13 Ocak 2018' },
    { label: 'SCA ve güvenli iletişim RTS', value: 'Komisyon Yetki Devri Tüzüğü (AB) 2018/389' },
    { label: 'RTS uygulanma', value: '14 Eylül 2019' },
  ],
  scope: [
    'PSD2 (İkinci Ödeme Hizmetleri Direktifi), Avrupa Birliği’nde ödeme hizmeti sağlayıcılarının faaliyetlerini, müşteri haklarını ve ödeme işlemlerinin güvenliğini düzenler. Direktif olduğu için her üye devlet kendi mevzuatına aktarır; bu nedenle uygulamada ülkeden ülkeye ayrıntı farkları görülebilir. Bankalar, elektronik para kuruluşları ve ödeme kuruluşları doğrudan kapsam içindedir.',
    'Direktifin bankacılık yazılımları açısından en görünür etkisi iki alandadır: güçlü müşteri kimlik doğrulaması (Strong Customer Authentication, SCA) ve lisanslı üçüncü taraf sağlayıcıların (hesap bilgisi ve ödeme başlatma hizmeti sağlayıcıları) müşterinin rızasıyla ödeme hesaplarına erişimi. Bu iki alanın teknik ayrıntıları, Avrupa Bankacılık Otoritesi (EBA) tarafından hazırlanan ve Komisyon tarafından kabul edilen düzenleyici teknik standartlarda (RTS) tanımlanmıştır.',
    'PSD2 ayrıca operasyonel ve güvenlik risklerinin yönetimini, büyük operasyonel veya güvenlik olaylarının yetkili otoriteye bildirilmesini ve bu konulardaki EBA rehberlerini kapsar. DORA’nın yürürlüğe girmesiyle, DORA kapsamındaki kuruluşlar için olay bildirimi çerçevesi büyük ölçüde DORA’ya taşınmıştır; kurumların hangi rejime tabi olduğunu güncel metinlerden teyit etmesi gerekir. AB’de revizyon süreci (PSD3 ve Ödeme Hizmetleri Tüzüğü önerileri) devam etmektedir.',
    'QA ekipleri için PSD2 uyumu, yalnızca işlevsel doğruluğun değil, güvenlik ve erişilebilirlik kanıtının da üretilmesi anlamına gelir. SCA akışları; başarılı doğrulama, hatalı deneme, oturum zaman aşımı, muafiyet uygulanan ve uygulanmayan işlemler gibi çok sayıda dal içerir ve her dalın beklenen davranışı belgelenmelidir. Üçüncü taraf erişim arayüzünde ise sürüm yönetimi, rıza (consent) yaşam döngüsü, yetki kapsamı ve hata kodlarının tutarlılığı test planının ayrı başlıkları olarak ele alınmalıdır. Bu testlerin sonuçları, denetim ve yetkili otorite taleplerinde başvurulabilecek biçimde saklanmalıdır.',
  ],
  expects: [
    'Uzaktan erişim, elektronik ödeme başlatma ve riskli işlemlerde bilgi, sahiplik ve biyometrik unsurlardan en az ikisine dayanan güçlü müşteri kimlik doğrulaması uygulanması.',
    'Uzaktan ödeme işlemlerinde kimlik doğrulama kodunun işlem tutarına ve alıcıya dinamik olarak bağlanması (dynamic linking).',
    'Üçüncü taraf sağlayıcılar için güvenli, belgelenmiş bir erişim arayüzü sunulması; özel arayüz (dedicated interface) tercih edildiğinde bunun müşteri arayüzüyle karşılaştırılabilir erişilebilirlik ve performansta çalışması.',
    'Üçüncü taraf sağlayıcıların bağlantı ve işlev testlerini yapabilmesi için bir test ortamının (testing facility) destekle birlikte sağlanması.',
    'SCA ve ilgili güvenlik önlemlerinin belgelenmesi, periyodik olarak test edilmesi, değerlendirilmesi ve denetlenmesi.',
    'Operasyonel ve güvenlik risklerini yöneten bir çerçeve kurulması ve büyük olayların yetkili otoriteye bildirilmesi.',
    'Muafiyetlerin (ör. düşük tutarlı veya düşük riskli işlemler) kurallara uygun şekilde ve izlenebilir biçimde uygulanması.',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'required',
      why: 'RTS, SCA ve güvenli iletişim önlemlerinin periyodik olarak test edilmesini, değerlendirilmesini ve denetlenmesini açıkça ister.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'expected',
      why: 'Üçüncü taraf erişim arayüzünün sözleşmeye, güvenlik gereksinimlerine ve hata senaryolarına uygunluğu en doğrudan API testleriyle doğrulanır.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Özel arayüzün müşteri kanallarıyla karşılaştırılabilir erişilebilirlik ve performans sunduğunu göstermek yük ve performans ölçümü gerektirir.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'SCA akışlarının büyük kısmı mobil uygulamalarda, cihaz bağlama ve biyometri gibi bileşenlerle çalışır.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'SCA senaryoları, muafiyet kuralları ve API sürüm değişiklikleri için regresyonun sürdürülebilir kalmasını sağlar.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Arayüz erişilebilirliği, hata oranları ve test kapsamı gibi göstergeler denetim ve raporlama için kanıt üretir.',
    },
  ],
  officialSource: {
    label:
      'Avrupa Parlamentosu ve Konseyi — Direktif (AB) 2015/2366; Komisyon Yetki Devri Tüzüğü (AB) 2018/389 (SCA ve güvenli iletişim RTS)',
    url: 'https://eur-lex.europa.eu/eli/dir/2015/2366/oj',
  },
};
