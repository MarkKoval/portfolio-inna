'use client';

import { siteConfig } from '@/data/site';
import { Container } from '@/components/ui/Container';

export const Footer = () => (
  <footer className="border-t border-line py-10">
    <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="font-display text-2xl">{siteConfig.name}</p>
        <p className="text-sm text-muted">{siteConfig.email} · {siteConfig.city}</p>
      </div>
      <div className="flex items-center gap-4">
        {siteConfig.socials.map((social) => <a key={social.label} href={social.href} className="text-xs uppercase tracking-[0.1em] text-muted hover:text-text">{social.label}</a>)}
      </div>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs uppercase tracking-[0.1em] text-muted hover:text-text">Back to top</button>
    </Container>
  </footer>
);
