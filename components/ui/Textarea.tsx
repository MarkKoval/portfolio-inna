import type { TextareaHTMLAttributes } from 'react';

export const Textarea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className='min-h-32 w-full rounded-2xl border border-line bg-card px-4 py-3 text-sm text-text outline-none transition focus:border-accent'
  />
);
