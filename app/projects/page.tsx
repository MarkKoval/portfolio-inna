'use client';

import { useMemo, useState } from 'react';
import { projects, categories } from '@/data/projects';
import { Container } from '@/components/ui/container';
import { ProjectCard } from '@/components/ui/project-card';

const PER_PAGE = 6;

export default function ProjectsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');
  const [year, setYear] = useState<string>('All');
  const [city, setCity] = useState<string>('All');
  const [page, setPage] = useState(1);

  const years = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);
  const cities = Array.from(new Set(projects.map((p) => p.city))).sort();

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const q = query.trim().toLowerCase();
      const queryOk = !q || project.title.toLowerCase().includes(q);
      const catOk = category === 'All' || project.category.includes(category as (typeof categories)[number]);
      const yearOk = year === 'All' || String(project.year) === year;
      const cityOk = city === 'All' || project.city === city;
      return queryOk && catOk && yearOk && cityOk;
    });
  }, [query, category, year, city]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="pt-32 pb-24">
      <Container>
        <h1 className="font-display text-5xl md:text-7xl">Projects</h1>
        <div className="mt-8 grid gap-3 md:grid-cols-4">
          <input
            value={query}
            onChange={(e) => {
              setPage(1);
              setQuery(e.target.value);
            }}
            placeholder="Search project"
            className="focus-ring border border-white/20 bg-transparent px-4 py-3 text-sm"
          />
          {[{ label: 'Category', v: category, s: setCategory, list: ['All', ...categories] }, { label: 'Year', v: year, s: setYear, list: ['All', ...years.map(String)] }, { label: 'City', v: city, s: setCity, list: ['All', ...cities] }].map((f) => (
            <div key={f.label}>
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted">{f.label}</label>
              <select
                value={f.v}
                onChange={(e) => {
                  setPage(1);
                  f.s(e.target.value);
                }}
                className="focus-ring w-full border border-white/20 bg-bg px-4 py-3 text-sm"
              >
                {f.list.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="focus-ring border border-white/20 px-4 py-2 text-sm disabled:opacity-40"
          >
            Prev
          </button>
          <span className="text-sm text-muted">
            {page}/{totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="focus-ring border border-white/20 px-4 py-2 text-sm disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
}
