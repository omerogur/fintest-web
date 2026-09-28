# FinTest Rehberi — Mevcut Durum Analizi

> Tarih: 28 Eylül 2026 · Kapsam: `~/Desktop/fintest-rehberi` (Vercel: <https://fintest-web.vercel.app/tr>)
> Amaç: "Neyimiz var?" sorusuna tek yerden cevap. Benchmark ve öneriler için bkz. [`BENCHMARK_ANALIZI.md`](BENCHMARK_ANALIZI.md).

---

## 1. Özet

| | |
| --- | --- |
| **Ne** | Bankalar ve fintech'ler için yazılım testi, standart/regülasyon ve test yaklaşımı rehberi |
| **Konumlandırma** | Bağımsız bilgi platformu tonu; RabbitQA yalnızca konu sonlarındaki "Çözüm Ortağı" kutularında |
| **Hedef kitle** | BT yöneticileri, QA/test müdürleri, uyum ekipleri, CTO/CIO, dijital bankacılık ürün yöneticileri |
| **Dönüşüm hedefi** | Toplantı talebi (konu önceden seçili form → e-posta taslağı) |
| **Diller** | Türkçe (varsayılan), İngilizce, Almanca — içerik dahil tam çeviri |
| **Durum** | Sunum modu: yayında ama arama motorlarına kapalı (`noindex`, `robots: Disallow`) |

---

## 2. Bilgi mimarisi ve sayfalar

Her sayfa üç dilde vardır (`/tr`, `/en`, `/de` öneki) → **44 sayfa × 3 dil = 132 adres.**

| Bölüm | Adres | İçerik |
| --- | --- | --- |
| Ana sayfa | `/` | Hero + öne çıkan regülasyonlar, "neden kritik", uyum aracı tanıtımı, test türü kartları, regülasyon kartları (bölge filtresi), mini eşleştirme tablosu, metodoloji özeti, SSS önizleme, çözüm ortağı şeridi, toplantı CTA |
| Test türleri | `/test-turleri` (+16 detay) | Regülasyona göre filtre; her detay aynı şablon: nedir → riskler → ilgili regülasyonlar → adım adım yaklaşım → araç kategorileri → en iyi uygulamalar / hatalar → (ek bölüm) → Çözüm Ortağı kutusu → CTA |
| Regülasyonlar | `/regulasyonlar` (+17 detay) | Bölge (Uluslararası/Türkiye) ve tür (regülasyon/standart/çerçeve) filtresi; **Regülasyon → Test Türü matrisi** (Zorunlu / Beklenen / Destekleyici); detayda kapsam, beklentiler, doğrulandığı test türleri, resmi kaynak notu |
| Test yaklaşımı | `/test-yaklasimi` | Risk bazlı test, shift-left, CI/CD aşama akışı, test verisi; örnek risk tablosu; işaretlenebilir ve yazdırılabilir **sürüm öncesi kontrol listesi** |
| Uyum kontrolü | `/uyum-kontrolu` | 4 soruluk ön değerlendirme (kurum tipi, bölge, kanallar, gündem) → gerekçeli regülasyon ve test türü listesi; sonuç adreste tutulur (paylaşılabilir), yazdırılabilir, toplantıya konular önceden seçili aktarılır |
| Sözlük | `/sozluk` | 37 terim, harf gezinmesi, filtre, ilgili sayfalara bağlantı |
| SSS | `/sss` | 12 soru, açılır yapı, soru bazında link (`/sss#soru`) |
| Çözüm ortağı | `/cozum-ortagi` | RabbitQA, uzmanlık alanları, 7 çözüm kartı (DDoSphere, Loadmance, AutoRunner, MobileHub, Analyzer, Erişilebilirlik, Core Banking), Mambu/Fimple deneyimi |
| Toplantı talebi | `/toplanti-talebi?konu=…` | Form (konu çoklu seçim, tarih, KVKK onayı), "sonra ne olur", doğrudan e-posta |
| Yasal | `/erisilebilirlik-beyani`, `/gizlilik` | Erişilebilirlik beyanı (öz değerlendirme), gizlilik/KVKK bildirimi |

**Kapsanan test türleri (16):** Performans ve yük · DDoS dayanıklılık · Test otomasyonu · Mobil uygulama · Erişilebilirlik (WCAG 2.2) · Güvenlik (ASVS/MASVS, pentest) · API ve açık bankacılık · Core banking (Mambu/Fimple) · Test analizi ve kalite metrikleri · İş sürekliliği ve felaket kurtarma · Ödeme sistemleri ve kart sertifikasyonu · Kullanıcı kabul testi (UAT) · AML/KYC ve dolandırıcılık kural testi · Yapay zekâ / ML model testi · Veri, ETL ve yasal raporlama · Uyumluluk ve çapraz tarayıcı

**Kapsanan regülasyon/standartlar (17):**
- Uluslararası (11): PSD2, DORA, PCI DSS, ISO/IEC 27001, ISO/IEC/IEEE 29119, ISTQB, GDPR, WCAG 2.2, EAA, ISO 20022, AB Yapay Zekâ Yasası
- Türkiye (6): BDDK Bilgi Sistemleri Yönetmeliği, 6493 sayılı Kanun, Açık bankacılık (ÖHVPS), KVKK, Türkiye dijital erişilebilirlik, MASAK / AML (5549 sayılı Kanun)

---

## 3. İçerik hacmi

| Dil | Toplam kelime | Test türleri | Regülasyonlar | Metodoloji | Sözlük | SSS | Yasal | Arayüz |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| TR | ~20.600 | 7.166 | 6.941 | 1.499 | 1.403 | 1.021 | 697 | 1.844 |
| EN | ~24.400 | 8.533 | 8.128 | 1.851 | 1.570 | 1.243 | 905 | 2.166 |
| DE | ~22.200 | 7.732 | 7.472 | 1.641 | 1.499 | 1.092 | 861 | 1.922 |

**İçerik ilkeleri** (`CONTENT_SCHEMA.md`): uydurma istatistik ve müşteri yorumu yok; emin olunmayan madde numarası/tarih yazılmaz; her regülasyonda resmi kaynak + "güncel metne başvurun" notu; ürün adı ana metne girmez, yalnızca Çözüm Ortağı kutusunda.

---

## 4. Özellikler

### Keşif ve gezinme
- Mega menü (Test Türleri, Regülasyonlar — bölgeye göre gruplu, Kaynaklar), mobil menü
- Global arama (`/` veya ⌘K): test türü, regülasyon, metodoloji, sözlük, SSS, çözüm ortağı ve ürünlerin **tüm metninde** kelime başı eşleşme; Türkçe karakter duyarsız; klavyeyle gezinme; boşken "sık aranan" ve hızlı erişim
- Çapraz bağlantılar: test türü ↔ regülasyon (seviyeli), sözlük → sayfalar, SSS → sayfalar
- Detay sayfalarında "Bu sayfada" içindekiler, "sonraki test türü", başa dön butonu, yazdır/PDF

### Dönüşüm (lead) akışı
- Her test türü ve regülasyon sonunda **Çözüm Ortağı kutusu** + "Bu konuda toplantı talep et" (konu önceden seçili)
- Uyum kontrolü sonucu → konular otomatik seçili toplantı formu
- Form: doğrulama, hata özeti, KVKK onayı → `mailto:` ile hazır e-posta taslağı (`formEndpoint` tanımlanırsa API'ye POST)

### Dil ve tema
- i18next + react-i18next; adreste dil öneki; hreflang/canonical; dil değişiminde sayfa ve kaydırma korunur, diğer diller arka planda önceden yüklenir
- Açık/koyu tema (sistem tercihine uyar, hatırlanır); tasarım: "Kurumsal Mavi"

### Görsel
- 20 WebP görsel (~1,5 MB): test türlerine ve sayfalara özel fotoğraflar (Unsplash lisanslı + RabbitQA kurumsal görselleri)
- DDoS için animasyonlu saldırı haritası (SVG), hareket azaltmada statik

---

## 5. Erişilebilirlik (WCAG 2.2 AA)

- **Otomatik denetim (axe-core 4.10):** 14 sayfa × açık/koyu tema → **0 ihlal** (WCAG 2.0/2.1/2.2 A+AA etiketleri)
- İçeriğe atla bağlantısı, anlamlı başlık hiyerarşisi, landmark'lar, tam klavye kullanımı, görünür odak (2.4.7), odağın header altında kalmaması (2.4.11), hedef boyutu ≥24px (2.5.8), `prefers-reduced-motion`, sayfa/parça dili (`lang`), erişilebilir form hataları, matriste renk + ikon + metin
- **Açık kalanlar:** ekran okuyucuyla (NVDA/JAWS/VoiceOver) manuel test yapılmadı; açılır menü/arama/form hata durumları otomatik taramadan geçmedi; beyan "öz değerlendirme" olarak yazıldı

---

## 6. Teknik altyapı

| | |
| --- | --- |
| Çatı | Vite 8 + React 19 + React Router 7, Tailwind CSS 4 |
| Bağımlılık | i18next, lucide-react, clsx, self-host fontlar (Inter, Inter Tight) — toplam 10 çalışma zamanı paketi |
| Paket boyutu | Ana JS ~490 KB (gzip ~150 KB), CSS ~46 KB; içerik dil başına ayrı parçalar halinde, isteğe bağlı yüklenir |
| Kod | ~3.100 satır (içerik hariç), 15 rota |
| Yapılandırma | `src/config/site.config.js` (e-posta, form servisi, ürün linkleri, sunum modu), `src/config/images.js`, `src/locales/<dil>/common.json`, `src/content/<dil>/…` |
| Yayın | Vercel (GitHub `main` → otomatik deploy), `vercel.json` SPA yönlendirmesi, build öncesi `scripts/generate-sitemap.mjs` |
| Gizlilik | Çerez yok, analitik yok, harici font/istek yok; yalnızca `theme` ve `lang` tercihleri `localStorage`'da |

---

## 7. Güçlü yönler

1. **Bankacılığa özel ve Türkiye + AB birlikte:** Türk regülasyonlarını (BDDK, 6493, ÖHVPS, KVKK) AB çerçeveleriyle aynı yerde, test türüne bağlayan kaynak nadir.
2. **Regülasyon → test türü matrisi ve uyum ön değerlendirmesi:** Bilgiyi karar ve aksiyona çeviren iki araç; ikisi de toplantıya doğal geçiş sağlıyor.
3. **Tutarlı şablon ve doğruluk disiplini:** Her sayfa aynı yapıda; uydurma rakam yok, resmi kaynak notu var.
4. **Üç dil, erişilebilir, hızlı, çerezsiz:** Kurumsal ve AB/DSGVO hassasiyetli kitleye güven veren teknik temel.
5. **Satış dili ayrıştırılmış:** İçerik bağımsız kalırken her sayfa ilgili ürüne ve toplantıya bağlanıyor.

---

## 8. Eksikler ve riskler

| # | Konu | Etki |
| --- | --- | --- |
| 1 | **Ölçüm yok** (analitik, dönüşüm takibi) | Hangi sayfanın/aracın toplantı getirdiği bilinmiyor |
| 2 | **Form `mailto` ile çalışıyor** | E-posta istemcisi olmayan veya kurumsal kısıtlı kullanıcıda talep kaybolabilir; talepler kayıt altında değil |
| 3 | **İstemci tarafı render (SPA)** | Sayfa bazlı başlık/açıklama yalnızca JS ile; sosyal paylaşım kartları tüm sayfalarda aynı; SEO'da ön-render olmadan dezavantaj |
| 4 | **Güven sinyalleri zayıf** | Yazar/uzman adı, gözden geçirme tarihi (sayfa bazında), vaka çalışması, sertifika/rozet yok |
| 5 | **İndirilebilir varlık yok** | Kontrol listesi dışında PDF rehber, şablon, eşleştirme tablosu (Excel) yok |
| 6 | **Regülasyon zaman çizelgesi yok** | Yürürlük/geçiş tarihleri yalnızca bazı sayfalarda "keyFacts" olarak |
| 7 | **Madde bazlı referans yok** | Regülasyon sayfaları özet düzeyinde; madde/bölüm atıfı yok (bilinçli: doğruluk riski) |
| 8 | **Uyum aracı sonucu e-postayla alınamıyor** | Sonuç adreste; "raporu e-postama gönder" gibi yumuşak lead yakalama yok |
| 9 | **Güncelleme akışı yok** | Regülasyon değişiklikleri/haber/bülten bölümü yok; geri dönüş nedeni az |
| 10 | **Hukuki/uyum doğrulaması bekleyen içerik** | TR regülasyonları, uyum aracı kuralları, gizlilik bildirimi, EN/DE çeviriler (bkz. `YAYIN_KONTROL_LISTESI.md`) |
| 11 | **Müşteri referansı kararı** | Akbank AG notu (`showClientReference`) onay bekliyor |
