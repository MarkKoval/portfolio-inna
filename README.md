# Inna Atelier — Motion-driven Architect Portfolio (Next.js)

MVP-портфоліо архітектора з UX-поведінкою у стилі agency landing: preloader, scroll progress, pinned scrub-секції, hover micro-interactions, case-study сторінки.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Lenis smooth scroll
- react-hook-form + zod

## Run
```bash
npm i
npm run dev
```
Open `http://localhost:3000`.

## Routes
- `/` — Landing (hero, pinned sections, selected projects, approach/services)
- `/projects` — Listing with filters + search + pagination
- `/projects/[slug]` — Case study with metadata, gallery + lightbox, prev/next
- `/about` — bio + timeline
- `/contact` — validated contact form

## Data model and adding a project
Project data lives in `data/projects.ts` and is typed in `types/project.ts`.

To add a project:
1. Append a new object to `projects` in `data/projects.ts`.
2. Add media files to `public/demo` (or update paths).
3. Ensure required fields exist:
   - `slug`, `title`, `year`, `city`, `country`, `category[]`, `areaM2`
   - `role`, `status`, `coverImage`, `heroMedia`, `gallery[]`
   - `descriptionShort`, `descriptionLong`, `tags[]`, `materials[]`, `credits[]`

## Replacing media
- Static images: put files in `public/demo` and reference path like `/demo/your-file.jpg`.
- Hero media supports `image` or `video` in the data shape.
- For videos use `<video muted playsInline preload="metadata" poster="...">` in a custom section/component.

## Animation system notes
- Lenis setup: `lib/useLenis.ts`, mounted via `components/providers.tsx`.
- Scroll progress: `components/scroll-progress.tsx` + `lib/useScrollProgress.ts`.
- GSAP integration: `lib/gsap.ts` and `lib/useGsapContext.ts`.
- Pinned scrub timeline section: `components/sections/pinned-story.tsx`.
- Preloader behavior: `components/preloader.tsx`.

## Accessibility/performance
- Focus-visible states across interactive elements.
- `prefers-reduced-motion` disables Lenis + heavy scrub logic.
- `next/image` with responsive sizes.
- Local placeholder media to run offline (no external API/keys).
