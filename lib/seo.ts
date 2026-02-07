import { Metadata } from 'next';
import { site } from '@/data/site';

export const baseMetadata = (title: string, description: string): Metadata => ({
  title,
  description,
  metadataBase: new URL(site.url),
  openGraph: {
    title,
    description,
    type: 'website',
    images: [{ url: '/demo/hero/hero.svg' }]
  }
});
