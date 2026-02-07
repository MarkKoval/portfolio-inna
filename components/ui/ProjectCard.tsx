import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="focus-ring group block space-y-3">
      <div className="relative overflow-hidden rounded-xl border border-white/10">
        <Image
          src={project.coverImage}
          alt={project.title}
          width={1600}
          height={1000}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div>
        <p className="font-serif text-2xl">{project.title}</p>
        <p className="text-sm text-muted">{project.city} · {project.year}</p>
      </div>
    </Link>
  );
}
