'use client';

import { Media } from './Media';
import { useEffect, useRef, useState } from 'react';

export function LazyMedia(props: { type: 'image' | 'video'; src: string; alt?: string; poster?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setShow(true);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref}>{show ? <Media {...props} /> : <div className="aspect-[16/10] w-full rounded-3xl bg-card" />}</div>;
}
