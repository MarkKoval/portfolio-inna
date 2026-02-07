import { cn } from '@/lib/utils';

export const Container = ({ className, children }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={cn('mx-auto w-full max-w-[1280px] px-6 md:px-10', className)}>{children}</div>
);
