'use client';

import { site } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-6 px-6 lg:px-10">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="text-sm text-[--muted]">{site.email} · {site.city}</p>
        </div>
        <button className="text-sm uppercase tracking-[0.2em]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top</button>
      </div>
    </footer>
  );
}
