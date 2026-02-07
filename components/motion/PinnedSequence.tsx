'use client';

import { gsap, ScrollTrigger } from '@/lib/gsap';
import { prefersReducedMotion } from '@/lib/reducedMotion';
import { useEffect, useRef } from 'react';

export function PinnedSequence() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const chapters = gsap.utils.toArray<HTMLElement>('.chapter');
      chapters.forEach((chapter) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: chapter,
            start: 'top top',
            end: '+=200%',
            scrub: 1,
            pin: true
          }
        });
        tl.fromTo(chapter.querySelector('.chapter-media'), { scale: 1.15, clipPath: 'inset(16% 18% 16% 18% round 28px)' }, { scale: 1, clipPath: 'inset(0% 0% 0% 0% round 0px)' });
        tl.fromTo(chapter.querySelectorAll('.line'), { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15 }, 0.2);
      });
      ScrollTrigger.refresh();
    }, ref);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={ref} className="space-y-0">
      {['Selected Works', 'Materials & Light', 'Process'].map((title, idx) => (
        <section key={title} className="chapter relative min-h-screen border-y border-line bg-bg-2">
          <div className="mx-auto grid min-h-screen max-w-content items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[--muted]">Chapter {idx + 1}</p>
              <h3 className="line font-display text-5xl leading-tight">{title}</h3>
              <p className="line mt-6 max-w-lg text-[--muted]">A paced narrative section with pinned scrub behavior, engineered for cinematic motion while preserving performance and reduced-motion fallbacks.</p>
            </div>
            <div className="chapter-media overflow-hidden rounded-[28px] border border-line">
              <img src={`/demo/projects/p${idx + 2}.svg`} alt={title} className="h-[65vh] w-full object-cover" />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
