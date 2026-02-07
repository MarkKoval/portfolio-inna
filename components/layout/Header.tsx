'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Nav } from './Nav';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition', scrolled && 'backdrop-blur-md')}>
      <Container className='flex h-20 items-center justify-between border-b border-transparent'>
        <Link href='/' className='font-display text-xl tracking-wide'>Atelier Nord</Link>
        <div className='flex items-center gap-8'>
          <Nav />
          <Button href='/contact'>Start a project</Button>
        </div>
      </Container>
    </header>
  );
};
