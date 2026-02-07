'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const items = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export const Nav = () => {
  const path = usePathname();
  return (
    <nav className="flex items-center gap-5 text-xs uppercase tracking-[0.1em]">
      {items.map((item) => (
        <NextLink key={item.href} href={item.href} className={cn('text-muted transition hover:text-text', path.startsWith(item.href) && 'text-text')}>
          {item.label}
        </NextLink>
      ))}
    </nav>
  );
};
