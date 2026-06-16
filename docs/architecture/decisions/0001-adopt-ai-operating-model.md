# ADR-0001: Adopt the AI operating model

- **Status:** accepted
- **Date:** 2026-06-12

## Context

This project (`myfleet_landingpage`) was bootstrapped with create-next-app and grown rapidly from a static design prototype (`code.html`). It predates our NEXTJS-SKELETON standards: there are no tests, no CI, no documented conventions, free-form commit messages, and several legacy patterns (global `zoom: 0.8`, plain `<img>` usage, content hard-coded in components). It is in production shape and works; rewriting it would be risk without value.

## Decision

Adopt the AI operating model **additively**, without migrating existing code:

- Every session is governed by `AGENTS.md`: the Ground → Plan → Implement → Verify → Encode loop.
- New code follows the target conventions in `docs/conventions/code-style.md` section (b); existing code is left as-is unless a task is explicitly about it.
- Knowledge lives in `docs/` (architecture, conventions, debt map, product layer) and is kept current as part of normal work — one home per fact.
- Workflow is enforced through `.claude/skills/` (create-spec, plan-feature, implement-feature, review, verify, encode-lesson, update-docs, write-prd).
- Legacy patterns are documented in `docs/quality/debt-map.md`, never silently "corrected".

## Consequences

- New code is held to a stricter standard than old code; the gap is explicit and documented, not hidden.
- Legacy code is documented, not rewritten; cleanup is opt-in and deliberate.
- Future architectural choices (e.g., introducing a test harness, a CMS/content layer, removing the zoom hack) each get a numbered ADR in this folder.
- The docs become a maintenance obligation: a change that invalidates a doc must update it in the same PR.
