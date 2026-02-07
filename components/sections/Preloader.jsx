'use client';

import { useEffect, useState } from 'react';

export function Preloader({ assets, onDone }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let loaded = 0;
    let cancelled = false;
    const update = () => {
      loaded += 1;
      const pct = Math.round((loaded / assets.length) * 100);
      setProgress(pct);
      if (pct >= 100) setTimeout(() => !cancelled && setHidden(true), 350);
    };
    assets.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = update;
      img.onerror = update;
    });
    return () => {
      cancelled = true;
    };
  }, [assets]);

  useEffect(() => {
    if (!hidden) return;
    const timer = setTimeout(onDone, 450);
    return () => clearTimeout(timer);
  }, [hidden, onDone]);

  return <div className={`fixed inset-0 z-50 flex items-center justify-center bg-bg transition duration-500 ${hidden ? 'pointer-events-none opacity-0' : 'opacity-100'}`}><div className="text-center"><p className="font-display text-4xl">{progress}%</p><p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">Loading architecture archive</p></div></div>;
}
