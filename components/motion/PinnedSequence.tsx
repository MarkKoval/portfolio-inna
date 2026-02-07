'use client';

import { useRef } from 'react';
import { useGsapContext, gsap, ScrollTrigger } from '@/lib/gsap';
import { prefersReducedMotion } from '@/lib/reducedMotion';

export const PinnedSequence = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGsapContext(ref as React.RefObject<HTMLElement>, () => {
    if (prefersReducedMotion()) return;
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
      tl.fromTo(chapter.querySelector('.chapter-title'), { y: 30, opacity: 0.2 }, { y: 0, opacity: 1, duration: 0.35 })
        .to(chapter.querySelector('.chapter-media'), { scale: 1.08, clipPath: 'inset(4% 8% 4% 8% round 24px)', duration: 0.5 }, 0)
        .to(chapter.querySelectorAll('.step'), { opacity: 1, stagger: 0.2, duration: 0.25 }, 0.15)
        .to(chapter.querySelector('.chapter-progress'), { width: '100%', duration: 0.7 }, 0.1);
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <section ref={ref} className="space-y-10 py-10">
      {['Selected Works', 'Materials & Light', 'Process'].map((title, idx) => (
        <article key={title} className="chapter min-h-[90vh] rounded-[28px] border border-line bg-bg-2 p-8 md:p-12">
          <div className="chapter-progress mb-6 h-1 w-0 bg-accent" />
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.1em] text-muted">Chapter {idx + 1}</p>
              <h3 className="chapter-title font-display text-4xl tracking-[-0.02em] md:text-5xl">{title}</h3>
              <div className="mt-8 space-y-3 text-sm text-muted">
                <p className="step opacity-40">Research</p>
                <p className="step opacity-40">Concept</p>
                <p className="step opacity-40">Detail</p>
                <p className="step opacity-40">Build</p>
              </div>
            </div>
            <div className="chapter-media overflow-hidden rounded-2xl border border-line">
              <img src={`/demo/projects/p${String(idx + 1).padStart(2, '0')}.svg`} alt={title} className="h-[50vh] w-full object-cover" />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
