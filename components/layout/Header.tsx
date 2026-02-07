'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Nav } from './Nav';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 py-4 transition ${scrolled ? 'bg-[color:rgba(11,13,16,0.75)] backdrop-blur' : 'bg-transparent'}`}>
      <Container className="flex items-center justify-between">
        <Link href="/" className="font-display text-xl">Atelier Nord</Link>
        <div className="flex items-center gap-8">
          <Nav />
          <Button href="/contact" variant="secondary">Start a project</Button>
        </div>
      </Container>
    </header>
  );
};
