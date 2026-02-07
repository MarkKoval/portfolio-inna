'use client';

import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Parallax = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  return <motion.div style={{ y }}>{children}</motion.div>;
};
