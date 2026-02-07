import './globals.css';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Preloader } from '@/components/layout/Preloader';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { RouteTransition } from '@/components/motion/RouteTransition';
import { site } from '@/data/site';

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata = {
  title: site.name,
  description: site.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-[var(--font-body)]">
        <Preloader />
        <SmoothScroll />
        <Header />
        <ScrollProgress />
        <RouteTransition>
          <main className="pt-20">{children}</main>
        </RouteTransition>
        <Footer />
      </body>
    </html>
  );
}
