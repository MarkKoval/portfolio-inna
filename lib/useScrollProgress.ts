'use client';

import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const value = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, value)));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return Math.round(progress);
}
