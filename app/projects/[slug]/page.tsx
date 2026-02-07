import { notFound } from 'next/navigation';
import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import { getProjectBySlug, projects } from '@/data/projects';
import { ProjectGallery } from '@/components/sections/ProjectGallery';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return createMetadata('Project not found', 'Unknown project');
  return createMetadata(project.title, project.subtitle, `/projects/${slug}`);
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const prev = projects[index - 1] ?? projects[projects.length - 1];
  const next = projects[index + 1] ?? projects[0];

  return (
    <div className="mx-auto max-w-content px-6 py-14 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl border border-line">
        <img src={project.hero.src} alt={project.hero.alt} className="h-[70vh] w-full object-cover" />
        <h1 className="absolute bottom-8 left-8 font-display text-5xl">{project.title}</h1>
      </div>
      <div className="mt-10 grid gap-4 rounded-3xl border border-line p-6 md:grid-cols-5">
        <p>Year <br /> <span className="text-[--muted]">{project.year}</span></p>
        <p>Location <br /> <span className="text-[--muted]">{project.city}, {project.country}</span></p>
        <p>Area <br /> <span className="text-[--muted]">{project.areaM2} m²</span></p>
        <p>Role <br /> <span className="text-[--muted]">{project.role}</span></p>
        <p>Status <br /> <span className="text-[--muted]">{project.status}</span></p>
      </div>
      <p className="mt-10 max-w-3xl text-[--muted]">{project.overview}</p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div><h3 className="font-display text-3xl">Challenge</h3><p className="mt-3 text-[--muted]">{project.challenge}</p></div>
        <div><h3 className="font-display text-3xl">Solution</h3><p className="mt-3 text-[--muted]">{project.solution}</p></div>
        <div><h3 className="font-display text-3xl">Outcome</h3><p className="mt-3 text-[--muted]">{project.outcome}</p></div>
      </div>
      <div className="mt-14"><ProjectGallery gallery={project.gallery} /></div>
      <div className="mt-14 grid gap-4 md:grid-cols-4">{project.processSteps.map((step)=><div key={step.title} className="rounded-2xl border border-line p-4"><p className="font-display text-2xl">{step.title}</p><p className="mt-2 text-sm text-[--muted]">{step.text}</p></div>)}</div>
      <div className="mt-12 flex justify-between"><Link href={`/projects/${prev.slug}`}>← {prev.title}</Link><Link href={`/projects/${next.slug}`}>{next.title} →</Link></div>
    </div>
  );
}
