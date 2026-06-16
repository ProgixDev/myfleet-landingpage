# Code Style & Conventions

Two sections: **(a)** what exists today (detected, descriptive) and **(b)** what all *new* code must follow (target, normative). Where they conflict: **follow (b) in new files; match (a) only when editing inside an existing legacy module.**

## (a) Detected conventions (as they exist today)

- **Language / strictness:** TypeScript everywhere, `strict: true` in tsconfig. No `any` or `@ts-ignore` found in current source.
- **Components:** Named exports (`export function HeroSection()`), one component per file, PascalCase filenames, all in flat `app/components/`. Pages are default exports (`export default function ReservationPage()`), as Next.js requires.
- **Server vs client:** Server components by default; `"use client"` only where state or effects are needed (`Header`, `HeroSection`, `FaqSection`).
- **Content:** Copy and lists live as module-level const arrays at the top of each section component (e.g. `navLinks`, `faqs`, `steps`, `features`). French copy with accents on the home page; the five placeholder pages use accent-less informal French.
- **Styling:** Tailwind utility classes inline in JSX, often long; arbitrary values used freely (`tracking-[0.5em]`, `bg-[#4a148c]`, `z-[100]`). Design tokens come from `@theme` in `globals.css` (`text-primary`, `bg-background`, `rounded-super`, `text-tertiary`). Custom effect classes (`glass-panel`, `gem-decoration`, `text-gradient`, `ultra-bold`, `light-subtitle`, `letter-spacing-extra`) are global CSS in `globals.css`.
- **Images:** Mixed — `next/image` in `Header`/`Footer`, plain `<img>` elsewhere; decorative images use `alt=""`.
- **Animation:** CSS keyframes in `globals.css`, staggered via inline `style={{ animationDelay }}`. `framer-motion` is installed but unused.
- **Accessibility:** Present but ad hoc — `aria-label`/`aria-expanded` on the hamburger, `aria-hidden` on the drawer, `sr-only` text, `scroll-margin-top` for anchor sections.
- **Commits:** Free-form descriptive sentences ("Enhance Header component with..."). No branch convention visible (single `main`).
- **Enforced vs conventional:** Enforced gates = `npm run lint` (next/core-web-vitals + next/typescript) and the type check inside `npm run build`. Everything else (formatting, naming, commit style) is convention only — no Prettier, no CI, no hooks.

## (b) Target conventions for new code

- **Strict TypeScript:** no new `any`; no new `@ts-ignore` — use `@ts-expect-error` with a reason comment if truly unavoidable. Type component props with explicit `type XProps = {...}` (the `InternalPage` pattern).
- **Validation at trust boundaries:** the site currently has none (no forms, no network I/O). The moment user input, network calls, or storage are introduced (e.g. a real reservation/demo-request form), validate at the boundary (schema validation such as Zod is acceptable as a new, explicitly-added dependency — propose it first, with an ADR if it shapes architecture).
- **Components stay presentational:** any non-trivial logic (data shaping, fetch, form state machines) goes in hooks (`app/hooks/` — create on first use) or small service modules, not inline in section components.
- **No new module-level singletons for state.** Module-level const *data* arrays match the existing pattern and are fine; mutable module-level state is not.
- **Server-first:** default to server components; add `"use client"` only for state/effects/event handlers, and keep the client boundary as low in the tree as possible.
- **Images:** new images use `next/image` with width/height (or `fill`); meaningful `alt` for informative images, `alt=""` for decorative. Give new assets short, kebab-case filenames — do not imitate the long AI-generated names in `public/`.
- **Design tokens first:** prefer `text-primary` / `bg-background` / `rounded-super` over raw hex arbitrary values; add a token to `@theme` in `globals.css` rather than scattering a new hex across files.
- **Accessible and designed empty/error/loading states are part of scope** for any new interactive feature — not an afterthought.
- **French copy with proper accents and the home page's vouvoiement, B2B tone.** Do not copy the placeholder pages' accent-less/tutoiement style.
- **Commits:** Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:` …), small and scoped.
- **Tests:** there is no test harness. New pure logic should be written test-ready (extracted, pure functions); introducing the harness itself is an explicit, separate decision (ADR).
- **Never weaken gates** (eslint config, tsconfig strictness) to make something pass.
