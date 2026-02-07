'use client';

import { cn } from '@/lib/utils/cn';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

const variants = {
  primary: 'bg-accent-primary text-white hover:bg-accent-secondary',
  secondary: 'bg-background-secondary border border-border text-foreground',
  ghost: 'bg-transparent text-foreground-secondary hover:text-foreground'
};

const sizes = { sm: 'h-10 px-4', md: 'h-11 px-6', lg: 'h-12 px-8 text-lg' };

export function Button({ className, variant = 'primary', size = 'md', ...props }: Props) {
  return <button className={cn('focus-ring min-w-11 rounded-full transition-all', variants[variant], sizes[size], className)} {...props} />;
}
