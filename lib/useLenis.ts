'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from './gsap';

export function useLenis() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1,
      wheelMultiplier: 0.95
    });

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
}
