import Link from 'next/link';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';

export function SelectedProjects() {
  return (
    <section className="py-24">
      <Container>
        <Heading>Selected Projects</Heading>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group rounded-3xl border border-line bg-card p-4">
              <div className="overflow-hidden rounded-2xl"><img src={project.cover.src} alt={project.cover.alt} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" /></div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[--muted]">{project.year} · {project.city}</p>
              <p className="mt-2 font-display text-2xl">{project.title}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
