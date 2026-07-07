# Adeep Gowreddy Tutoring Website

One-page tutoring website built with React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Vite. No extra config needed.

## Common edits

| What to change | Where |
| --- | --- |
| Section text/copy | `src/components/*.jsx` — copy lives in plain data arrays at the top of each file |
| Colors / fonts | `src/index.css` (`@theme` block) |
| Subjects & topic tags | `src/components/Subjects.jsx` (`SUBJECTS` array) |
| FAQ questions | `src/components/FAQ.jsx` (`FAQS` array) + JSON-LD schema in `index.html` |
| Testimonials (placeholders!) | `src/components/Testimonials.jsx` — replace with real reviews |
| Headshot | Replace `public/adeep-headshot.jpg` |
| SEO title/description/schema | `index.html` |

## To-do after deploying

- **Contact form backend**: set up to use Web3Forms (free, unlimited). Get an access key at web3forms.com and paste it into `WEB3FORMS_ACCESS_KEY` near the top of `src/components/ContactForm.jsx`. Until then the form logs to the console instead of emailing.
- **Google Search Console**: add the verification meta tag in `index.html` (placeholder comment marks the spot).
- **Analytics**: enable Vercel Analytics (comment in `src/main.jsx`) or paste a Google Analytics snippet into `index.html` (placeholder comment marks the spot).
- **Testimonials**: replace the placeholder quotes in `src/components/Testimonials.jsx` with real ones.
