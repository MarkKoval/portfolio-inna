export function AboutSection() {
  return (
    <section className="container-p grid gap-10 py-24 md:grid-cols-2" aria-label="About">
      <div>
        <h2 className="text-4xl font-semibold">About</h2>
        <p className="mt-4 text-foreground-secondary">I build high-performance web experiences focused on storytelling, accessibility, and measurable business outcomes.</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[
          ['8+', 'Years'],
          ['60+', 'Projects'],
          ['24', 'Clients']
        ].map(([value, label]) => (
          <div key={label} className="rounded-xl border border-border bg-background-secondary p-4 text-center">
            <p className="text-3xl font-semibold text-accent-primary">{value}</p>
            <p className="text-sm text-foreground-secondary">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
