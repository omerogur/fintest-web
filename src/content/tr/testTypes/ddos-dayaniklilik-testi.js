export default {
  slug: 'ddos-dayaniklilik-testi',
  order: 2,
  title: 'DDoS Dayanıklılık Testi',
  titleEn: 'DDoS Resilience Testing',
  icon: 'ShieldAlert',
  summary:
    'Dağıtık hizmet engelleme saldırılarına karşı kurulan koruma katmanlarının gerçekten çalıştığını, yetkili ve kontrollü saldırı simülasyonlarıyla doğrular.',
  product: 'ddos',
  topic: 'ddos',
  what: [
    'Dağıtık hizmet engelleme (Distributed Denial of Service – DDoS) saldırıları, çok sayıda kaynaktan üretilen trafikle bir hizmetin ağ bağlantısını, altyapı bileşenlerini veya uygulama kaynaklarını tüketerek meşru kullanıcıların erişimini engellemeyi amaçlar. Bankalar ve ödeme kuruluşları, kesintinin doğrudan müşteri ve itibar etkisi yarattığı kurumlar oldukları için bu saldırıların sık hedeflerindendir.',
    'DDoS dayanıklılık testi, kurumun koruma mimarisini (internet servis sağlayıcı filtreleri, temizleme/scrubbing hizmetleri, içerik dağıtım ağı, web uygulama güvenlik duvarı, yük dengeleyiciler ve uygulamanın kendisi) gerçekçi saldırı vektörleriyle sınar. Amaç sistemi çökertmek değil; saldırının ne zaman fark edildiğini, korumanın ne kadar sürede devreye girdiğini ve bu süre boyunca hizmetin hangi düzeyde sürdüğünü ölçmektir.',
    'Koruma hizmeti satın almak, korunuyor olmak anlamına gelmez. Yanlış eşik değerleri, eksik yönlendirme kuralları, doğrudan erişilebilir kalmış kaynak IP adresleri veya eskimiş iletişim prosedürleri ancak gerçek bir saldırıda ya da kontrollü bir testte ortaya çıkar. Kontrollü test, bu açıkları kurumun kendi seçtiği bir zamanda görmesini sağlar.',
  ],
  risks: [
    'Hacimsel saldırılarda internet bağlantı kapasitesinin dolması ve tüm dijital kanalların erişilemez hale gelmesi',
    'Protokol saldırılarıyla güvenlik duvarı, yük dengeleyici gibi durum tutan (stateful) cihazların tükenmesi',
    'Uygulama katmanı saldırılarının meşru trafiğe benzediği için geç fark edilmesi',
    'Koruma hizmetinin devreye girme süresinin beklenenden uzun olması',
    'Koruma devredeyken meşru müşteri trafiğinin de engellenmesi (yanlış pozitif)',
    'Kaynak sunucu adreslerinin açığa çıkması nedeniyle korumanın tamamen atlatılması',
    'Olay anında ISS, koruma sağlayıcı ve iç ekipler arasındaki iletişim ve eskalasyonun aksaması',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'DORA, finansal kuruluşlardan dijital operasyonel dayanıklılık testi programı yürütmelerini bekler; DDoS senaryoları kritik işlevlerin kesintiye dayanıklılığını göstermenin somut bir yoludur.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'BDDK bilgi sistemleri düzenlemesinin iş sürekliliği ve siber güvenlik beklentileri, hizmet engelleme saldırılarına karşı alınan önlemlerin etkinliğinin sınanmasıyla desteklenir.',
    },
    {
      slug: 'iso-27001',
      note: 'ISO/IEC 27001 kapsamındaki süreklilik ve ağ güvenliği kontrollerinin etkinliği DDoS testleriyle kanıtlanabilir.',
    },
    {
      slug: 'psd2',
      note: 'PSD2 kapsamındaki ödeme hizmetlerinin ve erişim arayüzlerinin sürekliliği, hizmet engelleme saldırılarına karşı dayanıklılığa bağlıdır.',
    },
  ],
  approach: [
    {
      title: 'Yazılı yetki ve kapsamı netleştirin',
      text: 'Testi yalnızca kurumun sahibi olduğu veya yazılı yetki aldığı varlıklara yönelik yapın; hedef IP ve alan adlarını, vektörleri, şiddet seviyelerini ve durdurma koşullarını imzalı bir kapsam belgesine bağlayın.',
    },
    {
      title: 'Paydaşları önceden koordine edin',
      text: 'İnternet servis sağlayıcıyı, temizleme hizmeti ve CDN sağlayıcısını, barındırma ve bulut sağlayıcılarını testten önce bilgilendirin; çoğu sağlayıcı test için önceden bildirim veya onay şartı arar.',
    },
    {
      title: 'Bakım penceresi ve geri dönüş planı belirleyin',
      text: 'Testi düşük trafikli ve iş birimlerince onaylanmış bir zaman aralığında planlayın; anında durdurma yetkisine sahip kişileri ve iletişim kanalını tanımlayın.',
    },
    {
      title: 'Vektörleri katmanlara göre seçin',
      text: 'Hacimsel (UDP ve ICMP flood), protokol (SYN ve ACK flood) ve uygulama katmanı (HTTP GET ve POST flood) saldırılarını ayrı ayrı ve düşük şiddetten başlayarak kademeli uygulayın.',
    },
    {
      title: 'Algılama ve mitigasyon süresini ölçün',
      text: 'Saldırının başlangıcı, algılanması, korumanın devreye girmesi ve hizmetin normale dönmesi arasındaki süreleri zaman damgalarıyla kaydedin.',
    },
    {
      title: 'Hizmet kalitesini eşzamanlı izleyin',
      text: 'Test sırasında dış noktalardan sentetik kullanıcı işlemleri koşturarak meşru müşterinin hizmeti ne ölçüde kullanabildiğini ölçün.',
    },
    {
      title: 'Bulguları kapatın ve yeniden test edin',
      text: 'Eşik, kural ve prosedür düzeltmelerini uyguladıktan sonra aynı senaryoları tekrarlayın; sonuçları dayanıklılık testi kayıtlarına ekleyin.',
    },
  ],
  tools: [
    {
      category: 'Bulut tabanlı DDoS simülasyon platformları',
      text: 'Farklı coğrafi konumlardan, tanımlı şiddet seviyelerinde ve durdurulabilir biçimde kontrollü saldırı trafiği üretir.',
    },
    {
      category: 'Dış sentetik izleme',
      text: 'Test süresince farklı noktalardan kritik müşteri işlemlerini tekrarlayarak hizmetin dışarıdan nasıl göründüğünü ölçer.',
    },
    {
      category: 'Ağ trafiği ve akış analizi',
      text: 'Gelen trafiğin hacmini, protokol dağılımını ve temizleme hizmetine yönlenip yönlenmediğini gösterir.',
    },
    {
      category: 'Koruma sağlayıcı yönetim konsolları',
      text: 'Temizleme ve CDN katmanında algılama, eşik ve kural tetiklenme kayıtlarını sunar; mitigasyon süresinin doğrulanmasında kullanılır.',
    },
    {
      category: 'Güvenlik olay yönetimi (SIEM)',
      text: 'Farklı katmanlardan gelen kayıtları ilişkilendirerek algılama ve alarm süreçlerinin çalışıp çalışmadığını gösterir.',
    },
  ],
  bestPractices: [
    'DDoS testini yılda bir kez yapılan bir etkinlik yerine, mimari değişikliklerden sonra tekrarlanan bir dayanıklılık programının parçası olarak ele alın.',
    'Uygulama katmanı senaryolarını gerçek iş akışlarına (giriş, bakiye sorgulama, ödeme) yakın kurun; bu saldırılar statik sayfalarla sınanamaz.',
    'Kaynak sunucuların yalnızca koruma katmanından gelen trafiği kabul ettiğini doğrulayın.',
    'Olay müdahale planını test sırasında gerçekten uygulayın; eskalasyon ve iletişim adımlarının süresini de ölçün.',
    'Her test için kapsam, yetki, zaman çizelgesi, metrikler ve alınan aksiyonları içeren denetime hazır bir rapor saklayın.',
    'Koruma sağlayıcının sözleşmedeki algılama ve müdahale taahhütlerini test sonuçlarıyla karşılaştırın.',
  ],
  mistakes: [
    'Yazılı yetki ve sağlayıcı koordinasyonu olmadan test başlatmak; bu hem hukuki risk hem de sağlayıcı tarafında engelleme doğurabilir',
    'Yalnızca hacimsel saldırıları test edip uygulama katmanı saldırılarını kapsam dışı bırakmak',
    'Koruma devrede olduğu için testin gereksiz olduğunu varsaymak',
    'Canlı yoğun saatlerde veya onaysız bir zaman aralığında test yapmak',
    'Başarıyı yalnızca “sistem ayakta kaldı” diye ölçüp mitigasyon süresini ve meşru kullanıcı etkisini kaydetmemek',
  ],
};
