import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/motion/Reveal';

export const Approach = () => (
  <Section className="bg-bg2">
    <Container>
      <h2 className="font-display text-5xl">Approach</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {['Clarity', 'Craft', 'Responsibility'].map((item) => (
          <Reveal key={item}><div className="rounded-3xl border border-line bg-card p-6"><h3 className="font-display text-3xl">{item}</h3><p className="mt-3 text-muted">We design durable experiences with measured detail and a context-first process.</p></div></Reveal>
        ))}
      </div>
    </Container>
  </Section>
);
