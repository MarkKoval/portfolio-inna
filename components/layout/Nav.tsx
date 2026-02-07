'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex items-center gap-6 text-xs uppercase tracking-[0.14em]'>
      {links.map((item) => (
        <Link key={item.href} href={item.href} className={cn('text-[var(--muted)] transition hover:text-text', pathname.startsWith(item.href) && 'text-accent')}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
