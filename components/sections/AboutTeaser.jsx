import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function AboutTeaser() {
  return <section className="border-t border-white/10 py-24"><Container className="grid gap-10 md:grid-cols-2"><h2 className="font-display text-4xl md:text-6xl">Methodical design, emotional experience.</h2><div className="space-y-6"><p className="text-muted">We design architecture as a sequence: approach, threshold, reveal and pause. Every decision—material, structure, lighting—supports a clear story about how people inhabit space.</p><Button href="/about">Read About the Studio</Button></div></Container></section>;
}
