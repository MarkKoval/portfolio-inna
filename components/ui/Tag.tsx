import type { PropsWithChildren } from 'react';

export const Tag = ({ children }: PropsWithChildren) => (
  <span className='rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]'>
    {children}
  </span>
);
