export const Loader = () => (
  <div className="flex items-center gap-2" role="status" aria-label="Loading">
    <span className="h-2 w-2 rounded-full bg-accent-primary animate-pulse" />
    <span className="h-2 w-2 rounded-full bg-accent-secondary animate-pulse [animation-delay:120ms]" />
    <span className="h-2 w-2 rounded-full bg-accent-tertiary animate-pulse [animation-delay:240ms]" />
  </div>
);
