# Architect Portfolio Motion (Next.js)

Motion-first architecture portfolio inspired by premium agency UX patterns (pinned sections, scrub timelines, progress overlays), rebuilt with original content and branding.

## Stack

- Next.js 14 (App Router) + TypeScript
- TailwindCSS
- GSAP + ScrollTrigger
- Lenis smooth scroll integration
- react-hook-form + zod validation

## Run locally

```bash
npm i
npm run dev
```

Open: `http://localhost:3000`

## Routes

- `/` Landing with preloader, scroll progress, pinned sequences, projects preview, services/about block
- `/projects` Search + filters + pagination
- `/projects/[slug]` Case study with metadata, gallery + lightbox, next/prev navigation
- `/about` Bio + timeline + placeholder awards/press
- `/contact` Validated contact form

## Project data model

Data lives in `data/projects.ts` with types in `data/types.ts`.

Each project includes:

- `slug`, `title`, `year`, `city`, `country`
- `category[]`, `areaM2`, `role`, `status`, `client`
- `coverImage`, `heroMedia`, `gallery[]`
- `descriptionShort`, `descriptionLong`
- `tags[]`, `materials[]`, `credits[]`

### Add a new project

1. Add media placeholders into `public/demo/`.
2. Append a new object to `projects` in `data/projects.ts`.
3. Ensure `slug` is unique.
4. The listing and case-study routes update automatically.

## Media replacement

- Replace SVG placeholders in `public/demo/` with your own JPG/PNG/WebP assets.
- Keep same path names OR update paths in `data/projects.ts`.
- For video hero media, switch project `heroMedia.type` to `video` and use `<video>` in page/component where needed.

## Animation architecture

- GSAP plugin registration: `lib/animations/gsap.ts`
- Lenis setup + GSAP ticker bridge: `lib/hooks/useLenis.ts`
- Reusable GSAP context cleanup helper: `lib/hooks/useGsapContext.ts`
- Landing pinned interactions:
  - `components/sections/pinned-story.tsx`
  - `components/sections/pinned-clip.tsx`
- Scroll progress UI: `components/ui/scroll-progress.tsx`
- Preloader with asset-based progress: `components/ui/preloader.tsx`

## Accessibility notes

- Focus-visible ring utility: `.focus-ring` in `app/globals.css`
- Reduced-motion users skip Lenis and heavy scrub timelines where applicable
- Semantic sections/headings and alt text for media
