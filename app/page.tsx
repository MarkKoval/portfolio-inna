import { Hero } from '@/components/sections/Hero';
import { PinnedSequence } from '@/components/motion/PinnedSequence';
import { SelectedProjects } from '@/components/sections/SelectedProjects';
import { Approach } from '@/components/sections/Approach';
import { Services } from '@/components/sections/Services';
import { AwardsPress } from '@/components/sections/AwardsPress';
import { CTAContact } from '@/components/sections/CTAContact';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import { Preloader } from '@/components/layout/Preloader';
import { projects } from '@/data/projects';

export default function HomePage() {
  const preloadAssets = ['/demo/hero/hero.svg', ...projects.slice(0, 6).map((p) => p.cover.src)];

  return (
    <>
      <Preloader assets={preloadAssets} />
      <ScrollProgress />
      <Hero />
      <PinnedSequence />
      <SelectedProjects />
      <Approach />
      <Services />
      <AwardsPress />
      <CTAContact />
    </>
  );
}
