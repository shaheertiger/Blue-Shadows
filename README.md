# Blue Shadows Barber Studio

Cinematic, dark-luxury homepage for Blue Shadows Barber Studio (Milton, ON) — static HTML/CSS/JS, no build step, no dependencies.

## Deploy to Vercel

**Option A — Vercel dashboard**
1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Other** (static site). No build command needed — Vercel serves `index.html` from the root.
4. Deploy.

**Option B — Vercel CLI**
```
npm i -g vercel
vercel
```

## Local preview
```
npm run dev
```
(Runs `npx serve .` — or just open `index.html` directly in a browser.)

## Custom domain
Point `blueshadows.ca` at the Vercel project in Project Settings → Domains.

## Booking
All "Book Your Chair" CTAs link to the Square Appointments booking page:
https://book.squareup.com/appointments/d34rhdcazwo38t/location/L2K4HDPJ9GD77/services

## SEO & LLM optimization
- Structured data: `HairSalon`/`BarberShop` LocalBusiness schema (services, pricing, hours, reviews) plus a `FAQPage` schema, both in `index.html`, matching visible on-page content.
- Open Graph + Twitter Card tags point at `og-image.jpg` (1200×630) for rich link previews.
- `llms.txt` — a plain-text summary of business facts (hours, address, pricing, services) for AI assistants and answer engines to cite accurately.
- `robots.txt` explicitly allows major AI crawlers (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, etc.) alongside standard search bots.
- `sitemap.xml` includes `lastmod` and an image sitemap entry.

## Files
- `index.html` — the full homepage (markup, styles, and script inline)
- `vercel.json` — security headers + clean URLs
- `robots.txt`, `sitemap.xml`, `llms.txt` — SEO and LLM-crawler optimization
- `og-image.jpg` — social share / Open Graph preview image
- `package.json` — optional local dev scripts (not required by Vercel)
