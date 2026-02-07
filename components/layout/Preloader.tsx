'use client';

import { gsap } from '@/lib/gsap';
import { projects } from '@/data/projects';
import { useEffect, useMemo, useState } from 'react';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const assets = useMemo(() => ['/demo/hero/hero.svg', ...projects.slice(0, 6).map((p) => p.cover.src)], []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let loaded = 0;
    assets.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded += 1;
        const next = Math.round((loaded / assets.length) * 100);
        setProgress(next);
        if (loaded === assets.length) {
          setTimeout(() => setDone(true), 250);
        }
      };
    });
    return () => {
      document.body.style.overflow = '';
    };
  }, [assets]);

  useEffect(() => {
    if (done) {
      gsap.to('#preloader', {
        yPercent: -100,
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          const el = document.getElementById('preloader');
          if (el) el.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
    }
  }, [done]);

  return (
    <div id="preloader" className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black">
      <p className="font-display text-7xl">{String(progress).padStart(2, '0')}%</p>
      <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[--muted]">Loading portfolio</p>
    </div>
  );
}
