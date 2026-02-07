import { cn } from '@/lib/utils';

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn('w-full rounded-2xl border border-line bg-transparent px-4 py-3 outline-none focus:border-accent', props.className)} />;
}
