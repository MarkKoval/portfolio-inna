import { cn } from '@/lib/utils';

export const Textarea = ({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea className={cn('w-full rounded-2xl border border-line bg-bg-2 px-4 py-3 text-sm outline-none transition focus:border-accent', className)} {...props} />
);
