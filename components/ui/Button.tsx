import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Button({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' }) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center rounded-full border px-6 py-3 text-sm uppercase tracking-[0.2em] transition',
        variant === 'primary'
          ? 'border-accent bg-accent/10 text-text hover:bg-accent/20'
          : 'border-line text-text hover:border-accent'
      )}
    >
      {children}
    </Link>
  );
}
