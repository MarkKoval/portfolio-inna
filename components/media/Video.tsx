export function Video({ src, poster }: { src: string; poster?: string }) {
  return <video src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" className="h-full w-full object-cover" />;
}
