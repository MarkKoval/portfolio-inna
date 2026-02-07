import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Parallax } from '@/components/motion/Parallax';

export const Hero = () => (
  <section className='relative min-h-screen overflow-hidden pt-32'>
    <div className='absolute inset-0 bg-[url(/demo/hero/hero.svg)] bg-cover bg-center' />
    <div className='absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(216,183,122,.15),transparent_35%),linear-gradient(to_bottom,rgba(11,13,16,.2),rgba(11,13,16,.8))]' />
    <div className='pointer-events-none absolute inset-0 bg-[url(/demo/misc/grain.svg)] opacity-40 mix-blend-soft-light' />
    <Container className='relative z-10'>
      <Parallax>
        <p className='text-xs uppercase tracking-[0.18em] text-accent'>Atelier Nord</p>
        <h1 className='mt-6 max-w-4xl font-display text-[clamp(3rem,8vw,5rem)] leading-[1.03] tracking-[-0.02em]'>Architecture for Calm, Light, and Precision.</h1>
        <p className='mt-8 max-w-2xl text-lg text-[var(--muted)]'>We craft residential, hospitality, and urban micro-spaces where proportion, daylight, and material longevity define the experience.</p>
        <div className='mt-10 flex gap-4'><Button href='/projects'>View Projects</Button><Button href='/contact' variant='secondary'>Contact</Button></div>
      </Parallax>
    </Container>
  </section>
);
