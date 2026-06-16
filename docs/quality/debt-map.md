# Debt Map

The honest map of landmines, fragile areas, and gaps. **Append-only:** future sessions add dated findings here instead of fixing-by-the-way. Fixing an item = its own deliberate task (and the entry gets a dated "resolved" note, never deleted).

## Landmines (do not touch casually)

| # | Item | Where | Why it's risky |
| --- | --- | --- | --- |
| 1 | **Global `zoom: 0.8` on `body`** (+ `transform: scale(0.8)` fallback for browsers without `zoom`) | `app/globals.css` | Every font size, spacing, and breakpoint on the site is visually calibrated against this 80% scaling. Removing or changing it reflows the entire site; the `@supports` fallback (`width: 125%` + transform) behaves differently from `zoom` for fixed-position elements and scroll math. **Biggest single risk in the repo.** Any change requires visual re-verification of all pages at mobile + desktop. |
| 2 | Long AI-generated asset filenames referenced as string literals | `public/`, used in `HeroSection`, `FeaturesSection`, `HowItWorksSection`, `FaqSection`, `CtaSection`, `AppShowcaseSection` | Plain `<img src="...">` strings — a rename breaks images silently (no type error, no build error). The same gem PNG is referenced in 5+ components. |
| 3 | `code.html` prototype at repo root | `/code.html` | Looks like a page but is not part of the app; its theme (dark, brand "M", different tokens) has diverged from `globals.css`. Treating it as source of truth reintroduces dead design. |
| 4 | `video.mp4` is **19 MB** and loads on the home hero | `public/video.mp4`, `app/components/HeroSection.tsx` | Major page-weight/LCP liability, especially mobile. A second cinematic clip (868 KB, long filename) sits unused in `public/`. Don't swap/compress without checking the hero overlay/contrast design. |

## Fragile / inconsistent areas

| # | Item | Where | Notes |
| --- | --- | --- | --- |
| 5 | Placeholder pages with off-brand copy | `app/{reservation,flotte,services,assistance,myfleet-club}/page.tsx` via `InternalPage` | Accent-less, tutoiement, B2C copy ("Reserve ta voiture", "tes vraies voitures") contradicting the home page's B2B SaaS vouvoiement. These pages openly say they are stubs ("Cette page est prete pour brancher ton formulaire..."). The primary CTA "Demander une démo" lands on the `/reservation` stub — there is **no actual lead-capture mechanism**. |
| 6 | Anchor ids live on non-obvious components + dead links | `AppShowcaseSection.tsx` (`id="services"`), `CtaSection.tsx` (`id="myfleet-club"`), `Footer.tsx` (`id="assistance"`) | Anchor ids don't match component names (the "Plateforme" nav link `/#services` lands on `AppShowcaseSection`; `#myfleet-club` is the CTA section; `#assistance` is the footer) — easy to break when reordering/renaming sections. Footer "Legal" links (Confidentialité, CGU, Mentions) and all three social links are `href="#"` dead links. |
| 7 | Unverifiable marketing claims hard-coded | `FeaturesSection.tsx` ("+200 Agences équipées", "256 Bit SSL"), `FaqSection.tsx` ("migration en 48h") | No source for these numbers; confirm with the owner before reuse elsewhere. |
| 8 | Unused dependency `framer-motion@^12` | `package.json` | Installed, never imported. Either future intent or leftover — do not remove without asking; do not start using it casually either (it changes the client-bundle story). |
| 9 | Mixed `<img>` vs `next/image` | most sections | New images must use `next/image` (see conventions); existing `<img>`s stay until a deliberate pass. |

## Missing coverage / infrastructure

- **Zero tests** of any kind (no runner, no test files). Every CUJ in `docs/product/critical-user-journeys.md` is "none — untested".
- **No CI** (no `.github/`), no Prettier, no commit hooks. Only gates: `npm run lint` and the type check inside `npm run build`, both run manually.
- **No error/404 customization** — no `not-found.tsx`, `error.tsx`, or `loading.tsx` anywhere.
- **No sitemap/robots/OG image** beyond the default metadata in `layout.tsx`.

## Log

- 2026-06-12 — Initial debt map created during AI-operating-model adoption audit.
