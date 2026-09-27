export default {
  accessibility: {
    title: 'Erişilebilirlik Beyanı',
    updated: 'Eylül 2026',
    intro: [
      'FinTest Rehberi’nin, ekran okuyucu, ekran büyüteci, sesli komut veya yalnızca klavye ile gezinme gibi yardımcı teknolojileri kullananlar dahil olmak üzere mümkün olduğunca çok kişi tarafından kullanılabilmesini amaçlıyoruz.',
      'Bu beyan; hedeflediğimiz erişilebilirlik standardını, aldığımız önlemleri, bildiğimiz sınırlamaları ve sorunları bize nasıl iletebileceğinizi açıklar.',
    ],
    sections: [
      {
        heading: 'Uyumluluk durumu',
        paragraphs: [
          'Hedefimiz, Web İçeriği Erişilebilirlik Yönergeleri (WCAG) 2.2 AA düzeyine uyumdur.',
          'Site ekibi tarafından yapılan öz değerlendirmeye göre sitenin, aşağıda belirtilen sınırlamalar dışında WCAG 2.2 AA düzeyine büyük ölçüde uyumlu olduğunu değerlendiriyoruz. Bu değerlendirme bağımsız bir denetimle doğrulanmamıştır ve site herhangi bir erişilebilirlik sertifikasına sahip değildir.',
        ],
        bullets: [],
      },
      {
        heading: 'Aldığımız önlemler',
        paragraphs: ['Sitenin genelinde aşağıdaki önlemler uygulanmıştır:'],
        bullets: [
          'Her sayfanın yapısını tanımlayan anlamsal başlıklar ve işaret bölgeleri (landmark)',
          'Doğrudan ana içeriğe geçmeyi sağlayan bir atlama bağlantısı',
          'Tüm işlevlerin klavye ile eksiksiz kullanılabilmesi',
          'Etkileşimli öğelerde görünür odak göstergeleri',
          'Açık ve koyu temada AA düzeyine göre kontrol edilmiş renk kontrastı',
          'İşletim sisteminizdeki “hareketi azalt” tercihine uyulması: animasyonlar durur',
          'Ekran okuyucuların atlaması için dekoratif olarak işaretlenmiş dekoratif fotoğraflar',
          'Form hatalarının sesli olarak bildirilmesi ve ilgili alanlara bağlantı içeren bir özet listede gösterilmesi',
          'Klavye ile açılıp kullanılabilen ve kapatılabilen arama penceresi',
          'Türkçe, İngilizce ve Almanca sürümlerde her sayfanın dilinin belirtilmesi (lang özniteliği)',
        ],
      },
      {
        heading: 'Bilinen sınırlamalar',
        paragraphs: ['Aşağıdaki noktaların farkındayız:'],
        bullets: [
          'Üçüncü taraf kaynaklı fotoğraflar yalnızca dekoratif amaçla kullanılır ve metinde yer almayan bir bilgi taşımaz.',
          'Hareketli DDoS görseli dekoratiftir; hareketi azaltma tercihi açık olduğunda durağan olarak gösterilir.',
          'Yazdırılan sayfalarda gezinme menüsü yer almaz, yalnızca sayfa içeriği yazdırılır.',
          'Bazı mevzuat adları resmî özgün dillerinde bırakılmış olup çevrilmemiştir.',
        ],
      },
      {
        heading: 'Geri bildirim ve iletişim',
        paragraphs: [
          'Bu sitede bir erişilebilirlik engeliyle karşılaşırsanız veya içeriğe farklı bir biçimde ihtiyaç duyarsanız lütfen {{email}} adresine yazın. İlgili sayfayı ve sorunu olabildiğince ayrıntılı açıklamanız, sorunu anlamamıza yardımcı olur.',
          'Tüm mesajları okuyor ve geri bildirimlerinizi siteyi iyileştirmek için kullanıyoruz; ancak belirli bir yanıt süresi taahhüt edemiyoruz.',
        ],
        bullets: [],
      },
      {
        heading: 'Hukuki çerçeve',
        paragraphs: [
          'AB Web Erişilebilirliği Direktifi, Avrupa Erişilebilirlik Yasası (EAA) ve Türkiye’deki erişilebilirlik düzenlemeleri gibi kuralların bu tür küçük bir bilgilendirme sitesine uygulanıp uygulanmadığı duruma göre değişebilir. Bu kuralların uygulanıp uygulanmadığından bağımsız olarak, iyi uygulama gereği WCAG 2.2 AA düzeyini gönüllü olarak esas alıyoruz.',
        ],
        bullets: [],
      },
    ],
  },
  privacy: {
    title: 'Gizlilik ve Kişisel Verilerin Korunması Bildirimi',
    updated: 'Eylül 2026',
    intro: [
      'FinTest Rehberi, statik bir bilgilendirme sitesidir. Siteyi mümkün olan en az veriyi işleyecek şekilde tasarladık: sitede çerez, analiz veya izleme aracı ve reklam kullanılmaz.',
      'Bu bildirim, siteyi kullanırken buna rağmen hangi verilerin hangi amaçla işlenebileceğini ve sahip olduğunuz hakları açıklar.',
    ],
    sections: [
      {
        heading: 'Veri sorumlusu ve iletişim',
        paragraphs: [
          'Bu site aracılığıyla bize iletilen kişisel veriler bakımından veri sorumlusu {{partner}}’dır. Kişisel verilerle ilgili her türlü konuda {{email}} adresinden bize ulaşabilirsiniz.',
        ],
        bullets: [],
      },
      {
        heading: 'Çerez, analiz ve reklam yoktur',
        paragraphs: ['Siteyi ziyaret ettiğinizde davranışlarınızı izlemiyoruz.'],
        bullets: [
          'Çerez kullanılmaz.',
          'Analiz, istatistik veya izleme aracı kullanılmaz.',
          'Reklam gösterilmez ve herhangi bir reklam ağı entegre edilmemiştir.',
        ],
      },
      {
        heading: 'Cihazınızda saklanan tercihler',
        paragraphs: [
          'Tercihlerinizi hatırlamak için site, tarayıcınızın yerel depolama alanını (localStorage) kullanır. Bu veriler yalnızca cihazınızda kalır; bize veya başka bir tarafa iletilmez. Tarayıcı ayarlarınızdan dilediğiniz zaman silebilirsiniz.',
        ],
        bullets: [
          'theme: açık veya koyu tema tercihiniz',
          'lang: seçtiğiniz dil',
          'Sayfalardaki kontrol listelerinde işaretlediğiniz maddeler yalnızca bellekte tutulur ve kaydedilmez; sayfadan ayrıldığınızda veya sayfayı yenilediğinizde silinir.',
        ],
      },
      {
        heading: 'Yazı tipleri ve görseller',
        paragraphs: [
          'Tüm yazı tipleri sitenin kendi sunucusundan sunulur; Google Fonts’a veya başka bir yazı tipi hizmetine istek gönderilmez. Görseller de sitenin kendisinden sunulur.',
        ],
        bullets: [],
      },
      {
        heading: 'Toplantı talep formu',
        paragraphs: [
          'Toplantı talep formu herhangi bir sunucuya veri göndermez. Formu gönderdiğinizde kendi e-posta programınız, {{email}} adresine yönelik önceden doldurulmuş bir taslakla açılır.',
          'Kişisel verileriniz yalnızca bu e-postayı fiilen göndermeniz hâlinde işlenir. Bu durumda {{partner}}, veri sorumlusu sıfatıyla e-postada paylaştığınız bilgileri (örneğin adınız, e-posta adresiniz ve mesajınız) yalnızca toplantı talebinizi yanıtlamak amacıyla, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Birliği’ndeki ziyaretçiler için Genel Veri Koruma Tüzüğü (GDPR) uyarınca işler.',
          'Bu veriler yalnızca talebinizin karşılanması için gerekli olduğu süre boyunca saklanır.',
        ],
        bullets: [],
      },
      {
        heading: 'Sunucu kayıtları',
        paragraphs: [
          'Her web sitesinde olduğu gibi bu site de bir barındırma hizmeti sağlayıcısı üzerinden yayınlanır. Barındırma sağlayıcısı, teknik işletim ve güvenlik amacıyla IP adresi, erişim zamanı ve talep edilen URL gibi sunucu kayıt verilerini işleyebilir.',
        ],
        bullets: [],
      },
      {
        heading: 'Haklarınız',
        paragraphs: [
          'KVKK ve uygulanabildiği ölçüde GDPR kapsamında kişisel verilerinize ilişkin haklara sahipsiniz. Bu haklarınızı kullanmak için {{email}} adresine yazabilirsiniz. Bu haklar özellikle şunları kapsar:',
        ],
        bullets: [
          'verilerinizin işlenip işlenmediğini öğrenme ve verilerinize erişme',
          'eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme',
          'verilerinizin silinmesini isteme',
          'verilerinizin işlenmesine itiraz etme',
          'yetkili veri koruma denetim makamına şikâyette bulunma',
        ],
      },
      {
        heading: 'Not',
        paragraphs: [
          'Bu sitenin içeriği yalnızca bilgilendirme amaçlıdır ve hukuki danışmanlık niteliği taşımaz.',
        ],
        bullets: [],
      },
    ],
  },
};
