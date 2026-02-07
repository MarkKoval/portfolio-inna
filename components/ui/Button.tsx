import type { ReactNode } from 'react';
import NextLink from 'next/link';
import { cn } from '@/lib/utils';

export const Button = ({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' }) => (
  <NextLink
    href={href}
    className={cn(
      'inline-flex items-center gap-2 rounded-full border px-5 py-3 text-xs uppercase tracking-[0.14em] transition',
      variant === 'primary'
        ? 'border-accent bg-accent/15 text-accent hover:bg-accent hover:text-bg'
        : 'border-line text-text hover:border-accent hover:text-accent'
    )}
  >
    {children}
    <span aria-hidden>↗</span>
  </NextLink>
);
