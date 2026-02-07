import { createMetadata } from '@/lib/seo';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const metadata = createMetadata('About — Atelier Nord', 'Biography, values, and timeline of Atelier Nord.');

const timeline = [
  '2016 — Atelier Nord founded as residential-focused studio.',
  '2018 — First adaptive reuse commission delivered.',
  '2020 — Expanded to interior architecture projects in CEE.',
  '2022 — Opened material research library.',
  '2024 — Began urban micro-infrastructure collaborations.',
  '2026 — 40+ projects across residential and commercial typologies.'
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div className="rounded-[24px] border border-line bg-card p-8">
            <div className="h-80 rounded-2xl bg-gradient-to-br from-accent/30 to-transparent" />
          </div>
          <div>
            <h1 className="font-display text-6xl">About Atelier Nord</h1>
            <p className="mt-5 text-lg text-muted">We create architecture that balances emotional calm with technical precision, from private homes to civic-scale interventions.</p>
          </div>
        </div>
      </Section>
      <Section className="bg-bg-2">
        <h2 className="font-display text-4xl">Timeline</h2>
        <ul className="mt-6 space-y-3 text-muted">{timeline.map((item) => <li key={item} className="rounded-2xl border border-line bg-card p-4">{item}</li>)}</ul>
      </Section>
      <Section>
        <h2 className="font-display text-4xl">Tools</h2>
        <p className="mt-4 text-muted">Revit, Rhino, SketchUp, Enscape, Adobe CC, AutoCAD, Grasshopper.</p>
        <div className="mt-8"><Button href="/contact">Contact us</Button></div>
      </Section>
    </>
  );
}
