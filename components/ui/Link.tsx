import type { ReactNode } from 'react';
import NextLink from 'next/link';

export const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <NextLink href={href} className='underline-offset-4 hover:underline'>
    {children}
  </NextLink>
);
