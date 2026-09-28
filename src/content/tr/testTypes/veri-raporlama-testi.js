export default {
  slug: 'veri-raporlama-testi',
  order: 15,
  title: 'Veri, ETL ve Yasal Raporlama Testi',
  titleEn: 'Data, ETL & Regulatory Reporting Testing',
  icon: 'DatabaseZap',
  summary:
    'Veri ambarı, ETL süreçleri, yasal raporlar ve yönetim panolarında verinin eksiksiz, doğru ve kaynağına kadar izlenebilir olduğunu doğrular; test verisini güvenli biçimde yönetir.',
  product: 'datacrate',
  topic: 'veri',
  what: [
    'Veri testi, verinin kaynak sistemlerden alınıp dönüştürülerek hedef sistemlere yüklendiği süreçlerin (ETL/ELT) ve bu veriden üretilen raporların doğrulanmasıdır. Test; verinin eksiksiz aktarılmasını (completeness), dönüşüm kurallarının doğru uygulanmasını, kaynak ve hedef arasındaki tutarlılığı (reconciliation) ve bir rapor değerinin hangi kaynaktan geldiğinin izlenebilmesini (lineage) kapsar. Arayüz testinden farklı olarak burada doğrulanan şey ekran değil, milyonlarca kayıttan oluşan veri kümeleridir.',
    'Bankalar, denetim otoritelerine düzenli olarak finansal tablolar, risk ve likidite raporları ile çeşitli istatistiki bildirimler gönderir. Bu raporlardaki bir hata; yanlış bir sermaye veya risk göstergesine, düzeltme bildirimi yükümlülüğüne ve denetim bulgusuna dönüşebilir. Aynı veri, yönetimin karar aldığı panolar ve iş zekâsı (BI) raporları için de kullanıldığından veri kalitesi sorunu bir kez oluştuğunda pek çok yere yayılır.',
    'Veri testinin ikinci ayağı, test ortamlarında kullanılan verinin kendisidir. Gerçek müşteri verisinin test ortamlarına kopyalanması hem kişisel verilerin korunması hem de bankacılık sırrı açısından ciddi risk taşır. Bu nedenle maskeleme, sentetik veri üretimi ve alt küme çıkarma (subsetting) gibi test verisi yönetimi teknikleri, veri kalitesini test etmek kadar önemli bir disiplindir.',
  ],
  risks: [
    'Denetim otoritelerine hatalı veya eksik yasal rapor gönderilmesi',
    'ETL sırasında kayıtların sessizce düşmesi, tekrarlanması veya yanlış dönüştürülmesi',
    'Kaynak sistemdeki değişikliklerin raporlama hattını fark edilmeden bozması',
    'Farklı raporlarda aynı göstergenin farklı değerlerle görünmesi ve yönetim kararlarının yanlış veriye dayanması',
    'Bir rapor değerinin kaynağının gösterilememesi nedeniyle denetimde açıklama yapılamaması',
    'Gerçek müşteri verisinin test ortamlarında korunmasız biçimde bulunması',
    'Temsil gücü düşük test verisi nedeniyle canlıdaki uç durumların testte hiç görülmemesi',
  ],
  regulations: [
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Yönetmelik, test verisinin üretimi temsil etmesini ve müşteri üretim verisinden arındırılmış olmasını, ortamların da birbirinden ayrı tutulmasını ister.',
    },
    {
      slug: 'kvkk',
      note: 'Test ortamlarında kişisel verinin maskelenmesi, anonimleştirilmesi veya sentetik veriyle değiştirilmesi KVKK ilkelerinin pratik karşılığıdır.',
    },
    {
      slug: 'gdpr',
      note: 'AB müşterilerine ait verinin test amacıyla işlenmesinde veri minimizasyonu ve takma adlandırma yaklaşımları önem taşır.',
    },
    {
      slug: 'masak-aml',
      note: 'Şüpheli işlem tespiti ve bildirimi, doğru ve eksiksiz işlem verisine dayandığından veri hatlarının testi uyum sürecinin parçasıdır.',
    },
    {
      slug: 'dora',
      note: 'Veri bütünlüğü BİT risk yönetiminin temel unsurlarından biridir; kritik raporlama süreçleri dayanıklılık testi programında ele alınabilir.',
    },
    {
      slug: 'ai-act',
      note: 'Yüksek riskli yapay zekâ sistemleri için veri yönetişimi beklentisi, eğitim ve test verisinin kalite kontrollerini gerektirir.',
    },
  ],
  approach: [
    {
      title: 'Veri akışını ve kritik raporları haritalayın',
      text: 'Hangi raporun hangi kaynak tablolardan, hangi dönüşümlerle üretildiğini belgeleyin; yasal raporları ve yönetim göstergelerini önceliklendirin.',
    },
    {
      title: 'Eksiksizlik ve mutabakat kontrollerini otomatikleştirin',
      text: 'Kaynak ve hedef arasında kayıt sayısı, tutar toplamları ve anahtar alan kontrollerini her yüklemede otomatik çalıştırın.',
    },
    {
      title: 'Dönüşüm kurallarını tek tek doğrulayın',
      text: 'Kur çevrimi, sınıflandırma, gecikme gün hesabı ve toplulaştırma gibi iş kurallarını sınır değerler ve uç durumlar içeren test verisiyle sınayın.',
    },
    {
      title: 'Veri kalitesi kurallarını tanımlayın',
      text: 'Zorunlu alan, biçim, geçerli değer aralığı, benzersizlik ve tablolar arası tutarlılık kurallarını yazılı hale getirip sürekli ölçün.',
    },
    {
      title: 'Yasal raporları bağımsız hesapla karşılaştırın',
      text: 'Rapor çıktısını, kaynak veriden bağımsız bir sorgu veya önceki dönem değerleriyle karşılaştırarak beklenmeyen sapmaları inceleyin.',
    },
    {
      title: 'Pano ve BI raporlarını test edin',
      text: 'Filtre, kırılım, tarih aralığı ve yetki kurallarının doğru çalıştığını, aynı göstergenin farklı raporlarda aynı değeri verdiğini doğrulayın.',
    },
    {
      title: 'Test verisi yönetimini süreçleştirin',
      text: 'Test ortamlarına veri aktarımını maskeleme, sentetik veri ve alt küme çıkarma adımlarından geçen, onaylı ve tekrarlanabilir bir sürece bağlayın.',
    },
  ],
  tools: [
    {
      category: 'Veri kalitesi ve doğrulama çerçeveleri',
      text: 'Tablolar ve veri hatları için tanımlanan kalite kurallarını otomatik olarak çalıştırır ve raporlar.',
    },
    {
      category: 'Veri karşılaştırma ve mutabakat araçları',
      text: 'Kaynak ve hedef veri kümelerini satır ve toplam düzeyinde karşılaştırarak farkları listeler.',
    },
    {
      category: 'Veri soy ağacı (lineage) ve katalog araçları',
      text: 'Bir rapor alanının hangi kaynak ve dönüşümlerden geldiğini görünür kılar.',
    },
    {
      category: 'Test verisi maskeleme ve sentetik veri araçları',
      text: 'Gerçek veriyi geri döndürülemez biçimde maskeler veya canlı veriyi temsil eden yapay veri üretir.',
    },
    {
      category: 'İş zekâsı (BI) test araçları',
      text: 'Pano ve rapor çıktılarının beklenen değerlerle ve sürümler arasında tutarlılığını kontrol eder.',
    },
  ],
  bestPractices: [
    'Veri testlerini veri hattının içine yerleştirin; kritik kontrol başarısız olduğunda yüklemeyi durdurun.',
    'Mutabakat sonuçlarını saklayın; denetimde hangi dönemin hangi kontrollerden geçtiği gösterilebilsin.',
    'Kaynak sistemlerdeki şema ve kod değişikliklerini raporlama hattının regresyon testine bağlayın.',
    'Test verisi setlerini, canlıdaki uç durumları da içerecek biçimde bilinçli olarak tasarlayın.',
    'Maskeleme kurallarını tablolar arası ilişkileri bozmayacak şekilde tutarlı uygulayın.',
    'Rapor tanımlarını ve iş kurallarını tek bir yerde, sürümlü olarak tutun.',
  ],
  mistakes: [
    'Yalnızca kayıt sayısını karşılaştırıp tutarları ve alan değerlerini kontrol etmemek',
    'Canlı veriyi “yalnızca bir kez” diyerek maskelemeden test ortamına kopyalamak',
    'Yasal raporları gönderimden önce yalnızca göz kontrolüyle onaylamak',
    'Veri kalitesi sorunlarını raporlama ekibinin elle düzelttiği geçici çözümlerle kapatmak',
    'Test verisinin canlıyı temsil edip etmediğini hiç ölçmemek',
  ],
  extra: [
    {
      heading: 'Test verisi yönetimi',
      paragraphs: [
        'Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik (Resmî Gazete, 15.03.2020, sayı 31069) Madde 22, test verisinin üretim işlemlerini sayı ve nitelik bakımından temsil etmesini ve müşteri üretim verisinden arındırılmış olmasını ister. Aynı düzenleme geliştirme, test ve üretim ortamlarının birbirinden ayrı tutulmasını da öngörür. Uygulamada bu iki beklenti birlikte karşılanmalıdır: veri hem güvenli hem de testin anlamlı sonuç vermesine yetecek kadar gerçekçi olmalıdır.',
        'Bu dengeyi kurmanın olağan yolu, farklı tekniklerin ihtiyaca göre birlikte kullanılmasıdır. Kesin hüküm ve istisnalar için yönetmeliğin güncel metnine başvurulmalıdır.',
      ],
      bullets: [
        'Maskeleme: Kimlik, iletişim ve hesap bilgileri geri döndürülemez biçimde değiştirilir; tablolar arası anahtar ilişkileri korunur.',
        'Sentetik veri: Canlı verinin dağılımını ve iş kurallarını taklit eden, gerçek bir kişiye karşılık gelmeyen kayıtlar üretilir.',
        'Alt küme çıkarma (subsetting): Tüm veritabanı yerine, ilişkileri bütün olan ve testin ihtiyaç duyduğu küçük bir kesit alınır.',
        'Uç durum setleri: Sınır tutarlar, gecikmiş krediler, çoklu para birimi ve kapanmış hesap gibi nadir durumlar bilinçli olarak eklenir.',
        'Yaşam döngüsü: Test verisinin kim tarafından, hangi onayla oluşturulduğu ve ne zaman silineceği kayıt altına alınır.',
      ],
    },
  ],
};
