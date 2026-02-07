'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="focus-ring font-serif text-xl tracking-wide">
          Inna Architects
        </Link>
        <nav className="flex items-center gap-5 text-sm uppercase tracking-[0.16em]">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn('focus-ring relative pb-1 text-muted hover:text-white', pathname === item.href && 'text-white')}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
