'use client';

import { useScrollProgress } from '@/lib/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-3 py-2 text-xs">
      <span>{progress}%</span>
      <div className="h-1 w-20 bg-white/20">
        <div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
