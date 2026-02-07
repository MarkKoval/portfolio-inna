import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { GalleryLightbox } from '@/components/sections/GalleryLightbox';
import { Button } from '@/components/ui/Button';
import { Media } from '@/components/ui/Media';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: `${project.title} — Inna Architects`,
    description: project.descriptionShort,
    openGraph: {
      title: `${project.title} — Inna Architects`,
      description: project.descriptionShort,
      images: [project.coverImage]
    }
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projectIndex = projects.findIndex((item) => item.slug === params.slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  const next = projects[(projectIndex + 1) % projects.length];
  const prev = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <Container className="pt-32 pb-20">
      <Media src={project.heroMedia.src} alt={project.title} priority />
      <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="section-title">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{project.descriptionLong}</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div><p className="text-xs uppercase tracking-[0.18em] text-accent">Challenge</p><p className="mt-2 text-muted">Compact site constraints and climate responsiveness.</p></div>
            <div><p className="text-xs uppercase tracking-[0.18em] text-accent">Solution</p><p className="mt-2 text-muted">Layered envelope, adaptable plan, and soft daylight control.</p></div>
            <div><p className="text-xs uppercase tracking-[0.18em] text-accent">Materials</p><p className="mt-2 text-muted">{project.materials.join(', ')}</p></div>
          </div>
        </div>
        <aside className="rounded-xl border border-line bg-panel p-6 text-sm text-muted">
          <p>Year: {project.year}</p>
          <p>City: {project.city}</p>
          <p>Area: {project.areaM2} m²</p>
          <p>Role: {project.role}</p>
          <p>Status: {project.status}</p>
          {project.client && <p>Client: {project.client}</p>}
        </aside>
      </div>
      <div className="mt-16">
        <GalleryLightbox images={project.gallery} title={project.title} />
      </div>
      <div className="mt-14 flex flex-wrap gap-4">
        <Button href={`/projects/${prev.slug}`}>Previous project</Button>
        <Button href={`/projects/${next.slug}`}>Next project</Button>
      </div>
    </Container>
  );
}
