# FinTest Rehberi — Benchmark ve Geliştirme Önerileri

> Tarih: 28 Eylül 2026 · Mevcut durum için bkz. [`SITE_ANALIZI.md`](SITE_ANALIZI.md)
> Yöntem: 3 paralel web araştırması (WebSearch/WebFetch, gerekirse sayfa kaynağı), **~40 site**. Sayfa
> içinde doğrulanamayan bulgular **(doğrulanmadı)** olarak işaretlidir. Her siteden 1–3 sayfa incelendi;
> bu bir örneklem, tam denetim değildir.

---

## 1. Yönetici özeti

1. **En net farkımız zaten elimizde.** İncelenen hiçbir sitede *Türk regülasyonlarını (BDDK, 6493, ÖHVPS,
   KVKK) AB çerçeveleriyle aynı yerde, test türüne bağlayan* bir kaynak yok. Türk test firmaları
   (Keytorc, Testinium) regülasyondan bahsetmiyor; regülasyondan bahsedenler (sızma testi firmaları)
   yalnızca güvenliğe odaklanıyor; global test firmaları (BrowserStack, Tricentis, Sauce Labs) Türkiye'yi
   hiç kapsamıyor. **Regülasyon → test türü → sıklık → kanıt** zinciri Türkçe olarak hiçbir yerde yok.
2. **En büyük açığımız güven sinyalleri ve "tarih".** Rakiplerin çoğu sayfada *yazar, gözden geçiren
   uzman, son güncelleme tarihi, versiyon geçmişi* gösteriyor. Regülasyon içeriği hızla eskidiği için bu
   bizim için kritik ve ucuz bir kazanım.
3. **Araçlar lead üretiyor, ama sonuç "puan + rapor" olmalı.** Uyum/olgunluk değerlendirmeleri
   (regulation-dora.eu, SureCloud, mabl, Copla) sonucu **yüzde puan, alan bazında olgunluk ve
   indirilebilir/e-postalanabilir rapor** olarak veriyor. Bizim aracımız liste üretiyor; puan ve rapor yok.
4. **İndirilebilir varlıklar standart.** Sitelerin ~%60'ında kontrol listesi, şablon, eşleştirme tablosu
   (Excel/PDF) var. Bizde yalnızca yazdırılabilir kontrol listesi var.
5. **Türkiye'ye özel boş alanlar (rakipsiz):** ÖHVPS/BKM sertifikasyon hazırlığı, Türk regülatörlerine
   göre **test sıklığı tablosu**, TR↔AB eşleştirmesi (BDDK/TCMB ↔ DORA/PSD2), core banking (Mambu/Fimple)
   migrasyon testi, DDoS dayanıklılık testinin regülasyon karşılığı.

---

## 2. İncelenen siteler

| Grup | Siteler |
| --- | --- |
| **A. Test firmalarının bilgi merkezleri** | BrowserStack Guide, TestMu AI (eski LambdaTest) Learning Hub, Tricentis Learn/Resources, Sauce Labs Resources + Financial Services, Katalon Resources, mabl, QualityAI (eski Qualitest), Cigniti *(erişilemedi)* |
| **B. Regülasyon / standart bilgi siteleri** | gdpr-info.eu, digital-operational-resilience-act.com, regulation-dora.eu, crossmap (GitHub), UpGuard DORA Workbook, EIOPA DORA, EBA Operational Resilience, W3C WCAG 2.2 Quick Reference + "What's new in 2.2", a11yproject checklist, Deque, pcidssguide.com, PCI SSC Document Library, OWASP ASVS, OWASP MASVS, Berlin Group NextGenPSD2, UK Open Banking Standards |
| **C. Uyum araçları** | Vanta, Drata, Secureframe, Sprinto, OneTrust/DataGuidance, DORA hazırlık araçları (Copla, CyberUpgrade, SureCloud, regulation-dora.eu araç seti, Cyberday.ai) |
| **D. Türkiye pazarı** | Keytorc, Testinium, Kalitte, BDDK sızma testi firmaları (Netlore, BTYÖN, Certby vb.), ÖHVPS/BKM, Turkish Testing Board, FinTech İstanbul, TÖDEB, TBB |

---

## 3. Gruplara göre öne çıkanlar

