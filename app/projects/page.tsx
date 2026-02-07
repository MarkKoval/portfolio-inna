import { createMetadata } from '@/lib/seo';
import { Section } from '@/components/ui/Section';
import { ProjectsClient } from './ProjectsClient';

export const metadata = createMetadata('Projects — Atelier Nord', 'Portfolio projects with filters and case studies.');

export default function ProjectsPage() {
  return (
    <Section>
      <h1 className="mb-10 font-display text-6xl">Projects</h1>
      <ProjectsClient />
    </Section>
  );
}
