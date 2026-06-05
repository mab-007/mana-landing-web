# MANA — Landing Page

Marketing landing page for **MANA**, the financial home for Filipinos abroad
(the consumer brand of Kinnectfi — a stablecoin neobank for the US → PH
remittance corridor).

> There is no backend yet. This is a static marketing site. The waitlist form is
> wired for Netlify Forms (see below).

## Tech stack

- [Vite](https://vite.dev) + [React 19](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-checks, then outputs a static site to ./dist
npm run preview  # serve the production build locally
```

## Deploy (Netlify)

`netlify.toml` is already configured:

- Build command: `npm run build`
- Publish directory: `dist`

The waitlist form uses **Netlify Forms** — submissions are captured
automatically once deployed to Netlify (look for the `waitlist` form in your
Netlify dashboard). To use a different provider, edit `src/components/waitlist.tsx`.

## Project structure

```
index.html         # entry HTML + SEO / OpenGraph meta tags + font links
src/
  main.tsx         # React entry
  App.tsx          # composes the page sections
  index.css        # Tailwind layers + shared component classes
  components/       # Nav, Hero, Features, HowItWorks, Rates, FAQ, Waitlist, Footer
public/            # favicon.svg (add og.png — 1200×630 — for social previews)
tailwind.config.ts
vite.config.ts
netlify.toml
```

## Brand

- **Name:** MANA
- **Tagline:** The financial home for Filipinos abroad
- **Palette:** ink blue (`#0B1B3A`), brand blue (`#2563EB`), sun gold (`#FBBF24`)

## To do

- Add `public/og.png` (1200×630) for social link previews.
- Replace illustrative product copy/figures with finalized numbers before launch.
- Wire real legal pages (Privacy, Terms).
