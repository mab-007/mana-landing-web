# MANA — Landing Page

Marketing landing page for **MANA**, the financial home for Filipinos abroad
(the consumer brand of Kinnectfi — a stablecoin neobank for the US → PH
remittance corridor).

> There is no backend yet. This is a static marketing site. The waitlist form is
> wired for Netlify Forms (see below).

## Tech stack

- [Next.js](https://nextjs.org) (App Router) with **static export** (`output: "export"`)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # outputs a static site to ./out
```

## Deploy (Netlify)

`netlify.toml` is already configured:

- Build command: `npm run build`
- Publish directory: `out`

The waitlist form uses **Netlify Forms** — submissions are captured
automatically once deployed to Netlify (look for the `waitlist` form in your
Netlify dashboard). To use a different provider, edit `components/waitlist.tsx`.

## Project structure

```
app/
  layout.tsx     # <html>, fonts, SEO metadata / OpenGraph
  page.tsx       # composes the page sections
  globals.css    # Tailwind layers + shared component classes
components/       # Nav, Hero, Features, HowItWorks, Rates, FAQ, Waitlist, Footer
public/           # favicon.svg (add og.png — 1200×630 — for social previews)
tailwind.config.ts
next.config.mjs
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
