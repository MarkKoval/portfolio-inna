'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export const CaseGallery = ({ images }: { images: { src: string; alt: string }[] }) => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <div className='grid gap-4 md:grid-cols-2'>
        {images.map((image, i) => (
          <button key={image.src + i} onClick={() => setIndex(i)} className='text-left'>
            <div className='h-64 rounded-2xl border border-line bg-cover bg-center' style={{ backgroundImage: `url(${image.src})` }} />
            <p className='mt-2 text-xs text-[var(--muted)]'>{image.alt}</p>
          </button>
        ))}
      </div>
      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={images.map((image) => ({ src: image.src, alt: image.alt }))} />
    </>
  );
};
