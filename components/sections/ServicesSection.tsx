import { Container } from '@/components/ui/Container';

const services = ['Architectural Design', 'Interior Architecture', 'Urban Strategy', 'Construction Documentation'];

export function ServicesSection() {
  return (
    <section className="py-24">
      <Container>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Services</p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="rounded-xl border border-line bg-panel p-7">
              <p className="font-serif text-3xl">{service}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
