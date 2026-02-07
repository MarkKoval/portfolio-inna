'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ScrollTriggerRouteRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname]);

  return null;
}
