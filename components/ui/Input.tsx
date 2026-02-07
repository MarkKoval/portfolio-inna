import { cn } from '@/lib/utils';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn('w-full rounded-2xl border border-line bg-transparent px-4 py-3 outline-none focus:border-accent', props.className)} />;
}
