export const Video = ({ src, poster }: { src: string; poster?: string }) => (
  <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={poster}>
    <source src={src} />
  </video>
);
