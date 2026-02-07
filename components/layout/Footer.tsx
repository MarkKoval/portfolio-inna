'use client';

import { site } from '@/data/site';
import { Container } from '@/components/ui/Container';

export const Footer = () => (
  <footer className="border-t border-line py-12">
    <Container className="flex flex-wrap items-center justify-between gap-6 text-sm text-muted">
      <p>{site.email} · {site.city}</p>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="uppercase tracking-[0.15em] text-text">Back to top</button>
    </Container>
  </footer>
);
