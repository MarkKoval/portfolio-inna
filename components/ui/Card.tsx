import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

export const Card = ({ className, children }: { className?: string; children: ReactNode }) => (
  <article className={cn('rounded-3xl border border-border bg-background-secondary/80 p-6 transition hover:-translate-y-1', className)}>
    {children}
  </article>
);
