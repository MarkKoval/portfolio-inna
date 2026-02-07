import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function Section({ className, children }: { className?: string; children: ReactNode }) {
  return <section className={cn('py-20 md:py-28', className)}>{children}</section>;
}
