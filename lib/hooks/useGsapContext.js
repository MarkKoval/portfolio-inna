'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapContext(callback, deps) {
  useEffect(() => {
    const ctx = callback();
    return () => {
      if (ctx) ctx.revert();
      ScrollTrigger.refresh();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
