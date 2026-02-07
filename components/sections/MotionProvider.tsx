'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLenis } from '@/lib/useLenis';
import { ScrollTrigger } from '@/lib/gsap';

export function MotionProvider({ children }: { children: ReactNode }) {
  useLenis();
  const pathname = usePathname();

  useEffect(() => {
    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return <>{children}</>;
}
