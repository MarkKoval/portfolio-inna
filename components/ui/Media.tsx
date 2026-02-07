import Image from 'next/image';

export function Media({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="h-auto w-full object-cover"
      />
    </div>
  );
}
