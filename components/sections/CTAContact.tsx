import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const CTAContact = () => (
  <Section>
    <Container className="rounded-3xl border border-line bg-card p-10 text-center">
      <h2 className="font-display text-5xl">Let&apos;s shape your next space.</h2>
      <p className="mx-auto mt-4 max-w-xl text-muted">From concept to construction documentation, we can support your project at every stage.</p>
      <div className="mt-6"><Button href="/contact">Start a conversation</Button></div>
    </Container>
  </Section>
);
