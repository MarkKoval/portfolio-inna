import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects, projectMap } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { CaseGallery } from '@/components/sections/CaseGallery';
import { baseMetadata } from '@/lib/seo';

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectMap.get(slug);
  if (!project) return baseMetadata('Project not found', 'Missing project');
  return baseMetadata(`${project.title} — Atelier Nord`, project.subtitle);
}

export default async function ProjectCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectMap.get(slug);
  if (!project) return notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className='py-10'>
      <div className='relative h-[70vh] w-full bg-cover bg-center' style={{ backgroundImage: `url(${project.hero.src})` }}>
        <div className='absolute inset-0 bg-gradient-to-t from-bg to-transparent' />
        <Container className='relative flex h-full items-end pb-12'>
          <div>
            <p className='text-sm uppercase tracking-[0.18em] text-accent'>{project.city} · {project.year}</p>
            <h1 className='mt-4 font-display text-6xl'>{project.title}</h1>
          </div>
        </Container>
      </div>
      <Container className='space-y-14 py-14'>
        <div className='grid gap-4 rounded-2xl border border-line bg-card p-6 md:grid-cols-5'>
          <p><strong>Year:</strong> {project.year}</p><p><strong>Location:</strong> {project.city}, {project.country}</p><p><strong>Area:</strong> {project.areaM2} m²</p><p><strong>Role:</strong> {project.role}</p><p><strong>Status:</strong> {project.status}</p>
        </div>
        <p className='max-w-3xl text-lg text-[var(--muted)]'>{project.overview}</p>
        <div className='grid gap-6 md:grid-cols-3'>
          <div><h3 className='font-display text-3xl'>Challenge</h3><p className='mt-3 text-[var(--muted)]'>{project.challenge}</p></div>
          <div><h3 className='font-display text-3xl'>Solution</h3><p className='mt-3 text-[var(--muted)]'>{project.solution}</p></div>
          <div><h3 className='font-display text-3xl'>Outcome</h3><p className='mt-3 text-[var(--muted)]'>{project.outcome}</p></div>
        </div>

        <CaseGallery images={project.gallery} />

        <div>
          <h2 className='font-display text-4xl'>Process</h2>
          <div className='mt-4 grid gap-3 md:grid-cols-2'>{project.processSteps.map((step) => <div key={step.title} className='rounded-2xl border border-line p-5'><p className='text-accent'>{step.title}</p><p className='mt-2 text-[var(--muted)]'>{step.text}</p></div>)}</div>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          <div><h3 className='font-display text-3xl'>Materials</h3><ul className='mt-3 list-disc pl-5 text-[var(--muted)]'>{project.materials.map((material) => <li key={material}>{material}</li>)}</ul></div>
          <div><h3 className='font-display text-3xl'>Credits</h3><ul className='mt-3 list-disc pl-5 text-[var(--muted)]'>{project.credits.map((credit) => <li key={credit}>{credit}</li>)}</ul></div>
        </div>

        <div className='flex justify-between border-t border-line pt-8'>
          <Link href={`/projects/${prev.slug}`}>← {prev.title}</Link>
          <Link href={`/projects/${next.slug}`}>{next.title} →</Link>
        </div>
      </Container>
    </article>
  );
}
