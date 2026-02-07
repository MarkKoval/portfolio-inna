import { HeroSection } from '@/components/sections/Hero/HeroSection';
import { ProjectsGrid } from '@/components/sections/Projects/ProjectsGrid';
import { AboutSection } from '@/components/sections/About/AboutSection';
import { ContactSection } from '@/components/sections/Contact/ContactSection';
import { Scene } from '@/components/3d/Scene';

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <ProjectsGrid />
      <AboutSection />
      <Scene />
      <ContactSection />
    </main>
  );
}
