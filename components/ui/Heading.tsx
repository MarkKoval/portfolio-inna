import { cn } from '@/lib/utils';

export const Heading = ({ className, children }: React.PropsWithChildren<{ className?: string }>) => (
  <h2 className={cn('font-display text-4xl tracking-tight md:text-6xl', className)}>{children}</h2>
);
