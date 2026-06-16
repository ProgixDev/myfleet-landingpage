---
name: implement-feature
description: Execute an implementation plan for the MyFleet landing page with small conventional commits and per-step verification. Use when asked to implement, build, or code a planned feature.
argument-hint: <path to plan.md or spec dir>
---

# Implement a feature

Input: `$ARGUMENTS` (a plan from `plan-feature`, or a spec dir containing one).

1. **Ground.** Read `AGENTS.md`, the plan/spec, and `docs/conventions/code-style.md`. New code follows **section (b)** of the conventions: strict TS (no new `any`/`@ts-ignore`), server components by default, `next/image` for new images, design tokens from `@theme` in `app/globals.css` over raw hex, French copy with accents and vouvoiement, accessible states in scope.
2. **Execute step by step.** After each plan step:
   - run `npm run lint`
   - run `npm run build` (the type gate — there is no separate test or typecheck script)
   - for visual steps, check the result in `npm run dev` against the relevant CUJ (`docs/product/critical-user-journeys.md`), including mobile width (the drawer and the global `zoom: 0.8` make mobile distinct).
3. **Commit small and conventional.** One logical change per commit: `feat: …`, `fix: …`, `docs: …`, `chore: …`. Never commit with a red lint/build.
4. **Respect the gates.** Never modify `eslint.config.mjs`, `tsconfig.json`, or scripts in `package.json` to make work pass; if a gate seems wrong, stop and propose the change separately.
5. **Legacy zones:** if the step touches a debt-map item, follow the mitigation in the plan exactly; no opportunistic cleanup (boy-scout is opt-in).
6. **Stuck rule:** after **two failed attempts at the same fix**, stop. Summarize what was tried and ask one concrete question instead of pushing a workaround.
7. When done: if the work revealed a stale doc or a new landmine, update the doc / append to `docs/quality/debt-map.md` in the same change-set, then suggest running the `verify` skill for the final evidence pass.
