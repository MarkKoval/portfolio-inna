import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Parallax } from '@/components/motion/Parallax';

export const Hero = () => (
  <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
    <Parallax>
      <img src="/demo/hero/hero.svg" alt="hero" className="absolute inset-0 h-full w-full object-cover opacity-70" />
    </Parallax>
    <div className="hero-grain absolute inset-0" />
    <Container className="relative z-10">
      <h1 className="max-w-4xl font-display text-[clamp(3rem,7vw,5rem)] leading-[1.05] tracking-[-0.02em]">Architecture for Calm, Light, and Precision.</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">Atelier Nord creates contemporary spaces where material honesty meets atmospheric clarity.</p>
      <div className="mt-8 flex gap-4">
        <Button href="/projects">View Projects</Button>
        <Button href="/contact" variant="secondary">Contact</Button>
      </div>
    </Container>
  </section>
);
