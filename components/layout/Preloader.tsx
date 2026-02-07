'use client';

import { useEffect, useMemo, useState } from 'react';
import { projects } from '@/data/projects';

export const Preloader = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const assets = useMemo(() => ['/demo/hero/hero.svg', ...projects.slice(0, 6).map((project) => project.cover.src)], []);

  // We preload hero + first project covers and compute a real completion percentage.
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let loaded = 0;
    const tick = () => {
      loaded += 1;
      setProgress(Math.round((loaded / assets.length) * 100));
      if (loaded >= assets.length) {
        setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = '';
          onDone();
        }, 500);
      }
    };

    assets.forEach((src) => {
      const img = new Image();
      img.onload = tick;
      img.onerror = tick;
      img.src = src;
    });

    return () => {
      document.body.style.overflow = '';
    };
  }, [assets, onDone]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg transition">
      <span className="font-display text-7xl">{progress}%</span>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted">Loading portfolio</p>
    </div>
  );
};
