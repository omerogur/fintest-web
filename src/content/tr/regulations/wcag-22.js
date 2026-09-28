export default {
  slug: 'wcag-22',
  order: 8,
  title: 'WCAG 2.2',
  fullTitle: 'Web Content Accessibility Guidelines (WCAG) 2.2 — W3C Recommendation',
  region: 'intl',
  kind: 'standard',
  summary:
    'Web içeriğinin engelli kullanıcılar dahil herkes için erişilebilir olmasına yönelik test edilebilir başarı kriterlerini A, AA ve AAA seviyelerinde tanımlayan W3C standardı.',
  topic: 'wcag',
  keyFacts: [
    { label: 'Yayımlayan', value: 'W3C (World Wide Web Consortium)' },
    { label: 'Statü', value: 'W3C Recommendation, 5 Ekim 2023' },
    { label: 'Uyum seviyeleri', value: 'A, AA, AAA' },
    { label: 'Yeni başarı kriteri sayısı (2.1’e göre)', value: '9' },
    { label: 'Kaldırılan kriter', value: '4.1.1 Parsing' },
  ],
  scope: [
    'WCAG (Web İçeriği Erişilebilirlik Yönergeleri), W3C’nin Web Erişilebilirliği Girişimi (WAI) kapsamında geliştirilir ve web sitelerinin yanı sıra web tabanlı uygulamalar ile belgeler için de kullanılır. Yönergeler algılanabilir, işletilebilir, anlaşılabilir ve sağlam (POUR) olmak üzere dört ilke altında toplanır. Her başarı kriteri test edilebilir biçimde yazılmıştır ve A, AA veya AAA seviyesine atanmıştır.',
    'WCAG kendi başına bir yasa değildir; ancak birçok ülkenin mevzuatı ve AB’deki uyumlaştırılmış standartlar WCAG’i doğrudan veya dolaylı olarak referans alır. Uygulamada kamu ve özel sektör düzenlemeleri çoğunlukla AA seviyesini hedef gösterir. WCAG 2.2, önceki sürümlerle geriye dönük uyumludur: 2.2’ye uyan bir içerik genel olarak 2.1 ve 2.0’a da uyar.',
    'WCAG 2.2 ile eklenen dokuz kriter özellikle bilişsel ve motor engelli kullanıcılar ile mobil kullanıma odaklanır. Klavye odağının başka içerik tarafından gizlenmemesi, sürükleme hareketlerine alternatif sunulması, en az 24×24 CSS pikseli hedef boyutu, tutarlı yardım erişimi, aynı bilginin tekrar tekrar istenmemesi ve bilişsel test gerektirmeyen erişilebilir kimlik doğrulama bu yeniliklerin başlıcalarıdır. Bankacılıkta giriş, OTP ve ödeme onayı akışları bu kriterlerden doğrudan etkilenir.',
    'Test ekipleri açısından WCAG uyumu yalnızca otomatik tarama araçlarıyla gösterilemez. Otomatik araçlar kriterlerin bir bölümünü güvenilir biçimde yakalayabilir; anlamlı metin alternatifleri, mantıklı odak sırası ve anlaşılır hata mesajları gibi konular ise manuel inceleme ve ekran okuyucu ile gerçek kullanım testi gerektirir. Uyum, sayfa veya ekran bazında değil tüm süreç bazında değerlendirildiği için bir ödeme akışının tek bir adımındaki erişilemezlik tüm akışı etkiler.',
  ],
  expects: [
    'Hedeflenen uyum seviyesinin (genellikle AA) kurum politikası olarak belirlenmesi ve tüm dijital kanallara uygulanması.',
    'Metin dışı içerik için metin alternatifleri, yeterli renk kontrastı ve bilginin yalnızca renkle aktarılmaması.',
    'Tüm işlevlerin klavyeyle kullanılabilmesi ve odak göstergesinin görünür ve gizlenmemiş olması.',
    'Form alanlarında anlaşılır etiketler, hata tanımlama ve hata önleme; ödeme gibi kritik işlemlerde onay ve geri alma imkânı.',
    'Kimlik doğrulama adımlarında ezber veya bulmaca çözme gibi bilişsel testlere dayanmayan alternatiflerin sunulması; parola yöneticisi ve yapıştırma desteği.',
    'Dokunmatik hedeflerin yeterli boyutta olması ve sürükleme gerektiren işlemler için tek dokunuşla çalışan alternatifler.',
    'Ekran okuyucular ve diğer yardımcı teknolojilerle uyum için bileşenlerin ad, rol ve değer bilgisinin doğru sunulması.',
  ],
  testTypes: [
    {
      slug: 'erisilebilirlik-testi',
      level: 'expected',
      why: 'Başarı kriterleri test edilebilir biçimde yazılmıştır; uyumun gösterilmesinin olağan yolu otomatik ve manuel erişilebilirlik testleridir.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Hedef boyutu ve sürükleme alternatifi gibi yeni kriterler en çok mobil ve dokunmatik arayüzlerde önem kazanır.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Otomatik taramalar kriterlerin bir kısmını yakalar ve regresyonu önler; kalan kriterler manuel ve yardımcı teknolojiyle değerlendirme gerektirir.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Kriter bazında bulgu takibi, uyum beyanı ve iyileştirme planı için izlenebilir veri sağlar.',
    },
    {
      slug: 'uyumluluk-capraz-tarayici-testi',
      level: 'supporting',
      why: 'Erişilebilirlik, farklı tarayıcılar ve yardımcı teknolojilerle uyumlu çalışmayı gerektirir.',
    },
  ],
  officialSource: {
    label: 'W3C — Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation',
    url: 'https://www.w3.org/TR/WCAG22/',
  },
};
