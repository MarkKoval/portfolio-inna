import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

export const ProjectCard = ({ project }: { project: Project }) => (
  <Link href={`/projects/${project.slug}`} className="group focus-ring block space-y-3">
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/5">
      <Image src={project.coverImage} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
    </div>
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="text-lg font-medium">{project.title}</h3>
      <p className="text-xs uppercase tracking-[0.16em] text-white/60">{project.year}</p>
    </div>
    <p className="text-sm text-white/65">{project.city}, {project.country}</p>
  </Link>
);
