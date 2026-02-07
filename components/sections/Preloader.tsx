'use client';

import { useEffect, useState } from 'react';

export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const assets = ['/demo/p1.svg', '/demo/p2.svg', '/demo/p3.svg'];
    let loaded = 0;

    const update = () => {
      loaded += 1;
      const value = Math.round((loaded / assets.length) * 100);
      setProgress(value);
      if (value >= 100) {
        setTimeout(() => {
          setHidden(true);
          onDone();
        }, 450);
      }
    };

    assets.forEach((src) => {
      const img = new window.Image();
      img.onload = update;
      img.onerror = update;
      img.src = src;
    });
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-bg transition-opacity duration-700 ${hidden ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
    >
      <div className="text-center">
        <p className="font-serif text-4xl">{progress}%</p>
        <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted">Loading portfolio assets</p>
      </div>
    </div>
  );
}
