export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.2em] text-[--muted]">{children}</span>;
}
