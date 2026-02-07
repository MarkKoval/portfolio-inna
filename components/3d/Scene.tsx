export function Scene() {
  return (
    <section className="container-p py-24" aria-label="Interactive scene">
      <div className="rounded-3xl border border-border bg-gradient-to-br from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 p-16 text-center">
        <p className="text-xl">3D Scene Fallback</p>
        <p className="text-foreground-secondary">WebGL-optimized scene placeholder ready for React Three Fiber integration.</p>
      </div>
    </section>
  );
}
