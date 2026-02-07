import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const AwardsPress = () => (
  <Section>
    <Container>
      <h2 className='font-display text-5xl'>Awards & Press</h2>
      <ul className='mt-6 space-y-4 text-[var(--muted)]'>
        <li>2025 — European Interior Platform / Emerging Studio Shortlist</li>
        <li>2024 — Spatial Review / Feature: “Quiet Luxury in Small Footprints”</li>
        <li>2023 — Baltic Design Index / Best Hospitality Interior Mention</li>
      </ul>
    </Container>
  </Section>
);
