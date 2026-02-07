import { Container } from '@/components/ui/Container';
import { ProjectsClient } from './ProjectsClient';

export default function ProjectsPage() {
  return (
    <Container className="pt-32 pb-20">
      <h1 className="font-display text-6xl">Projects</h1>
      <div className="mt-8">
        <ProjectsClient />
      </div>
    </Container>
  );
}
