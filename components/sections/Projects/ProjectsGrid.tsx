'use client';
import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const projects = [
  { title: 'E-commerce Rebuild', tag: 'Web' },
  { title: 'SaaS Dashboard', tag: 'Product' },
  { title: '3D Campaign', tag: 'Creative' },
  { title: 'Mobile Landing', tag: 'Web' }
];

export function ProjectsGrid() {
  const [filter, setFilter] = useState('All');
  const data = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.tag === filter)), [filter]);
  return (
    <section className="container-p py-24" id="projects" aria-label="Projects">
      <div className="mb-8 flex flex-wrap gap-3">
        {['All', 'Web', 'Product', 'Creative'].map((item) => (
          <Button key={item} variant={filter === item ? 'primary' : 'secondary'} size="sm" onClick={() => setFilter(item)}>{item}</Button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {data.map((p, index) => (
          <Card key={p.title} className={index % 3 === 0 ? 'md:col-span-2' : ''}>
            <p className="text-sm text-accent-secondary">{p.tag}</p>
            <h3 className="mt-2 text-2xl">{p.title}</h3>
            <p className="mt-2 text-foreground-secondary">Bento card with smooth hover, viewport-ready for lazy media preview.</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
