import Link from 'next/link';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const SelectedProjects = () => (
  <Section>
    <Container>
      <h2 className="font-display text-5xl">Selected Projects</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.slice(0, 6).map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group rounded-3xl border border-line bg-card p-3">
            <div className="overflow-hidden rounded-2xl"><img src={project.cover.src} alt={project.cover.alt} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" /></div>
            <div className="p-4">
              <h3 className="font-display text-2xl">{project.title}</h3>
              <p className="text-sm text-muted">{project.city} · {project.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  </Section>
);
