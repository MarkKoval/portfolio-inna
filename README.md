# Architect Portfolio Motion MVP

Next.js App Router portfolio inspired by high-end agency motion sites, rebuilt for an architect identity with original placeholder content and media.

## Stack
- Next.js App Router + JavaScript + TailwindCSS
- GSAP + ScrollTrigger (pin/scrub sections)
- Lenis smooth scrolling (with reduced-motion fallback)
- React Hook Form + Zod (contact form validation)

## Run locally
```bash
npm i
npm run dev
```

Then open `http://localhost:3000`.

## Pages
- `/` landing with preloader, scroll progress, pinned storytelling, selected projects, services
- `/projects` searchable/filterable project listing with pagination
- `/projects/[slug]` case study with metadata, gallery + lightbox, challenge/solution/materials, prev/next navigation
- `/about` studio bio and timeline
- `/contact` validated inquiry form

## Content model
Projects are stored in `data/projects.js` as a reusable structured dataset.

### Add a new project
1. Duplicate an existing project object in `data/projects.js`.
2. Ensure a unique `slug`.
3. Add media files in `public/demo/` and update:
   - `coverImage`
   - `heroMedia`
   - `gallery[]`
4. Save and restart dev server if needed.

## Replacing media
- Put your own files inside `public/demo` (or any `public/*` folder).
- Update paths in `data/projects.js` to match filenames.
- For videos, set `heroMedia: { type: 'video', src: '/demo/your.mp4', poster: '/demo/your-poster.jpg' }` and render in detail components if needed.

## Animation tuning guide
- **Lenis integration:** `lib/hooks/useLenis.js`
- **GSAP cleanup context:** `lib/hooks/useGsapContext.js`
- **Pinned ScrollTrigger timelines:** `components/sections/PinnedStory.jsx`
- **Scroll percent indicator:** `components/sections/ScrollProgress.jsx`
- **Preloader behavior:** `components/sections/Preloader.jsx`

If you tweak timeline durations/start-end values, call `ScrollTrigger.refresh()` after major layout changes.

## Accessibility/perf notes
- `prefers-reduced-motion` disables smooth scrolling and keeps content readable.
- Images are local, lazy-loaded via `next/image` sizing rules.
- Inputs/buttons include visible focus states.
