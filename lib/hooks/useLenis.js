'use client';

import Lenis from 'lenis';
import gsap from 'gsap';
import { useEffect } from 'react';

export function useLenis() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, syncTouch: false });
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
}
