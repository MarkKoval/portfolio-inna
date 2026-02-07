'use client';

import { useState } from 'react';
import { Preloader } from '@/components/sections/Preloader';
import { ScrollProgress } from '@/components/sections/ScrollProgress';
import { HeroShowcase } from '@/components/sections/HeroShowcase';
import { PinnedStory } from '@/components/sections/PinnedStory';
import { SelectedProjects } from '@/components/sections/SelectedProjects';
import { AboutApproach } from '@/components/sections/AboutApproach';
import { ServicesSection } from '@/components/sections/ServicesSection';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <ScrollProgress />
      <HeroShowcase />
      <PinnedStory />
      <SelectedProjects />
      <AboutApproach />
      <ServicesSection />
    </>
  );
}
