import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { GalleryLightbox } from "@/components/projects/gallery-lightbox";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Inna Atelier`,
    description: project.descriptionShort,
    openGraph: {
      title: project.title,
      description: project.descriptionShort,
      images: [project.coverImage]
    }
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((item) => item.slug === params.slug);
  const project = projects[index];
  if (!project) notFound();

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <Container className="pt-28 pb-20">
      <div className="relative mb-10 h-[62vh] overflow-hidden rounded-2xl">
        <Image src={project.heroMedia.src} alt={project.title} fill sizes="100vw" className="object-cover" priority />
      </div>
      <h1 className="font-heading text-5xl md:text-7xl">{project.title}</h1>
      <p className="mt-3 max-w-2xl text-white/75">{project.descriptionLong}</p>

      <dl className="mt-8 grid gap-4 rounded-2xl border border-white/15 p-6 text-sm md:grid-cols-3">
        <div><dt className="text-white/50">Year</dt><dd>{project.year}</dd></div>
        <div><dt className="text-white/50">City</dt><dd>{project.city}, {project.country}</dd></div>
        <div><dt className="text-white/50">Area</dt><dd>{project.areaM2} m²</dd></div>
        <div><dt className="text-white/50">Role</dt><dd>{project.role}</dd></div>
        <div><dt className="text-white/50">Status</dt><dd>{project.status}</dd></div>
        <div><dt className="text-white/50">Client</dt><dd>{project.client ?? "Confidential"}</dd></div>
      </dl>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <article><h2 className="text-2xl">Challenge</h2><p className="mt-3 text-white/70">Balancing ambition, budget, and long-term operational resilience while preserving a clear spatial identity.</p></article>
        <article><h2 className="text-2xl">Solution</h2><p className="mt-3 text-white/70">Layered structure, climate-responsive envelope design, and sequenced interior moments to support adaptable use.</p></article>
        <article><h2 className="text-2xl">Materials</h2><ul className="mt-3 space-y-1 text-white/70">{project.materials.map((item) => <li key={item}>{item}</li>)}</ul></article>
      </section>

      <section className="mt-16">
        <GalleryLightbox images={project.gallery} title={project.title} />
      </section>

      <div className="mt-16 flex justify-between border-t border-white/10 pt-8 text-sm uppercase tracking-[0.18em]">
        <Link href={`/projects/${prev.slug}`} className="focus-ring text-white/70 hover:text-copper">Prev: {prev.title}</Link>
        <Link href={`/projects/${next.slug}`} className="focus-ring text-white/70 hover:text-copper">Next: {next.title}</Link>
      </div>
    </Container>
  );
}
