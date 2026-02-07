'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { categories } from '@/data/categories';

const PER_PAGE = 12;

export const ProjectsClient = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState('All');
  const [city, setCity] = useState('All');
  const [sort, setSort] = useState('Newest');
  const [page, setPage] = useState(1);

  const cities = Array.from(new Set(projects.map((p) => p.city)));

  const filtered = useMemo(() => {
    let list = projects.filter((p) =>
      (!selected.length || selected.some((cat) => p.categories.includes(cat as never))) &&
      (status === 'All' || p.status === status) &&
      (city === 'All' || p.city === city) &&
      (`${p.title} ${p.subtitle}`.toLowerCase().includes(search.toLowerCase()))
    );

    list = [...list].sort((a, b) => {
      if (sort === 'Newest') return b.year - a.year;
      if (sort === 'Oldest') return a.year - b.year;
      return b.areaM2 - a.areaM2;
    });

    return list;
  }, [city, search, selected, sort, status]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-5">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="rounded-xl border border-line bg-card px-3 py-2" />
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-xl border border-line bg-card px-3 py-2"><option>All</option><option>Concept</option><option>In Progress</option><option>Built</option></select>
        <select value={city} onChange={(e) => setCity(e.target.value)} className="rounded-xl border border-line bg-card px-3 py-2"><option>All</option>{cities.map((value) => <option key={value}>{value}</option>)}</select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-xl border border-line bg-card px-3 py-2"><option>Newest</option><option>Oldest</option><option>Area</option></select>
        <div className="flex flex-wrap gap-2">{categories.map((cat) => <button key={cat} onClick={() => {setPage(1); setSelected((prev) => prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]);}} className={`rounded-full border px-3 py-2 text-xs ${selected.includes(cat) ? 'border-accent text-accent' : 'border-line text-muted'}`}>{cat}</button>)}</div>
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {paged.map((project) => (
          <motion.div layout key={project.slug} className="rounded-3xl border border-line bg-card p-3">
            <Link href={`/projects/${project.slug}`}>
              <img src={project.cover.src} alt={project.cover.alt} className="h-60 w-full rounded-2xl object-cover" />
              <h3 className="mt-3 font-display text-2xl">{project.title}</h3>
              <p className="text-muted">{project.city} · {project.year}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex items-center gap-3">
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="rounded-full border border-line px-4 py-2">Prev</button>
        <span>{page} / {pages}</span>
        <button onClick={() => setPage((p) => Math.min(pages, p + 1))} className="rounded-full border border-line px-4 py-2">Next</button>
      </div>
    </div>
  );
};
