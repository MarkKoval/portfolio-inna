'use client';

import { useRef } from 'react';
import { useGsapContext, gsap, ScrollTrigger } from '@/lib/gsap';
import { prefersReducedMotion } from '@/lib/reducedMotion';

export const PinnedSequence = () => {
  const ref = useRef<HTMLElement>(null);

  useGsapContext(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
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
        tl.fromTo(chapter.querySelector('.chapter-media'), { scale: 1.08 }, { scale: 1, duration: 1 });
        tl.fromTo(chapter.querySelectorAll('.line'), { y: 18, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.45 }, 0.15);
      });

      ScrollTrigger.refresh();
    },
    ref,
    []
  );

  return (
    <section ref={ref} className='space-y-20 py-20'>
      <article className='chapter relative min-h-[80vh] rounded-[28px] border border-line bg-card p-8 md:p-14'>
        <div className='grid gap-8 md:grid-cols-2'>
          <div><p className='line text-xs uppercase tracking-[0.18em] text-accent'>Chapter 01</p><h3 className='line mt-4 font-display text-4xl'>Selected Works evolve frame by frame.</h3></div>
          <div className='chapter-media relative min-h-[360px] overflow-hidden rounded-2xl border border-line bg-[url(/demo/projects/p6.svg)] bg-cover bg-center' />
        </div>
      </article>
      <article className='chapter relative min-h-[80vh] rounded-[28px] border border-line bg-card p-8 md:p-14'>
        <div className='chapter-media absolute inset-0 rounded-[28px] bg-[url(/demo/projects/p7.svg)] bg-cover bg-center opacity-40' />
        <div className='relative z-10 max-w-3xl space-y-4'>
          <p className='line text-xs uppercase tracking-[0.18em] text-accent'>Chapter 02</p>
          <h3 className='line font-display text-4xl'>Materials & Light</h3>
          <p className='line text-[var(--muted)]'>We tune stone reflectance, wood tone, and aperture depth to orchestrate a slow cinematic transition of daylight.</p>
        </div>
      </article>
      <article className='chapter relative min-h-[80vh] rounded-[28px] border border-line bg-card p-8 md:p-14'>
        <p className='line text-xs uppercase tracking-[0.18em] text-accent'>Chapter 03</p>
        <h3 className='line mt-4 font-display text-4xl'>Process</h3>
        <div className='mt-8 grid gap-3'>
          {['Research', 'Concept', 'Detail', 'Build'].map((step, i) => (
            <div key={step} className='line flex items-center justify-between rounded-2xl border border-line px-5 py-4'><span>{step}</span><span className='text-[var(--muted)]'>0{i + 1}</span></div>
          ))}
          <div className='line mt-4 h-1 w-full overflow-hidden rounded-full bg-line'><div className='h-full w-2/3 bg-accent' /></div>
        </div>
      </article>
    </section>
  );
};
