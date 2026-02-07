'use client';

export function Modal({ open, title, onClose, children }: { open: boolean; title: string; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label={title}>
      <div className="w-full max-w-2xl rounded-2xl border border-border bg-background p-6">
        <button className="mb-4 text-foreground-secondary" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}
