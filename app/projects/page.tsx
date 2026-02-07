'use client';

import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';
import { categories, statuses } from '@/data/categories';
import Link from 'next/link';
import { motion } from 'framer-motion';

const perPage = 12;

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [status, setStatus] = useState('');
  const [sort, setSort] = useState('Newest');
  const [page, setPage] = useState(1);
  const years = projects.map((p) => p.year);
  const [minYear, setMinYear] = useState(Math.min(...years));
  const [maxYear, setMaxYear] = useState(Math.max(...years));
  const cities = [...new Set(projects.map((p) => p.city))];
  const [city, setCity] = useState('');

  const filtered = useMemo(() => {
    let result = projects.filter((p) => {
      const bySearch = `${p.title} ${p.subtitle}`.toLowerCase().includes(search.toLowerCase());
      const byCategory = selectedCategories.length === 0 || selectedCategories.some((cat) => p.categories.includes(cat as never));
      const byStatus = !status || p.status === status;
      const byYear = p.year >= minYear && p.year <= maxYear;
      const byCity = !city || p.city === city;
      return bySearch && byCategory && byStatus && byYear && byCity;
    });

    if (sort === 'Newest') result = [...result].sort((a, b) => b.year - a.year);
    if (sort === 'Oldest') result = [...result].sort((a, b) => a.year - b.year);
    if (sort === 'Area') result = [...result].sort((a, b) => b.areaM2 - a.areaM2);
    return result;
  }, [city, maxYear, minYear, search, selectedCategories, sort, status]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const data = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="mx-auto max-w-content px-6 py-16 lg:px-10">
      <h1 className="font-display text-6xl">Projects</h1>
      <div className="mt-8 grid gap-4 rounded-3xl border border-line p-5 md:grid-cols-3">
        <input className="rounded-xl border border-line bg-transparent p-2" placeholder="Search projects" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className="rounded-xl border border-line bg-bg p-2" value={status} onChange={(e) => setStatus(e.target.value)}><option value="">All status</option>{statuses.map((item)=><option key={item}>{item}</option>)}</select>
        <select className="rounded-xl border border-line bg-bg p-2" value={city} onChange={(e) => setCity(e.target.value)}><option value="">All cities</option>{cities.map((item)=><option key={item}>{item}</option>)}</select>
        <select className="rounded-xl border border-line bg-bg p-2" value={sort} onChange={(e) => setSort(e.target.value)}>{['Newest', 'Oldest', 'Area'].map((item)=><option key={item}>{item}</option>)}</select>
        <input type="number" className="rounded-xl border border-line bg-transparent p-2" value={minYear} onChange={(e) => setMinYear(Number(e.target.value))} />
        <input type="number" className="rounded-xl border border-line bg-transparent p-2" value={maxYear} onChange={(e) => setMaxYear(Number(e.target.value))} />
        <div className="md:col-span-3 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button key={cat} className={`rounded-full border px-3 py-1 ${selectedCategories.includes(cat) ? 'border-accent' : 'border-line'}`} onClick={() => setSelectedCategories((prev) => prev.includes(cat) ? prev.filter((p) => p !== cat) : [...prev, cat])}>{cat}</button>
          ))}
        </div>
      </div>
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => (
          <motion.div layout key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="block rounded-3xl border border-line bg-card p-4">
              <img src={project.cover.src} alt={project.cover.alt} className="h-56 w-full rounded-2xl object-cover" />
              <p className="mt-3 font-display text-2xl">{project.title}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-10 flex items-center gap-4">
        <button className="rounded-full border border-line px-4 py-2 disabled:opacity-50" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Prev</button>
        <span>{page} / {totalPages}</span>
        <button className="rounded-full border border-line px-4 py-2 disabled:opacity-50" disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}
