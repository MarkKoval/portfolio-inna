# Inna Architects — Motion Portfolio (Next.js)

Моушн-портфоліо архітектора у стилі agency landing: preloader, smooth scroll, pinned sections, scrub-анімації, проєкти, кейс-стаді, фільтрація, контактна форма.

## Stack
- Next.js 14 (App Router) + TypeScript
- TailwindCSS
- GSAP + ScrollTrigger
- Lenis smooth scroll
- react-hook-form + zod

## Run locally
```bash
npm i
npm run dev
```
Open: `http://localhost:3000`

## Структура
- `app/` — маршрути (`/`, `/projects`, `/projects/[slug]`, `/about`, `/contact`)
- `components/` — UI та секції
- `lib/` — хуки та інтеграція GSAP/Lenis
- `data/` — дані проєктів та типи
- `public/demo` — локальні placeholder media

## Додавання нового проєкту
1. Відкрий `data/projects.ts`.
2. Додай новий обʼєкт у масив `projects` за типом `Project`.
3. Перевір поля: `slug`, `title`, `year`, `city`, `category`, `coverImage`, `gallery`, `description...`.
4. Додай відповідні медіафайли у `public/demo/` і використовуй шляхи `/demo/...`.

## Заміна медіа
- Обкладинки й gallery: локальні assets у `public/demo`.
- Якщо потрібно відео, додай файл у `public/demo` та в `heroMedia` постав:
```ts
heroMedia: { type: 'video', src: '/demo/your-video.mp4', poster: '/demo/poster.jpg' }
```
(У поточному MVP використано image-first підхід для стабільного офлайн запуску.)

## Налаштування анімацій
- Preloader: `components/sections/Preloader.tsx`
- Scroll progress: `components/sections/ScrollProgress.tsx`
- Pinned scrub секції: `components/sections/PinnedStory.tsx`
- Lenis інтеграція: `lib/useLenis.ts`
- GSAP context cleanup: `lib/useGsapContext.ts`
- Route refresh/cleanup тригерів: `components/sections/MotionProvider.tsx`

## Accessibility
- `prefers-reduced-motion`: smooth scroll і heavy scrub-поведінка помʼякшуються
- Видимі focus-стани через клас `focus-ring`
- Семантичні секції, alt-тексти, читабельний контраст
