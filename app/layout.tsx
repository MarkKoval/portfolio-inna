import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import { RouteTransition } from '@/components/motion/RouteTransition';
import { baseMetadata } from '@/lib/seo';
import { Providers } from './providers';

const display = Fraunces({ subsets: ['latin'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = baseMetadata('Atelier Nord', 'Portfolio website for Atelier Nord architecture studio.');

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Providers>
          <Header />
          <ScrollProgress />
          <RouteTransition>
            <main>{children}</main>
          </RouteTransition>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
