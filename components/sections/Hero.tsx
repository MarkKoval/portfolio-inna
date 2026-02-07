import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { Parallax } from '@/components/motion/Parallax';

export const Hero = () => (
  <section className="relative min-h-[100svh] overflow-hidden">
    <Parallax>
      <div className="absolute inset-0">
        <img src="/demo/hero/hero.svg" alt="Architectural abstract" className="h-full w-full object-cover" />
      </div>
    </Parallax>
    <div className="hero-grain absolute inset-0" />
    <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-20">
      <h1 className="max-w-5xl font-display text-[clamp(3rem,7vw,5rem)] leading-[1.05] tracking-[-0.02em]">{siteConfig.tagline}</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">Atelier Nord designs residential, commercial, and urban spaces with disciplined detail and calm spatial rhythm.</p>
      <div className="mt-8 flex gap-4">
        <Button href="/projects">View Projects</Button>
        <Button href="/contact" variant="secondary">Contact</Button>
      </div>
    </Container>
  </section>
);
