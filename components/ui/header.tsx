'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Container } from './container';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-black/55 to-transparent">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="focus-ring font-display text-lg uppercase tracking-[0.25em]">
          A|Studio
        </Link>
        <nav className="flex gap-5 text-xs uppercase tracking-[0.2em]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn('focus-ring transition hover:text-accent', pathname === link.href && 'text-accent')}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
