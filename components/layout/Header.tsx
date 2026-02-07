'use client';

import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Nav } from './Nav';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled ? 'bg-bg/70 backdrop-blur-xl' : 'bg-transparent'}`}>
      <Container className="flex h-20 items-center justify-between">
        <NextLink href="/" className="font-display text-xl tracking-[-0.02em]">Atelier Nord</NextLink>
        <div className="flex items-center gap-8">
          <Nav />
          <Button href="/contact" variant="secondary" className="hidden md:inline-flex">Start a project</Button>
        </div>
      </Container>
    </header>
  );
};
