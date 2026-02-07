'use client';

import { useMemo, useState } from 'react';
import { categories, projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/ui/ProjectCard';

const PER_PAGE = 6;

export default function ProjectsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [year, setYear] = useState('All');
  const [city, setCity] = useState('All');
  const [page, setPage] = useState(1);

  const years = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);
  const cities = Array.from(new Set(projects.map((p) => p.city))).sort();

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const byQuery = p.title.toLowerCase().includes(query.toLowerCase());
      const byCategory = category === 'All' || p.category.includes(category as never);
      const byYear = year === 'All' || p.year === Number(year);
      const byCity = city === 'All' || p.city === city;
      return byQuery && byCategory && byYear && byCity;
    });
  }, [query, category, year, city]);

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  return (
    <Container className="pt-32 pb-20">
      <h1 className="section-title">Projects archive</h1>
      <div className="mt-8 grid gap-4 rounded-xl border border-line bg-panel p-4 md:grid-cols-5">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search project"
          className="focus-ring col-span-2 border border-line bg-bg px-3 py-2 text-sm"
        />
        <select className="focus-ring border border-line bg-bg px-3 py-2 text-sm" value={category} onChange={(e) => { setCategory(e.target.value); setPage(1); }}>
          <option>All</option>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="focus-ring border border-line bg-bg px-3 py-2 text-sm" value={year} onChange={(e) => { setYear(e.target.value); setPage(1); }}>
          <option>All</option>
          {years.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="focus-ring border border-line bg-bg px-3 py-2 text-sm" value={city} onChange={(e) => { setCity(e.target.value); setPage(1); }}>
          <option>All</option>
          {cities.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {paginated.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
      <div className="mt-10 flex items-center gap-3">
        <button className="focus-ring border border-line px-3 py-1 text-sm disabled:opacity-40" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Prev</button>
        <p className="text-sm text-muted">{page} / {pages}</p>
        <button className="focus-ring border border-line px-3 py-1 text-sm disabled:opacity-40" disabled={page >= pages} onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </Container>
  );
}
