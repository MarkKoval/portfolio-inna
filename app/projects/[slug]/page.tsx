import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects, projectBySlug } from '@/data/projects';
import { CaseStudyClient } from './CaseStudyClient';

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Atelier Nord`,
    description: project.subtitle,
    openGraph: { images: [project.cover.src] }
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();
  const idx = projects.findIndex((p) => p.slug === slug);
  const prevSlug = projects[(idx - 1 + projects.length) % projects.length].slug;
  const nextSlug = projects[(idx + 1) % projects.length].slug;

  return <CaseStudyClient project={project} prevSlug={prevSlug} nextSlug={nextSlug} />;
}
