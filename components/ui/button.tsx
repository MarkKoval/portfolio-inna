import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Button({ href, children, className }: ButtonProps) {
  return (
    <Link
      className={cn(
        'focus-ring group inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 text-sm uppercase tracking-[0.2em] transition hover:border-accent hover:text-accent',
        className
      )}
      href={href}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}
