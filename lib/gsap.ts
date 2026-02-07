'use client';

import { useLayoutEffect, type DependencyList, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const useGsapContext = (
  fn: () => void,
  scope: RefObject<HTMLElement>,
  deps: DependencyList = []
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(fn, scope);
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (scope.current && scope.current.contains(trigger.trigger as Node)) {
          trigger.kill();
        }
      });
    };
  }, deps);
};
