import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';

const items = ['ArchDaily Emerging Practice 2025', 'Interior Scope Award 2024', 'Designlines Feature: Light as Structure'];

export const AwardsPress = () => (
  <Section className="bg-bg-2">
    <Heading className="mb-8">Awards & Press</Heading>
    <ul className="space-y-3 text-muted">
      {items.map((item) => <li key={item} className="rounded-2xl border border-line bg-card px-5 py-4">{item}</li>)}
    </ul>
  </Section>
);
