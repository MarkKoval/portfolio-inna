'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapContext = (
  scope: React.RefObject<HTMLElement>,
  create: () => void,
  deps: React.DependencyList = []
) => {
  useLayoutEffect(() => {
    const el = scope.current;
    if (!el) return;
    const ctx = gsap.context(create, el);
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (el.contains(trigger.trigger as Node)) trigger.kill();
      });
    };
  }, deps);
};

export { gsap, ScrollTrigger };
