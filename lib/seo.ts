import type { Metadata } from 'next';
import { site } from '@/data/site';

export const baseMetadata = (title: string, description: string): Metadata => ({
  title,
  description,
  metadataBase: new URL(site.url),
  openGraph: {
    title,
    description,
    url: site.url,
    images: ['/demo/hero/og.svg']
  }
});
