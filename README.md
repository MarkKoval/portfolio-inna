# Atelier Nord — Architectural Portfolio (Next.js 15)

Premium dark-gallery portfolio inspired by the interaction rhythm of the provided reference, rebuilt with original content/brand for **Atelier Nord**.

## Quickstart

```bash
npm i
npm run dev
```

Open http://localhost:3000

## Stack
- Next.js 15 (App Router) + TypeScript strict
- TailwindCSS + CSS variables tokens
- GSAP + ScrollTrigger (pinned scrub chapters)
- Lenis smooth scroll (disabled with reduced motion)
- Framer Motion (light transitions + layout animation)
- react-hook-form + zod (contact form)
- yet-another-react-lightbox (case study gallery)

## Design tokens
Edit in `app/globals.css`:
- Colors (`--bg`, `--text`, `--accent`, etc.)
- Typography variables powered by `next/font` in `app/layout.tsx`

## Content model
Project type and seed content live in:
- `data/projects.ts`
- `data/categories.ts`
- `data/site.ts`

### Add/edit a project
1. Open `data/projects.ts`
2. Add/modify a `Project` object (slug/title/meta/case text/gallery)
3. Add matching assets in `public/demo/projects`

## Motion architecture
- Lenis lifecycle: `app/providers.tsx` + `lib/lenis.ts`
- GSAP helpers + plugin registration: `lib/gsap.ts`
- Pinned scrub chapters: `components/motion/PinnedSequence.tsx`
- Scroll percentage indicator: `components/motion/ScrollProgress.tsx`
- Preloading with real progress + scroll lock: `components/layout/Preloader.tsx`

## Real media replacement
Replace placeholders in:
- `public/demo/hero/*`
- `public/demo/projects/*`

Then update paths inside `data/projects.ts`.

## Routes
- `/` landing with hero, pinned narrative, selected work, services
- `/projects` filterable listing + search/sort/pagination
- `/projects/[slug]` case study + lightbox + next/prev
- `/about`
- `/contact`

## SEO
- Shared metadata helper: `lib/seo.ts`
- `app/sitemap.ts`
- `app/robots.ts`
