'use client';

import { useEffect, useState } from 'react';

type Props = { assets: string[]; onDone: () => void };

export const Preloader = ({ assets, onDone }: Props) => {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let loaded = 0;
    document.body.style.overflow = 'hidden';
    const update = () => {
      loaded += 1;
      setProgress(Math.min(100, Math.round((loaded / assets.length) * 100)));
      if (loaded >= assets.length) {
        setTimeout(() => {
          setHidden(true);
          document.body.style.overflow = '';
          setTimeout(onDone, 450);
        }, 280);
      }
    };

    assets.forEach((src) => {
      if (src.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = update;
        video.onerror = update;
        video.src = src;
      } else {
        const img = new window.Image();
        img.onload = update;
        img.onerror = update;
        img.src = src;
      }
    });

    return () => {
      document.body.style.overflow = '';
    };
  }, [assets, onDone]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg transition duration-500 ${hidden ? 'pointer-events-none -translate-y-6 opacity-0' : ''}`}>
      <p className="font-display text-7xl">{String(progress).padStart(2, '0')}%</p>
      <p className="mt-2 text-xs uppercase tracking-[0.1em] text-muted">Loading portfolio</p>
    </div>
  );
};
