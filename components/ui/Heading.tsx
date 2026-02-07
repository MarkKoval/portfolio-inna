import { cn } from '@/lib/utils';

export const Heading = ({ className, children }: React.PropsWithChildren<{ className?: string }>) => (
  <h2 className={cn('font-display text-4xl leading-[1.1] tracking-[-0.02em] md:text-5xl', className)}>{children}</h2>
);
