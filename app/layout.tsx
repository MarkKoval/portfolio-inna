import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { CustomCursor } from '@/components/animations/CustomCursor';

export const metadata: Metadata = {
  title: 'Premium Portfolio',
  description: 'Ultra-modern portfolio website built with Next.js 15.',
  openGraph: {
    title: 'Premium Portfolio',
    description: 'Performance-first portfolio with advanced animations.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
        <Providers>
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
