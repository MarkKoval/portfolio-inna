import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/motion/Reveal';

export function Approach() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {['Clarity', 'Craft', 'Responsibility'].map((item) => (
            <Reveal key={item}>
              <div className="rounded-3xl border border-line bg-card p-8">
                <p className="font-display text-3xl">{item}</p>
                <p className="mt-4 text-[--muted]">Each project balances measurable performance with emotional atmosphere, from early sketch to built detail.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
