'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const services = [
  ['Concept Design', 'Spatial strategy, zoning, and narrative direction.'],
  ['Interior Architecture', 'Holistic interior systems from shell to joinery.'],
  ['Construction Docs', 'Coordinated drawing packages and site-ready details.'],
  ['Art Direction', 'Visual identity for spaces, showrooms, and campaigns.']
];

export const Services = () => {
  const [active, setActive] = useState(0);
  return (
    <Section>
      <Container>
        <h2 className='font-display text-5xl'>Services</h2>
        <div className='mt-8 space-y-3'>
          {services.map(([title, text], i) => (
            <button key={title} onClick={() => setActive(i)} className='block w-full rounded-2xl border border-line bg-card p-5 text-left'>
              <div className='flex items-center justify-between'><span>{title}</span><span>{active === i ? '−' : '+'}</span></div>
              {active === i && <p className='mt-3 text-[var(--muted)]'>{text}</p>}
            </button>
          ))}
        </div>
      </Container>
    </Section>
  );
};
