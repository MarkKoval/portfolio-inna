'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const nav = [{ href: '/', label: 'Home' }, { href: '/projects', label: 'Projects' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed left-0 top-0 z-40 w-full bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="focus-ring font-display text-lg tracking-[0.2em]">ARCHITECT / PORTFOLIO</Link>
        <nav className="flex gap-6 text-xs uppercase tracking-[0.18em] md:text-sm">
          {nav.map((item) => <Link key={item.href} href={item.href} className={cn('focus-ring transition hover:text-accent', pathname === item.href && 'text-accent')}>{item.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
