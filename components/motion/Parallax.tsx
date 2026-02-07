'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Parallax = ({ children }: React.PropsWithChildren) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  return <motion.div style={{ y }}>{children}</motion.div>;
};
