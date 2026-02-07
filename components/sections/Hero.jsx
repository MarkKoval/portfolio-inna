'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';

const slides = ['/demo/p1.svg', '/demo/p2.svg', '/demo/p3.svg', '/demo/p4.svg'];

export function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((v) => (v + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">{slides.map((slide, i) => <Image key={slide} src={slide} alt="Hero project preview" fill priority={i === 0} sizes="100vw" className={`object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`} />)}<div className="absolute inset-0 bg-black/45" /><div className="relative z-10 mx-auto flex min-h-screen max-w-[1300px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-20"><p className="text-xs uppercase tracking-[0.22em] text-white/70">Architect Portfolio / Spatial Direction</p><h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] md:text-8xl">Crafting spaces that move with people, light and time.</h1><div className="mt-8 flex gap-6"><Button href="/projects">Explore Projects</Button><Button href="/contact">Start a Commission</Button></div></div></section>
  );
}
