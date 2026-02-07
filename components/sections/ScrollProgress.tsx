'use client';

import { useScrollProgress } from '@/lib/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed right-4 top-24 z-30 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted md:right-8">
      <div className="h-20 w-[2px] bg-white/20">
        <div className="w-full bg-accent transition-all" style={{ height: `${progress}%` }} />
      </div>
      <span>{progress}%</span>
    </div>
  );
}
