# FinTest Rehberi

Bankalar ve fintech şirketleri için yazılım testi türleri, standartlar/regülasyonlar ve test
yaklaşımı rehberi. Çözüm ortağı: RabbitQA.

```bash
npm install
npm run dev      # geliştirme sunucusu
npm run build    # dist/ (Vercel'e hazır, vercel.json dahil)
```

## Dokümanlar

- [`docs/SITE_ANALIZI.md`](docs/SITE_ANALIZI.md) — mevcut durum: sayfalar, içerik hacmi, özellikler, teknik altyapı, eksikler
- [`docs/BENCHMARK_ANALIZI.md`](docs/BENCHMARK_ANALIZI.md) — ~40 sitelik benchmark ve önceliklendirilmiş yol haritası
- [`YAYIN_KONTROL_LISTESI.md`](YAYIN_KONTROL_LISTESI.md) — sunum modundan yayına geçiş adımları

## Diller (i18n)

Site **i18next + react-i18next** ile Türkçe ve İngilizce yayınlanır. Adresler dil önekiyle başlar:
`/tr/test-turleri/...`, `/en/test-turleri/...`. Öneksiz bir adres (ör. eski `/test-turleri` linki)
tarayıcı diline veya son seçilen dile yönlendirilir. Header'daki TR / EN düğmesi aynı sayfanın
diğer dildeki sürümüne geçer.

## Nereyi düzenlerim?

| Ne                                                        | Dosya                                            |
| --------------------------------------------------------- | ------------------------------------------------ |
| Arayüz metinleri, ürün açıklamaları, konu adları, sloganlar | `src/locales/<dil>/common.json`                  |
| Test türü içerikleri (16)                                  | `src/content/<dil>/testTypes/*.js`               |
| Regülasyon / standart içerikleri (17)                     | `src/content/<dil>/regulations/*.js`             |
| Test yaklaşımı, risk tablosu, kontrol listesi             | `src/content/<dil>/methodology.js`               |
| E-posta, form servisi, ürün linkleri, Akbank notu aç/kapa | `src/config/site.config.js` (dilden bağımsız)    |
| Görseller                                                 | `src/config/images.js`                           |
| Terimler sözlüğü / SSS                                    | `src/content/<dil>/glossary.js` · `faq.js`       |
| Erişilebilirlik beyanı / gizlilik bildirimi               | `src/content/<dil>/legal.js`                     |
| Uyum kontrolü aracının kuralları                          | `src/lib/assessment.js`                          |

- Bir içerik dosyası bir dilde yoksa site o öğeyi Türkçe sürümünden gösterir; yeni içerik önce
  Türkçe eklenip sonra çevrilebilir.
- Yeni dil eklemek: `src/locales/<kod>/common.json` ve `src/content/<kod>/` oluşturun, `src/i18n.js`
  içindeki `LANGUAGES` listesine ve `src/content/index.js` içindeki `RAW` nesnesine ekleyin.
- `showClientReference: false` → Akbank AG örneği hiçbir dilde görünmez.
- `formEndpoint` boşsa form, `contactEmail` adresine hazır e-posta taslağı (mailto) açar.

İçerik şeması ve yazım kuralları: `CONTENT_SCHEMA.md`. Menü, arama, çapraz linkler ve
regülasyon → test türü tablosu içerik dosyalarından otomatik oluşur.

## Sayfalar

Ana sayfa · Test türleri (16) · Regülasyonlar (17) + eşleştirme tablosu · Test yaklaşımı ·
**Uyum kontrolü** (`/uyum-kontrolu`: kurum tipi, bölge, kanal ve gündeme göre öne çıkan regülasyon ve
test türleri; cevaplar adreste tutulur, sonuç paylaşılabilir) · Sözlük · SSS · Çözüm ortağı ·
Toplantı talebi · Erişilebilirlik beyanı · Gizlilik.

## Yayın öncesi

> Site şu an **sunum modunda** (arama motorlarına kapalı). Gerçek yayına alırken adım adım liste:
> **[`YAYIN_KONTROL_LISTESI.md`](YAYIN_KONTROL_LISTESI.md)**

- `src/config/site.config.js` → `siteUrl` alanına yayındaki adresi yazın (veya Vercel'de `SITE_URL`
  ortam değişkeni tanımlayın). `npm run build` bu adresle `sitemap.xml` ve `robots.txt` üretir;
  canonical ve hreflang etiketleri de bu adresi kullanır.
- Fontlar siteyle birlikte sunulur (Google Fonts isteği yok); çerez ve analitik kullanılmaz.

## Görseller

`public/images/` altındaki fotoğraflar dekoratiftir (`alt=""`) ve `src/config/images.js` üzerinden
sayfalara bağlanır. Değiştirmek için dosyayı aynı adla değiştirin veya o dosyadaki yolu güncelleyin.

- `bankacilik`, `fintech`, `ortaklik`: RabbitQA kurumsal sitesinin kendi görselleri.
- Diğerleri: [Unsplash](https://unsplash.com) (Unsplash Lisansı — ticari kullanım serbest, atıf
  zorunlu değil). Unsplash+ (premium) görsel kullanılmadı.
# fintest-web
