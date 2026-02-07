import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import { RouteEffects } from '@/components/providers/route-effects';

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '700'] });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Architect Portfolio — Motion-first Studio Site',
  description: 'Contemporary architecture portfolio with cinematic scroll interactions and case studies.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SmoothScrollProvider>
          <RouteEffects />
          <Header />
          <ScrollProgress />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
