import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/container';
import { ProjectGallery } from '@/components/sections/project-gallery';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return { title: 'Project not found' };

  return {
    title: `${project.title} — Architect Portfolio`,
    description: project.descriptionShort,
    openGraph: {
      title: `${project.title} — Architect Portfolio`,
      description: project.descriptionShort,
      images: [project.coverImage]
    }
  };
}

export default function ProjectCasePage({ params }: Props) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const idx = projects.findIndex((item) => item.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="pb-24 pt-24">
      <section className="relative h-[75vh] overflow-hidden">
        <Image src={project.heroMedia.src} alt={project.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/35" />
        <Container className="relative z-10 flex h-full items-end pb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">{project.city}, {project.country}</p>
            <h1 className="mt-3 font-display text-5xl md:text-7xl">{project.title}</h1>
          </div>
        </Container>
      </section>

      <Container className="mt-14 grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-lg text-text/90">{project.descriptionLong}</p>
          <div className="mt-10 space-y-6">
            <section>
              <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-accent">Challenge</h2>
              <p className="text-muted">Balancing strong architectural identity with climate-responsive performance and budget constraints.</p>
            </section>
            <section>
              <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-accent">Solution</h2>
              <p className="text-muted">A modular structural strategy paired with flexible interior bands allowed phased delivery without losing design intent.</p>
            </section>
            <section>
              <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-accent">Materials</h2>
              <p className="text-muted">{project.materials.join(', ')}.</p>
            </section>
          </div>
        </div>
        <aside className="space-y-3 border border-white/10 bg-panel p-6 text-sm">
          {[
            ['Area', `${project.areaM2} m²`],
            ['Year', project.year],
            ['Role', project.role],
            ['Status', project.status],
            ['Client', project.client ?? 'Confidential']
          ].map(([k, v]) => (
            <div key={String(k)} className="flex justify-between border-b border-white/10 py-3">
              <span className="text-muted">{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </aside>
      </Container>

      <Container className="mt-16">
        <ProjectGallery images={project.gallery} title={project.title} />
      </Container>

      <Container className="mt-14 flex justify-between gap-4 text-sm uppercase tracking-[0.2em] text-muted">
        <Link href={`/projects/${prev.slug}`} className="focus-ring hover:text-accent">← {prev.title}</Link>
        <Link href={`/projects/${next.slug}`} className="focus-ring hover:text-accent">{next.title} →</Link>
      </Container>
    </article>
  );
}
