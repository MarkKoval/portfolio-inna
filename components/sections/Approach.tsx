import { Reveal } from '@/components/motion/Reveal';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';

const principles = ['Clarity', 'Craft', 'Responsibility'];

export const Approach = () => (
  <Section className="bg-bg-2">
    <Heading className="mb-8">Approach</Heading>
    <div className="grid gap-4 md:grid-cols-3">
      {principles.map((item, idx) => (
        <Reveal key={item} delay={idx * 0.1}>
          <article className="rounded-[24px] border border-line bg-card p-6">
            <p className="text-xs uppercase tracking-[0.1em] text-muted">0{idx + 1}</p>
            <h3 className="mt-4 font-display text-3xl">{item}</h3>
            <p className="mt-3 text-muted">We tune proportion, materiality, and environmental impact to create spaces that age gracefully.</p>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);
