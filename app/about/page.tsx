import { Container } from '@/components/ui/container';

const timeline = [
  ['2025', 'Invited critic, Baltic Architecture Forum'],
  ['2023', 'Founded A|Studio independent practice'],
  ['2021', 'Design lead at Northern Civic Atelier'],
  ['2018', 'MArch with distinction, ETH-inspired curriculum']
];

export default function AboutPage() {
  return (
    <div className="pb-24 pt-32">
      <Container>
        <h1 className="font-display text-5xl md:text-7xl">About</h1>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg text-text/90">I am an architect focused on climate-conscious spaces where material logic and human rituals meet.</p>
            <p className="mt-5 text-muted">Over the last decade, I have delivered residential, cultural, and urban frameworks across Europe and North America.</p>
          </div>
          <div className="space-y-6 border border-white/10 bg-panel p-6">
            <h2 className="font-display text-3xl">Awards & Press</h2>
            <ul className="space-y-3 text-sm text-muted">
              <li>2024 — Emerging Practice Award (placeholder)</li>
              <li>2023 — Featured in Spatial Review magazine (placeholder)</li>
              <li>2022 — Shortlisted, Civic Building Prize (placeholder)</li>
            </ul>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="mb-6 font-display text-4xl">Timeline</h2>
          <div className="space-y-3">
            {timeline.map(([year, text]) => (
              <div key={year} className="grid grid-cols-[80px_1fr] border-b border-white/10 py-4">
                <span className="text-accent">{year}</span>
                <span className="text-muted">{text}</span>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
