'use client';

import { useState } from 'react';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';

const services = ['Concept Design', 'Interior Architecture', 'Construction Docs', 'Art Direction'];

export const Services = () => {
  const [active, setActive] = useState(0);
  return (
    <Section>
      <Heading className="mb-8">Services</Heading>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service, idx) => (
          <button key={service} onClick={() => setActive(idx)} className={`rounded-2xl border p-6 text-left transition ${active === idx ? 'border-accent bg-accent/10' : 'border-line bg-card'}`}>
            <p className="font-display text-3xl">{service}</p>
            {active === idx && <p className="mt-3 text-sm text-muted">End-to-end delivery from early concept to execution-level coordination.</p>}
          </button>
        ))}
      </div>
    </Section>
  );
};
