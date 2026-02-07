'use client';

import { useEffect } from 'react';
import { createLenis } from '@/lib/lenis';
import { gsap } from '@/lib/gsap';
import { prefersReducedMotion } from '@/lib/reducedMotion';

export const LenisProvider = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = createLenis();

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
};
