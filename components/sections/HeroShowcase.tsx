'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const slides = ['/demo/p1.svg', '/demo/p2.svg', '/demo/p3.svg', '/demo/p4.svg'];

export function HeroShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen pt-28">
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <Image
            key={slide}
            src={slide}
            alt="Architectural project preview"
            fill
            priority={idx === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ${idx === active ? 'opacity-70' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-bg" />
      </div>
      <div className="relative mx-auto flex max-w-[1300px] flex-col justify-end gap-8 px-5 pb-16 md:px-8 md:pb-24">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Architect Portfolio</p>
        <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] md:text-8xl">Spaces with narrative, light, and precision.</h1>
        <div className="flex gap-4">
          <Button href="/projects">View projects</Button>
          <Button href="/contact">Start a collaboration</Button>
        </div>
      </div>
    </section>
  );
}
