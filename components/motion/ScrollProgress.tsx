'use client';

import { useEffect, useState } from 'react';
import { getScrollProgress } from '@/lib/scroll';

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setProgress(getScrollProgress()));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <div className="fixed right-6 top-24 z-30 text-xs tracking-[0.2em] text-muted">{progress.toString().padStart(2, '0')}%</div>;
};
