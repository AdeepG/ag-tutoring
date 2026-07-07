# AG Tutoring Website

One-page tutoring website for Adeep Gowreddy (math, SAT prep, and coding tutoring in the Frisco area and online). Built with React, Vite, and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serves the production build locally
```

## Environment variables

The site works with no environment variables set. The only configurable value is the contact form key:

| Variable | Purpose | Notes |
| --- | --- | --- |
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms access key for the contact form | Optional. A working key is hardcoded as a fallback. This is a **public** key (safe in client code), not a secret. |

Copy `.env.example` to `.env` for local overrides. Never commit a real `.env` (it is gitignored). Remember: any `VITE_`-prefixed variable is embedded in the built site and is public, so never put true secrets there.

## Contact form

The form uses [Web3Forms](https://web3forms.com) (free, unlimited submissions). Submissions are emailed to the address the access key is registered to, and replies go back to the person who submitted. Logic lives in `src/components/ContactForm.jsx`. To change the destination, register a new key at web3forms.com and either set `VITE_WEB3FORMS_ACCESS_KEY` or replace the fallback string in that file.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite. Confirm: Framework **Vite**, Build command `npm run build`, Output directory `dist`.
4. (Optional) Add `VITE_WEB3FORMS_ACCESS_KEY` under Project Settings → Environment Variables.
5. Click **Deploy**. You get a live `*.vercel.app` URL. Every future push to the main branch redeploys automatically.
6. After deploying, update the domain field in your Web3Forms dashboard from `localhost` to your live URL.

## Common edits

| What to change | Where |
| --- | --- |
| Section text/copy | `src/components/*.jsx` — copy lives in plain data arrays at the top of each file |
| Colors / fonts / backgrounds | `src/index.css` (`@theme` block and background-treatment classes) |
| Subjects & topic tags | `src/components/Subjects.jsx` (`SUBJECTS` array) |
| Credentials | `src/components/Credentials.jsx` (`CREDENTIALS` array) |
| Headshot | Replace `public/adeep-headshot.jpg` (keep it web-sized, ~512px) |
| Page title / meta / structured data | `index.html` |

## Optional post-launch

- **Google Search Console**: add the verification meta tag in `index.html` (a placeholder comment marks the spot).
- **Analytics**: enable Vercel Analytics (comment in `src/main.jsx`) or paste a Google Analytics snippet into `index.html` (placeholder comment marks the spot).
- **Testimonials**: none are shown. Add a real testimonials section only once you have genuine reviews.
