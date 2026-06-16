---
name: create-spec
description: Turn a feature request or idea into a written spec under specs/. Use when the user describes a new feature, change, or page for the MyFleet landing page and wants it specified before any code ("spec this", "write a spec", "I want to add X").
argument-hint: <short feature description>
---

# Create a spec

Turn the request in `$ARGUMENTS` into `specs/NNN-slug/spec.md`.

1. **Ground first.** Read `AGENTS.md`, `docs/product/prd.md`, `docs/product/critical-user-journeys.md`, and `docs/quality/debt-map.md`. The site is a static Next.js 16 App Router marketing page — no backend exists; if the feature needs one (forms, payments, analytics), the spec must call that out as new infrastructure.
2. **Number and slug.** List `specs/` (create the directory if it doesn't exist). Next number = highest existing `NNN` + 1, zero-padded to 3 digits. Slug = short kebab-case.
3. **Write `specs/NNN-slug/spec.md`** with exactly these sections:
   - **Problem** — what user/business problem this solves; tie to the PRD (cite section or relevant Open Question OQ-1…OQ-5).
   - **Acceptance criteria** — numbered, testable statements, including French copy requirements (accents, vouvoiement, B2B tone per `docs/conventions/code-style.md`).
   - **Out of scope** — explicit non-goals.
   - **Affected files & legacy zones** — concrete paths under `app/`; check every touched area against `docs/quality/debt-map.md` (zoom hack, long asset filenames, placeholder pages, `code.html`, anchor ids) and list any contact explicitly.
   - **CUJ impact** — which CUJ rows in `docs/product/critical-user-journeys.md` this touches or adds.
   - **Test plan** — there is no test runner; the plan is therefore: `npm run lint`, `npm run build`, plus manual verification steps in `npm run dev` (exact pages and viewports to check, including mobile because of the drawer and the global `zoom: 0.8`).
4. **Open questions** — anything material you'd otherwise assume goes into an "Open questions" section of the spec, not into silent assumptions.
5. Report the created path and a 3-line summary. Do not start implementing.
