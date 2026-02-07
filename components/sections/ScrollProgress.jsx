'use client';

import { useScrollProgress } from '@/lib/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();
  return <div className="fixed bottom-6 right-6 z-40 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs tracking-[0.16em]">{progress}%</div>;
}