### A. Test firmalarının bilgi merkezleri
- **BrowserStack:** Her makalede *Yazan + Gözden geçiren (unvanlı) + Son güncelleme + okuma süresi +
  versiyon geçmişi*; yapışkan içindekiler; bol tablo; 3 "ilgili rehber" kartı. Bankacılık için ayrı
  rehberler (bankacılık uygulaması testi, ödeme ağ geçidi testi), 9 adımlı akışın sonunda "sürüm hazırlık
  değerlendirmesi" ve "kanıt saklama". Form gönderilince **takvimden görüşme saati seçtiriyor**.
- **Tricentis:** A–Z 100+ açıklayıcı makale; **regülasyon rehberi + kontrol listesi çiftleri** (Annex 11,
  Part 11, GAMP 5 — yaşam bilimleri ama birebir bizim modelimiz); makale başında **TL;DR kutusu**,
  standartları karşılaştıran tablo (GDPR, PCI DSS, SOX, ISO 27001, WCAG 2.2…), "dijital banka yeni mobil
  transfer akışı yayınlıyor" gibi **senaryolar**, `FAQPage` şemalı SSS. Finans raporu formla kapalı
  (Marketo).
- **Sauce Labs:** Bankacılığa en özel olanı — "Finansal Hizmetler Güven Merkezi" (SOC 2, ISO 27001/27701,
  ISO 42001, FSQS, KY3P), adı verilen müşteri alıntıları, ROI hesaplayıcı, formla kapalı "mobil
  bankacılık uygulaması kontrol listesi".
- **TestMu (LambdaTest):** 742 eğitim, bölümlü konu merkezleri, **ücretsiz sertifika** (LinkedIn rozeti),
  800+ ücretsiz araç (kayıtsız).
- **Katalon:** Ücretsiz şablonlar (PDF/Word/Excel, formsuz), "akıllı özet" kutusu, SSS, akademi.
- **mabl:** 10 dakikalık **olgunluk değerlendirmesi → paylaşılabilir PDF**.
- **QualityAI:** Alt sektör girişleri (perakende bankacılık, kartlar & ödemeler, varlık yönetimi,
  fintech…), açık **DORA/operasyonel dayanıklılık güvencesi**, core platform ortakları (Temenos, FIS…).

### B. Regülasyon / standart bilgi siteleri
- **gdpr-info.eu:** Madde madde gezinme, her maddenin altında **ilgili gerekçe (recital) bağlantıları**,
  sade dilli "anahtar konular" sayfaları, **"Hata bildir"** bağlantısı, her sayfada tek bir danışmanlık
  sponsor kutusu (reklam yok) — *bizim Çözüm Ortağı kutusu modelinin olgun hali*.
- **digital-operational-resilience-act.com:** Tarihli haber akışı, kilit tarihler, alt düzenlemeler
  (RTS/ITS) durumlarıyla, NIS2/DORA/CER örtüşme diyagramları.
- **regulation-dora.eu:** ISO 27001 ↔ DORA eşleştirmesi **Tam / Kısmi / Açık** derecesiyle; "ISO'nun
  karşılamadıkları" listesi; yayın ve güncelleme tarihi + yazar; **kayıtsız araç seti** (kapsam
  kontrolü, boşluk analizi, TLPT hazırlık, olay sınıflandırma, maliyet/süre/ceza hesaplayıcılar).
- **W3C WCAG Quick Reference:** Filtreler + **"bu görünümü paylaş"** bağlantısı, "2.2'de eklendi"
  etiketleri; ayrı "2.2'de ne değişti" sayfası.
- **OWASP ASVS/MASVS:** Versiyonlu gereksinim kimlikleri; MASVS her gereksinimi **nasıl test edileceğine**
  (MASTG test vakaları) bağlıyor.
- **EBA/EIOPA:** Alt düzenlemelerin durumu (istişare → nihai → Resmî Gazete → yürürlük), "son güncelleme".
- **crossmap:** Çerçeveler arası eşleştirme (ISO 27002 ekseninde DORA, PCI DSS, NIS2…), her satırda
  "ISO ne veriyor / diğeri ne ekliyor / boşluk nasıl kapanır", kaynak değişince uyaran kontrol.

