import { Image } from './Image';
import { Video } from './Video';

export const Media = ({ media, className }: { media: { type: 'image' | 'video'; src: string; alt?: string; poster?: string }; className?: string }) => (
  <div className={className}>{media.type === 'video' ? <Video src={media.src} poster={media.poster} /> : <Image src={media.src} alt={media.alt || 'media'} />}</div>
);
