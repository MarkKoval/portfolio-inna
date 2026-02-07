'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="focus-ring group block overflow-hidden border border-white/10 bg-panel">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
          <span>{project.year}</span>
          <span>{project.city}</span>
        </div>
        <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
        <p className="text-sm text-muted">{project.descriptionShort}</p>
        <div className="flex flex-wrap gap-2 pt-2 text-[10px] uppercase tracking-[0.2em] text-accent">
          {project.category.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
