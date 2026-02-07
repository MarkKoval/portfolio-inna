# Premium Portfolio (Next.js)

Modern portfolio starter with cinematic hero, animated sections, and conversion-focused contact flow.

## Tech stack

- Next.js 15 + App Router
- TypeScript strict mode
- Tailwind CSS
- GSAP + Lenis smooth scroll
- Zustand, React Hook Form, Zod, Lucide

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `app/` routing, layout, metadata
- `components/sections/` Hero / Projects / About / Contact
- `components/ui/` reusable primitives
- `components/animations/` smooth scroll + custom cursor
- `lib/` hooks, utilities, animation helpers, store

## Deploy (Vercel)

1. Push repo to GitHub.
2. Import project in Vercel.
3. Keep build command: `npm run build`.
4. Set Node.js 20+ and deploy.
