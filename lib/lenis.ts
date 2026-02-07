'use client';

import Lenis from 'lenis';

export const createLenis = () =>
  new Lenis({
    lerp: 0.08,
    smoothWheel: true,
    smoothTouch: false
  });
