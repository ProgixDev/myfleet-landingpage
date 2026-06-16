---
name: encode-lesson
description: Turn a correction, recurring mistake, or "gotcha" discovered while working on the MyFleet landing page into permanent machinery (rule, doc line, check). Use when the user corrects the same thing twice, says "remember this", or a session hits a known trap.
argument-hint: <the lesson / mistake to encode>
---

# Encode a lesson

Input: `$ARGUMENTS` — the mistake or correction to make unrepeatable.

1. **Prefer blocking mechanisms over prose**, in this order:
   - **A check that fails loudly.** Note: this repo has no test runner and no CI, so options today are limited to what exists — e.g. a lint rule available within the current ESLint 9 + `eslint-config-next` setup. **Adding any new dependency, script, or CI workflow is a gate change: propose it explicitly and separately (ideally with an ADR in `docs/architecture/decisions/`), never slip it in.**
   - **A convention with teeth:** a precise rule added to `docs/conventions/code-style.md` section (b) that the `review` skill will check.
   - **Minimum:** a dated line in the most relevant doc.
2. **Pick the home — one home per fact:**
   - fragile area / landmine → append a dated row or log line to `docs/quality/debt-map.md` (append-only),
   - coding rule → `docs/conventions/code-style.md` section (b),
   - workflow rule → the relevant skill's SKILL.md or `AGENTS.md` (keep AGENTS.md under ~120 lines of manual — prefer the skills/docs),
   - product fact → `docs/product/prd.md` (+ decision log entry) or `critical-user-journeys.md`,
   - framework gotcha (Next.js 16 behavior differing from training data) → `docs/architecture/overview.md`, citing the page in `node_modules/next/dist/docs/` that confirms it.
3. **Write it dated** (YYYY-MM-DD), specific, and phrased as an instruction ("Never rename files in `public/` without grepping all `src=` literals"), not a story.
4. **Update the enforcer:** if the `review` skill should catch this in future diffs, add one line to its checklist in `.claude/skills/review/SKILL.md`.
5. Report: what was encoded, where, and whether a blocking mechanism was proposed (and to whom the gate-change proposal goes).
