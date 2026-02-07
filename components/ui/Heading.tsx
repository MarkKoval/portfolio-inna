import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function Heading({ className, children }: { className?: string; children: ReactNode }) {
  return <h2 className={cn('font-display text-4xl leading-[1.1] tracking-tight md:text-6xl', className)}>{children}</h2>;
}
