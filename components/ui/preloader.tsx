'use client';

import { useEffect, useState } from 'react';
import { gsap } from '@/lib/animations/gsap';

export function Preloader({ assets = [] }: { assets?: string[] }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const total = assets.length || 1;

    const mark = () => {
      loaded += 1;
      setProgress(Math.min(100, Math.round((loaded / total) * 100)));
    };

    if (!assets.length) {
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            return 100;
          }
          return p + 10;
        });
      }, 50);
      return () => clearInterval(interval);
    }

    assets.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = mark;
      img.onerror = mark;
    });
  }, [assets]);

  useEffect(() => {
    if (progress < 100) return;
    document.body.style.overflow = 'hidden';
    const t = gsap.to('#preloader', {
      autoAlpha: 0,
      duration: 0.8,
      delay: 0.3,
      onComplete: () => {
        setHidden(true);
        document.body.style.overflow = '';
      }
    });

    return () => {
      t.kill();
      document.body.style.overflow = '';
    };
  }, [progress]);

  if (hidden) return null;

  return (
    <div id="preloader" className="fixed inset-0 z-[100] flex items-center justify-center bg-bg">
      <div className="text-center">
        <p className="font-display text-4xl">{progress}%</p>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">Loading portfolio</p>
      </div>
    </div>
  );
}
