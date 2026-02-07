'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export function ProjectGallery({ gallery }: { gallery: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {gallery.map((item, i) => (
          <button key={item.src + i} onClick={() => setIndex(i)} className="text-left">
            <img src={item.src} alt={item.alt} className="w-full rounded-2xl border border-line" />
            <p className="mt-2 text-xs text-[--muted]">{item.alt}</p>
          </button>
        ))}
      </div>
      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={gallery.map((item) => ({ src: item.src, alt: item.alt }))} />
    </>
  );
}
