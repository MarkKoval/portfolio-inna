'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { categories } from '@/data/categories';
import { Container } from '@/components/ui/Container';

const PAGE_SIZE = 12;

export const ProjectsListing = () => {
  const [query, setQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [status, setStatus] = useState('All');
  const [city, setCity] = useState('All');
  const [sort, setSort] = useState('Newest');
  const [page, setPage] = useState(1);
  const [minYear, setMinYear] = useState(2020);
  const [maxYear, setMaxYear] = useState(2026);

  const cities = useMemo(() => ['All', ...new Set(projects.map((project) => project.city))], []);
  const result = useMemo(() => {
    const filtered = projects.filter((project) => {
      const categoryHit = selectedCategories.length === 0 || selectedCategories.every((item) => project.categories.includes(item as never));
      const statusHit = status === 'All' || project.status === status;
      const cityHit = city === 'All' || project.city === city;
      const yearHit = project.year >= minYear && project.year <= maxYear;
      const textHit = [project.title, project.subtitle, project.city].join(' ').toLowerCase().includes(query.toLowerCase());
      return categoryHit && statusHit && cityHit && yearHit && textHit;
    });

    return filtered.sort((a, b) => {
      if (sort === 'Newest') return b.year - a.year;
      if (sort === 'Oldest') return a.year - b.year;
      return b.areaM2 - a.areaM2;
    });
  }, [city, maxYear, minYear, query, selectedCategories, sort, status]);

  const totalPages = Math.max(1, Math.ceil(result.length / PAGE_SIZE));
  const paged = result.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <Container className='py-20'>
      <h1 className='font-display text-6xl'>Projects</h1>
      <div className='mt-8 grid gap-3 md:grid-cols-3'>
        <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder='Search projects' className='rounded-xl border border-line bg-card px-4 py-2' />
        <select value={status} onChange={(event) => setStatus(event.target.value)} className='rounded-xl border border-line bg-card px-4 py-2'>{['All', 'Concept', 'In Progress', 'Built'].map((item) => <option key={item}>{item}</option>)}</select>
        <select value={city} onChange={(event) => setCity(event.target.value)} className='rounded-xl border border-line bg-card px-4 py-2'>{cities.map((item) => <option key={item}>{item}</option>)}</select>
      </div>
      <div className='mt-3 grid gap-3 md:grid-cols-3'>
        <select value={sort} onChange={(event) => setSort(event.target.value)} className='rounded-xl border border-line bg-card px-4 py-2'>{['Newest', 'Oldest', 'Area'].map((item) => <option key={item}>{item}</option>)}</select>
        <input type='number' value={minYear} onChange={(event) => setMinYear(Number(event.target.value))} className='rounded-xl border border-line bg-card px-4 py-2' />
        <input type='number' value={maxYear} onChange={(event) => setMaxYear(Number(event.target.value))} className='rounded-xl border border-line bg-card px-4 py-2' />
      </div>
      <div className='mt-3 flex flex-wrap gap-2'>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategories((prev) => prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category])} className={`rounded-full border px-3 py-1 text-xs ${selectedCategories.includes(category) ? 'border-accent text-accent' : 'border-line text-[var(--muted)]'}`}>
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode='popLayout'>
        <motion.div layout className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {paged.map((project) => (
            <motion.div layout key={project.slug} className='rounded-2xl border border-line bg-card p-3'>
              <Link href={`/projects/${project.slug}`}>
                <div className='h-56 rounded-xl bg-cover bg-center' style={{ backgroundImage: `url(${project.cover.src})` }} />
                <p className='mt-4 font-display text-2xl'>{project.title}</p>
                <p className='text-sm text-[var(--muted)]'>{project.city} · {project.year}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className='mt-8 flex items-center gap-4'>
        <button disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className='rounded-full border border-line px-4 py-2 disabled:opacity-40'>Prev</button>
        <span>Page {page} / {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className='rounded-full border border-line px-4 py-2 disabled:opacity-40'>Next</button>
      </div>
    </Container>
  );
};
