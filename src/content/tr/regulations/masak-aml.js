export default {
  slug: 'masak-aml',
  order: 16,
  title: 'MASAK ve Suç Gelirlerinin Aklanmasının Önlenmesi',
  shortTitle: 'MASAK / AML',
  fullTitle:
    '5549 sayılı Suç Gelirlerinin Aklanmasının Önlenmesi Hakkında Kanun ve ilgili MASAK düzenlemeleri',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Bankalar ve ödeme kuruluşları dahil yükümlülere müşterinin tanınması, şüpheli işlem bildirimi, uyum programı ve kayıt saklama yükümlülükleri getiren suç gelirlerinin aklanmasının önlenmesi çerçevesi.',
  topic: 'amlkyc',
  keyFacts: [
    { label: 'Kanun', value: '5549 sayılı Kanun (2006)' },
    { label: 'Denetim otoritesi', value: 'Mali Suçları Araştırma Kurulu (MASAK)' },
  ],
  scope: [
    '5549 sayılı Kanun ve buna dayanan yönetmelik ve tebliğler, suç gelirlerinin aklanmasının ve terörün finansmanının önlenmesine yönelik yükümlülükleri düzenler. Bankalar, ödeme kuruluşları ve elektronik para kuruluşları bu düzenlemeler kapsamındaki yükümlüler arasındadır. Mali Suçları Araştırma Kurulu (MASAK), çerçevenin uygulanmasından ve bildirimlerin alınmasından sorumlu kurumdur.',
    'Temel yükümlülükler genel olarak şu başlıklarda toplanır: müşterinin tanınması (kimlik tespiti ve doğrulaması, gerektiğinde gerçek faydalanıcının belirlenmesi), şüpheli işlemlerin tespiti ve MASAK’a bildirimi, risk temelli bir uyum programının kurulması, işlemlerin sürekli izlenmesi ve kontrolü ile belge ve kayıtların belirlenen süre boyunca saklanması. Eşikler, süreler ve bildirim usulleri ikincil düzenlemelerde ayrıntılandırıldığından güncel metinler esas alınmalıdır.',
    'Bu yükümlülüklerin büyük bölümü bilgi sistemleri üzerinden yerine getirilir: müşteri kabul akışları, yaptırım ve liste taramaları, işlem izleme senaryoları ve bildirim altyapısı birer yazılım bileşenidir. Uzaktan müşteri edinimi ve kimlik doğrulamaya ilişkin kurallar ise BDDK ve TCMB’nin ikincil düzenlemelerinde yer alır; kapsam ve teknik şartlar için ilgili kurumların güncel düzenlemelerine başvurulmalıdır. Test açısından amaç, kuralların doğru uygulandığını ve şüpheli durumların sistem tarafından gözden kaçırılmadığını kanıtlamaktır.',
    'Test ekipleri açısından bu alanın zorluğu, hem kaçırılan vakaların hem de gereksiz alarmların maliyetli olmasıdır. Tarama ve izleme kuralları, bilinen senaryoları temsil eden test verisiyle, sınır değerlerle ve isim yazım farklılıklarıyla sistematik olarak sınanmalıdır. Kural eşikleri veya liste kaynakları değiştiğinde regresyon testi yapılması ve sonuçların uyum birimiyle paylaşılması, denetimde değişikliğin kontrollü yapıldığını göstermenin olağan yoludur. Test ortamlarında gerçek müşteri ve işlem verisi yerine maskelenmiş veya sentetik veri kullanılmalıdır.',
    'Ayrıntılı yükümlülükler, yükümlü grubuna ve faaliyet türüne göre farklılaşabilir ve ikincil düzenlemelerle sık güncellenir. Bu nedenle kurumların MASAK’ın yayımladığı güncel düzenleme ve rehberleri ile BDDK ve TCMB düzenlemelerini birlikte takip etmesi önerilir. Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır ve hukuki danışmanlık niteliği taşımaz.',
  ],
  expects: [
    'Müşteri kabul ve kimlik doğrulama akışlarının düzenlemelerdeki kimlik tespiti gerekliliklerini eksiksiz uygulaması',
    'Yaptırım ve liste taramalarının isim varyasyonları ve güncel listelerle doğru çalışması',
    'İşlem izleme senaryolarının belirlenen risk göstergelerini güvenilir biçimde tespit etmesi',
    'Şüpheli işlem bildirim sürecinin doğru, eksiksiz ve zamanında işleyebilmesi',
    'Risk temelli uyum programı kapsamında izleme ve kontrol faaliyetlerinin belgelenmesi',
    'Müşteri ve işlem kayıtlarının belirlenen süre boyunca bütünlüğü korunarak saklanması',
    'Kural ve senaryo değişikliklerinin kontrollü biçimde test edilerek devreye alınması',
  ],
  testTypes: [
    {
      slug: 'aml-kyc-dolandiricilik-testi',
      level: 'expected',
      why: 'Müşteri kabul, liste tarama ve işlem izleme kurallarının doğruluğu bu testlerle kanıtlanır.',
    },
    {
      slug: 'veri-raporlama-testi',
      level: 'expected',
      why: 'İzleme ve bildirimler doğru ve eksiksiz işlem verisine dayandığından veri hatlarının ve kayıt saklamanın testi gerekir.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Senaryo kapsamı, yanlış alarm oranı ve test sonuçlarının izlenmesi uyum programına kanıt sağlar.',
    },
  ],
  officialSource: {
    label:
      'MASAK — Mali Suçları Araştırma Kurulu; 5549 sayılı Kanun ve ilgili yönetmelik, tebliğ ve rehberler',
    url: 'https://masak.hmb.gov.tr',
  },
};
