'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.6, delay }}>
    {children}
  </motion.div>
);
