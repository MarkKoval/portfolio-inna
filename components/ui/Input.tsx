import type { InputHTMLAttributes } from 'react';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className='w-full rounded-2xl border border-line bg-card px-4 py-3 text-sm text-text outline-none transition focus:border-accent'
  />
);
