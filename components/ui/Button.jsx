import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Button({ href, children, className }) {
  return (
    <Link
      href={href}
      className={cn('focus-ring inline-flex items-center gap-2 border-b border-white/50 pb-1 text-sm uppercase tracking-[0.18em] transition hover:border-accent hover:text-accent', className)}
    >
      {children}<span aria-hidden>→</span>
    </Link>
  );
}
