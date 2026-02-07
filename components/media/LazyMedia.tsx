'use client';

import { useEffect, useRef, useState } from 'react';
import { Media } from './Media';

export const LazyMedia = ({ media }: { media: { type?: 'image' | 'video'; src: string; alt?: string; poster?: string } }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className='relative h-full w-full'>{show ? <Media media={media} /> : null}</div>;
};
