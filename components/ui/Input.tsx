import { cn } from '@/lib/utils';

export const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className={cn('w-full rounded-2xl border border-line bg-bg-2 px-4 py-3 text-sm outline-none transition focus:border-accent', className)} {...props} />
);
