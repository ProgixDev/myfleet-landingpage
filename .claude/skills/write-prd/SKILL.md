---
name: write-prd
description: Re-derive or update docs/product/prd.md for the MyFleet landing page when requirements or product direction change. Use when asked to update the PRD, document new requirements, or re-check product intent against the code.
argument-hint: [what changed in the product, or "full refresh"]
---

# Write / update the PRD

Input: `$ARGUMENTS` — the requirement change, or "full refresh".

1. **Re-audit the product surface** (same discipline as the original reverse-PRD):
   - routes: every `app/**/page.tsx` and what it renders,
   - copy: user-facing text in `app/components/*.tsx` and `app/layout.tsx` metadata (titles, CTAs, FAQ claims),
   - data models: this site currently has none beyond inline const arrays — if forms/schemas/API types have appeared, they are primary PRD evidence,
   - integrations: grep for fetch/env/external scripts (currently none).
2. **Evidence discipline — non-negotiable:**
   - every claim is **observed** (cite file/route) or tagged `[inferred]`,
   - business goals, non-goals, and success metrics that the code cannot show: interview the owner with at most 5 focused questions (AskUserQuestion style). If running unattended or unanswered, record each as a numbered Open Question (continue the OQ-n series) — never convert a gap into an assumption.
3. **Update `docs/product/prd.md` in place**, preserving its structure: problem & opportunity · goals & non-goals · users & jobs · current scope (ranked by centrality) · constraints · success metrics · open questions · decision log.
   - Resolve answered OQs inline with a date; keep the OQ entry with its resolution.
   - **Append a dated decision-log entry** describing what changed and on whose input. Never rewrite or delete prior log entries.
4. **Ripple check:** if scope changed, update `docs/product/overview.md` and `docs/product/critical-user-journeys.md` consistently (or run the `update-docs` skill).
5. Report: sections changed, new/resolved open questions, and the decision-log entry added.
