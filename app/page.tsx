import { Hero } from '@/components/sections/hero';
import { PinnedStory } from '@/components/sections/pinned-story';
import { PinnedClip } from '@/components/sections/pinned-clip';
import { ProjectsPreview } from '@/components/sections/projects-preview';
import { AboutApproach } from '@/components/sections/about-approach';
import { Preloader } from '@/components/ui/preloader';

const criticalAssets = ['/demo/project-1.svg', '/demo/project-2.svg', '/demo/project-3.svg', '/demo/project-12.svg'];

export default function HomePage() {
  return (
    <>
      <Preloader assets={criticalAssets} />
      <Hero />
      <PinnedStory />
      <PinnedClip />
      <ProjectsPreview />
      <AboutApproach />
    </>
  );
}
