import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const Services = () => (
  <Section>
    <Container>
      <h2 className="font-display text-5xl">Services</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {['Concept Design', 'Interior Architecture', 'Construction Docs', 'Art Direction'].map((service) => (
          <div key={service} className="rounded-3xl border border-line bg-card p-6"><h3 className="text-xl">{service}</h3></div>
        ))}
      </div>
    </Container>
  </Section>
);
