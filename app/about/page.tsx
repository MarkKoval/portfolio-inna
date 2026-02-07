import { CTAContact } from '@/components/sections/CTAContact';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-content px-6 py-14 lg:px-10">
      <div className="grid gap-10 md:grid-cols-2">
        <img src="/demo/projects/p4.svg" alt="Portrait placeholder" className="w-full rounded-3xl border border-line" />
        <div>
          <h1 className="font-display text-6xl">About Atelier Nord</h1>
          <p className="mt-4 text-[--muted]">Founded in 2016, Atelier Nord shapes residential, commercial interiors, and urban micro-interventions through precise geometry and calm atmospheres.</p>
        </div>
      </div>
      <h2 className="mt-16 font-display text-4xl">Timeline</h2>
      <ul className="mt-6 space-y-3 text-[--muted]">{['2016 — Studio founded in Copenhagen','2018 — First international residential commission','2020 — Interior architecture branch established','2022 — Construction docs pipeline standardized','2024 — Urban design pilot program launched','2026 — Cross-border design collaborations scale up'].map((item)=><li key={item}>{item}</li>)}</ul>
      <h2 className="mt-16 font-display text-4xl">Tools</h2>
      <p className="mt-4 text-[--muted]">Revit, Rhino, Grasshopper, SketchUp, V-Ray, Adobe CC, Figma, Notion.</p>
      <CTAContact />
    </div>
  );
}
