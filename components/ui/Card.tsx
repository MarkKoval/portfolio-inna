import { cn } from '@/lib/utils/cn';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <article className={cn('rounded-2xl border border-border bg-background-secondary/80 p-5 transition duration-500 hover:-translate-y-1', className)}>{children}</article>;
}
