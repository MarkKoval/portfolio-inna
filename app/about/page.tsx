import { Container } from '@/components/ui/Container';
import { CTAContact } from '@/components/sections/CTAContact';

export default function AboutPage() {
  const timeline = ['2016 — Atelier Nord founded', '2018 — First residential completion', '2020 — Expanded into interior architecture', '2022 — Cross-border commercial projects', '2024 — Urban micro-interventions', '2026 — Material research lab'];
  return (
    <>
      <Container className="pt-32 pb-20">
        <div className="grid gap-10 md:grid-cols-2">
          <img src="/demo/hero/hero.svg" alt="Portrait placeholder" className="rounded-3xl border border-line" />
          <div>
            <h1 className="font-display text-6xl">About Atelier Nord</h1>
            <p className="mt-4 text-muted">We are an architecture studio focused on calm spatial narratives for residential, commercial interiors, and small urban contexts.</p>
          </div>
        </div>
        <h2 className="mt-16 font-display text-4xl">Timeline</h2>
        <ul className="mt-6 space-y-3 text-muted">{timeline.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2 className="mt-16 font-display text-4xl">Values</h2>
        <p className="mt-4 text-muted">Clarity in form, craft in detail, responsibility in lifecycle decisions.</p>
        <h2 className="mt-16 font-display text-4xl">Tools</h2>
        <p className="mt-4 text-muted">Revit, Rhino, SketchUp, Enscape, Adobe CC.</p>
      </Container>
      <CTAContact />
    </>
  );
}
