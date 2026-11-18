# Tehila homepage

Static marketing site for **תהילה** — the Tehillim-memorization app of the
Shinena family. Deliberately distinct from the Shinena homepage: soft sage/cream
palette with rose & lilac accents instead of the deep-green game look.

## Deploy

Pure static files — no build step. Deploy this repo root to Vercel (or any static
host) and point the domain at it.

- `index.html` — landing page
- `privacy.html`, `delete-account.html` — policy pages
- `config.js` — all outbound links (edit `APP_URL` to the live app)
- `app.js` — wires the "play" buttons to `APP_URL`
- `assets/img/` — Tehila mascot / logo / board artwork

## Settings

Edit `config.js` `APP_URL` to the deployed frontend (default:
`https://tehila1.vercel.app`).
