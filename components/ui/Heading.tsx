import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

export const Heading = ({ className, children }: PropsWithChildren<{ className?: string }>) => (
  <h2 className={cn('font-display text-4xl leading-[1.08] tracking-[-0.02em] md:text-6xl', className)}>{children}</h2>
);
