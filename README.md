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
  main.tsx         # React entry (+ ?shot capture-mode toggle)
  App.tsx          # composes Nav + Hero + slides + Footer
  index.css        # Tailwind layers, shared classes, scroll-snap + reveal
  components/
    nav.tsx        # fixed, transparent-over-hero -> frosted cream on scroll
    hero.tsx       # cream hero: serif headline, app badges, USD-wallet phone
    reveal.tsx     # fade/slide-in-on-scroll wrapper (IntersectionObserver)
    phone.tsx      # reusable CSS phone mock-up
    logo.tsx, icons.tsx
    slides/        # how-it-works, remittance, send-money, save,
                   # card, why-mana, cta  (mirror the live MANA site)
    footer.tsx
public/
  images/          # hero.jpg, accounts.jpg, budget.jpg, avatars/*  (swap freely)
  favicon.svg
```

## Behaviour

- **Continuous editorial scroll** (matches the live MANA site) with
  **reveal-on-scroll** animations as each section enters view.
- **`?shot` capture mode:** append `?shot` to the URL to force reveal content
  visible for full-page screenshots (used during development).

## Design system

Mirrors the live MANA site. Palette: **papel** (cream `#FAF6EF`), **gabi**
(navy `#0A1228`), **tanglaw** (orange `#E85D2C`), success green `#1F8B4D`.
Fonts: **Fraunces** (serif headlines) + **Manrope** (body). Logo: two-peak
mountain + "Mana" wordmark.

## Brand

- **Name:** MANA
- **Tagline:** The financial home for Filipinos abroad
- **Palette:** ink navy (`#0B1B3A`), teal accent (Tailwind `teal-700`),
  sun gold (`#FBBF24`), with coral / pink / emerald section accents (matching the
  design reference)

## Images

Stock placeholders (Unsplash + pravatar) live in `public/images/`. Replace them
1:1 with brand photography — keep the same filenames and nothing else changes.

## To do

- Add `public/og.png` (1200×630) for social link previews.
- Replace illustrative product copy/figures with finalized numbers before launch.
- Wire real legal pages (Privacy, Terms).
