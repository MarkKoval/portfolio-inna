'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { calculateScrollPercent } from '@/lib/scroll';

export const ScrollProgress = () => {
  const [value, setValue] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setValue(calculateScrollPercent()));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  return <div className="fixed right-6 top-24 z-30 rounded-full border border-line bg-bg/65 px-3 py-1 text-xs uppercase tracking-[0.08em] text-muted">{String(value).padStart(2, '0')}%</div>;
};
