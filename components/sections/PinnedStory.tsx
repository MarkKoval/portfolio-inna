'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGsapContext } from '@/lib/useGsapContext';
import { ScrollTrigger, gsap } from '@/lib/gsap';

const blocks = [
  { title: 'Observe', text: 'Every project begins with context mapping: climate, community, and movement.', image: '/demo/p5.svg' },
  { title: 'Compose', text: 'We choreograph structure, circulation, and daylight as one continuous system.', image: '/demo/p6.svg' },
  { title: 'Refine', text: 'Material palettes and details are tuned for durability and atmosphere.', image: '/demo/p7.svg' }
];

export function PinnedStory() {
  const scope = useRef<HTMLElement>(null);

  useGsapContext(
    scope,
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const items = gsap.utils.toArray<HTMLElement>('.pin-item');

      items.forEach((item, index) => {
        const image = item.querySelector('.pin-image');
        const text = item.querySelector('.pin-text');
        gsap.fromTo(
          image,
          { scale: 1.2, clipPath: 'inset(20% 15% 20% 15%)' },
          {
            scale: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            scrollTrigger: {
              trigger: item,
              start: 'top top',
              end: '+=130%',
              scrub: true,
              pin: true,
              pinSpacing: true
            }
          }
        );

        gsap.fromTo(
          text,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top center',
              end: 'bottom center',
              scrub: true
            },
            delay: index * 0.1
          }
        );
      });

      ScrollTrigger.refresh();
    },
    []
  );

  return (
    <section ref={scope} className="space-y-28 py-20">
      {blocks.map((block) => (
        <article key={block.title} className="pin-item mx-auto grid min-h-[80vh] max-w-[1300px] items-center gap-8 px-5 md:grid-cols-2 md:px-8">
          <div className="pin-text">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Method</p>
            <h2 className="section-title mt-4">{block.title}</h2>
            <p className="mt-6 max-w-lg text-lg text-muted">{block.text}</p>
          </div>
          <div className="pin-image overflow-hidden rounded-xl border border-white/10">
            <Image src={block.image} alt={block.title} width={1600} height={1000} className="h-[60vh] w-full object-cover" />
          </div>
        </article>
      ))}
    </section>
  );
}
