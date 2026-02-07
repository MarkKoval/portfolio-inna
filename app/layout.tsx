import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Inna — Premium Portfolio',
  description: 'Ultra-modern Next.js portfolio with performance-first animations.',
  openGraph: { title: 'Inna Portfolio', description: 'Modern creative developer portfolio' },
  twitter: { card: 'summary_large_image', title: 'Inna Portfolio' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
