'use client';

import { useEffect, useRef, useState } from 'react';
import { Media } from './Media';

export const LazyMedia = (props: { type: 'image' | 'video'; src: string; alt?: string; poster?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { rootMargin: '120px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref}>{visible ? <Media {...props} /> : <div className="aspect-[16/10] w-full rounded-3xl bg-card" />}</div>;
};
