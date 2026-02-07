'use client';

import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const projects = [
  { title: 'Neon Commerce', category: 'web', text: 'Headless commerce with 3D product previews.' },
  { title: 'Pulse Finance', category: 'branding', text: 'Brand system + accessible dashboard UX.' },
  { title: 'Astra Studio', category: 'web', text: 'Scroll storytelling for a SaaS launch.' },
  { title: 'Nova XR', category: 'branding', text: 'Product films and immersive design language.' }
] as const;

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'branding'>('all');
  const filtered = useMemo(() => projects.filter((item) => filter === 'all' || item.category === filter), [filter]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24" id="projects">
      <div className="mb-8 flex flex-wrap gap-3">
        {(['all', 'web', 'branding'] as const).map((item) => (
          <Button key={item} variant={filter === item ? 'primary' : 'secondary'} onClick={() => setFilter(item)}>
            {item}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <Card key={project.title} className="group">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-tertiary">{project.category}</p>
            <h3 className="mt-2 text-2xl">{project.title}</h3>
            <p className="mt-3 text-foreground-secondary">{project.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
