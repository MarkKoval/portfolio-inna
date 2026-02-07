'use client';

import { useRef } from 'react';
import { useGsapContext, gsap, ScrollTrigger } from '@/lib/gsap';
import { prefersReducedMotion } from '@/lib/reducedMotion';
import { Container } from '@/components/ui/Container';

export const PinnedSequence = () => {
  const ref = useRef<HTMLElement>(null);

  useGsapContext(() => {
    if (prefersReducedMotion()) return;
    const steps = gsap.utils.toArray<HTMLElement>('.pin-step');
    // Each chapter gets its own pinned scrub timeline and is reverted on unmount via gsap.context.
    steps.forEach((step) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true
        }
      });
      tl.fromTo(step.querySelector('.pin-media'), { scale: 1.15, clipPath: 'inset(18% 12% 18% 12%)' }, { scale: 1, clipPath: 'inset(0% 0% 0% 0%)' })
        .fromTo(step.querySelector('.pin-copy'), { y: 60, opacity: 0.2 }, { y: 0, opacity: 1 }, 0.2);
    });
    ScrollTrigger.refresh();
  }, ref, []);

  return (
    <section ref={ref} className="space-y-0">
      {['Selected Works', 'Materials & Light', 'Process'].map((title, i) => (
        <article key={title} className="pin-step relative h-screen border-t border-line bg-bg2">
          <Container className="grid h-full items-center gap-10 md:grid-cols-2">
            <div className="pin-copy">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">Chapter {i + 1}</p>
              <h3 className="font-display text-5xl">{title}</h3>
              <p className="mt-4 text-muted">Narrative section tuned with scrubbed ScrollTrigger timing to mimic editorial motion rhythm.</p>
            </div>
            <div className="pin-media overflow-hidden rounded-3xl border border-line"><img src={`/demo/projects/p${i + 1}-3.svg`} alt={title} className="h-full w-full object-cover" /></div>
          </Container>
        </article>
      ))}
    </section>
  );
};
