import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LenisProvider } from '@/components/motion/LenisProvider';
import { RouteTransition } from '@/components/motion/RouteTransition';
import { baseMetadata } from '@/lib/seo';

const display = Fraunces({ subsets: ['latin'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = baseMetadata('Atelier Nord — Architecture Portfolio', 'Portfolio of Atelier Nord focused on residential, commercial, and urban architecture.');

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en' className={`${display.variable} ${body.variable}`}>
      <body>
        <LenisProvider />
        <Header />
        <RouteTransition>
          <main className='pt-20'>{children}</main>
        </RouteTransition>
        <Footer />
      </body>
    </html>
  );
}
