import { Container } from '@/components/ui/Container';
const services = ['Architecture & Masterplanning', 'Interior Strategy & Styling', 'Concept Narratives & Visual Direction', 'Material Consulting & Detail Development'];
export function Services() {
  return <section className="border-t border-white/10 py-24"><Container><p className="text-xs uppercase tracking-[0.2em] text-muted">Services</p><div className="mt-8 grid gap-6 md:grid-cols-2">{services.map((service) => <div key={service} className="rounded-lg border border-white/10 bg-panel/50 p-6 text-lg md:text-2xl">{service}</div>)}</div></Container></section>;
}
