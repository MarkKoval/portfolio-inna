'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const image = new window.Image();
    image.src = src;
    image.onload = () => resolve();
    image.onerror = () => resolve();
  });

export const Preloader = ({ assets }: { assets: string[] }) => {
  const queue = useMemo(() => Array.from(new Set(assets)), [assets]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let mounted = true;
    document.body.style.overflow = 'hidden';

    const run = async () => {
      for (let i = 0; i < queue.length; i += 1) {
        await preloadImage(queue[i]);
        if (!mounted) return;
        setProgress(Math.round(((i + 1) / queue.length) * 100));
      }
      setTimeout(() => {
        if (mounted) {
          setDone(true);
          document.body.style.overflow = '';
        }
      }, 300);
    };

    run();
    return () => {
      mounted = false;
      document.body.style.overflow = '';
    };
  }, [queue]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div className='fixed inset-0 z-[90] grid place-items-center bg-bg' exit={{ opacity: 0, y: -32 }}>
          <div className='text-center'>
            <p className='font-display text-7xl'>{String(progress).padStart(2, '0')}%</p>
            <p className='mt-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]'>Loading portfolio</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
