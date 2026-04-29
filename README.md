# Aloha Smart System — alohasmartsystem.com

Static website deployed to Hostinger via Git auto-deploy.

## Stack
- Static HTML
- React 18 (CDN, in-browser Babel) — components are `.jsx` loaded as `<script type="text/babel">`
- Vanilla CSS (`styles/aloha.css`, `styles/tokens.css`)
- Google Fonts (Instrument Serif, Inter Tight, Pretendard)

## Pages
- `index.html` — Aloha Smart System landing
- `brand-system.html` — Brand reference (logo / color / type)
- `about.html` — About Anthony / Musubi Media
- `home.html` — Musubi Media homepage
- `find-your-fit.html` — Product fit quiz
- `products/` — Per-product pages
  - `food-court-master.html`
  - `inventory-master.html`
  - `table-order.html`
  - `delivery-hub.html`
  - `kiosk.html`
  - `display-network.html`

## Deploy
On `git push origin main`, Hostinger pulls automatically via webhook.

```bash
# from this folder
git add -A
git commit -m "update copy"
git push
```

Or use the helper:
```bash
./deploy.sh "your commit message"
```

## Local preview
```bash
python3 -m http.server 8000
# open http://localhost:8000
```
