import { Image } from './Image';
import { Video } from './Video';

export const Media = ({ type, src, alt, poster }: { type: 'image' | 'video'; src: string; alt?: string; poster?: string }) =>
  type === 'video' ? <Video src={src} poster={poster} /> : <Image src={src} alt={alt ?? 'media'} />;
