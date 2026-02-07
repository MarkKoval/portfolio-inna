import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const createMetadata = (title: string, description: string): Metadata => ({
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    images: ['/demo/hero/og-placeholder.svg']
  }
});
