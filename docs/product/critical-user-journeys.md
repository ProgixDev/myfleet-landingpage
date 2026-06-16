# Critical User Journeys (CUJs)

The journeys that must never break, inferred from the central routes and flows on 2026-06-12. **Every row is `[inferred — confirm]` until the product owner confirms it.**

**Rules going forward:**
- A change touching a CUJ requires verifying that journey (run `npm run dev`, walk the steps) before claiming done.
- New user-visible features must extend an existing CUJ row or register a new one here.
- When test coverage appears, update the coverage column — never leave it stale.

| ID | Journey | Steps (user's words) | Where it lives in code | Test coverage | Status |
| --- | --- | --- | --- | --- | --- |
| CUJ-1 | Land and understand the pitch | "I open the site, the video hero plays, and within seconds I understand MyFleet is a platform for my rental agency." | `app/page.tsx`, `app/components/HeroSection.tsx`, `app/layout.tsx` (metadata), `public/video.mp4` | none — untested | `[inferred — confirm]` |
| CUJ-2 | Request a demo | "From anywhere (header, hero, mobile menu, bottom CTA) I click 'Demander une démo' and reach the reservation page." | `Header.tsx`, `HeroSection.tsx`, `CtaSection.tsx` → `app/reservation/page.tsx` (`InternalPage.tsx`) | none — untested | `[inferred — confirm]` — destination is a placeholder; no lead is actually captured (PRD OQ-1) |
| CUJ-3 | Explore the platform on the home page | "I use the nav links (Fonctionnalités / Plateforme / Étapes / FAQ) and smooth-scroll to each section." | `Header.tsx` anchors → ids `#features` (`FeaturesSection`), `#services` (`AppShowcaseSection`), `#how-it-works` (`HowItWorksSection`), `#faq` (`FaqSection`); `scroll-margin-top` in `globals.css` | none — untested | `[inferred — confirm]` |
| CUJ-4 | Browse on mobile | "On my phone I open the hamburger menu, the drawer slides in, background scroll locks, I tap a link and the drawer closes." | `Header.tsx` (drawer state, body scroll lock, animations) | none — untested | `[inferred — confirm]` |
| CUJ-5 | Get answers from the FAQ | "I tap a question and the answer expands; the previous one closes." | `FaqSection.tsx` (single-open accordion state) | none — untested | `[inferred — confirm]` |
| CUJ-6 | Reach support / secondary pages | "From the footer I reach Support (/assistance), the partner program (/myfleet-club), fleet (/flotte) and services (/services), and can get back home." | `Footer.tsx`, `app/{assistance,myfleet-club,flotte,services}/page.tsx`, `InternalPage.tsx` ("Retour Accueil") | none — untested | `[inferred — confirm]` — pages are stubs (PRD OQ-2) |

## Questions for the owner

- Confirm or amend each CUJ above (especially CUJ-2: what should a *successful* demo request look like end-to-end?).
- Should the dead footer links (Legal group, social icons — all `href="#"`) be part of a CUJ or removed?
