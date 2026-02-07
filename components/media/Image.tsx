import NextImage from 'next/image';
import { cn } from '@/lib/utils';

export const Image = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <NextImage src={src} alt={alt} width={1600} height={1000} sizes="(max-width: 768px) 100vw, 50vw" className={cn('h-full w-full object-cover', className)} />
);
