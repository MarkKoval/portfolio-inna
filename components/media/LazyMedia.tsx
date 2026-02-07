'use client';

import { useEffect, useRef, useState } from 'react';
import { Media } from './Media';

export const LazyMedia = ({ media, className }: { media: { type: 'image' | 'video'; src: string; alt?: string; poster?: string }; className?: string }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        io.disconnect();
      }
    }, { rootMargin: '200px' });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className={className}>{visible ? <Media media={media} /> : <div className="h-full min-h-64 w-full animate-pulse rounded-2xl bg-card" />}</div>;
};
