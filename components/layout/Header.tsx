'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Nav } from './Nav';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled ? 'bg-bg/70 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-6 lg:px-10">
        <Link href="/" className="font-display text-2xl">Atelier Nord</Link>
        <Nav />
        <Link href="/contact" className="rounded-full border border-accent px-4 py-2 text-xs uppercase tracking-[0.2em]">Start a project</Link>
      </div>
    </header>
  );
}
