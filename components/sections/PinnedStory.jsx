'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useGsapContext } from '@/lib/hooks/useGsapContext';

gsap.registerPlugin(ScrollTrigger);
const items = [{ title: 'Context Driven', text: 'Each brief starts with climate, circulation and community patterns.', image: '/demo/p9.svg' }, { title: 'Material Precision', text: 'Textures are layered to shape tactility, acoustics and daylight.', image: '/demo/p10.svg' }, { title: 'Spatial Choreography', text: 'We script movement through thresholds, courtyards and framed views.', image: '/demo/p11.svg' }];

export function PinnedStory() {
  const sectionRef = useRef(null);
  useGsapContext(() => {
    if (!sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    return gsap.context(() => {
      items.forEach((_, i) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: `.pin-item-${i}`, start: 'top top', end: '+=100%', pin: true, scrub: true } });
        tl.fromTo(`.pin-title-${i}`, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }).fromTo(`.pin-text-${i}`, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, '<').fromTo(`.pin-image-${i}`, { scale: 1.2, clipPath: 'inset(0 100% 0 0)' }, { scale: 1, clipPath: 'inset(0 0% 0 0)' }, 0).to([`.pin-title-${i}`, `.pin-text-${i}`], { opacity: 0.15, y: -30, duration: 0.5 }, '>-0.1');
      });
    }, sectionRef);
  }, []);

  return <section ref={sectionRef}>{items.map((item, i) => <div key={item.title} className={`pin-item-${i} relative min-h-screen border-t border-white/10`}><div className="grid min-h-screen items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-10"><div className="space-y-5"><p className="text-xs uppercase tracking-[0.2em] text-muted">Approach {String(i + 1).padStart(2, '0')}</p><h2 className={`pin-title-${i} font-display text-4xl md:text-6xl`}>{item.title}</h2><p className={`pin-text-${i} max-w-lg text-muted md:text-lg`}>{item.text}</p></div><div className={`pin-image-${i} relative aspect-[4/5] overflow-hidden rounded-lg`}><Image src={item.image} alt={item.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" /></div></div></div>)}</section>;
}
