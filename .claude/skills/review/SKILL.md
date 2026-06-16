---
name: review
description: Review the current diff of the MyFleet landing page against AGENTS.md rules, conventions, and the debt map. Use when asked to review changes, check a diff, or before committing/PR.
argument-hint: [base ref, default = working tree vs HEAD]
---

# Review the current diff

1. **Collect the diff.** `git status` and `git diff` (and `git diff --staged`); if `$ARGUMENTS` names a base ref, use `git diff <base>...HEAD`.
2. **Ground.** Read `AGENTS.md` sections 6–7, `docs/conventions/code-style.md` section (b), and `docs/quality/debt-map.md`.
3. **Check, in order:**
   - **Gates untouched:** no edits to `eslint.config.mjs`, `tsconfig.json` strictness, or `package.json` scripts that weaken checking.
   - **TypeScript:** no new `any`, no new `@ts-ignore` (only `@ts-expect-error` with reason).
   - **Boundaries:** `"use client"` only where state/effects require it; logic out of presentational section components; no new module-level mutable state.
   - **Conventions (b):** `next/image` for new images with proper `alt`; design tokens over raw hex; short kebab-case names for new assets; French copy with accents/vouvoiement/B2B tone; accessible interactive elements (aria attributes like the existing hamburger pattern in `Header.tsx`).
   - **Legacy zones:** no casual edits to `code.html`, the `zoom: 0.8` block in `app/globals.css`, or renames of long `public/` asset filenames without all usages updated.
   - **CUJs:** if the diff touches a journey in `docs/product/critical-user-journeys.md`, was it verified? New user-visible features must register/extend a CUJ.
   - **Docs/debt:** stale docs updated in the same diff; new landmines appended to the debt map; commits Conventional.
   - **Tests:** no test runner exists — flag any *claimed* test coverage as suspect; new pure logic should at least be extracted test-ready.
4. **Output findings ranked:**
   - **P1** — must fix before merge (broken gate, broken CUJ, rule violation),
   - **P2** — should fix (convention drift, missing doc update),
   - **P3** — nice to have / note for debt map.
   Each finding: file:line, what, why, suggested fix. End with a verdict: approve / approve-with-P2s / request changes.
