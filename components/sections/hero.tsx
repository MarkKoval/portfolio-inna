import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const slides = ["/demo/project-01.svg", "/demo/project-05.svg", "/demo/project-09.svg", "/demo/project-12.svg"];

export const HeroSection = () => (
  <section className="relative flex min-h-screen items-end pb-16 pt-28">
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="grid h-full grid-cols-2 md:grid-cols-4">
        {slides.map((src, index) => (
          <div key={src} className="h-full bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg, rgba(16,17,20,0.05), rgba(16,17,20,0.75)), url(${src})`, animationDelay: `${index * 0.2}s` }} />
        ))}
      </div>
    </div>
    <Container className="space-y-8">
      <p className="text-xs uppercase tracking-[0.24em] text-copper">Architecture / Interiors / Urban Futures</p>
      <h1 className="max-w-4xl font-heading text-5xl leading-[1.02] md:text-8xl">Crafting spatial narratives with motion, light, and material clarity.</h1>
      <ButtonLink href="/projects">View selected projects</ButtonLink>
    </Container>
  </section>
);
