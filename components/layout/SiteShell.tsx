'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { createLenis } from '@/lib/lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { prefersReducedMotion } from '@/lib/reducedMotion';
import { projects } from '@/data/projects';
import { Header } from './Header';
import { Footer } from './Footer';
import { Preloader } from './Preloader';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import { RouteTransition } from '@/components/motion/RouteTransition';

export const SiteShell = ({ children }: React.PropsWithChildren) => {
  const [ready, setReady] = useState(false);
  const pathname = usePathname();

  const preloadAssets = useMemo(
    () => ['/demo/hero/hero.svg', ...projects.slice(0, 6).map((p) => p.cover.src)],
    []
  );

  useEffect(() => {
    if (!ready || prefersReducedMotion()) return;
    const lenis = createLenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, [ready]);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname]);

  return (
    <>
      {!ready && <Preloader assets={preloadAssets} onDone={() => setReady(true)} />}
      <Header />
      <ScrollProgress />
      <RouteTransition>
        <main className="pt-20">{children}</main>
      </RouteTransition>
      <Footer />
    </>
  );
};
