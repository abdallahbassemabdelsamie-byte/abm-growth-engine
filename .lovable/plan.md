
# ABM Dynamic Programs — Futuristic Multi-Page Website

## Design Direction

- **Palette:** Midnight Indigo. Base `#0a0a1a`, surface `#141432`, elevated `#1e1e5a`, accent `#4f46e5` with a brighter glow `#818cf8`. Foreground near-white with muted slate.
- **Typography:** Space Grotesk (display/headings) + Inter (body) via `<link>` in `__root.tsx`.
- **Feel:** Vercel/Linear-grade dark UI — thin hairline borders (`white/10`), subtle gradients, glassmorphic cards (`backdrop-blur`, `bg-white/[0.03]`), generous whitespace, restrained motion.
- **Signature background:** the attached `DottedSurface` three.js component, adapted to TanStack Start + our token palette, fixed behind all pages with a radial vignette overlay so content stays readable.

## Sections / Routes

Separate routes (better SEO, each with own `head()` metadata):

1. `/` — Home: hero over dotted surface, tagline, quick highlights, services teaser, industries strip, CTA.
2. `/services` — full services grid (10 items) + Fame Makers marketing division block.
3. `/about` — company story, mission, vision, core values grid.
4. `/process` — 8-step development process as a vertical timeline / numbered stepper.
5. `/industries` — 12 industries as glassmorphic cards.
6. `/technologies` — tech stack marquee/grid (Next.js, React, TS, Tailwind, Node, Vercel, Cloudflare, Git…).
7. `/contact` — contact section with location (Hurghada), email/phone placeholders, simple contact form (frontend only, no backend this pass).

Shared: sticky glass `Header` with nav + "Start a project" CTA; `Footer` with company summary, quick links, services, contact, © line.

## Technical Details

- **Background component:** port the attached snippet to `src/components/DottedSurface.tsx`. Remove `next-themes` (use a fixed dark theme). Use plain `import * as THREE from 'three'`. Install `three` and `@types/three` via `bun add`. Guard against SSR by rendering inside `<ClientOnly fallback={null}>` (from `@tanstack/react-router`) and running WebGL only in `useEffect`. Fixed positioned `inset-0 -z-10 pointer-events-none`, with a CSS radial-gradient overlay for vignette.
- **Placement:** mount `<DottedSurface />` once in `__root.tsx` (inside `RootComponent`, wrapped in `ClientOnly`) so it persists across route transitions.
- **Fonts:** add Google Fonts `<link>` for Space Grotesk + Inter in `__root.tsx` `head().links`. Register in `@theme` in `src/styles.css` as `--font-display` / `--font-sans`.
- **Design tokens:** update `src/styles.css` `:root` (and default `.dark`-like values) to Midnight Indigo palette in `oklch`. Add `--gradient-primary`, `--shadow-glow`, hairline border color. Apply dark theme globally by adding `class="dark"` on `<html>` in `RootShell`.
- **Components:** small set of primitives — `SectionHeading`, `GlassCard`, `GradientButton`, `Header`, `Footer`. Use lucide-react icons sparingly for service/value cards.
- **Head metadata:** each route gets unique title + description + og tags. Root sets viewport, charset, sitewide og:type=website, og:site_name "ABM Dynamic Programs". No og:image (omit per guidance).
- **Copy:** fully rewritten, premium/international tone. No clichés, no marketing fluff.
- **Content:** all sections populated from provided company info (services, values, industries, process, tech, Fame Makers).
- **Perf:** dotted surface reduces particle count on small viewports; respects `prefers-reduced-motion` by rendering a static gradient fallback instead.

## File Changes

- Add: `src/components/DottedSurface.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/ui/glass-card.tsx`.
- Add routes: `src/routes/services.tsx`, `about.tsx`, `process.tsx`, `industries.tsx`, `technologies.tsx`, `contact.tsx`.
- Edit: `src/routes/__root.tsx` (fonts, dark class, mount background, header/footer, updated metadata), `src/routes/index.tsx` (real homepage), `src/styles.css` (palette + fonts + tokens).
- Install: `three`, `@types/three`.

## Out of Scope (this pass)

- No backend / Lovable Cloud (contact form is client-only; can be wired later).
- No blog, no case studies, no auth.
