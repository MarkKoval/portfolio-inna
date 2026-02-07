export const Video = ({ src, poster }: { src: string; poster?: string }) => (
  <video src={src} poster={poster} muted loop playsInline autoPlay preload="metadata" className="h-full w-full rounded-3xl object-cover" />
);
