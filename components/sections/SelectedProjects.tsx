import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function SelectedProjects() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <h2 className="section-title">Selected Projects</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">12 live studies</p>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
