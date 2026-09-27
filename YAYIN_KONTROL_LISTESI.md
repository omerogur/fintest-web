# Yayın Kontrol Listesi

Site şu an **sunum modunda**: yalnızca link paylaşılarak gösteriliyor
(<https://fintest-web.vercel.app/tr>) ve arama motorlarının dizine eklemesi kapalı.
Gerçek yayına alırken aşağıdakileri sırayla yapın.

## Şu an sunum modunda olan ayarlar

| Ayar | Sunum modunda | Nerede |
| --- | --- | --- |
| Arama motoru dizine ekleme | Kapalı (`<meta name="robots" content="noindex, nofollow">`) | `index.html` |
| robots.txt | `Disallow: /` (build sırasında üretilir) | `scripts/generate-sitemap.mjs` |
| Site haritası (`sitemap.xml`) | Üretilmiyor | `scripts/generate-sitemap.mjs` |
| `indexing` | `false` | `src/config/site.config.js` |
| `siteUrl` | Boş | `src/config/site.config.js` |
| Paylaşım önizleme görseli / adresi | `https://fintest-web.vercel.app/...` | `index.html` (`og:image`, `og:url`) |

## Yayına alırken

1. **Alan adını belirleyin** (ör. `https://fintest.rabbitqa.com`) ve Vercel → Settings → Domains ile bağlayın.
2. `src/config/site.config.js`:
   - `siteUrl: 'https://<alan-adı>'`
   - `indexing: true`
3. `index.html`:
   - `<meta name="robots" content="noindex, nofollow" />` satırını ve üstündeki yorumu **silin**.
   - `og:image` ve `og:url` içindeki `https://fintest-web.vercel.app` kısmını yeni alan adıyla değiştirin.
4. `npm run build` çalıştırıp çıktıda `[sitemap] … adres yazıldı` satırını görün; `public/robots.txt`
   içinde `Allow: /` ve `Sitemap:` satırı olmalı.
5. Yayından sonra `https://<alan-adı>/sitemap.xml` adresini **Google Search Console**'a ekleyin (isteğe bağlı).

## İçerik ve hukuk kontrolleri (yayın öncesi)

- [ ] `contactEmail` gerçek kurumsal adresle değiştirildi (`src/config/site.config.js`).
- [ ] Gizlilik bildirimi ve KVKK metni hukuk ekibince gözden geçirildi; gerekiyorsa şirket unvanı/adresi
      ve saklama süresi eklendi (`src/content/<dil>/legal.js`, `src/locales/<dil>/common.json` → `meeting.kvkkText`).
- [ ] Türkiye regülasyon sayfaları ve uyum kontrolü kuralları (`src/lib/assessment.js`) uyum ekibince kontrol edildi.
- [ ] İngilizce ve Almanca metinler anadili konuşan biri tarafından okundu.
- [ ] Akbank AG referansının görünmesi onaylandı (`showClientReference`).
- [ ] Form bir servise bağlanacaksa `formEndpoint` dolduruldu; boşsa mailto ile çalışır.
