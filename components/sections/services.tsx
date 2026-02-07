import { Container } from "@/components/ui/container";

const services = [
  ["Architecture", "From concept narratives to permit-ready technical packages."],
  ["Interior Design", "Material-first interiors with custom furniture and lighting strategy."],
  ["Urban Advisory", "Block-scale planning, mobility logic, and climate adaptation."],
  ["Visualization", "Storyboard films, diagrams, and immersive presentations."]
];

export const ServicesSection = () => (
  <section className="py-24">
    <Container>
      <h2 className="mb-8 font-heading text-4xl md:text-6xl">Services</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map(([title, desc]) => (
          <article key={title} className="rounded-2xl border border-white/15 p-6">
            <h3 className="text-xl">{title}</h3>
            <p className="mt-3 text-white/70">{desc}</p>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
