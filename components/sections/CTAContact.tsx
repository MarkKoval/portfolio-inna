import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const CTAContact = () => (
  <Section>
    <Container className='rounded-[28px] border border-line bg-card py-14 text-center'>
      <p className='text-xs uppercase tracking-[0.18em] text-accent'>Available for selected commissions</p>
      <h2 className='mt-4 font-display text-5xl'>Start your next architectural chapter.</h2>
      <div className='mt-8'><Button href='/contact'>Start a project</Button></div>
    </Container>
  </Section>
);
