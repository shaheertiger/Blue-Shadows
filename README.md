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

## Files
- `index.html` — the full homepage (markup, styles, and script inline)
- `vercel.json` — security headers + clean URLs
- `robots.txt`, `sitemap.xml` — basic SEO
- `package.json` — optional local dev scripts (not required by Vercel)