### C. Uyum araçları
- **Vanta/Drata/Secureframe:** Çerçeve başına **öğrenme yolu kartları** (giriş → hazırlık → denetim →
  karşılaştırma), kitler (rehber + şablon + kontrol listesi), çerçeve başına **% hazır** göstergesi.
- **DORA hazırlık araçları:** Hızlı (5 dk) / kapsamlı (25 dk) iki mod; alan bazında olgunluk (1–4),
  %50 altı "öncelikli"; **sektör karşılaştırması** (SureCloud); rapor e-postayla, araç formsuz.
- **Sprinto/regulation-dora:** Maliyet, süre, ceza hesaplayıcıları.

### D. Türkiye pazarı
- **Keytorc / Testinium:** Sektör sayfaları var ama **regülasyondan hiç bahsetmiyor**; güven: müşteri
  logoları, proje sayıları, ISTQB, Bilişim 500, Gartner.
- **Sızma testi firmaları:** Türkçedeki en regülasyon odaklı içerik bunlarda: BDDK yönetmeliği (Resmî
  Gazete tarih/sayı ile), kapsam, TSE TS 13638 rozeti, SSS, "Teklif alın". Regülatörlere göre test
  sıklıklarını **yalnızca düz metin** olarak veriyorlar *(içerikleri birincil kaynaktan doğrulanmalı)*.
- **ÖHVPS/BKM:** Simülatör → test otomasyonu → **BKM ÖHVPS Teknik Sertifikasyon** süreci var; bu sürece
  hazırlık içeriği sunan **hiçbir test firması bulunamadı** *(süreç ayrıntıları resmi kaynaktan
  doğrulanmalı)*.
- **TÖDEB, TBB, FinTech İstanbul, Turkish Testing Board:** Sözlükler (yalnızca Türkçe), mevzuat
  listeleri, etkinlikler (TestFinance, TestIstanbul); **test–regülasyon bağlantısı yok**.

---

## 4. Karşılaştırma: sektörde ne yaygın, bizde ne var?

Sıklık: incelenen örneklemde görülme oranı (gruplar ayrı sayıldı, yaklaşık).

| Özellik | Sektörde | Bizde |
| --- | --- | --- |
| İçerik sayfasında demo/uzman CTA | Çok yaygın (7/7 test firması) | ✅ Var (Çözüm Ortağı kutusu + toplantı) |
| Konu merkezleri / taksonomi | Yaygın | ✅ Var (test türleri, regülasyonlar, kaynaklar) |
| Sözlük | Orta | ✅ Var (37 terim, 3 dil) |
| SSS | Orta | ✅ Var (12 soru) — ama **şema işaretlemesi yok** |
| Filtreler | Yaygın | ✅ Var — ama **filtre durumu adreste değil** (paylaşılamıyor) |
| Standartları karşılaştırma tablosu | Az (Tricentis) | 🟡 Matris var; bölge/kapsam kolonlu karşılaştırma tablosu yok |
| Öz değerlendirme aracı | Orta (mabl, DORA araçları) | 🟡 Var — **puan, olgunluk, rapor yok** |
| Yazar / gözden geçiren / son güncelleme | Yaygın (4/6 test firması, 6/16 regülasyon sitesi) | ❌ Yok (yalnızca site geneli "son gözden geçirme") |
| Versiyon / değişiklik geçmişi | Orta | ❌ Yok |
| Regülasyon zaman çizelgesi / son tarihler | Orta (DORA siteleri, EBA, EIOPA) | 🟡 Bazı sayfalarda "kilit bilgiler" olarak |
| Madde düzeyinde atıf | Yaygın (regülasyon siteleri) | ❌ Yok (bilinçli — doğruluk riski) |
| Çerçeveler arası eşleştirme (Tam/Kısmi/Açık) | Orta | ❌ Yok |
| İndirilebilir kontrol listesi / şablon / Excel | Yaygın (~%60) | 🟡 Yalnızca yazdırılabilir sürüm öncesi listesi |
| Gereksinim → nasıl test edilir bağlantısı | Az ama çok değerli (MASVS→MASTG) | 🟡 Test türü düzeyinde var, test vakası düzeyinde yok |
| Senaryo / örnek test vakası | Orta (Tricentis, BrowserStack) | ❌ Yok |
| Vaka çalışması / müşteri kanıtı | Yaygın | ❌ Yok (Akbank notu onay bekliyor) |
| Güven merkezi (sertifikalar, veri yerleşimi) | Az (Sauce) ama bankalar için kritik | ❌ Yok |
| Hesaplayıcılar (ROI, maliyet, süre) | Orta | ❌ Yok |
| Web semineri / etkinlik | Çok yaygın | ❌ Yok |
| Bülten / güncelleme akışı | Orta | ❌ Yok |
| Ücretsiz eğitim / sertifika | Orta (TestMu, Katalon, mabl) | ❌ Yok |
| "Hata bildir" / düzeltme öner | Az (gdpr-info, W3C, OWASP) | ❌ Yok |
| Form sonrası takvimden görüşme seçimi | Az (BrowserStack) | ❌ Yok (mailto) |
| Çok dillilik | Az (5/16 regülasyon sitesi) | ✅ **TR/EN/DE tam** — fark yaratıyor |
| Türk regülasyonları + test bağlantısı | **Hiçbirinde yok** | ✅ **Var — ana farkımız** |
| WCAG 2.2 AA uyumlu site | Belirtilmiyor | ✅ Denetlendi (axe: 0 ihlal) |

