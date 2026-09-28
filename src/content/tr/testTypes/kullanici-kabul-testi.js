export default {
  slug: 'kullanici-kabul-testi',
  order: 12,
  title: 'Kullanıcı Kabul Testi (UAT)',
  titleEn: 'User Acceptance Testing (UAT)',
  icon: 'UserCheck',
  summary:
    'Bir değişikliğin canlıya alınmadan önce iş birimlerinin gerçek süreçleriyle sınanıp kanıtlı ve yetkili onayla kabul edilmesini sağlayan test disiplini.',
  product: 'testmanagement',
  topic: 'uat',
  what: [
    'Kullanıcı kabul testi (UAT), bir sistemin veya değişikliğin teknik olarak çalışmasının ötesinde, işin ihtiyacını karşılayıp karşılamadığını sorgular. Sistem testi “yazılım şartnameye uygun mu?” sorusunu yanıtlarken UAT “bu yazılımla işimizi doğru ve güvenle yapabilir miyiz?” sorusunu yanıtlar. Bu yüzden UAT’ı yürütenler test uzmanlarından çok süreç sahipleri, operasyon çalışanları ve ürün yöneticileridir.',
    'Bankacılıkta UAT’ın ayrı bir ağırlığı vardır. Bir kredi ürünündeki parametre değişikliği, bir ödeme ekranındaki yeni onay adımı veya bir operasyon ekranındaki alan düzeni; müşteri, muhasebe ve uyum sonuçları doğurur. İş biriminin bu sonuçları gerçekçi senaryolarla görmesi ve yazılı onay vermesi, hem hatalı ürünün canlıya çıkmasını önler hem de değişikliğin sorumluluğunu netleştirir.',
    'Düzenleyici çerçeve de bu onayı bekler. BDDK’nın bilgi sistemleri yönetmeliği, değişikliklerin uygun test planlarıyla test edilmesini ve ardından kullanıcı ile ilgili birim onaylarının alınmasını; geliştirme, test ve üretim ortamlarının ayrılmasını ve test verisinin üretimi temsil ederken müşteri verisinden arındırılmasını öngörür. Güncel metni kontrol ederek UAT sürecinizi bu beklentilere göre tasarlamanız önerilir.',
  ],
  risks: [
    'Teknik olarak hatasız ama iş sürecine uymayan bir değişikliğin canlıya alınması ve operasyonel hataya yol açması.',
    'Onayın kim tarafından, hangi kapsam için ve hangi kanıta dayanarak verildiğinin denetimde gösterilememesi.',
    'Senaryoların yalnızca olağan akışları kapsaması; istisna, iptal ve düzeltme süreçlerinin canlıda ilk kez denenmesi.',
    'UAT ortamının üretimden farklı yapılandırma veya veriyle çalışması nedeniyle testte görünmeyen hataların canlıda çıkması.',
    'Test ortamında maskelenmemiş müşteri verisinin kullanılması ve kişisel veri ihlali.',
    'Zaman baskısıyla UAT’ın kısaltılması veya açık hatalarla “şartlı onay” verilmesi.',
  ],
  regulations: [
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Değişikliklerin test planlarıyla test edilip kullanıcı ve ilgili birim onayı alınmasını, ortam ayrımını ve temsili, müşteri verisinden arındırılmış test verisi kullanımını öngörür.',
    },
    {
      slug: 'kvkk',
      note: 'UAT ortamında kullanılan verinin kişisel verilerden arındırılması veya uygun şekilde maskelenmesi gerekir.',
    },
    {
      slug: 'gdpr',
      note: 'AB’de faaliyet gösteren kurumlarda kabul testinde kişisel veri kullanımı veri minimizasyonu ilkesine göre sınırlandırılmalıdır.',
    },
    {
      slug: 'iso-29119',
      note: 'Kabul testinin planlanması, giriş-çıkış kriterleri ve test tamamlama raporu için ortak bir süreç çerçevesi sunar.',
    },
    {
      slug: 'istqb',
      note: 'Kullanıcı, operasyonel ve sözleşmesel kabul testi gibi kabul testi türlerini ve bunların sistem testinden farkını tanımlar.',
    },
  ],
  approach: [
    {
      title: 'Kabul kriterlerini baştan yazın',
      text: 'Gereksinim aşamasında iş birimiyle birlikte ölçülebilir kabul kriterleri belirleyin; UAT bu kriterlere göre planlansın, sonradan tartışılmasın.',
    },
    {
      title: 'İş süreçlerinden senaryo türetin',
      text: 'Süreç haritalarını adım adım izleyerek olağan akış, istisna, iptal, düzeltme ve dönem sonu senaryolarını iş diliyle yazın.',
    },
    {
      title: 'Giriş kriterlerini kontrol edin',
      text: 'Sistem testinin tamamlandığını, kritik hataların kapandığını, ortam ve verinin hazır olduğunu ve katılımcıların eğitildiğini UAT başlamadan doğrulayın.',
    },
    {
      title: 'Temsili ve arındırılmış veri hazırlayın',
      text: 'Ürün, müşteri tipi ve işlem çeşitliliğini üretimle benzer oranda yansıtan, kişisel verilerden arındırılmış veya sentetik bir veri seti kurun.',
    },
    {
      title: 'Yürütme ve kanıt toplama',
      text: 'Her senaryonun sonucunu, ekran görüntüsü veya çıktı gibi kanıtlarla ve yürüten kişinin adıyla test yönetim aracına kaydedin.',
    },
    {
      title: 'Hata yönetimi ve yeniden test',
      text: 'Bulguları iş etkisine göre önceliklendirin, düzeltmeleri yeniden test edin ve etkilenen senaryolar için kısa bir regresyon koşun.',
    },
    {
      title: 'Çıkış kriterleri ve resmi onay',
      text: 'Tamamlanma oranı, açık hata durumu ve kabul edilen riskleri özetleyen raporla yetkili iş birimi onayını alın ve değişiklik kaydına bağlayın.',
    },
  ],
  tools: [
    {
      category: 'Test yönetim araçları',
      text: 'UAT senaryolarını, yürütme sonuçlarını, kanıtları ve onayları tek yerde tutarak izlenebilirlik sağlar.',
    },
    {
      category: 'Hata ve iş takip sistemleri',
      text: 'Bulguların kaydını, önceliklendirilmesini, düzeltilmesini ve yeniden testini izler.',
    },
    {
      category: 'Test verisi maskeleme ve sentetik veri araçları',
      text: 'Üretimi temsil eden ama kişisel veri içermeyen UAT veri setleri oluşturur.',
    },
    {
      category: 'Değişiklik yönetim sistemleri',
      text: 'UAT onayını değişiklik kaydıyla ilişkilendirerek canlıya alma kararının dayanağını belgelendirir.',
    },
    {
      category: 'Ekran kaydı ve kanıt toplama araçları',
      text: 'İş kullanıcılarının yürüttüğü adımları otomatik kaydederek kanıt üretimini kolaylaştırır ve hata tekrarını hızlandırır.',
    },
  ],
  bestPractices: [
    'UAT’ı sistem testinin tekrarı olarak değil, iş süreçlerinin uçtan uca doğrulanması olarak kurgulayın.',
    'Onay yetkisini önceden tanımlayın: hangi değişiklik tipi için hangi rolün onayı gerekiyor, yazılı olsun.',
    'İş kullanıcılarına UAT için gerçek zaman ayırın; günlük işin arasına sıkıştırılan testler yüzeysel kalır.',
    'Kabul edilen açık hataları ve riskleri onay raporunda açıkça listeleyin ve telafi edici önlemleri belirtin.',
    'UAT ortamının yapılandırmasını üretimle düzenli karşılaştırın ve farkları belgeleyin.',
    'Sık tekrarlanan kabul senaryolarını otomatik regresyon paketine aktararak iş kullanıcılarının zamanını yeni değişikliklere ayırın.',
  ],
  mistakes: [
    'UAT’ı test ekibine devredip iş biriminin yalnızca son onayı vermesiyle yetinmek.',
    'E-posta ile verilen, kapsamı ve kanıtı belirsiz onayları yeterli saymak.',
    'Zaman kazanmak için üretim verisini maskelemeden UAT ortamına kopyalamak.',
    'Giriş kriterleri sağlanmadan UAT’a başlayıp iş kullanıcılarını bilinen hatalarla uğraştırmak.',
    'Canlıya alma sonrası düzeltmeleri UAT’tan geçirmeden “küçük değişiklik” diyerek yayınlamak.',
  ],
  extra: [
    {
      heading: 'UAT giriş-çıkış kriterleri ve değişiklik yönetimiyle bağlantı',
      paragraphs: [
        'UAT’ın değeri, sonucunun canlıya alma kararına bağlanmasından gelir. Onay değişiklik kaydında yer almıyorsa, değişiklik danışma kurulu veya yayın sorumlusu kararını kanıta değil varsayıma dayandırır. Bu yüzden UAT raporu, değişiklik kaydının zorunlu eki olarak tasarlanmalı ve onay olmadan yayın adımı ilerleyememelidir.',
        'Giriş ve çıkış kriterleri her proje için yeniden tartışılmamalı; kurum düzeyinde bir şablon belirlenip değişikliğin risk seviyesine göre uyarlanmalıdır. Aşağıdaki kontroller bu şablon için bir başlangıç noktasıdır.',
      ],
      bullets: [
        'Giriş: sistem testi tamamlandı ve kritik ya da yüksek öncelikli açık hata kalmadı mı?',
        'Giriş: UAT ortamı, yapılandırması ve arındırılmış test verisi hazır ve doğrulanmış mı?',
        'Giriş: senaryolar iş birimi tarafından gözden geçirilip kabul kriterleriyle eşlendi mi?',
        'Çıkış: planlanan senaryoların tamamı yürütüldü ve sonuçları kanıtıyla kaydedildi mi?',
        'Çıkış: açık hatalar için iş etkisi değerlendirildi, kabul edilenler gerekçesiyle belgelendi mi?',
        'Çıkış: yetkili iş birimi ve ilgili birimlerin onayı alınıp değişiklik kaydına bağlandı mı?',
        'Canlı sonrası: ilk kullanım döneminde doğrulama kontrolleri ve geri dönüş kararı için sorumlular belirlendi mi?',
      ],
    },
  ],
};
