"use client";

import { useLenis } from "@/lib/useLenis";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useLenis();
  return <>{children}</>;
};
