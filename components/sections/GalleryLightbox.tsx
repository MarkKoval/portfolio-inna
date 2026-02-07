'use client';

import Image from 'next/image';
import { useState } from 'react';

export function GalleryLightbox({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 space-y-4 md:columns-2">
        {images.map((img, index) => (
          <button key={`${img}-${index}`} className="focus-ring block w-full overflow-hidden rounded-xl border border-white/10" onClick={() => setActive(index)}>
            <Image src={img} alt={`${title} gallery ${index + 1}`} width={1600} height={1000} className="h-auto w-full object-cover" />
          </button>
        ))}
      </div>
      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5" onClick={() => setActive(null)}>
          <Image src={images[active]} alt={`${title} preview`} width={1900} height={1200} className="max-h-[90vh] w-auto max-w-[95vw] object-contain" />
        </div>
      )}
    </>
  );
}
