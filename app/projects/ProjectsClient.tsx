'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { categories } from '@/data/categories';
import { Input } from '@/components/ui/Input';
import { formatNumber } from '@/lib/utils';

const perPage = 12;

export const ProjectsClient = () => {
  const [q, setQ] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [status, setStatus] = useState('');
  const [city, setCity] = useState('');
  const [sort, setSort] = useState('newest');
  const [yearMin, setYearMin] = useState(2019);
  const [yearMax, setYearMax] = useState(2026);
  const [page, setPage] = useState(1);

  const cities = [...new Set(projects.map((p) => p.city))];

  const filtered = useMemo(() => {
    let list = projects.filter((p) =>
      p.title.toLowerCase().includes(q.toLowerCase()) &&
      p.year >= yearMin &&
      p.year <= yearMax &&
      (!status || p.status === status) &&
      (!city || p.city === city) &&
      (selectedCategories.length === 0 || selectedCategories.every((cat) => p.categories.includes(cat as never)))
    );
    list = [...list].sort((a, b) =>
      sort === 'newest' ? b.year - a.year : sort === 'oldest' ? a.year - b.year : b.areaM2 - a.areaM2
    );
    return list;
  }, [q, status, city, selectedCategories, sort, yearMin, yearMax]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-8">
      <div className="grid gap-3 rounded-2xl border border-line bg-card p-5 md:grid-cols-6">
        <Input placeholder="Search" value={q} onChange={(e) => { setPage(1); setQ(e.target.value); }} />
        <select className="rounded-2xl border border-line bg-bg-2 px-3" value={status} onChange={(e) => setStatus(e.target.value)}><option value="">All status</option><option>Concept</option><option>In Progress</option><option>Built</option></select>
        <select className="rounded-2xl border border-line bg-bg-2 px-3" value={city} onChange={(e) => setCity(e.target.value)}><option value="">All cities</option>{cities.map((c) => <option key={c}>{c}</option>)}</select>
        <select className="rounded-2xl border border-line bg-bg-2 px-3" value={sort} onChange={(e) => setSort(e.target.value)}><option value="newest">Newest</option><option value="oldest">Oldest</option><option value="area">Area</option></select>
        <Input type="number" value={yearMin} onChange={(e) => setYearMin(Number(e.target.value))} />
        <Input type="number" value={yearMax} onChange={(e) => setYearMax(Number(e.target.value))} />
      </div>
      <div className="flex flex-wrap gap-2">{categories.map((cat) => <button key={cat} onClick={() => setSelectedCategories((prev) => prev.includes(cat) ? prev.filter((i) => i !== cat) : [...prev, cat])} className={`rounded-full border px-3 py-1 text-xs ${selectedCategories.includes(cat) ? 'border-accent text-accent' : 'border-line text-muted'}`}>{cat}</button>)}</div>
      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {paged.map((project) => (
          <motion.div layout key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="block overflow-hidden rounded-2xl border border-line bg-card">
              <img src={project.cover.src} alt={project.cover.alt} className="h-64 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-display text-2xl">{project.title}</h3>
                <p className="text-sm text-muted">{project.year} · {project.city} · {formatNumber(project.areaM2)} m²</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex items-center justify-center gap-4">
        <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="rounded-full border border-line px-4 py-2 disabled:opacity-40">Prev</button>
        <p className="text-sm text-muted">{page} / {totalPages}</p>
        <button disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)} className="rounded-full border border-line px-4 py-2 disabled:opacity-40">Next</button>
      </div>
    </div>
  );
};
