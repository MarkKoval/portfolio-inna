import Link from 'next/link';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Tag } from '@/components/ui/Tag';

export const SelectedProjects = () => (
  <Section>
    <Container>
      <Heading className='mb-10'>Selected Projects</Heading>
      <div className='grid gap-6 md:grid-cols-2'>
        {projects.slice(0, 6).map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className='group rounded-[24px] border border-line bg-card p-4 transition hover:border-accent'>
            <div className='relative h-64 overflow-hidden rounded-2xl'><div className='h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-105' style={{ backgroundImage: `url(${project.cover.src})` }} /></div>
            <div className='mt-4 flex items-start justify-between'>
              <div><p className='font-display text-2xl'>{project.title}</p><p className='text-sm text-[var(--muted)]'>{project.city} · {project.year}</p></div>
              <span className='transition group-hover:translate-x-1'>→</span>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>{project.categories.map((cat) => <Tag key={cat}>{cat}</Tag>)}</div>
          </Link>
        ))}
      </div>
    </Container>
  </Section>
);
