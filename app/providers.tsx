'use client';

import { SmoothScrollProvider } from '@/components/animations/SmoothScrollProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => <SmoothScrollProvider>{children}</SmoothScrollProvider>;
