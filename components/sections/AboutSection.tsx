'use client';

import { useEffect, useState } from 'react';

const useCounter = (target: number) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let frame = 0;
    let id = 0;
    const tick = () => {
      frame += 1;
      setValue(Math.min(target, Math.round((target * frame) / 60)));
      if (frame < 60) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [target]);
  return value;
};

export const AboutSection = () => {
  const years = useCounter(8);
  const projects = useCounter(60);
  const clients = useCounter(24);

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-2" id="about">
      <div>
        <h2 className="text-3xl sm:text-4xl">Design engineer focused on elegant performance.</h2>
        <p className="mt-4 text-foreground-secondary">I build scalable web experiences with motion systems, strict typing, and measurable business outcomes.</p>
      </div>
      <dl className="grid grid-cols-3 gap-4">
        {[['Years', years], ['Projects', projects], ['Clients', clients]].map(([label, value]) => (
          <div key={String(label)} className="rounded-2xl border border-border bg-background-secondary p-4 text-center">
            <dt className="text-xs uppercase text-foreground-tertiary">{label}</dt>
            <dd className="mt-2 text-3xl font-semibold text-accent-primary">{value}+</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
