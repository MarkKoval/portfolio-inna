'use client';

import Image from 'next/image';
import Link from 'next/link';

export function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="focus-ring group block"><article className="overflow-hidden rounded-lg border border-white/10 bg-panel/60"><div className="relative aspect-[4/3] overflow-hidden"><Image src={project.coverImage} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" /></div><div className="space-y-2 p-4"><div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-muted"><span>{project.city}</span><span>{project.year}</span></div><h3 className="font-display text-xl">{project.title}</h3><p className="translate-y-2 text-sm text-muted opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{project.descriptionShort}</p></div></article></Link>
  );
}
