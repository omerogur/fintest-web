export default {
  slug: 'erisilebilirlik-testi',
  order: 5,
  title: 'Erişilebilirlik Testi',
  titleEn: 'Accessibility Testing',
  icon: 'Accessibility',
  summary:
    'Dijital bankacılık kanallarının engelli kullanıcılar dahil herkes tarafından kullanılabildiğini WCAG 2.2 AA ölçütleriyle otomatik ve uzman destekli olarak doğrular.',
  product: 'accessibility',
  topic: 'wcag',
  what: [
    'Erişilebilirlik testi, web sitelerinin ve mobil uygulamaların görme, işitme, hareket ve bilişsel engeli bulunan kullanıcılar dahil herkes tarafından algılanabilir, kullanılabilir ve anlaşılabilir olduğunu doğrular. Uluslararası referans, W3C tarafından yayımlanan Web İçeriği Erişilebilirlik Yönergeleri’dir (Web Content Accessibility Guidelines – WCAG). Kurumlar ve düzenlemeler genellikle WCAG’ın AA uygunluk düzeyini hedef olarak alır.',
    'WCAG dört temel ilke üzerine kuruludur: algılanabilirlik (Perceivable), çalıştırılabilirlik (Operable), anlaşılabilirlik (Understandable) ve sağlamlık (Robust) – kısaca POUR. WCAG 2.2, önceki sürümün ölçütlerini korurken yeni başarı ölçütleri ekler. Bunlar arasında klavye odağının başka içerikler tarafından gizlenmemesi (Focus Not Obscured), dokunma ve tıklama hedeflerinin asgari boyutu (Target Size), bilişsel teste dayanmayan erişilebilir kimlik doğrulama (Accessible Authentication), sürükleme hareketlerine alternatif sunulması (Dragging Movements), yardım mekanizmalarının tutarlı konumda olması (Consistent Help) ve daha önce girilen bilginin yeniden istenmemesi (Redundant Entry) yer alır.',
    'Bankacılık için bu yeni ölçütler doğrudan günlük akışlara dokunur. Giriş ekranında karmaşık bulmaca veya kopyala-yapıştırmayı engelleyen şifre alanları, küçük dokunma hedefleri, çok adımlı başvurularda aynı bilgiyi tekrar isteyen formlar ve yapışkan başlıklar altında kaybolan odak, engelli müşterilerin hizmete erişimini fiilen engelleyebilir. Avrupa Erişilebilirlik Yasası ve Türkiye’deki düzenlemelerle birlikte erişilebilirlik, bankalar için bir iyi uygulama olmanın ötesinde uyum konusu haline gelmiştir.',
  ],
  risks: [
    'Ekran okuyucu kullanıcılarının giriş, transfer veya ödeme akışlarını tamamlayamaması',
    'Yalnızca fareyle kullanılabilen bileşenler nedeniyle klavye kullanıcılarının işlem yapamaması',
    'Kimlik doğrulama adımlarının bilişsel engelli kullanıcılar için aşılamaz hale gelmesi',
    'Düşük renk kontrastı ve küçük dokunma hedefleri nedeniyle hatalı işlem yapılması',
    'Hata mesajlarının yardımcı teknolojilerce duyurulmaması ve formların terk edilmesi',
    'Erişilebilirlik yükümlülüklerine uyumsuzluk nedeniyle düzenleyici ve hukuki risk',
    'Engelli müşterilerin şubeye veya çağrı merkezine yönelmesiyle artan operasyonel maliyet',
  ],
  regulations: [
    {
      slug: 'wcag-22',
      note: 'WCAG 2.2, erişilebilirlik testinin başarı ölçütlerini tanımlayan temel teknik standarttır; AA düzeyi yaygın hedeftir.',
    },
    {
      slug: 'eaa',
      note: 'Avrupa Erişilebilirlik Yasası, AB’de tüketicilere sunulan bankacılık hizmetlerini ve bu hizmetlerin web ve mobil kanallarını erişilebilirlik gereklilikleri kapsamına alır.',
    },
    {
      slug: 'turkiye-erisilebilirlik',
      note: 'Türkiye’deki erişilebilirlik düzenlemeleri ve rehberleri, dijital hizmetlerin engelli bireylerce kullanılabilir olmasını hedefler ve ulusal uyum çerçevesini oluşturur.',
    },
    {
      slug: 'psd2',
      note: 'PSD2 kapsamındaki güçlü müşteri kimlik doğrulaması akışları, WCAG 2.2’nin erişilebilir kimlik doğrulama ölçütüyle birlikte ele alınmalıdır.',
    },
  ],
  approach: [
    {
      title: 'Kapsamı ve hedef düzeyi belirleyin',
      text: 'Test edilecek web sayfalarını, mobil ekranları ve kritik müşteri yolculuklarını listeleyin; hedefi WCAG 2.2 AA olarak netleştirin.',
    },
    {
      title: 'Otomatik tarama ile başlayın',
      text: 'Kontrast, eksik alternatif metin, etiketsiz form alanları ve hatalı yapı gibi makinece tespit edilebilen sorunları otomatik tarama ile bulun; otomatik araçların ölçütlerin yalnızca bir bölümünü değerlendirebildiğini unutmayın.',
    },
    {
      title: 'Klavye ve odak testi yapın',
      text: 'Tüm akışları yalnızca klavyeyle tamamlayın; odak sırasını, odak görünürlüğünü ve odağın başka öğelerce gizlenmediğini kontrol edin.',
    },
    {
      title: 'Ekran okuyucularla manuel test yapın',
      text: 'Masaüstünde NVDA ve JAWS, iOS’ta VoiceOver, Android’de TalkBack ile kritik akışları gerçek kullanıcı gibi baştan sona yürütün; bileşenlerin ad, rol ve durum bilgisini doğru duyurduğunu doğrulayın.',
    },
    {
      title: 'WCAG 2.2 ölçütlerini hedefli kontrol edin',
      text: 'Hedef boyutu, sürükleme alternatifleri, tutarlı yardım, tekrarlanan veri girişi ve erişilebilir kimlik doğrulama ölçütlerini giriş, başvuru ve ödeme akışlarında ayrıca inceleyin.',
    },
    {
      title: 'Bulguları önceliklendirin ve kapatın',
      text: 'Bulguları ilgili başarı ölçütüne, etkilenen kullanıcı grubuna ve iş akışına göre sınıflandırın; düzeltmeleri yeniden test ederek doğrulayın.',
    },
    {
      title: 'Erişilebilirliği sürekli hale getirin',
      text: 'Otomatik kontrolleri geliştirme hattına ekleyin, tasarım sistemi bileşenlerini erişilebilir hale getirin ve periyodik uzman denetimiyle destekleyin.',
    },
  ],
  tools: [
    {
      category: 'Otomatik erişilebilirlik tarayıcıları',
      text: 'Web sayfalarını ve mobil ekranları kural tabanlı olarak tarayarak makinece tespit edilebilen WCAG ihlallerini raporlar.',
    },
    {
      category: 'Ekran okuyucular',
      text: 'Görme engelli kullanıcıların deneyimini birebir sınamak için masaüstü ve mobil platformlardaki yardımcı teknolojilerdir.',
    },
    {
      category: 'Tarayıcı geliştirici araçları ve erişilebilirlik ağacı denetleyicileri',
      text: 'Bileşenlerin yardımcı teknolojilere hangi ad, rol ve durumla sunulduğunu gösterir.',
    },
    {
      category: 'Renk kontrastı ve görsel simülasyon araçları',
      text: 'Metin ve arayüz öğelerinin kontrast oranını ölçer, farklı görme koşullarını simüle eder.',
    },
    {
      category: 'Mobil platform erişilebilirlik denetleyicileri',
      text: 'iOS ve Android uygulamalarında etiket, dokunma hedefi ve kontrast sorunlarını cihaz üzerinde tespit eder.',
    },
  ],
  bestPractices: [
    'Erişilebilirliği tasarım aşamasında başlatın; tasarım sistemindeki erişilebilir bir bileşen, yüzlerce ekranı birden düzeltir.',
    'Otomatik taramayı tek başına uygunluk kanıtı saymayın; manuel ve yardımcı teknolojilerle yapılan testlerle tamamlayın.',
    'Kimlik doğrulama akışlarında şifre yöneticisi ve yapıştırma desteğini engellemeyin; bilişsel test gerektirmeyen alternatifler sunun.',
    'Mümkün olduğunda engelli kullanıcılarla kullanılabilirlik oturumları düzenleyin.',
    'Bulguları WCAG başarı ölçütüne bağlayarak raporlayın; bu, hem geliştirme ekibine hem de denetime ortak bir dil sağlar.',
    'Erişilebilirlik beyanını ve geri bildirim kanalını güncel tutun.',
  ],
  mistakes: [
    'Otomatik tarama puanını erişilebilirlik uygunluğu olarak sunmak',
    'Yalnızca ana sayfayı test edip giriş, ödeme ve başvuru gibi kritik akışları atlamak',
    'ARIA niteliklerini yerel HTML öğelerinin yerine gereksiz ve hatalı biçimde kullanmak',
    'Mobil uygulamaları web ile aynı kabul edip platforma özgü ekran okuyucu davranışını test etmemek',
    'Erişilebilirliği tek seferlik bir proje olarak görüp sonraki sürümlerde gerilemeyi izlememek',
  ],
};
