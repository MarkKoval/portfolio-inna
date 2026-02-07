'use client';

import { ReactNode } from 'react';

export const Modal = ({ open, children, onClose }: { open: boolean; children: ReactNode; onClose: () => void }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur" onClick={onClose}>
      <div className="w-full max-w-xl rounded-2xl border border-border bg-background p-6" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
