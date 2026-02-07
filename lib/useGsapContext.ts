"use client";

import { RefObject, useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

export const useGsapContext = (callback: () => void, scope: RefObject<HTMLElement>) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => callback(), scope);
    return () => ctx.revert();
  }, [callback, scope]);
};
