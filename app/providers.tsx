'use client';

import { useEffect, useState } from 'react';
import { createLenis } from '@/lib/lenis';
import { prefersReducedMotion } from '@/lib/reducedMotion';
import { Preloader } from '@/components/layout/Preloader';

export const Providers = ({ children }: React.PropsWithChildren) => {
  const [ready, setReady] = useState(false);

  // Lenis is bootstrapped only after the preloader exits to avoid fighting scroll-lock.
  useEffect(() => {
    if (!ready || prefersReducedMotion()) return;
    const lenis = createLenis(); // Smooth-scroll engine
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [ready]);

  return (
    <>
      {!ready && <Preloader onDone={() => setReady(true)} />}
      {children}
    </>
  );
};
