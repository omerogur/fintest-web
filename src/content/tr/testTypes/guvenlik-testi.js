export default {
  slug: 'guvenlik-testi',
  order: 6,
  title: 'Güvenlik Testi',
  titleEn: 'Security Testing',
  icon: 'ShieldCheck',
  summary:
    'Web, mobil ve API kanallarındaki zafiyetleri saldırgandan önce bulmak için statik, dinamik ve bileşen analizini sızma testleriyle birleştiren test disiplini.',
  product: null,
  topic: 'diger',
  what: [
    'Güvenlik testi; bir uygulamanın, API’nin veya altyapının yetkisiz erişime, veri sızıntısına, işlem manipülasyonuna ve hizmet kesintisine karşı ne kadar dirençli olduğunu sistematik olarak sınar. Bankacılıkta müşteri varlıkları, kimlik bilgileri ve ödeme talimatları doğrudan saldırı hedefi olduğu için güvenlik testi bir kalite faaliyetinden çok bir risk yönetimi aracıdır.',
    'Olgun bir program tek bir yıllık sızma testine dayanmaz. Geliştirme sırasında kaynak kod ve bağımlılık analizleri, test ortamında dinamik taramalar, canlıya çıkış öncesi uzman sızma testleri ve belirli aralıklarla gerçek saldırgan davranışını taklit eden tehdit odaklı testler birbirini tamamlar. OWASP ASVS (web ve API) ile OWASP MASVS (mobil) bu katmanlar için ortak bir doğrulama ölçütü sağlar; OWASP Top 10 ise en yaygın zafiyet sınıflarına dair farkındalık listesidir, tek başına bir test kapsamı değildir.',
    'Regülasyonlar da bu katmanlı yaklaşımı bekler. DORA, dijital operasyonel dayanıklılık testlerini bir program olarak ele alır ve belirli kuruluşlar için tehdit odaklı sızma testini (TLPT) öngörür. BDDK bilgi sistemleri düzenlemeleri bankalardan düzenli sızma testleri bekler; PCI DSS kart verisi ortamı için periyodik zafiyet taraması ve sızma testi ister. Ortak nokta, testlerin yetkin ve bağımsız kişilerce yürütülmesi ve bulguların kapanışının kanıtlanmasıdır.',
  ],
  risks: [
    'Kırık yetkilendirme nedeniyle bir müşterinin başka bir müşterinin hesap veya işlem verisine erişmesi (IDOR/BOLA).',
    'Kimlik doğrulama ve oturum yönetimi zaaflarıyla hesap ele geçirme ve yetkisiz para transferi.',
    'Enjeksiyon ve güvensiz serileştirme gibi zafiyetlerle arka uç sistemlere sızma.',
    'Açık kaynak bağımlılıklarındaki bilinen zafiyetlerin fark edilmeden canlıya taşınması.',
    'Mobil uygulamada cihazda güvensiz veri saklama, zayıf sertifika doğrulama veya tersine mühendisliğe açık iş mantığı.',
    'Yanlış yapılandırılmış bulut kaynakları, gizli anahtarların koda gömülmesi ve gereksiz açık servisler.',
    'Denetimde bulgu kapanışının ve test bağımsızlığının kanıtlanamaması nedeniyle uyum riski.',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'Dijital operasyonel dayanıklılık testi programı içinde zafiyet değerlendirmelerini ve belirlenen kuruluşlar için tehdit odaklı sızma testini (TLPT) öngörür.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Bankaların bilgi sistemleri ve elektronik bankacılık kanalları için düzenli, yetkin ekiplerce yapılan sızma testleri ve bulguların giderilmesi beklenir.',
    },
    {
      slug: 'pci-dss',
      note: 'Kart verisi ortamında periyodik iç ve dış zafiyet taraması, sızma testi ve güvenli yazılım geliştirme kontrollerini zorunlu tutar.',
    },
    {
      slug: 'iso-27001',
      note: 'Bilgi güvenliği yönetim sisteminde teknik zafiyet yönetimi ve güvenli geliştirme kontrollerinin etkinliği güvenlik testleriyle doğrulanır.',
    },
    {
      slug: 'psd2',
      note: 'Güçlü müşteri kimlik doğrulaması ve güvenli iletişim gerekliliklerinin uygulamada doğru çalıştığı güvenlik testleriyle gösterilir.',
    },
    {
      slug: 'kvkk',
      note: 'Kişisel verilerin korunması için alınması gereken teknik tedbirlerin etkinliği güvenlik testleriyle sınanır.',
    },
  ],
  approach: [
    {
      title: 'Varlık envanteri ve tehdit modelleme',
      text: 'Kanalları, API’leri, veri akışlarını ve üçüncü taraf bağlantılarını çıkarın; her biri için olası saldırgan senaryolarını ve iş etkisini belirleyin.',
    },
    {
      title: 'Doğrulama standardını seçin',
      text: 'Web ve API için OWASP ASVS, mobil için OWASP MASVS seviyelerini uygulamanın risk profiline göre belirleyin ve test kapsamını bu gereksinimlere bağlayın.',
    },
    {
      title: 'SAST ve SCA’yı geliştirme hattına ekleyin',
      text: 'Statik kod analizi ve yazılım bileşen analizi her derlemede çalışsın; kritik bulgular birleştirme veya sürüm onayını durdursun.',
    },
    {
      title: 'Test ortamında DAST ve API taraması',
      text: 'Kimlik doğrulamalı dinamik taramalarla çalışan uygulamayı ve API uç noktalarını düzenli olarak sınayın; yetkilendirme senaryolarını farklı kullanıcı rolleriyle test edin.',
    },
    {
      title: 'Uzman sızma testi',
      text: 'Büyük sürümler, yeni kanallar ve kritik değişiklikler öncesinde, iş mantığı istismarını da kapsayan manuel sızma testi yaptırın.',
    },
    {
      title: 'Tehdit odaklı testler',
      text: 'Kapsama giren kuruluşlarda, tehdit istihbaratına dayalı ve canlı sistemler üzerinde kontrollü yürütülen TLPT çalışmalarını düzenleyici çerçeveye uygun planlayın.',
    },
    {
      title: 'Bulgu yönetimi ve yeniden test',
      text: 'Bulguları risk derecesine göre önceliklendirin, kapanış sürelerini izleyin ve her düzeltmeyi yeniden testle doğrulayıp kanıtını saklayın.',
    },
  ],
  tools: [
    {
      category: 'Statik uygulama güvenlik testi (SAST) araçları',
      text: 'Kaynak kodu çalıştırmadan enjeksiyon, güvensiz kriptografi ve hatalı girdi işleme gibi kalıpları tespit eder.',
    },
    {
      category: 'Yazılım bileşen analizi (SCA) araçları',
      text: 'Açık kaynak bağımlılıklarını envanterler, bilinen zafiyetleri ve lisans risklerini raporlar; yazılım malzeme listesi (SBOM) üretimine destek olur.',
    },
    {
      category: 'Dinamik uygulama güvenlik testi (DAST) araçları',
      text: 'Çalışan uygulama ve API’lere saldırı benzeri istekler göndererek çalışma zamanı zafiyetlerini bulur.',
    },
    {
      category: 'Mobil uygulama güvenlik analiz araçları',
      text: 'Uygulama paketini statik ve dinamik olarak inceleyerek MASVS kontrollerine göre bulgu üretir.',
    },
    {
      category: 'Harici zafiyet tarama hizmetleri',
      text: 'İnternete açık altyapıyı periyodik olarak tarar; kart verisi ortamında onaylı tarama sağlayıcıları bu kategoriye girer.',
    },
    {
      category: 'Gizli bilgi ve yapılandırma tarayıcıları',
      text: 'Kod depolarında ve altyapı tanımlarında açıkta kalmış anahtar, parola ve hatalı bulut ayarlarını tespit eder.',
    },
  ],
  bestPractices: [
    'Sızma testlerini, geliştirme ekibinden bağımsız ve yetkinliği belgelenmiş test uzmanlarına yaptırın; bağımsızlığı denetimde gösterilebilir kılın.',
    'Kapsamı OWASP Top 10 ile sınırlamayın; ASVS ve MASVS gereksinimlerini ve bankaya özgü iş mantığı senaryolarını (limit aşımı, işlem tekrarı, yetki yükseltme) ekleyin.',
    'Otomatik taramaları her sürümde, uzman testlerini risk ve değişiklik büyüklüğüne göre planlayın.',
    'Bulgu kapanış sürelerini risk derecesine göre tanımlayın ve yönetim raporlarında izleyin.',
    'Canlı ortamda yapılacak testler için yazılı kapsam, iletişim planı ve acil durdurma prosedürü belirleyin.',
    'Üçüncü taraf ve dış kaynak sağlayıcıların sistemlerini de test programına veya sözleşmesel kanıt taleplerine dahil edin.',
  ],
  mistakes: [
    'Yılda bir kez yapılan sızma testini güvenlik testinin tamamı saymak.',
    'Otomatik tarayıcı raporunu uzman doğrulaması olmadan sızma testi raporu olarak sunmak.',
    'Yetkilendirme testlerini tek bir kullanıcı rolüyle yapıp yatay ve dikey yetki ihlallerini atlamak.',
    'Bulguları kapatmadan “kabul edilen risk” olarak işaretlemek ve bu kararı belgelememek.',
    'Mobil uygulamanın yalnızca arka uç API’lerini test edip istemci tarafındaki veri saklama ve bütünlük kontrollerini göz ardı etmek.',
  ],
};
