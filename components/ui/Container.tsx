import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-content px-6 lg:px-10', className)}>{children}</div>;
}
