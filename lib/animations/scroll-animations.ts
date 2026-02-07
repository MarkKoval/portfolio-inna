'use client';

import gsap from 'gsap';

export const revealOnScroll = (element: Element) => {
  gsap.fromTo(
    element,
    { y: 24, opacity: 0 },
    { y: 0, opacity: 1, scrollTrigger: { trigger: element, start: 'top 80%' } }
  );
};
