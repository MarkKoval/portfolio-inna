'use client';

import { useMemo, useState } from 'react';
import { projectCategories, projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Container } from '@/components/ui/Container';

const PAGE_SIZE = 6;

export default function ProjectsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [year, setYear] = useState('All');
  const [city, setCity] = useState('All');
  const [page, setPage] = useState(1);

  const years = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);
  const cities = Array.from(new Set(projects.map((p) => p.city))).sort();

  const filtered = useMemo(() => projects.filter((p) => {
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === 'All' || p.category.includes(category);
    const matchesYear = year === 'All' || String(p.year) === year;
    const matchesCity = city === 'All' || p.city === city;
    return matchesQuery && matchesCategory && matchesYear && matchesCity;
  }), [query, category, year, city]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return <Container className="pt-32 pb-20"><h1 className="font-display text-5xl md:text-7xl">Projects</h1><div className="mt-10 grid gap-4 rounded-lg border border-white/10 bg-panel/40 p-4 md:grid-cols-4"><input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="Search by title" className="focus-ring rounded border border-white/20 bg-black/30 px-3 py-2" /><select className="focus-ring rounded border border-white/20 bg-black/30 px-3 py-2" value={category} onChange={(e) => { setCategory(e.target.value); setPage(1); }}><option>All</option>{projectCategories.map((item) => <option key={item}>{item}</option>)}</select><select className="focus-ring rounded border border-white/20 bg-black/30 px-3 py-2" value={year} onChange={(e) => { setYear(e.target.value); setPage(1); }}><option>All</option>{years.map((item) => <option key={item}>{item}</option>)}</select><select className="focus-ring rounded border border-white/20 bg-black/30 px-3 py-2" value={city} onChange={(e) => { setCity(e.target.value); setPage(1); }}><option>All</option>{cities.map((item) => <option key={item}>{item}</option>)}</select></div><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{pageItems.map((project) => <ProjectCard key={project.slug} project={project} />)}</div><div className="mt-8 flex items-center justify-center gap-3"><button className="focus-ring rounded border border-white/20 px-4 py-2 disabled:opacity-40" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Prev</button><span className="text-sm text-muted">{page} / {totalPages}</span><button className="focus-ring rounded border border-white/20 px-4 py-2 disabled:opacity-40" disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>Next</button></div></Container>;
}
