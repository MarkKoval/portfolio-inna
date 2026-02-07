import Image from 'next/image';

type MediaProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function Media({ src, alt, className, priority }: MediaProps) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
