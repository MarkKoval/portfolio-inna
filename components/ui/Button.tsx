import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

export function Button({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="focus-ring group inline-flex items-center gap-2 border border-line px-5 py-3 text-sm uppercase tracking-[0.2em] hover:border-accent"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
