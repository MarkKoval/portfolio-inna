import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://atelier-nord.local';
  return [
    '',
    '/projects',
    '/about',
    '/contact',
    ...projects.map((project) => `/projects/${project.slug}`)
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
