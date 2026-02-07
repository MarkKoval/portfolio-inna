'use client';

import Image from 'next/image';
import { useState } from 'react';

export function GalleryLightbox({ images, title }) {
  const [active, setActive] = useState(null);
  return <><div className="grid gap-4 md:grid-cols-2">{images.map((src, i) => <button key={`${src}-${i}`} onClick={() => setActive(src)} className="focus-ring relative aspect-[4/3] overflow-hidden rounded-lg"><Image src={src} alt={`${title} gallery image ${i + 1}`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition hover:scale-105" /></button>)}</div>{active && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6" role="dialog" aria-modal="true"><button className="focus-ring absolute right-6 top-6 rounded border border-white/30 px-3 py-2" onClick={() => setActive(null)}>Close</button><div className="relative h-[80vh] w-full max-w-6xl"><Image src={active} alt={`${title} enlarged`} fill sizes="100vw" className="object-contain" /></div></div>}</>;
}
