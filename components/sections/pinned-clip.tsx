'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGsapContext } from '@/lib/hooks/useGsapContext';
import { gsap } from '@/lib/animations/gsap';

export function PinnedClip() {
  const ref = useRef<HTMLElement>(null);

  useGsapContext(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.clip-pin',
          start: 'top top',
          end: '+=160%',
          scrub: true,
          pin: true
        }
      });

      tl.fromTo('.clip-image', { scale: 1.3, clipPath: 'inset(20% 25% 20% 25%)' }, { scale: 1, clipPath: 'inset(0% 0% 0% 0%)', ease: 'none' })
        .fromTo('.clip-title', { y: 80, opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.15)
        .to('.clip-subtitle', { opacity: 1, y: 0, ease: 'none' }, 0.3);
    },
    [],
    ref
  );

  return (
    <section ref={ref} className="clip-pin relative h-screen overflow-hidden">
      <div className="clip-image absolute inset-0">
        <Image src="/demo/project-12.svg" alt="Urban project view" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="clip-title relative z-10 mx-auto flex h-full max-w-[1200px] items-end px-5 pb-20 md:px-10">
        <div>
          <h2 className="font-display text-5xl md:text-7xl">From macro plan to tactile detail.</h2>
          <p className="clip-subtitle mt-4 max-w-xl translate-y-6 opacity-0 text-muted">Pinned scrub animation with clip-path reveal mirrors agency-like narrative pacing.</p>
        </div>
      </div>
    </section>
  );
}
