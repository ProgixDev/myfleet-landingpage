# PRD — MyFleet Landing Page (reverse-engineered)

_Reconstructed from the codebase on 2026-06-12. Every claim is **observed** (with source) or marked `[inferred]`. Business intent the code cannot reveal is in Open Questions, not assumed._

## Problem & opportunity

- Car-rental agencies manage vehicles, contracts, reservations and payments with fragmented tooling; MyFleet sells a single platform: an agency CRM plus a white-label client app (observed: hero copy in `app/components/HeroSection.tsx`, metadata in `app/layout.tsx` — "MyFleet équipe les agences de location d'un CRM intelligent et d'une application client en marque blanche").
- This repository's job is narrower: it is the **marketing site** whose purpose is to explain the platform and convert visiting agency owners into **demo requests** `[inferred]` (every primary CTA — header, hero, mobile drawer, CTA section — points to `/reservation` labeled "Demander une démo").

## Goals & non-goals

- **Goal `[inferred]`:** generate qualified demo leads from French-speaking rental agencies; communicate credibility (security, RGPD, "+200 agences").
- **Goal `[inferred]`:** showcase the white-label client app (phone mockups in `AppShowcaseSection`) and the 3-step onboarding (`HowItWorksSection`).
- **Non-goals `[inferred]`:** the landing page does not implement the SaaS itself — no login, no dashboard, no booking engine, no payments (observed: zero forms, zero API calls in the codebase).
- Actual business goals/non-goals are unconfirmed → see Open Questions.

## Users & jobs

- **Primary `[inferred]`:** owners/managers of car-rental agencies in French-speaking markets (`lang="fr"`, vouvoiement B2B copy, multi-agency FAQ in `FaqSection.tsx`). Job: "evaluate whether MyFleet can run my agency; request a demo."
- **Secondary `[inferred]`:** the agencies' end customers appear only as a selling point (the white-label app), not as users of this site.

## Current scope — shipped capabilities, ranked by centrality

1. **Home page marketing funnel** (observed: `app/page.tsx`) — Hero with full-bleed video + "Demander une démo" / "Découvrir la plateforme"; Features (CRM, client app, security — `FeaturesSection.tsx`); App showcase with iPhone mockups (`AppShowcaseSection.tsx`); 3-step "How it works" (`HowItWorksSection.tsx`); FAQ accordion — onboarding time, multi-agency, no commitment (`FaqSection.tsx`); final CTA with QR code (`CtaSection.tsx`); footer with link groups (`Footer.tsx`).
2. **Navigation** (observed: `Header.tsx`) — fixed navbar, anchor links to home sections, responsive mobile drawer with scroll lock, demo CTA.
3. **Demo-request entry point** (observed: `app/reservation/page.tsx`) — currently a **placeholder**: a styled stub stating it is ready for a form and payment integration. No lead capture exists.
4. **Placeholder satellite pages** (observed): `/flotte`, `/services`, `/assistance`, `/myfleet-club` — all stubs via `InternalPage.tsx`, with copy that is B2C-flavored and inconsistent with the home page.

## Constraints

- Observed: French-only (`lang="fr"`, no i18n machinery); static site — no backend, no env vars, no third-party services; Next.js 16.2.4 / React 19.2.4 / Tailwind 4; 19 MB hero video constrains page weight (see `docs/quality/debt-map.md`); global `zoom: 0.8` constrains all visual work.
- `[inferred]` Deployment target Vercel (README boilerplate); unconfirmed.

## Success metrics

- Unknown — nothing in the code measures anything (no analytics, no tracking script, no form submissions to count). `[inferred]` the natural metric would be demo requests, which currently cannot be captured. → Open Questions.

## Open questions (awaiting product owner)

Recorded instead of asked, per unattended run:

1. **OQ-1 (goals):** Is the sole conversion goal of this site demo-request leads, and what mechanism should `/reservation` use (form, calendar booking, email)? Today nothing captures a lead.
2. **OQ-2 (non-goals):** Are `/flotte`, `/services`, `/assistance`, `/myfleet-club` planned launch pages, or leftovers from an earlier B2C car-rental concept that should be retired? Their copy (tutoiement, "Reserve ta voiture") contradicts the B2B positioning.
3. **OQ-3 (metrics):** What analytics/measurement stack should be installed (and is consent/RGPD tooling required alongside it)?
4. **OQ-4 (claims):** Are "+200 agences équipées", "migration en 48h", and the security claims ("256 Bit SSL", RGPD conformity) factual and approved? They are hard-coded in `FeaturesSection.tsx`/`FaqSection.tsx`.
5. **OQ-5 (scope):** Is `code.html` (dark-theme "M — L'Excellence Automobile" prototype) still wanted in the repo, and is the unused `framer-motion` dependency reserved for planned animation work?

## Decision log

- 2026-06-12 — PRD reverse-engineered from codebase; pending product-owner review. All `[inferred]` items and OQ-1…OQ-5 await confirmation.
