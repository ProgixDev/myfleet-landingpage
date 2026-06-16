---
name: plan-feature
description: Produce a step-by-step implementation plan from a spec or feature description for the MyFleet landing page. Use when asked to "plan" a feature, before writing code, or after create-spec.
argument-hint: <path to spec.md or feature description>
---

# Plan a feature

Input: `$ARGUMENTS` (a `specs/NNN-slug/spec.md` path, or a description — if the latter, suggest running `create-spec` first for anything non-trivial).

1. **Ground.** Read `AGENTS.md`, the spec, `docs/architecture/overview.md`, `docs/conventions/code-style.md`, and `docs/quality/debt-map.md`. For any Next.js API you plan to rely on, verify it in `node_modules/next/dist/docs/` — this Next.js version (16.2.4) may differ from training data.
2. **Inventory existing code — reuse, never recreate.** Before planning any new file, search `app/components/` and `app/globals.css`: is there a section component, the `InternalPage` template, a design token (`@theme`), or an effect class (`glass-panel`, `text-gradient`, `gem-decoration`) that already does this? State explicitly what you will reuse.
3. **Flag legacy-zone contact.** If the plan touches anything in the debt map (global `zoom: 0.8`, long asset filenames, `code.html`, placeholder pages, anchor ids on non-obvious components, the 19 MB hero video), call it out with the mitigation.
4. **Write the plan** as numbered steps. Each step has:
   - exact file paths (created or edited),
   - what changes (component, copy, token, route),
   - whether it's a server or client component and why (client only for state/effects),
   - **verification for that step**: `npm run lint` + `npm run build`, and for visual steps the exact thing to check in `npm run dev` (page, viewport, which CUJ from `docs/product/critical-user-journeys.md`).
5. **Order steps to keep the build green** after every step.
6. Output the plan (and append it to the spec directory as `plan.md` if a spec dir was given). Do not implement.
