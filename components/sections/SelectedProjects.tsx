import Link from 'next/link';
import { projects } from '@/data/projects';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Tag } from '@/components/ui/Tag';

export const SelectedProjects = () => (
  <Section>
    <Heading className="mb-10">Selected Projects</Heading>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.slice(0, 6).map((project) => (
        <Link key={project.slug} href={`/projects/${project.slug}`} className="group overflow-hidden rounded-[24px] border border-line bg-card">
          <div className="overflow-hidden">
            <img src={project.cover.src} alt={project.cover.alt} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
          </div>
          <div className="space-y-3 p-5">
            <p className="text-xs uppercase tracking-[0.1em] text-muted">{project.year} · {project.city}</p>
            <h3 className="font-display text-2xl">{project.title}</h3>
            <div className="flex flex-wrap gap-2">{project.categories.map((c) => <Tag key={c}>{c}</Tag>)}</div>
          </div>
        </Link>
      ))}
    </div>
  </Section>
);
