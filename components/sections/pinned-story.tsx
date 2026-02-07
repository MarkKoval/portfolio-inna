'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGsapContext } from '@/lib/hooks/useGsapContext';
import { ScrollTrigger, gsap } from '@/lib/animations/gsap';

const frames = [
  { title: 'Research', text: 'We map context, climate and culture before drawing a line.', image: '/demo/project-9.svg' },
  { title: 'Concept', text: 'Early diagrams evolve into spatial systems and narrative.', image: '/demo/project-10.svg' },
  { title: 'Execution', text: 'Material precision and collaboration carry intent to site.', image: '/demo/project-11.svg' }
];

export function PinnedStory() {
  const ref = useRef<HTMLElement>(null);

  useGsapContext(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;

      const panels = gsap.utils.toArray<HTMLElement>('.story-panel');
      panels.forEach((panel, i) => {
        gsap.fromTo(
          panel,
          { opacity: 0.2, y: 80, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: panel,
              start: 'top center+=100',
              end: 'bottom center',
              scrub: true
            }
          }
        );

        if (i < panels.length - 1) {
          ScrollTrigger.create({
            trigger: panel,
            start: 'top top',
            end: '+=100%',
            pin: true,
            pinSpacing: true,
            scrub: true
          });
        }
      });
    },
    [],
    ref
  );

  return (
    <section ref={ref} className="bg-bg py-24">
      <div className="mx-auto max-w-[1200px] space-y-24 px-5 md:px-10">
        {frames.map((frame) => (
          <article key={frame.title} className="story-panel grid min-h-[75vh] items-center gap-8 rounded-2xl border border-white/10 bg-panel p-6 md:grid-cols-2 md:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Pinned Sequence</p>
              <h2 className="mt-3 font-display text-5xl">{frame.title}</h2>
              <p className="mt-6 max-w-md text-muted">{frame.text}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src={frame.image} alt={frame.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