---

## 5. Önerilen yol haritası

Emek: **S** ≈ 1–2 gün · **M** ≈ 3–7 gün · **L** ≈ 2+ hafta. "İçerik doğrulama" işaretli maddeler uyum/
hukuk kontrolü olmadan yayına alınmamalı.

### Faz 1 — Hızlı kazanımlar (güven + SEO + dönüşüm)

| # | Öneri | Neden (kimde gördük) | Emek |
| --- | --- | --- | --- |
| 1 | **Her sayfada "Hazırlayan / Gözden geçiren / Son gözden geçirme tarihi"** ve kısa değişiklik notu | BrowserStack, regulation-dora, EIOPA; regülasyon içeriğinde en ucuz güven sinyali | S |
| 2 | **TL;DR (özet) kutusu** — test türü ve regülasyon sayfalarının başında 3–4 madde | Tricentis, Katalon; yöneticiler tarar | S |
| 3 | **Yapılandırılmış veri (schema):** `FAQPage`, `Article`, `BreadcrumbList`, `Organization` — her dilde | Tricentis, BrowserStack; arama ve yapay zekâ yanıt motorlarında görünürlük | S |
| 4 | **Filtre durumunu adrese yazmak + "Bu görünümü paylaş"** (matris, test türleri, sözlük) | W3C WCAG Quick Reference; danışman müşteriye filtrelenmiş link gönderebilir | S |
| 5 | **"Hata bildir / düzeltme öner"** bağlantısı (e-posta taslağı) | gdpr-info, W3C, OWASP; doğruluk ve bakım sinyali | S |
| 6 | **Standartlar karşılaştırma tablosu** (regülasyon / bölge / kapsam / kimleri bağlar / ilgili testler) | Tricentis; TR ve AB yan yana | S |
| 7 | **Güçlü "hukuki görüş değildir" notu** araç sonuçlarında ve eşleştirmelerde (bir kısmı var) | a11yproject, crossmap | S |

### Faz 2 — Farklılaştıran araçlar ve içerik

