import type { Metadata } from 'next';
import { site } from '@/data/site';

export const createMetadata = (title: string, description: string, path = ''): Metadata => ({
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${site.url}${path}`,
    siteName: site.name,
    images: [{ url: '/demo/hero/hero.svg', width: 1200, height: 630 }]
  }
});
