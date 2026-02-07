# Atelier Nord — Architecture Portfolio (Next.js 15)

Premium portfolio MVP inspired by high-tempo agency storytelling patterns and rebuilt with unique branding/content for an architectural practice.

## Quickstart

```bash
npm i
npm run dev
```

Open http://localhost:3000.

## Stack

- Next.js 15 (App Router) + TypeScript strict
- TailwindCSS + CSS custom properties (design tokens)
- GSAP + ScrollTrigger (pinned scrub chapters)
- Lenis smooth scroll (with reduced-motion fallback)
- Framer Motion (micro transitions / reflow)
- react-hook-form + zod
- yet-another-react-lightbox (case gallery)

## Design tokens

Edit tokens in `app/globals.css`:

- colors: `--bg`, `--text`, `--accent`, `--line`, etc.
- typography uses `next/font` variables:
  - `--font-display` = Fraunces
  - `--font-body` = Inter

## Data model and content

Projects are seeded in `data/projects.ts`.

To add/edit project:

1. Add object in `projects` array.
2. Ensure unique `slug`.
3. Set `cover`, `hero`, `gallery` asset paths.
4. Fill case study blocks: `overview/challenge/solution/outcome`.
5. Route becomes available at `/projects/[slug]` via static params.

## Pinned chapters / timeline control

Core scroll storytelling is in:

- `components/motion/PinnedSequence.tsx`

Inside this file, GSAP `timeline` + `ScrollTrigger` are created per `.chapter` with:

- `pin: true`
- `scrub: 1`
- `end: '+=200%'`

Tune tempo by editing timeline durations/staggers and `end` value.

## Lenis + GSAP integration notes

- `components/motion/LenisProvider.tsx` initializes Lenis on client only.
- `gsap.ticker.add(update)` bridges RAF ticks.
- If `prefers-reduced-motion` is enabled, Lenis is skipped.

## Preloader asset loading

- `components/layout/Preloader.tsx`
- Preloads hero + first 6 covers using `Image()`.
- Tracks actual loaded assets and displays percentage.
- Locks body scroll until exit animation completes.

## Replacing placeholders with real media

All local demo assets are in `public/demo/*`.

- Project visuals: `public/demo/projects/*.svg`
- Hero visual: `public/demo/hero/hero.svg`
- Portrait/grain: `public/demo/misc/*`

To switch to photos/video:

1. Put optimized assets in `/public/demo/...`.
2. Update paths in `data/projects.ts` and `components/sections/Hero.tsx`.
3. For video hero/case, set `hero.type = 'video'` and provide `poster`.

## Notes

- Scroll progress indicator is global for consistent navigation feedback.
- Reduced-motion users get static behavior by design.
- ScrollTrigger contexts use cleanup/revert on unmount.
