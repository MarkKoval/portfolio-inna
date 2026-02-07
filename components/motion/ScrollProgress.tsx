'use client';

import { useEffect, useState } from 'react';
import { scrollProgress } from '@/lib/scroll';

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      setProgress(scrollProgress());
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <div className='fixed bottom-6 right-6 z-40 rounded-full border border-line bg-bg/70 px-3 py-2 text-xs'>{String(progress).padStart(2, '0')}%</div>;
};
