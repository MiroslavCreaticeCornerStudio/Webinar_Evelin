# Image Manifest

All assets downloaded from Figma (`fileKey: S5gmHfd896rwkeo8DkN0PU`) into `public/assets/images/`.
Asset URLs expire ~7 days after extraction; re-run the build pipeline if they need refreshing.

| File | Type | Size | Used in | Status |
|------|------|------|---------|--------|
| logo-inclusive.svg | SVG | 4.0 KB | Navbar, Metrics, Footer (logo mark + wordmark) | OK |
| logo-subtitle.svg | SVG | 4.8 KB | Navbar, Metrics, Footer ("недвижими имоти") | OK |
| hero-speaker.png | PNG 1066×1600 | 1.4 MB | Hero portrait + OG image | OK |
| hero-frame.svg | SVG | 859 B | Hero — gold angular translucent frame | OK |
| icon-eyebrow.svg | SVG | 344 B | Hero/Speaker eyebrow diamond marker (gold) | OK |
| icon-divider.svg | SVG | 356 B | (decorative; dividers rendered via `.divider-mark`) | OK |
| icon-calendar.svg | SVG | 3.8 KB | Hero + form-CTA info bar | OK |
| icon-clock.svg | SVG | 1.7 KB | Hero + form-CTA info bar | OK |
| icon-mappin.svg | SVG | 1.9 KB | Hero + form-CTA info bar | OK |
| icon-hourglass.svg | SVG | 1.2 KB | Hero + form-CTA info bar | OK |
| icon-lock.svg | SVG | 1.1 KB | form-CTA info ("Напълно безплатно") | OK |
| icon-video-slash.svg | SVG | 2.3 KB | form-CTA info ("Няма запис") | OK |
| benefits-bg.svg | SVG | 281 B | Benefits — dark angular panel with diagonal cut | OK |
| icon-check.svg | SVG | 365 B | Benefits — gold checkmark | OK |
| who-team.png | PNG 1220×1332 | 2.4 MB | "Who is it for" team photo (chamfer in alpha; rotated 180° per Figma) | OK |
| icon-bullet.svg | SVG | 389 B | "Who is it for" gold bullet marker | OK |
| cta1-bg.jpg | JPEG | 573 KB | CtaBanner 1 background photo | OK |
| cta1-watermark.jpg | JPEG | 243 KB | CtaBanner 1 faint INCLUSIVE watermark | OK |
| icon-users.svg | SVG | 6.1 KB | Learn card — UsersFour | OK |
| icon-chat.svg | SVG | 1.5 KB | Learn card — ChatText | OK |
| icon-list.svg | SVG | 3.8 KB | Learn card — ListNumbers | OK |
| icon-chart.svg | SVG | 1.3 KB | Learn card — ChartLine | OK |
| icon-tv.svg | SVG | 1.2 KB | Learn card — TelevisionSimple | OK |
| icon-trend.svg | SVG | 1.3 KB | Learn card — TrendUp | OK |
| learn-bottom.svg | SVG | 490 B | Learn section bottom diagonal accent | OK |
| speaker-portrait.png | PNG 950×1077 | 667 KB | Speaker — Евелин Апостолов portrait (angular frame in alpha) | OK |
| icon-bullet-tall.svg | SVG | 389 B | Speaker — tall bullet marker | OK |
| metrics-photo.png | PNG 1212×1230 | 2.5 MB | Metrics — team/meeting photo | OK |
| cta2-bg.jpg | JPEG | 229 KB | form-CTA background photo | OK |
| cta2-form-panel.svg | SVG | 985 B | form-CTA — angular gold-gradient-bordered panel | OK |
| footer-border.svg | SVG | 291 B | Footer — bordered frame (gap for logo) | OK |
| icon-footer-pin.svg | SVG | 1.2 KB | Footer — address pin | OK |
| icon-phone.svg | SVG | 1.3 KB | Footer — phone | OK |

**Notes**
- All raster photos are real images (>600 KB) — no SVG placeholders or failed exports.
- Phosphor-style icons keep their Figma gold fill (`#DBBD6B`).
- Large photos (1.4–2.5 MB) are candidates for optimization (Astro `<Image>` / WebP) before production — see follow-ups.
