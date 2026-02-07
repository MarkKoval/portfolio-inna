import { Container } from '@/components/ui/Container';

export function AboutApproach() {
  return (
    <section className="border-y border-line py-24">
      <Container className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">About</p>
          <h2 className="section-title mt-5">Designing architecture as a sequence of lived moments.</h2>
        </div>
        <p className="text-lg leading-relaxed text-muted">
          We are a multidisciplinary architectural studio focused on residential, commercial, and urban environments.
          Our process blends rigorous site analysis with strong spatial storytelling, creating projects that feel grounded,
          timeless, and humane.
        </p>
      </Container>
    </section>
  );
}
