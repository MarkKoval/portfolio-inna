'use client';

import { ReactNode } from 'react';
import { useLenis } from '@/lib/hooks/useLenis';

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useLenis(true);
  return <>{children}</>;
}
