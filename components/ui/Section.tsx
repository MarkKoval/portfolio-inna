import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

export const Section = ({ className, children, id }: PropsWithChildren<{ className?: string; id?: string }>) => (
  <section id={id} className={cn('py-20 md:py-28', className)}>
    {children}
  </section>
);
