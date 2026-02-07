import NextImage from 'next/image';

export function Image({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <NextImage src={src} alt={alt} width={1600} height={1000} className={className ?? 'h-auto w-full rounded-3xl'} sizes="(max-width: 1024px) 100vw, 50vw" />;
}
