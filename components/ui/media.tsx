import Image from "next/image";

export const Media = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/5">
    <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
  </div>
);
