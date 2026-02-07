import { Container } from "@/components/ui/container";

export const AboutApproachSection = () => (
  <section className="border-y border-white/10 py-24">
    <Container className="grid gap-8 md:grid-cols-2">
      <h2 className="font-heading text-4xl md:text-6xl">Approach grounded in site intelligence.</h2>
      <div className="space-y-5 text-white/75">
        <p>Our studio works at the intersection of architecture, interior design, and urban systems. We blend analytical rigor with cinematic storytelling to create spaces that feel both timeless and adaptive.</p>
        <p>Every project follows a three-step framework: decode context, prototype atmosphere, and detail for long-term resilience.</p>
      </div>
    </Container>
  </section>
);
