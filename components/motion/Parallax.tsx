'use client';

import { useRef } from 'react';
import { useGsapContext, gsap } from '@/lib/gsap';
import { prefersReducedMotion } from '@/lib/reducedMotion';

export const Parallax = ({ children }: React.PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapContext(ref as React.RefObject<HTMLElement>, () => {
    if (prefersReducedMotion()) return;
    gsap.to(ref.current, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: { trigger: ref.current, scrub: 1 }
    });
  }, []);
  return <div ref={ref}>{children}</div>;
};
