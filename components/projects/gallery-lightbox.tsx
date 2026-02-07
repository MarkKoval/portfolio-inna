"use client";

import { useState } from "react";
import Image from "next/image";

export const GalleryLightbox = ({ images, title }: { images: string[]; title: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 space-y-4 md:columns-2">
        {images.map((src) => (
          <button key={src} onClick={() => setActive(src)} className="focus-ring relative block w-full overflow-hidden rounded-xl">
            <Image src={src} alt={title} width={1200} height={900} className="h-auto w-full object-cover transition hover:scale-[1.02]" />
          </button>
        ))}
      </div>
      {active && (
        <button className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-6" onClick={() => setActive(null)}>
          <Image src={active} alt={title} width={1400} height={1000} className="max-h-[90vh] w-auto rounded-xl" />
        </button>
      )}
    </>
  );
};
