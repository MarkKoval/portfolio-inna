import { Container } from '@/components/ui/Container';

export function AwardsPress() {
  return (
    <section className="py-24">
      <Container>
        <h2 className="font-display text-5xl">Awards & Press</h2>
        <ul className="mt-8 space-y-3 text-[--muted]">
          <li>2025 — Nordic Interior Review / Studio of the Year shortlist</li>
          <li>2024 — Detail Magazine / Adaptive Reuse Feature</li>
          <li>2023 — Frame Awards / Residential Finalist</li>
        </ul>
      </Container>
    </section>
  );
}
