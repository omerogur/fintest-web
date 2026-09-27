export default {
  slug: 'dora',
  order: 2,
  title: 'DORA',
  fullTitle: 'Digital Operational Resilience Act — (AB) 2022/2554',
  region: 'intl',
  kind: 'regulation',
  summary:
    'AB finans sektöründe BİT (bilgi ve iletişim teknolojileri) risk yönetimini, olay bildirimini, dijital operasyonel dayanıklılık testlerini ve üçüncü taraf BİT riskini tek bir tüzükte toplayan düzenleme.',
  topic: 'dora',
  keyFacts: [
    { label: 'Resmi numara', value: 'Tüzük (AB) 2022/2554' },
    { label: 'Yürürlüğe giriş', value: '16 Ocak 2023' },
    { label: 'Uygulanma', value: '17 Ocak 2025' },
    { label: 'Eşlik eden direktif', value: 'Direktif (AB) 2022/2556' },
  ],
  scope: [
    'DORA (Dijital Operasyonel Dayanıklılık Tüzüğü), bankalar, ödeme ve elektronik para kuruluşları, yatırım kuruluşları, sigorta şirketleri ve kripto varlık hizmet sağlayıcıları dahil geniş bir finansal kuruluş yelpazesine uygulanır. Tüzük olduğu için üye devletlerde doğrudan uygulanır ve daha önce farklı rehberlere dağılmış BİT gereksinimlerini uyumlaştırır. Yükümlülükler orantılılık ilkesine göre kurumun büyüklüğü ve risk profiline göre ölçeklenir.',
    'Tüzük beş ana sütun etrafında kurgulanmıştır: BİT risk yönetimi çerçevesi, BİT kaynaklı olayların yönetimi, sınıflandırılması ve bildirimi, dijital operasyonel dayanıklılık testleri, üçüncü taraf BİT hizmet sağlayıcı riskinin yönetimi ve siber tehdit bilgisi paylaşımı. Ayrıntılar, Avrupa Denetim Otoriteleri (ESA’lar) tarafından hazırlanan düzenleyici ve uygulama teknik standartlarıyla tamamlanır.',
    'Yazılım kalitesi açısından DORA’nın en belirgin etkisi, testlerin bir “program” olarak ele alınmasıdır. Kritik veya önemli işlevleri destekleyen BİT sistemleri ve uygulamaları en az yılda bir uygun testlere tabi tutulmalıdır. Yetkili otoritelerce belirlenen önemli kuruluşlar ise en az üç yılda bir tehdit odaklı sızma testi (Threat-Led Penetration Testing, TLPT) yapmakla yükümlüdür. Ayrıca kritik BİT üçüncü taraf sağlayıcılar için AB düzeyinde bir gözetim çerçevesi kurulmuştur.',
    'Test ekipleri açısından DORA, dağınık yürütülen güvenlik, performans ve felaket kurtarma testlerinin tek bir risk temelli program altında planlanmasını, önceliklendirilmesini ve raporlanmasını gerektirir. Testlerin bağımsız iç veya dış tarafça yürütülmesi, bulguların sınıflandırılması ve giderilmesinin doğrulanması programın parçasıdır. Üçüncü taraf sağlayıcıların sunduğu hizmetlerin de test kapsamına dahil edilmesi, sözleşmelerde test ve denetim haklarının tanımlanmasını gerektirebilir. Ayrıntılı gereksinimler teknik standartlarla tamamlandığından, kurumların güncel metinleri ve yetkili otoritelerin rehberlerini düzenli olarak takip etmesi önerilir.',
  ],
  expects: [
    'Yönetim organının sorumluluğunda, belgelenmiş ve düzenli gözden geçirilen bir BİT risk yönetimi çerçevesi.',
    'BİT kaynaklı olayların tespiti, sınıflandırılması ve büyük olayların yetkili otoriteye belirlenen süreç ve formatta bildirilmesi.',
    'Risk temelli bir dijital operasyonel dayanıklılık test programı; zafiyet değerlendirmeleri, ağ güvenliği değerlendirmeleri, kaynak kod incelemeleri, senaryo tabanlı testler, performans testleri, uçtan uca testler ve sızma testleri gibi araçları içermesi.',
    'Kritik veya önemli işlevleri destekleyen sistemlerin en az yılda bir test edilmesi ve bulguların önceliklendirilerek giderilmesi.',
    'Önemli kuruluşlar için gerçek üretim sistemleri üzerinde, en az üç yılda bir tehdit odaklı sızma testi (TLPT).',
    'Üçüncü taraf BİT hizmet sözleşmelerinin bilgi kaydında (register of information) tutulması, sözleşmelerde asgari hükümlerin bulunması ve çıkış stratejileri.',
    'İş sürekliliği ve felaket kurtarma planlarının düzenli olarak test edilmesi.',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'required',
      why: 'Tüzük; zafiyet değerlendirmesi, sızma testi ve önemli kuruluşlar için TLPT’yi test programının açık unsurları olarak sayar.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'expected',
      why: 'Hizmet kesintisi senaryolarına karşı dayanıklılığın kanıtlanması, senaryo tabanlı testlerin olağan bir parçasıdır.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Performans testleri test programında örnek olarak anılır; kapasite ve dayanıklılık hedeflerinin kanıtı bu testlerle üretilir.',
    },
    {
      slug: 'core-banking-testleri',
      level: 'expected',
      why: 'Kritik veya önemli işlevlerin çoğu çekirdek bankacılık sistemlerine dayandığından uçtan uca ve kurtarma testleri burada yoğunlaşır.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'supporting',
      why: 'Üçüncü taraf ve dış servis entegrasyonlarının arıza ve gecikme davranışını doğrulamaya yardımcı olur.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Yıllık test döngüsünü ve değişiklik sonrası regresyonu tekrarlanabilir hale getirir.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Bulguların sınıflandırılması, giderilme takibi ve yönetim organına raporlama için izlenebilir veri sağlar.',
    },
  ],
  officialSource: {
    label:
      'Avrupa Parlamentosu ve Konseyi — Tüzük (AB) 2022/2554 (Finans Sektörü için Dijital Operasyonel Dayanıklılık)',
    url: 'https://eur-lex.europa.eu/eli/reg/2022/2554/oj',
  },
};
