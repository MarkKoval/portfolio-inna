import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Parallax } from '@/components/motion/Parallax';

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Parallax>
        <img src="/demo/hero/hero.svg" alt="Hero" className="absolute inset-0 h-full w-full object-cover" />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-bg" />
      <div className="hero-grain absolute inset-0" />
      <Container className="relative z-10 flex min-h-screen flex-col justify-end pb-24">
        <h1 className="max-w-4xl font-display text-[clamp(3.5rem,8vw,5rem)] leading-[1.05] tracking-[-0.02em]">Architecture for Calm, Light, and Precision.</h1>
        <p className="mt-6 max-w-xl text-lg text-[--muted]">Atelier Nord designs contemporary residential, interior, and urban spaces with cinematic motion and construction-grade rigor.</p>
        <div className="mt-10 flex gap-4"><Button href="/projects">View Projects</Button><Button href="/contact" variant="secondary">Contact</Button></div>
      </Container>
    </section>
  );
}
