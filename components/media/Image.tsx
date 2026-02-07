import NextImage from 'next/image';

export const Image = ({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) => (
  <NextImage src={src} alt={alt} fill className='object-cover' sizes='(max-width: 1024px) 100vw, 50vw' priority={priority} />
);
