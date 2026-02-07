'use client';

import { site } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { Link } from '@/components/ui/Link';

export const Footer = () => (
  <footer className='border-t border-line py-14'>
    <Container className='flex flex-col justify-between gap-8 md:flex-row'>
      <div>
        <p className='font-display text-2xl'>Let&apos;s shape spaces with intent.</p>
        <p className='mt-3 text-sm text-[var(--muted)]'>{site.email} · {site.city}</p>
      </div>
      <div className='space-y-2 text-sm'>
        {site.socials.map((social) => (
          <div key={social.label}><Link href={social.href}>{social.label}</Link></div>
        ))}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='mt-3 text-xs uppercase tracking-[0.14em] text-accent'>Back to top</button>
      </div>
    </Container>
  </footer>
);
