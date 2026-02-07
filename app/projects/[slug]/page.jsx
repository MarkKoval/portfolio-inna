import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { getProjectBySlug, getProjectNeighbors } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { GalleryLightbox } from '@/components/sections/GalleryLightbox';

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project not found' };
  return { title: `${project.title} | Architect Portfolio`, description: project.descriptionShort, openGraph: { title: project.title, description: project.descriptionShort, images: [project.coverImage] } };
}

export default function ProjectDetail({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const neighbors = getProjectNeighbors(project.slug);

  return <article className="pt-24"><section className="relative h-[72vh]"><Image src={project.heroMedia.src} alt={project.title} fill sizes="100vw" className="object-cover" priority /><div className="absolute inset-0 bg-black/35" /><Container className="relative z-10 flex h-full flex-col justify-end pb-12"><h1 className="font-display text-5xl md:text-7xl">{project.title}</h1><p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/80">{project.city}, {project.country} · {project.year}</p></Container></section><Container className="grid gap-10 py-14 md:grid-cols-[1.1fr_1fr]"><p className="text-lg text-muted">{project.descriptionLong}</p><dl className="grid grid-cols-2 gap-4 rounded-lg border border-white/10 bg-panel/50 p-5 text-sm"><div><dt className="text-muted">Area</dt><dd>{project.areaM2} m²</dd></div><div><dt className="text-muted">Role</dt><dd>{project.role}</dd></div><div><dt className="text-muted">Status</dt><dd>{project.status}</dd></div><div><dt className="text-muted">Client</dt><dd>{project.client ?? 'Confidential'}</dd></div></dl></Container><Container className="space-y-8 pb-20"><GalleryLightbox images={project.gallery} title={project.title} /><div className="grid gap-6 md:grid-cols-3"><div className="rounded-lg border border-white/10 p-5"><h2 className="font-display text-2xl">Challenge</h2><p className="mt-2 text-muted">Balancing urban density with calm interiors and natural ventilation.</p></div><div className="rounded-lg border border-white/10 p-5"><h2 className="font-display text-2xl">Solution</h2><p className="mt-2 text-muted">A layered sequence of thresholds and climate-responsive material systems.</p></div><div className="rounded-lg border border-white/10 p-5"><h2 className="font-display text-2xl">Materials</h2><p className="mt-2 text-muted">{project.materials.join(', ')}.</p></div></div><div className="flex justify-between border-t border-white/10 pt-8 text-sm uppercase tracking-[0.15em]"><Link className="focus-ring" href={`/projects/${neighbors.prev?.slug}`}>← {neighbors.prev?.title}</Link><Link className="focus-ring" href={`/projects/${neighbors.next?.slug}`}>{neighbors.next?.title} →</Link></div></Container></article>;
}
