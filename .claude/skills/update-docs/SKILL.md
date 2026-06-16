---
name: update-docs
description: Sync the docs after a merged or completed change to the MyFleet landing page (overview, conventions, CUJs, debt map, PRD decision log). Use after merging, when docs feel stale, or when asked to "update the docs".
argument-hint: [what changed, or a commit range]
---

# Update the docs

Input: `$ARGUMENTS` (description of the change, or a commit range — default `git log` since the docs' last touch).

1. **Diff reality vs docs.** Read the change (code + `git log --oneline`), then check each doc for staleness:
   - `docs/architecture/overview.md` — new routes, components, client/server boundaries, dependencies actually used (e.g. if `framer-motion` gets its first import, the "unused dependency" notes here and in the debt map become stale), changes to `globals.css` tokens or the rendering model.
   - `docs/conventions/code-style.md` — only if a *deliberate* new convention was adopted; detected-vs-target split must stay honest.
   - `docs/product/overview.md` — capability paragraphs for anything user-visible.
   - `docs/product/critical-user-journeys.md` — extend/add CUJ rows for new user-visible flows; update code locations and the coverage column.
   - `docs/product/prd.md` — scope ranking, resolved Open Questions (move answer in, mark OQ resolved with date), and **always** append a dated decision-log entry for product-meaning changes.
   - `docs/quality/debt-map.md` — append-only: new findings get dated rows; resolved items get a dated "resolved" note, never deleted.
   - `AGENTS.md` — commands, architecture summary (§5), and legacy zones (§7) if any changed.
2. **One home per fact.** If the same fact now lives in two docs, keep it in the most specific one and link from the other.
3. **Check internal links:** every relative link in changed docs resolves; `docs/index.md` lists every file under `docs/` (add rows for new docs).
4. **Check skill accuracy:** if commands or paths changed, grep `.claude/skills/*/SKILL.md` for references that are now wrong — a skill referencing a nonexistent command is a bug.
5. Commit as `docs: …` (Conventional Commits). Report which docs changed and which were checked and found current.
