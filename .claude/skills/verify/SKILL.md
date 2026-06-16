---
name: verify
description: Run the MyFleet landing page's real "green" sequence and visually confirm touched user journeys; output evidence, not claims. Use when asked to verify changes, prove something works, or before declaring a task done.
argument-hint: [what changed / which CUJ ids]
---

# Verify

The project's full "green" sequence — there is no test runner; these are the only gates:

1. **`npm run lint`** — must pass with zero errors. Record the output.
2. **`npm run build`** — must succeed; this is also the type check (no separate typecheck script exists). Record warnings.
3. **UI changes — visual confirmation (mandatory):**
   - Start `npm run dev` (http://localhost:3000).
   - Identify the touched CUJ rows in `docs/product/critical-user-journeys.md` (use `$ARGUMENTS` if given) and walk each journey's steps literally — e.g. CUJ-2: click "Demander une démo" in header, hero, mobile drawer, and CTA section and confirm each lands on `/reservation`.
   - Check **both** desktop and a mobile viewport (~390px): the mobile drawer (`Header.tsx`) and the global `zoom: 0.8` (`app/globals.css`) make mobile behavior genuinely different. Use browser tooling/screenshots where available.
   - Check the browser console for errors on each visited page.
4. **Output an evidence summary**, not a claim:
   - command outputs (lint/build) — pass/fail with the actual tail of output,
   - per-CUJ: steps walked, what was observed, screenshots if captured,
   - console errors found,
   - anything NOT verified and why.

Never state "done" or "works" without the evidence above. If any gate fails twice on the same fix attempt, stop and ask one concrete question (AGENTS.md §8).
