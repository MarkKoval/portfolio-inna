'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type { Project } from '@/data/projects';

export const GalleryLightbox = ({ project }: { project: Project }) => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {project.gallery.map((item, i) => (
          <button key={item.src} onClick={() => setIndex(i)} className="text-left">
            <img src={item.src} alt={item.alt} className="w-full rounded-2xl border border-line" />
            <p className="mt-2 text-xs text-muted">{item.alt}</p>
          </button>
        ))}
      </div>
      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={project.gallery.map((item) => ({ src: item.src, alt: item.alt }))} />
    </>
  );
};
