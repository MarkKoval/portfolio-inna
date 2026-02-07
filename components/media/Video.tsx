export const Video = ({ src, poster }: { src: string; poster?: string }) => (
  <video className='h-full w-full object-cover' muted loop playsInline autoPlay preload='metadata' poster={poster}>
    <source src={src} />
  </video>
);
