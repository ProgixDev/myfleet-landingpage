# Architecture Overview

_As of 2026-06-12. Describes the system as it is, not as we wish it were._

## Rendering and data-flow model

- **Next.js 16.2.4, App Router** (`app/` directory). No `pages/` directory.
- The entire site is static-renderable: there is **no data fetching, no API route, no server action, no database, no env var, and no external service call** anywhere in `app/`. Content (nav links, feature lists, FAQ entries, steps) lives as inline const arrays inside the section components.
- Server components by default. Exactly three client components (`"use client"`): `Header` (mobile drawer state + body scroll lock), `HeroSection` (imperative `video.play()` in `useEffect`), `FaqSection` (accordion open-index state).
- Styling: **Tailwind CSS 4** through `@tailwindcss/postcss` (no `tailwind.config.*` file — design tokens are declared in `app/globals.css` via the `@theme inline` block: `--color-primary`, `--color-primary-deep`, `--color-tertiary`, `--radius-super`, etc.). Custom effect classes (`glass-panel`, `gem-decoration`, `text-gradient`, `float-animation`, `iphone-frame`, the `site-*` background layers) are hand-written CSS in the same file.
- Fonts: `next/font/google` in `app/layout.tsx` — Plus Jakarta Sans (primary) and Inter, exposed as CSS variables.
- Note: `body { zoom: 0.8 }` in `globals.css` globally scales the whole site (with a `transform: scale(0.8)` `@supports` fallback). Every visual decision is calibrated against this. See the debt map.

## Directory layout

| Path | Role |
| --- | --- |
| `app/layout.tsx` | Root layout: fonts, `lang="fr"`, site-wide metadata (title/description in French) |
| `app/page.tsx` | Home page — composes Header, 6 marketing sections, Footer, plus decorative background layers |
| `app/globals.css` | Tailwind import, design tokens (`@theme`), all custom CSS effects and keyframes |
| `app/components/` | All components, flat. 8 section/layout components + `InternalPage` (shared placeholder-page template) |
| `app/reservation/` `app/flotte/` `app/services/` `app/assistance/` `app/myfleet-club/` | Five routes, each a ~12-line page rendering `InternalPage` with different copy |
| `public/` | `logo.png`, hero video `video.mp4` (19 MB) plus a second unused cinematic clip (868 KB), app-screen JPGs, AI-generated 3D PNG icons with very long descriptive filenames, default create-next-app SVGs |
| `code.html` | Standalone HTML design prototype (Tailwind CDN, dark theme, brand "M") — **not imported by the app**; historical reference only |
| `eslint.config.mjs` | ESLint 9 flat config: `next/core-web-vitals` + `next/typescript` |
| `next.config.ts` | Empty config (defaults) |
| `tsconfig.json` | `strict: true`, `@/*` path alias to repo root |

## Entry points

- Dev: `npm run dev` → http://localhost:3000
- Build/serve: `npm run build` / `npm run start`
- No CI workflows, no `.github/`, no deployment config committed (README suggests Vercel; not verified — [inferred]).

## External services

None at runtime. Google Fonts are fetched at build time via `next/font`.

## Known deviations from our target architecture

Recorded factually as legacy patterns — do not "correct" them silently:

1. **Content embedded in components.** Marketing copy, nav links, FAQ items, and feature lists are hard-coded const arrays inside the section components, not in a content layer. Fine at this size; noted for when localization or CMS needs arrive.
2. **Plain `<img>` instead of `next/image`** in most sections (`HeroSection` gems, `FeaturesSection`, `FaqSection`, `CtaSection`, `HowItWorksSection`, `AppShowcaseSection`, `InternalPage` ctas use `<img>`/literals). Only `Header` and `Footer` use `next/image`. Core-web-vitals lint apparently tolerates or warns; not enforced as an error.
3. **Global `zoom: 0.8` hack** instead of properly scaled typography.
4. **Unused dependency**: `framer-motion@^12` is declared but imported nowhere.
5. **Prototype artifact in repo root**: `code.html`.
6. **No tests of any kind**, no CI, no Prettier config (formatting is conventional, not enforced).
7. **Flat `app/components/`** with no separation between layout, sections, and shared primitives — acceptable now; new shared primitives should still go here rather than a new parallel folder.
