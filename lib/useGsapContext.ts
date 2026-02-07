'use client';

import { DependencyList, RefObject, useLayoutEffect } from 'react';
import { gsap } from './gsap';

export function useGsapContext(
  scope: RefObject<HTMLElement>,
  callback: () => void,
  deps: DependencyList = []
) {
  useLayoutEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context(callback, scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
