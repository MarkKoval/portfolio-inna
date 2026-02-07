'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const slides = projects.slice(0, 5);

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((v) => (v + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <Image
          key={slide.slug}
          src={slide.coverImage}
          alt={slide.title}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          sizes="100vw"
        />
      ))}
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 flex h-full items-end pb-20 pt-20">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Architect Portfolio</p>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.95] md:text-8xl">Spaces shaped by light, material and movement.</h1>
          <div className="mt-8 flex gap-4">
            <Button href="/projects">View Projects</Button>
            <Button href="/contact" className="border-white/40">Start a Project</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
