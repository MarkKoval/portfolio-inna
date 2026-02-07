import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Button = ({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' }) => (
  <Link
    href={href}
    className={cn(
      'inline-flex items-center rounded-full border px-5 py-3 text-sm uppercase tracking-[0.16em] transition',
      variant === 'primary'
        ? 'border-[color:var(--accent)] bg-[color:rgba(216,183,122,0.1)] text-[color:var(--accent-3)] hover:bg-[color:rgba(216,183,122,0.2)]'
        : 'border-line text-text hover:bg-card'
    )}
  >
    {children}
  </Link>
);
