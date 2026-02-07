import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { baseMetadata } from '@/lib/seo';

export const metadata: Metadata = baseMetadata('About — Atelier Nord', 'Studio philosophy, timeline, and process for Atelier Nord.');

const timeline = [
  ['2016', 'Studio founded as an interior and visualization practice.'],
  ['2018', 'First residential commissions completed in Kyiv and Lviv.'],
  ['2020', 'Expanded to commercial and hospitality architecture.'],
  ['2022', 'Built a dedicated material lab and mockup workflow.'],
  ['2024', 'Cross-border projects launched in Central Europe.'],
  ['2026', 'Urban micro-space program initiated.']
];

export default function AboutPage() {
  return (
    <Container className='py-20'>
      <Section className='pt-0'>
        <div className='grid gap-8 md:grid-cols-2'>
          <div className='h-[520px] rounded-3xl border border-line bg-[url(/demo/misc/portrait.svg)] bg-cover bg-center' />
          <div>
            <h1 className='font-display text-6xl'>About Atelier Nord</h1>
            <p className='mt-6 text-[var(--muted)]'>Atelier Nord is an architecture studio designing spaces for calm concentration and civic usefulness. Our work spans contemporary homes, adaptive interiors, and small-scale urban interventions.</p>
            <div className='mt-8'><Button href='/contact'>Discuss a project</Button></div>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className='font-display text-4xl'>Timeline</h2>
        <div className='mt-6 space-y-3'>
          {timeline.map(([year, text]) => <div key={year} className='rounded-2xl border border-line bg-card p-4'><p className='text-accent'>{year}</p><p className='text-[var(--muted)]'>{text}</p></div>)}
        </div>
      </Section>
      <Section>
        <h2 className='font-display text-4xl'>Tools</h2>
        <p className='mt-3 text-[var(--muted)]'>Revit · Rhino · SketchUp · AutoCAD · Enscape · Adobe CC</p>
      </Section>
    </Container>
  );
}
