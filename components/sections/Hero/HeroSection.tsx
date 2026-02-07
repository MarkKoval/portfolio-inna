'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    gsap.fromTo(headingRef.current.children, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power3.out' });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/images/hero-fallback.svg">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="gradient-overlay absolute inset-0" />
      <div className="container-p relative flex min-h-screen flex-col justify-center gap-8">
        <h1 ref={headingRef} className="text-5xl font-semibold md:text-7xl">
          <span className="block">Designing</span>
          <span className="block">Memorable</span>
          <span className="block text-accent-primary">Digital Experiences</span>
        </h1>
        <p className="max-w-2xl text-lg text-foreground-secondary">Next.js 15 portfolio built for speed, immersive motion, and high-conversion storytelling.</p>
        <div><Button>View Projects</Button></div>
      </div>
    </section>
  );
}
