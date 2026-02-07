import { Container } from '@/components/ui/container';

const services = ['Architecture', 'Interior Design', 'Urban Strategy', 'Creative Direction'];

export function AboutApproach() {
  return (
    <section className="border-y border-white/10 py-24">
      <Container className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Approach</p>
          <h3 className="mt-3 font-display text-5xl leading-tight">We design clear forms with emotional depth.</h3>
          <p className="mt-5 max-w-lg text-muted">Every project begins with site immersion, user mapping, and a material prototype sprint. The result is architecture that performs and endures.</p>
        </div>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service} className="border-b border-white/10 py-4 text-2xl text-text/90">{service}</div>
          ))}
        </div>
      </Container>
    </section>
  );
}
