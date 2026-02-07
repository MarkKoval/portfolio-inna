"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { HeroSection } from "@/components/sections/hero";
import { PinnedStory } from "@/components/sections/pinned-story";
import { SelectedProjectsSection } from "@/components/sections/selected-projects";
import { AboutApproachSection } from "@/components/sections/about-approach";
import { ServicesSection } from "@/components/sections/services";
import { Preloader } from "@/components/preloader";
import { ScrollProgress } from "@/components/scroll-progress";

export default function HomePage() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <Preloader onDone={() => setReady(true)} />}
      <ScrollProgress />
      <HeroSection />
      <Container>
        <PinnedStory />
      </Container>
      <SelectedProjectsSection />
      <AboutApproachSection />
      <ServicesSection />
    </>
  );
}
