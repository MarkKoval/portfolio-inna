import { Container } from '@/components/ui/Container';

export function Services() {
  const services = ['Concept Design', 'Interior Architecture', 'Construction Docs', 'Art Direction'];
  return (
    <section className="py-24">
      <Container>
        <h2 className="font-display text-5xl">Services</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => <div key={service} className="rounded-3xl border border-line p-6 text-xl">{service}</div>)}
        </div>
      </Container>
    </section>
  );
}
