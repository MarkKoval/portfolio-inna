import NextImage from 'next/image';

export const Image = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <NextImage src={src} alt={alt} width={1600} height={1000} className={className ?? 'h-auto w-full rounded-3xl object-cover'} />
);
