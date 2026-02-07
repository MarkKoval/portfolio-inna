'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export const registerGSAP = () => {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
};

export const useGsapContext = (callback: () => void | (() => void), scope: React.RefObject<HTMLElement>, deps: React.DependencyList = []) => {
  useEffect(() => {
    registerGSAP();
    const ctx = gsap.context(callback, scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export { gsap, ScrollTrigger };
