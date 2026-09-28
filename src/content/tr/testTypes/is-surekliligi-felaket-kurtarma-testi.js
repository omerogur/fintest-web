export default {
  slug: 'is-surekliligi-felaket-kurtarma-testi',
  order: 10,
  title: 'İş Sürekliliği ve Felaket Kurtarma Testi',
  titleEn: 'Business Continuity & Disaster Recovery Testing',
  icon: 'LifeBuoy',
  summary:
    'Kritik bankacılık hizmetlerinin kesinti, siber saldırı veya felaket anında ikincil merkezden, hedeflenen sürede ve kabul edilebilir veri kaybıyla sürdürülebildiğini kanıtlayan test disiplini.',
  product: null,
  topic: 'bcpdr',
  what: [
    'İş sürekliliği ve felaket kurtarma testi; bir bankanın kritik hizmetlerini veri merkezi kaybı, altyapı arızası, siber saldırı veya kilit bir tedarikçinin devre dışı kalması gibi durumlarda sürdürüp sürdüremeyeceğini sınar. Kâğıt üzerinde iyi görünen bir plan, gerçek bir geçişte eksik bir bağımlılık, güncellenmemiş bir prosedür veya ulaşılamayan bir sorumlu yüzünden çalışmayabilir. Testin amacı bu boşlukları kriz anından önce ortaya çıkarmaktır.',
    'Kapsam yalnızca teknik geçişle sınırlı değildir. İş sürekliliği planı (BCP) süreçleri, insanları ve iletişimi; felaket kurtarma planı (DRP) ise sistemlerin ve verinin geri getirilmesini ele alır. Olgun bir program masa başı tatbikatlardan (tabletop), bileşen bazlı geri yükleme testlerine, ikincil merkeze kontrollü geçiş (switchover) ve gerçek kesintiyi canlandıran tam geçiş (failover) testlerine kadar kademeli bir yapı kurar. Her testte kurtarma süresi hedefi (RTO) ve kabul edilebilir veri kaybı hedefi (RPO) ölçülerek gerçekleşen değerlerle karşılaştırılır.',
    'Regülasyonlar bu testleri açıkça ister. DORA, BİT iş sürekliliği ve müdahale-kurtarma planlarının en az yılda bir ve önemli değişikliklerden sonra test edilmesini, kriz iletişim planlarının da sınanmasını bekler; mikro işletme olmayan kuruluşlarda testlerin siber saldırı senaryolarını ve birincil altyapı ile yedek kapasite arasındaki geçişleri kapsamasını öngörür. BDDK’nın bilgi sistemleri yönetmeliği ve TCMB’nin ödeme ve elektronik para kuruluşlarına yönelik bilgi sistemleri tebliği de ikincil merkezden işlem yürütülen periyodik testleri ve dış hizmet sağlayıcıların bu testlere katılımını düzenler.',
  ],
  risks: [
    'Gerçek bir felakette ikincil merkezin eksik yapılandırma, lisans veya kapasite nedeniyle hizmeti devralamaması.',
    'Kurtarma süresinin (RTO) ve veri kaybının (RPO) hedeflerin çok üzerinde gerçekleşmesi.',
    'Yedeklerin bozuk, eksik veya geri yüklenemez olduğunun ancak ihtiyaç anında anlaşılması.',
    'Fidye yazılımı gibi siber saldırılarda yedeklerin de etkilenmesi ve temiz bir geri dönüş noktasının bulunamaması.',
    'Kriz sırasında iletişim zincirinin kopması; müşteri, düzenleyici ve tedarikçilere zamanında bilgi verilememesi.',
    'Dış hizmet sağlayıcıların kendi süreklilik düzenlemelerinin bankanın planıyla uyumsuz kalması.',
    'Test edilmemiş geri dönüş (failback) adımları nedeniyle birincil merkeze dönüşte ikinci bir kesinti yaşanması.',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'BİT iş sürekliliği ve müdahale-kurtarma planlarının en az yılda bir ve önemli değişikliklerden sonra test edilmesini, yedekleme ve geri yükleme prosedürlerinin periyodik sınanmasını bekler.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Yedeklerin geri yüklenerek düzenli test edilmesini ve en az yılda bir, işlemlerin ikincil merkezden yürütüldüğü, dış hizmet sağlayıcıları da kapsayan felaket senaryosu testini öngörür.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'TCMB’nin ödeme ve elektronik para kuruluşlarına yönelik bilgi sistemleri tebliği, süreklilik planının en az yılda bir test edilmesini ve bir tam iş gününün ikincil merkezden yürütülmesini ister.',
    },
    {
      slug: 'iso-27001',
      note: 'İş sürekliliği için BİT hazırlığı ve bilgi yedekleme kontrollerinin etkinliği süreklilik testleriyle doğrulanır.',
    },
  ],
  approach: [
    {
      title: 'İş etki analizi ve hedefler',
      text: 'Kritik hizmetleri ve bunları destekleyen sistem, veri, personel ve tedarikçileri belirleyin; her hizmet için RTO ve RPO hedeflerini iş birimiyle birlikte yazılı hale getirin.',
    },
    {
      title: 'Kademeli test takvimi',
      text: 'Masa başı tatbikat, bileşen geri yükleme, kontrollü geçiş ve tam felaket senaryosu testlerini yıllık bir plana yayın; önemli altyapı değişikliklerinden sonra ek test planlayın.',
    },
    {
      title: 'İkincil merkeze geçiş testi',
      text: 'İşlemlerin belirlenen süre boyunca ikincil merkezden gerçekten yürütüldüğü bir geçiş yapın; kanalların, entegrasyonların ve gün sonu işlemlerinin bu merkezde çalıştığını doğrulayın.',
    },
    {
      title: 'RTO ve RPO ölçümü',
      text: 'Kesinti anından hizmetin kullanıcıya açılmasına kadar geçen süreyi ve kaybedilen son işlem noktasını zaman damgalarıyla ölçün; hedef dışı sapmaları kök nedeniyle raporlayın.',
    },
    {
      title: 'Kriz iletişimi tatbikatı',
      text: 'Karar vericilere, teknik ekiplere, tedarikçilere ve gerektiğinde düzenleyiciye ulaşma zincirini gerçek iletişim kanallarıyla sınayın; ulaşılamayan kişileri ve güncel olmayan listeleri kaydedin.',
    },
    {
      title: 'Dış hizmet sağlayıcıların katılımı',
      text: 'Kritik hizmeti destekleyen sağlayıcıları senaryoya dahil edin veya kendi test sonuçlarını sözleşmesel olarak talep edip bankanın planıyla uyumunu değerlendirin.',
    },
    {
      title: 'Geri dönüş, bulgu ve iyileştirme',
      text: 'Birincil merkeze dönüş adımlarını da test edin; bulguları sahiplendirin, planları güncelleyin ve bir sonraki testte düzeltmelerin çalıştığını doğrulayın.',
    },
  ],
  tools: [
    {
      category: 'Yedekleme ve geri yükleme doğrulama araçları',
      text: 'Yedeklerin bütünlüğünü kontrol eder ve izole ortamlarda otomatik geri yükleme denemeleri yaparak kullanılabilirliği kanıtlar.',
    },
    {
      category: 'Replikasyon ve geçiş orkestrasyon araçları',
      text: 'Veri replikasyon durumunu izler ve ikincil merkeze geçiş adımlarını tanımlı sırayla, tekrarlanabilir biçimde yürütür.',
    },
    {
      category: 'Kaos mühendisliği ve hata enjeksiyonu araçları',
      text: 'Sunucu, ağ veya servis arızalarını kontrollü şekilde üreterek sistemin tepkisini ve otomatik kurtarma mekanizmalarını sınar.',
    },
    {
      category: 'Gözlemlenebilirlik ve izleme platformları',
      text: 'Geçiş sırasında hizmet sağlığını, gecikmeleri ve hata oranlarını izleyerek RTO ölçümü için zaman damgalı kanıt üretir.',
    },
    {
      category: 'Acil durum bildirim ve kriz yönetim sistemleri',
      text: 'İletişim zincirini otomatik çağrı ve mesajlarla tetikler, kimin ne zaman yanıt verdiğini kaydeder.',
    },
  ],
  bestPractices: [
    'Test senaryolarını gerçekçi kurun: yalnızca planlı bakım penceresinde kontrollü geçiş değil, önceden duyurulmayan ve siber saldırı içeren senaryolar da planlayın.',
    'RTO ve RPO’yu tahminle değil, her testte ölçülen değerlerle raporlayın ve eğilimini yıllar içinde izleyin.',
    'Felaket kurtarma prosedürlerini, onları en iyi bilen kişi yokken de uygulanabilecek netlikte yazın ve testte yedek personelle deneyin.',
    'Yedeklerin en az bir kopyasını birincil ortamdan mantıksal olarak ayrık ve değiştirilemez biçimde tutun; geri yüklemeyi bu kopyadan da test edin.',
    'Her testin kapsamını, katılımcılarını, ölçümlerini ve bulgularını denetimde sunulabilecek biçimde kayıt altına alın.',
    'Güncel regülasyon metinlerini düzenli kontrol ederek test sıklığı ve kapsamının beklentileri karşıladığını teyit edin.',
  ],
  mistakes: [
    'Yalnızca altyapı ekibinin yürüttüğü teknik geçişi, iş sürekliliği testinin tamamı saymak.',
    'Yedek alındığını gösteren başarılı iş kayıtlarını, geri yüklemenin çalıştığının kanıtı olarak kabul etmek.',
    'İkincil merkezi yalnızca birkaç dakika ayağa kaldırıp gerçek işlem yükü ve gün sonu altında çalıştırmamak.',
    'Kritik dış hizmet sağlayıcıları senaryonun dışında bırakmak veya onların sürekliliğini varsaymak.',
    'Test bulgularını kapatmadan bir sonraki yılın testini aynı senaryoyla tekrarlamak.',
  ],
  extra: [
    {
      heading: 'Yedekleme ve geri yükleme testi',
      paragraphs: [
        'Yedekleme testi, yedeğin alındığını değil geri yüklenebildiğini kanıtlamayı amaçlar. BDDK düzenlemesi yedek verilerin geri yükleme yapılarak düzenli test edilmesini, DORA ise yedekleme, geri yükleme ve kurtarma prosedürlerinin periyodik olarak sınanmasını bekler. Bu testler felaket senaryosu testlerinden daha sık ve daha dar kapsamlı yürütülebilir.',
        'Siber saldırı senaryoları yedekleme testine yeni bir boyut ekler: yedeğin yalnızca var olması değil, saldırıdan etkilenmemiş temiz bir kopyanın bulunması ve bu kopyadan tutarlı bir iş durumuna dönülebilmesi gerekir.',
      ],
      bullets: [
        'Geri yükleme izole bir ortamda yapıldı ve uygulama bu veriyle ayağa kalkabildi mi?',
        'Geri yüklenen veride kayıt sayıları, bakiyeler ve kritik tablolar kaynakla mutabık mı?',
        'Veritabanı, dosya, yapılandırma ve anahtar yönetimi yedekleri birbiriyle tutarlı bir zaman noktasına ait mi?',
        'Geri yükleme süresi ilgili hizmetin RTO hedefine sığıyor mu?',
        'Değiştirilemez veya ağdan ayrık yedek kopyadan geri dönüş denendi mi?',
        'Test sonucu, kullanılan yedeğin tarihi ve doğrulama adımları kanıt olarak saklandı mı?',
      ],
    },
    {
      heading: 'Kaos mühendisliği ve senaryo bazlı dayanıklılık testi',
      paragraphs: [
        'Kaos mühendisliği, üretime benzer ortamlarda bilinçli ve kontrollü arızalar oluşturarak sistemin nasıl tepki verdiğini gözlemleyen bir tekniktir. Bir servis örneğinin kapatılması, ağ gecikmesi eklenmesi, bir veritabanı düğümünün düşürülmesi veya bir dış bağımlılığın yanıt vermemesi gibi deneylerle otomatik yük devretme, yeniden deneme ve devre kesici mekanizmalarının gerçekten çalışıp çalışmadığı görülür.',
        'Bu yaklaşım yıllık felaket testlerinin yerine geçmez, onları tamamlar. DORA’nın dijital operasyonel dayanıklılık testi programında saydığı senaryo bazlı testler ve uçtan uca testler, kaos deneyleriyle daha sık ve daha küçük adımlarla uygulanabilir. Canlı ortamda yapılacak deneyler için yazılı onay, etki alanı sınırı ve anında durdurma imkânı şarttır.',
      ],
      bullets: [
        'Her deney için bir hipotez yazın: “Bu düğüm düşerse işlemler belirlenen süre içinde diğer düğüme geçer.”',
        'Deneyleri önce test ortamında, olgunlaştıkça sınırlı etki alanıyla üretime yakın ortamlarda yürütün.',
        'Deney sırasında iş metriklerini (başarılı işlem oranı, yanıt süresi) izleyin ve eşik aşılırsa deneyi otomatik durdurun.',
        'Bulunan zayıflıkları kalıcı düzeltmeye bağlayın ve aynı deneyi düzeltmeden sonra tekrarlayın.',
      ],
    },
  ],
};