| # | Öneri | Neden | Emek |
| --- | --- | --- | --- |
| 8 | **Uyum kontrolüne olgunluk puanı:** "Hızlı" (mevcut 4 soru) + "Detaylı" (test alanı başına 1–4 olgunluk sorusu) → alan bazında %, %50 altı "öncelikli", önceliklendirilmiş aksiyon listesi | regulation-dora.eu, SureCloud, Copla, mabl | M |
| 9 | **Sonucu PDF rapor olarak indir / e-postama gönder** (araç formsuz kalır, rapor isteğe bağlı) + rapordan toplantıya geçiş | mabl, regulation-dora.eu; "önce değer, sonra iletişim" | M |
| 10 | **Türkiye test sıklığı ve kanıt tablosu:** regülatör · düzenleme (RG tarih/sayı) · test türü · sıklık · sunulacak kanıt | Rakipte yalnızca düz metin var; matrisimize doğal uzantı | S–M · **içerik doğrulama** |
| 11 | **Regülasyon zaman çizelgesi:** sayfa başına ve tüm regülasyonlar için ortak; geçmiş/yaklaşan/açık durumları | DORA siteleri, EBA, EIOPA | M · **içerik doğrulama** |
| 12 | **ÖHVPS/BKM sertifikasyon hazırlık rehberi + kontrol listesi** (simülatör → test otomasyonu → onay; planlama) | Türkiye'de hiçbir test firmasında yok; API test otomasyonuna doğrudan bağ | M · **içerik doğrulama** |
| 13 | **İndirilebilir kitler** (ücretsiz): regülasyon başına kontrol listesi (DORA dayanıklılık testi planı, PCI DSS test kanıtları, WCAG 2.2/EAA), core banking migrasyon test planı (Mambu/Fimple), regülasyon→test eşleştirmesi Excel/CSV | Katalon (formsuz), Secureframe (kit), Tricentis (rehber+liste), UpGuard (workbook) | M |
| 14 | **Bankacılık senaryoları** her test türünde: EFT/FAST transferi, açık bankacılık rıza akışı, kart ile uzaktan ödeme — ilgili regülasyonlara bağlı örnek test vakaları | Tricentis, BrowserStack | S–M |
| 15 | **"Ben bir …" girişleri:** banka, ödeme/e-para kuruluşu, fintech, (sigorta) → matrisi ve listeleri önceden filtreler | QualityAI alt sektör girişleri | M |
| 16 | **Çözüm ortağı güven paneli:** sertifikalar, veri yerleşimi / kurum içi kurulum seçenekleri, ödüller (Virgosol'ün listelediği), izinli referanslar, isimsiz ama ölçülü vaka özetleri | Sauce FS Trust Center, Secureframe vaka çalışmaları, TR firmalarının logo/rozet kullanımı | S–M · **bilgi gerekli** |
| 17 | **Form sonrası takvimden görüşme seçimi** (Calendly/Cal.com gömme) + form servisini bağlamak (`formEndpoint`) | BrowserStack; mailto kaybını da çözer | M |

### Faz 3 — Otorite ve geri dönüş sebebi

| # | Öneri | Neden | Emek |
| --- | --- | --- | --- |
| 18 | **TR ↔ AB eşleştirmesi** (BDDK/TCMB ↔ DORA; ÖHVPS ↔ PSD2; KVKK ↔ GDPR; EAA ↔ WCAG) **Tam/Kısmi/Açık** derecesiyle + "neler eksik kalır" | regulation-dora.eu, crossmap, Drata; AB'de faaliyeti olan Türk bankaları için eşsiz | L · **içerik doğrulama** |
| 19 | **Madde düzeyinde atıf** (ör. "DORA m. 24–27 → dayanıklılık testi / TLPT", "WCAG 2.4.11 → erişilebilirlik testi") matris ve sayfalarda | gdpr-info, WCAG QR, OWASP; alıntılanabilirlik | M · **içerik doğrulama** |
| 20 | **"Kapsamda mıyım?" mini araçları:** DORA kapsamı (AB iştirakli/AB müşterili TR kurumları), lisans tipine göre geçerli TR düzenlemesi | regulation-dora.eu (araç başına ayrı giriş noktası) | M |
| 21 | **Değişiklik günlüğü + bülten:** "Rehberde ne değişti" sayfası, matris ve sözlükte "yeni/güncellendi" etiketleri, aylık e-bülten | W3C "What's new", PCI SSC değişiklik özetleri, DORA haber akışı | M |
| 22 | **Resmi kaynak takibi:** kaynak URL listesi + son kontrol tarihi; kaynak değişince sayfayı "gözden geçirilecek" işaretle | crossmap `check-sources`; bayat kaynak güveni zedeler | M |
| 23 | **Hesaplayıcılar:** test otomasyonu ROI / regresyon süresi, DORA olay sınıflandırma yardımcısı | Sauce, Sprinto, regulation-dora.eu | M |
| 24 | **Web semineri serisi ve etkinlik özetleri** (BDDK sızma testi, ÖHVPS testi, DORA dayanıklılık) — kayıt = iletişim | Tüm test firmaları; TR'de TestFinance/TestIstanbul | M (sürekli) |
| 25 | **Yıllık "Türkiye Finans QA Durumu" mini anketi** → uyum aracında sektör ortalaması karşılaştırması | SureCloud (sektör karşılaştırması), Drata/TTB raporları | L |
| 26 | **Ücretsiz kısa eğitim + rozet** ("Fintech QA Uyum Temelleri", mevcut rehber ve sözlükten) | TestMu, Katalon Academy, mabl University | L |

### Önerilen sıralama
1. **Faz 1'in tamamı** (1–7): bir sprintte biter, güven ve SEO'yu hemen yükseltir.
2. **8 + 9 + 17:** uyum aracını puanlı rapora çevirip toplantı akışını takvim/form servisiyle güçlendirmek
   → doğrudan lead etkisi.
3. **10 + 12 + 11:** Türkiye'ye özel, rakipsiz içerik (uyum ekibinin doğrulamasıyla).
4. **13 + 14 + 16:** kitler, senaryolar ve güven paneli.
5. Faz 3: otorite ve sürekli geri dönüş.

---

## 6. Dikkat edilmesi gerekenler

- **Doğruluk ilkemizi korumak:** Madde atıfları, test sıklıkları, ÖHVPS süreci ve TR↔AB eşleştirmeleri
  birincil kaynaktan (Resmî Gazete, BDDK, TCMB, BKM, EUR-Lex) doğrulanmadan yayınlanmamalı. Araştırmada
  rakip sitelerde görülen rakamlar (ör. yönetmelik maddeleri, yıllık/iki yıllık sıklıklar) **birincil
  kaynak değil**, ikincil kaynaktır.
- **Bağımsız görünümü korumak:** gdpr-info modeli (sayfa başına tek, net ayrılmış sponsor kutusu)
  güveni korurken lead üretiyor; ana menüye ürün/eğitim satışı taşımak (DORA sitesi örneği) ticari
  algı yaratıyor.
- **Formla kapatma (gating):** Araçlar ve HTML içerik açık kalmalı; yalnızca markalı PDF/Excel gibi ek
  değer isteğe bağlı iletişim bilgisiyle verilmeli. Bu, KVKK/GDPR açısından da daha temiz.
- **Ölçüm:** Öneriler uygulanmadan önce çerezsiz bir analitik (ör. Plausible/Umami — kişisel veri
  toplamadan) ve dönüşüm olaylarının (toplantı talebi, araç tamamlama, indirme) tanımlanması, hangi
  önerinin işe yaradığını görmek için gerekli. Gizlilik bildiriminin buna göre güncellenmesi gerekir.

---

## 7. Kaynaklar (seçme)

**Test firmaları:** browserstack.com/guide · browserstack.com/guide/how-to-test-banking-domain-applications ·
testmuai.com/learning-hub · tricentis.com/learn/compliance-testing · tricentis.com/solutions/financial-services ·
saucelabs.com/solutions/financial-institutions · saucelabs.com/financial-services-trust-center ·
katalon.com/resources-center · mabl.com/software-quality-maturity-assessment · quality-ai.com/industry/financial-services

**Regülasyon siteleri:** gdpr-info.eu · digital-operational-resilience-act.com · regulation-dora.eu/tools ·
github.com/mr7security/crossmap · upguard.com/resources/dora-assessment-workbook ·
eiopa.europa.eu/digital-operational-resilience-act-dora_en · eba.europa.eu/regulation-and-policy/operational-resilience ·
w3.org/WAI/WCAG22/quickref · w3.org/WAI/standards-guidelines/wcag/new-in-22 · a11yproject.com/checklist ·
pcidssguide.com · pcisecuritystandards.org/document_library · owasp.org (ASVS) · mas.owasp.org/MASVS ·
berlin-group.org/nextgenpsd2-downloads · standards.openbanking.org.uk

**Uyum araçları:** vanta.com/collection/soc-2 · drata.com/product/dora-compliance · secureframe.com/compliance-resources ·
sprinto.com/calculators/compliance-cost · surecloud.com (DORA readiness) · copla.com (DORA self-assessment) · cyberday.ai/assessment/dora

**Türkiye:** keytorc.com/en/banking-software-testing · testinium.com · netloresecurity.com/solutions/compliance/bddk ·
blog.btyon.com.tr (sızma testi zorunlulukları) · ohvps.github.io/sorulan-sorular.html · turkishtestingboard.org ·
fintechistanbul.org · todeb.org.tr (fintek sözlüğü) · tbb.org.tr (güvenlik)
