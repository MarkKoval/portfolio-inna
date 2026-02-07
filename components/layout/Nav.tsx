'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-6 text-sm uppercase tracking-[0.2em]">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={cn('transition hover:text-accent', pathname.startsWith(link.href) && 'text-accent')}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
