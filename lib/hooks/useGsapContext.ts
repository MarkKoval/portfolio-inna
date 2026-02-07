'use client';

import { DependencyList, RefObject, useLayoutEffect } from 'react';
import { gsap } from '@/lib/animations/gsap';

export function useGsapContext(setup: () => void, deps: DependencyList, scope?: RefObject<HTMLElement>) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => setup(), scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
