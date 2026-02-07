'use client';

import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';

export const HeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6" aria-label="Hero section">
      {!isMobile ? (
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata">
          <source src="https://res.cloudinary.com/demo/video/upload/v1/samples/sea-turtle.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-background" />
      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-4 text-accent-primary">2025 Portfolio Experience</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">I design performant digital products with cinematic storytelling.</h1>
        <p className="mt-6 max-w-2xl text-foreground-secondary">Next.js 15, premium animations, and conversion-focused UX packed in one scalable architecture.</p>
        <div className="mt-10">
          <Button size="lg">View Projects</Button>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-foreground-secondary">
        <ArrowDown aria-hidden />
      </div>
    </section>
  );
};
