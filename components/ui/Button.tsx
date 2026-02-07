import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: 'primary' | 'secondary';
};

const classes = {
  primary: 'border-accent bg-accent/15 text-accent shadow-[0_0_30px_rgba(216,183,122,0.15)]',
  secondary: 'border-line bg-transparent text-text'
};

export const Button = ({ href, className, variant = 'primary', children, ...props }: React.PropsWithChildren<Props>) => {
  const style = cn('inline-flex items-center gap-2 rounded-full border px-5 py-3 text-xs uppercase tracking-[0.12em] transition hover:-translate-y-0.5', classes[variant], className);
  if (href) return <Link className={style} href={href}>{children}</Link>;
  return <button className={style} {...props}>{children}</button>;
};
