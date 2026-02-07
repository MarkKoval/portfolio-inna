import type { Metadata } from 'next';
import { ProjectsListing } from '@/components/sections/ProjectsListing';
import { baseMetadata } from '@/lib/seo';

export const metadata: Metadata = baseMetadata('Projects — Atelier Nord', 'Browse architecture and interior case studies by Atelier Nord.');

export default function ProjectsPage() {
  return <ProjectsListing />;
}
