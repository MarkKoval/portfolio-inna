'use client';

import { createLenis } from '@/lib/lenis';
import { prefersReducedMotion } from '@/lib/reducedMotion';
import { gsap } from '@/lib/gsap';
import { useEffect } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = createLenis();
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}
