'use client';

import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';
import { Hero } from '@/components/sections/Hero';
import { Preloader } from '@/components/sections/Preloader';
import { ScrollProgress } from '@/components/sections/ScrollProgress';
import { PinnedStory } from '@/components/sections/PinnedStory';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { Services } from '@/components/sections/Services';

export default function HomePage() {
  const [ready, setReady] = useState(false);
  const assets = useMemo(() => projects.slice(0, 5).map((project) => project.coverImage), []);

  return <>{!ready && <Preloader assets={assets} onDone={() => setReady(true)} />}<ScrollProgress /><Hero /><PinnedStory /><section className="border-t border-white/10 py-24"><Container><p className="text-xs uppercase tracking-[0.2em] text-muted">Selected Projects</p><div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.slice(0, 6).map((project) => <ProjectCard key={project.slug} project={project} />)}</div></Container></section><AboutTeaser /><Services /></>;
}
