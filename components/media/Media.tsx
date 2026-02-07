import { Image } from './Image';
import { Video } from './Video';

export const Media = ({ media, priority = false }: { media: { type?: 'image' | 'video'; src: string; alt?: string; poster?: string }; priority?: boolean }) => {
  if (media.type === 'video') return <Video src={media.src} poster={media.poster} />;
  return <Image src={media.src} alt={media.alt ?? 'media'} priority={priority} />;
};
