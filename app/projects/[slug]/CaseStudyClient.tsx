'use client';

import { useState } from 'react';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type { Project } from '@/data/projects';

export const CaseStudyClient = ({ project, nextSlug, prevSlug }: { project: Project; nextSlug: string; prevSlug: string }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="space-y-14">
      <section className="relative h-[74vh] overflow-hidden rounded-b-[28px] border-b border-line">
        <img src={project.hero.src} alt={project.hero.alt || project.title} className="h-full w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 p-8"><h1 className="font-display text-5xl">{project.title}</h1></div>
      </section>
      <section className="mx-auto grid max-w-content gap-4 px-6 text-sm text-muted md:grid-cols-5">
        <p>Year: {project.year}</p><p>Location: {project.city}, {project.country}</p><p>Area: {project.areaM2} m²</p><p>Role: {project.role}</p><p>Status: {project.status}</p>
      </section>
      <section className="mx-auto max-w-content px-6"><p className="max-w-3xl text-lg text-muted">{project.overview}</p></section>
      <section className="mx-auto grid max-w-content gap-6 px-6 md:grid-cols-3">
        <article><h2 className="font-display text-3xl">Challenge</h2><p className="mt-3 text-muted">{project.challenge}</p></article>
        <article><h2 className="font-display text-3xl">Solution</h2><p className="mt-3 text-muted">{project.solution}</p></article>
        <article><h2 className="font-display text-3xl">Outcome</h2><p className="mt-3 text-muted">{project.outcome}</p></article>
      </section>
      <section className="mx-auto grid max-w-content gap-4 px-6 md:grid-cols-2">
        {project.gallery.map((image, i) => (
          <button key={image.src + i} onClick={() => { setIndex(i); setOpen(true); }} className="overflow-hidden rounded-2xl border border-line text-left">
            <img src={image.src} alt={image.alt} className="h-72 w-full object-cover" />
            <p className="p-3 text-xs uppercase tracking-[0.08em] text-muted">{image.alt}</p>
          </button>
        ))}
      </section>
      <section className="mx-auto max-w-content px-6"><h2 className="font-display text-3xl">Process</h2><div className="mt-5 grid gap-4 md:grid-cols-4">{project.processSteps.map((s) => <article key={s.title} className="rounded-2xl border border-line bg-card p-4"><h3 className="font-display text-2xl">{s.title}</h3><p className="mt-2 text-sm text-muted">{s.text}</p></article>)}</div></section>
      <section className="mx-auto flex max-w-content items-center justify-between px-6 pb-16"><Link href={`/projects/${prevSlug}`} className="text-sm uppercase tracking-[0.1em] text-muted">← Previous</Link><Link href={`/projects/${nextSlug}`} className="text-sm uppercase tracking-[0.1em] text-muted">Next →</Link></section>
      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={project.gallery.map((img) => ({ src: img.src, alt: img.alt }))} />
    </div>
  );
};
