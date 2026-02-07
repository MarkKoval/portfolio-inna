import NextLink from 'next/link';
import { cn } from '@/lib/utils';

export const Link = ({ href, className, children }: React.PropsWithChildren<{ href: string; className?: string }>) => (
  <NextLink className={cn('group inline-flex items-center gap-2 text-sm tracking-[0.08em] text-text', className)} href={href}>
    {children}<span className="transition group-hover:translate-x-1">→</span>
  </NextLink>
);
