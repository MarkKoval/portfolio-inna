import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function CTAContact() {
  return (
    <section className="py-24">
      <Container className="rounded-[28px] border border-accent/50 bg-card p-10 text-center">
        <h2 className="font-display text-5xl">Planning a new space?</h2>
        <p className="mt-4 text-[--muted]">Let’s align architecture, interiors, and urban context into one coherent story.</p>
        <div className="mt-8"><Button href="/contact">Start a project</Button></div>
      </Container>
    </section>
  );
}
