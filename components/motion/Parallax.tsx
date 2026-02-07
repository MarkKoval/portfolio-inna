'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function Parallax({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  return <motion.div style={{ y }}>{children}</motion.div>;
}
