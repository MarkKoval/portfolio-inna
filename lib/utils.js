import { projects } from '@/data/projects';

export const cn = (...classes) => classes.filter(Boolean).join(' ');

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

export const getProjectNeighbors = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
};
