# Product Overview — MyFleet Landing Page

_Plain-language description for a new teammate, derived entirely from the code on 2026-06-12._

## What this is

This repository is the **public marketing website for MyFleet**, a French B2B SaaS that gives car-rental agencies a CRM and a white-label mobile app for their customers. The site's job is to pitch the platform and funnel visitors toward requesting a demo. It is a static Next.js site: no login, no database, no payments — the SaaS product itself lives elsewhere (not in this repo).

## Main user flow

A rental-agency owner lands on the home page, watches the full-screen hero video ("Votre flotte. Vos clients. Une plateforme."), scrolls through what the platform does, reads the FAQ, and clicks **"Demander une démo"** — which currently leads to a placeholder `/reservation` page with no form yet. That gap is the most important known limitation (see the PRD open questions).

## Shipped capabilities

- **Hero** (`app/components/HeroSection.tsx`) — full-bleed autoplaying video with overlay gradients, headline, and two CTAs (demo request, anchor to the platform showcase).
- **Features** (`FeaturesSection.tsx`) — three pillars: integrated CRM (fleet, contracts, reservations, payments), white-label client app (24/7 booking and payment), secure infrastructure (encryption, backups, RGPD). Ends with a trust band claiming "+200 agences équipées".
- **App showcase** (`AppShowcaseSection.tsx`) — three CSS-built iPhone mockups displaying app screenshots, alongside two highlights: the agency dashboard and the white-label client app.
- **How it works** (`HowItWorksSection.tsx`) — 3-step onboarding story: connect your fleet (data import with team support), activate the white-label client app (logo, colors, terms), pilot the business (reservations, revenue, occupancy in real time).
- **FAQ** (`FaqSection.tsx`) — accordion answering: setup takes ~48h with onboarding support; native multi-agency support with consolidated group view; no commitment, monthly cancellation, free demo.
- **Final CTA** (`CtaSection.tsx`) — "Prêt à digitaliser votre agence ?" with demo and "parler à un expert" buttons plus a QR-code card.
- **Header & Footer** (`Header.tsx`, `Footer.tsx`) — fixed nav with mobile drawer; footer with Plateforme / Compagnie / Legal link groups and social icons (legal and social links are currently dead `#` links).
- **Satellite pages** — `/reservation`, `/flotte`, `/services`, `/assistance`, `/myfleet-club`: all placeholder stubs rendered by the shared `InternalPage.tsx` template, each stating what it will eventually host (booking form, fleet catalog, services, support, membership club).

## Integrations

None at runtime. Google Fonts (Plus Jakarta Sans, Inter) are bundled at build time via `next/font`. No analytics, no CRM/forms backend, no payment provider, no consent management — yet.
