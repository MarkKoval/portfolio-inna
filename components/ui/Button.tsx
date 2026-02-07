import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = ({ className, variant = 'primary', size = 'md', ...props }: Props) => (
  <button
    className={cn(
      'rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary min-h-11',
      variant === 'primary' && 'bg-accent-primary text-white hover:bg-accent-secondary',
      variant === 'secondary' && 'bg-background-tertiary border border-border text-foreground hover:border-accent-secondary',
      variant === 'ghost' && 'bg-transparent text-foreground-secondary hover:text-foreground',
      size === 'sm' && 'px-4 py-2 text-sm',
      size === 'md' && 'px-6 py-3',
      size === 'lg' && 'px-8 py-4 text-lg',
      className
    )}
    {...props}
  />
);
