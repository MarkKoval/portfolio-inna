import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/motion/Reveal';

const items = [
  ['Clarity', 'Every plan removes friction and sharpens intuitive movement.'],
  ['Craft', 'Detailing aligns tectonic honesty with durable construction logic.'],
  ['Responsibility', 'Low-impact materials and lifecycle thinking guide every choice.']
];

export const Approach = () => (
  <Section>
    <Container>
      <div className='grid gap-6 md:grid-cols-3'>
        {items.map(([title, text], i) => (
          <Reveal key={title} delay={i * 0.08}>
            <article className='rounded-[24px] border border-line bg-card p-6'>
              <h3 className='font-display text-3xl'>{title}</h3>
              <p className='mt-3 text-[var(--muted)]'>{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
);
