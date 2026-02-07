'use client';

import { getScrollProgress } from '@/lib/scroll';
import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      setProgress(getScrollProgress());
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);
  return <div className="fixed bottom-8 right-8 z-40 rounded-full border border-line bg-bg/70 px-4 py-2 text-xs uppercase">{String(progress).padStart(2, '0')}%</div>;
}
