import { Container } from "@/components/ui/container";

const timeline = [
  ["2028", "Invited speaker at Future Habitat Forum"],
  ["2026", "Shortlisted for Baltic Civic Design Award"],
  ["2023", "Founded Inna Atelier in Kyiv"],
  ["2018", "Master of Architecture, TU Berlin"]
];

export default function AboutPage() {
  return (
    <Container className="pt-28 pb-20">
      <h1 className="font-heading text-5xl md:text-7xl">About</h1>
      <div className="mt-8 grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-white/75">
          <p>Inna is an architect focused on choreography between material performance and emotional atmosphere. Her work spans homes, hospitality, and district scale interventions across Europe.</p>
          <p>The studio philosophy is simple: architecture should age well, support everyday rituals, and stay resilient under shifting climate conditions.</p>
          <p>Press mentions include Frame, ArchDaily features, and regional design journals (placeholder references).</p>
        </div>
        <div className="rounded-2xl border border-white/15 p-6">
          <h2 className="text-xl">Timeline</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {timeline.map(([year, item]) => (
              <li key={year} className="flex gap-4"><span className="text-copper">{year}</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
