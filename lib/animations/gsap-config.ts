'use client';

import gsap from 'gsap';

export const configureGsap = () => {
  gsap.defaults({ ease: 'power3.out', duration: 0.9 });
};
