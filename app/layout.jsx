import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { ScrollTriggerRouteRefresh } from '@/components/providers/ScrollTriggerRouteRefresh';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata = {
  title: 'Architect Portfolio',
  description: 'Motion-forward architecture portfolio built with Next.js and GSAP.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"><body className={`${inter.variable} ${sora.variable} font-sans`}><SmoothScrollProvider /><ScrollTriggerRouteRefresh /><Header /><main>{children}</main><Footer /></body></html>
  );
}
