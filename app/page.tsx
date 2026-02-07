import { Hero } from '@/components/sections/Hero';
import { PinnedSequence } from '@/components/motion/PinnedSequence';
import { SelectedProjects } from '@/components/sections/SelectedProjects';
import { Approach } from '@/components/sections/Approach';
import { Services } from '@/components/sections/Services';
import { AwardsPress } from '@/components/sections/AwardsPress';
import { CTAContact } from '@/components/sections/CTAContact';

export default function HomePage() {
  return (
    <>
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
