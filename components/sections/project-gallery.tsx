'use client';

import { useState } from 'react';
import Image from 'next/image';

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 space-y-4 md:columns-2">
        {images.map((src, i) => (
          <button key={`${src}-${i}`} onClick={() => setActive(src)} className="focus-ring relative block w-full overflow-hidden rounded-lg border border-white/10 text-left">
            <Image src={src} alt={`${title} gallery ${i + 1}`} width={1000} height={700} className="h-auto w-full object-cover transition duration-500 hover:scale-105" />
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-6" onClick={() => setActive(null)}>
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image src={active} alt={`${title} enlarged`} fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      )}
    </>
  );
}
