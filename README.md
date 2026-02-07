# Atelier Nord — Architecture Portfolio (Next.js 15)

Production-style MVP portfolio inspired by the pacing and interaction style of the provided reference, rebuilt with unique branding/content for an architecture studio.

## Quickstart

```bash
npm i
npm run dev
```

Open `http://localhost:3000`.

## Tech Stack

- Next.js 15 (App Router) + TypeScript strict
- TailwindCSS + CSS variables design tokens
- GSAP + ScrollTrigger (pinned scrub narrative)
- Lenis smooth scrolling bridge
- Framer Motion for lightweight transitions
- react-hook-form + zod for contact validation
- yet-another-react-lightbox for gallery

## Project Tree

```text
app/
  layout.tsx
  page.tsx
  globals.css
  sitemap.ts
  robots.ts
  about/page.tsx
  contact/
    page.tsx
    ContactClient.tsx
  projects/
    page.tsx
    ProjectsClient.tsx
    [slug]/
      page.tsx
      CaseStudyClient.tsx
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
  site.ts
  categories.ts
  projects.ts
public/demo/
  hero/*
  noise/*
  projects/*.svg
```

## Design Tokens

Defined in `app/globals.css` under `:root`:

- Base: `--bg`, `--bg-2`, `--text`, `--line`, `--card`
- Accent: `--accent`, `--accent-2`, `--accent-3`
- States: `--success`, `--danger`

Typography:
- Display: Fraunces (`--font-display`)
- Body: Inter (`--font-body`)

## Editing Project Content

All case-study content lives in `data/projects.ts`.

Each project follows full data model:
- meta: slug/title/year/location/categories/area/status
- media: cover/hero/gallery
- story: overview/challenge/solution/outcome
- process steps/materials/credits/metrics

To add a new project:
1. Add placeholder or real media to `/public/demo/projects`.
2. Append new object to `projects` array.
3. Ensure unique `slug` and valid `categories`.

## Motion & Pinned Chapters

Primary pinned scroll chapters are in:
- `components/motion/PinnedSequence.tsx`

Update chapter pacing with:
- `start/end` of `ScrollTrigger`
- timeline keyframes (`clipPath`, `scale`, step reveals)

## Lenis + GSAP Integration

- Lenis factory: `lib/lenis.ts`
- GSAP setup/helper: `lib/gsap.ts`
- Runtime integration: `components/layout/SiteShell.tsx`

Notes:
- Lenis disabled under `prefers-reduced-motion`
- route change kills + refreshes ScrollTriggers
- preloader locks body scroll before app boot

## Preloader Asset Loading

Preloader component: `components/layout/Preloader.tsx`

It preloads:
- Hero media
- First six project covers

Progress is computed from loaded assets count and displayed as 0–100%.

## Replacing Placeholders with Real Media

1. Drop `.jpg/.webp/.mp4` into `public/demo/...`.
2. Update `cover`, `hero`, `gallery` paths in `data/projects.ts`.
3. For video hero:
   - set `hero.type = 'video'`
   - provide `poster`
4. Run `npm run dev` and verify layout + lightbox.
