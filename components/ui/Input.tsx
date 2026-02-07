import { cn } from '@/lib/utils';

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} className={cn('w-full rounded-2xl border border-line bg-card px-4 py-3 outline-none focus:border-accent', props.className)} />
);
