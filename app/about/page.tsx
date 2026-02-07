import { Container } from '@/components/ui/Container';

const timeline = [
  '2014 — Studio founded in Kyiv',
  '2017 — First international residential commission',
  '2020 — Urban strategy practice launched',
  '2023 — 40+ completed projects across Europe',
  '2025 — Ongoing research on climate-adaptive typologies'
];

export default function AboutPage() {
  return (
    <Container className="pt-32 pb-20">
      <h1 className="section-title">About the studio</h1>
      <p className="mt-6 max-w-3xl text-lg text-muted">
        Inna Architects is a boutique architectural portfolio practice focused on clear spatial narratives, contextual materiality, and people-first urban impact.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-panel p-6">
          <h2 className="font-serif text-3xl">Philosophy</h2>
          <p className="mt-3 text-muted">We design spaces that age gracefully: robust planning, measured detail, and local materials.</p>
        </div>
        <div className="rounded-xl border border-line bg-panel p-6">
          <h2 className="font-serif text-3xl">Recognition</h2>
          <p className="mt-3 text-muted">Placeholder awards, press mentions, and jury nominations can be listed here.</p>
        </div>
      </div>
      <div className="mt-14 rounded-xl border border-line p-6">
        <h2 className="font-serif text-3xl">Timeline</h2>
        <ul className="mt-5 space-y-3 text-muted">
          {timeline.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </Container>
  );
}
