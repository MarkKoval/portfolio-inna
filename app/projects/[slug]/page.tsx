import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { getProjectBySlug, projects } from '@/data/projects';
import { GalleryLightbox } from './GalleryLightbox';

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.title} — Atelier Nord`, description: project.subtitle, openGraph: { images: [project.cover.src] } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();
  const idx = projects.findIndex((item) => item.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="pt-24">
      <img src={project.hero.src} alt={project.hero.alt} className="h-[70vh] w-full object-cover" />
      <Container className="py-16">
        <h1 className="font-display text-6xl">{project.title}</h1>
        <p className="mt-3 max-w-3xl text-muted">{project.subtitle}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-5 text-sm">
          <div>Year<br/>{project.year}</div><div>Location<br/>{project.city}, {project.country}</div><div>Area<br/>{project.areaM2} m²</div><div>Role<br/>{project.role}</div><div>Status<br/>{project.status}</div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3"><div><h3 className="mb-2">Challenge</h3><p className="text-muted">{project.challenge}</p></div><div><h3 className="mb-2">Solution</h3><p className="text-muted">{project.solution}</p></div><div><h3 className="mb-2">Outcome</h3><p className="text-muted">{project.outcome}</p></div></div>
        <div className="my-12"><GalleryLightbox project={project} /></div>
        <div className="grid gap-6 md:grid-cols-2">
          <div><h3 className="font-display text-3xl">Process</h3><ul className="mt-3 space-y-3">{project.processSteps.map((step) => <li key={step.title}><strong>{step.title}</strong><p className="text-muted">{step.text}</p></li>)}</ul></div>
          <div><h3 className="font-display text-3xl">Materials</h3><ul className="mt-3 list-disc pl-6 text-muted">{project.materials.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
        <div className="mt-10 flex justify-between border-t border-line pt-6"><Link href={`/projects/${prev.slug}`}>← {prev.title}</Link><Link href={`/projects/${next.slug}`}>{next.title} →</Link></div>
      </Container>
    </article>
  );
}
