# Atelier Nord — Architectural Portfolio (Next.js 15)

Premium, motion-driven portfolio inspired by the pacing/interaction style of the provided reference, rebuilt with unique brand/content.

## Quickstart

```bash
npm i
npm run dev
```

## Stack
- Next.js 15 App Router + TypeScript strict
- TailwindCSS + CSS variables tokens
- GSAP + ScrollTrigger
- Lenis smooth scroll (disabled for reduced motion)
- Framer Motion
- react-hook-form + zod
- yet-another-react-lightbox

## Project tree

```txt
app/
  layout.tsx
  page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  about/page.tsx
  contact/page.tsx
  globals.css
  sitemap.ts
  robots.ts
components/
  ui/*
  layout/*
  media/*
  motion/*
  sections/*
lib/
  lenis.ts
  gsap.ts
  scroll.ts
  reducedMotion.ts
  seo.ts
  utils.ts
data/
  projects.ts
  categories.ts
  site.ts
public/demo/
  hero/hero.svg
  projects/*.svg
  ui/grain.svg
```

## Design tokens (colors & typography)
Edit tokens in `app/globals.css` (`--bg`, `--text`, `--accent`, etc.).
Fonts are configured in `app/layout.tsx` with `next/font`.

## Content management

### Add/edit a project
Open `data/projects.ts` and update the `projects` array according to the `Project` type.

### Pinned chapters and GSAP timelines
Edit `components/motion/PinnedSequence.tsx`.
- Each `.chapter` gets its own pinned timeline.
- Cleanup is handled via `ctx.revert()` and `ScrollTrigger.kill()` on unmount.

### Lenis + GSAP integration
Edit `components/layout/SmoothScroll.tsx` and `lib/lenis.ts`.
- Lenis RAF is connected to GSAP ticker.
- Reduced-motion disables Lenis.

### Preloader assets and progress
Edit `components/layout/Preloader.tsx`.
- Hero + first 6 covers are preloaded.
- Progress is based on real loaded assets.
- Scroll is locked until exit animation completes.

### Replacing placeholders with real media
Put real files into `public/demo/projects` and `public/demo/hero`, then update paths in `data/projects.ts`.

