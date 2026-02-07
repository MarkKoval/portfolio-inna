import { cn } from '@/lib/utils';

export const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea {...props} className={cn('w-full rounded-2xl border border-line bg-card px-4 py-3 outline-none focus:border-accent', props.className)} />
);
