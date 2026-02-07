import { Image } from './Image';
import { Video } from './Video';

export function Media({ type, src, alt, poster }: { type: 'image' | 'video'; src: string; alt?: string; poster?: string }) {
  return type === 'video' ? <Video src={src} poster={poster} /> : <Image src={src} alt={alt ?? ''} />;
}
