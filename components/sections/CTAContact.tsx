import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const CTAContact = () => (
  <Section>
    <div className="rounded-[28px] border border-line bg-card p-10 text-center">
      <p className="text-xs uppercase tracking-[0.1em] text-muted">New commissions</p>
      <h2 className="mx-auto mt-3 max-w-3xl font-display text-5xl leading-[1.1]">Let’s shape spaces that feel inevitable.</h2>
      <div className="mt-8">
        <Button href="/contact">Start a conversation</Button>
      </div>
    </div>
  </Section>
);
