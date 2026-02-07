import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/projects', '/about', '/contact'].map((route) => ({ url: `${site.url}${route}`, lastModified: new Date() }));
  const projectRoutes = projects.map((project) => ({ url: `${site.url}/projects/${project.slug}`, lastModified: new Date() }));
  return [...staticRoutes, ...projectRoutes];
}
