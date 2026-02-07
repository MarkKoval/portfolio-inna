import { projects } from '@/data/projects';
import { Container } from '@/components/ui/container';
import { ProjectCard } from '@/components/ui/project-card';

export function ProjectsPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-4xl md:text-6xl">Selected Projects</h2>
          <p className="max-w-sm text-sm text-muted">A selection of recent residential, commercial, and urban assignments.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
