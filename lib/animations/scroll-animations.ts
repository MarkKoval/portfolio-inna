import { gsap } from './gsap-config';

export const fadeUp = (target: string | Element) => gsap.fromTo(target, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });
