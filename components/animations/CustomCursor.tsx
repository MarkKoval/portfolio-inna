'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';

export const CustomCursor = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const isTouch = useMediaQuery('(hover: none)');

  useEffect(() => {
    const onMove = (event: MouseEvent) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (isTouch) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 mix-blend-difference transition-transform duration-150"
      style={{ left: point.x, top: point.y }}
    />
  );
};
