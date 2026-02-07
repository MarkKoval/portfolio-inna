import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";

export const SelectedProjectsSection = () => (
  <section className="py-24">
    <Container>
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="font-heading text-4xl md:text-6xl">Selected Projects</h2>
        <p className="max-w-md text-sm text-white/65">A curated mix of built work and speculative proposals spanning residential, interior and civic scale.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 6).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  </section>
);
