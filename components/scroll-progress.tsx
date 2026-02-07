"use client";

import { useScrollProgress } from "@/lib/useScrollProgress";

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed bottom-6 right-6 z-40 text-right">
      <p className="text-xs uppercase tracking-[0.2em] text-white/50">Scroll</p>
      <p className="text-lg font-semibold text-copper">{progress}%</p>
    </div>
  );
};
