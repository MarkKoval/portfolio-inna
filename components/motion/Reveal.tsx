'use client';

import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0 }: React.PropsWithChildren<{ delay?: number }>) => (
  <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-15% 0px' }} transition={{ duration: 0.6, delay }}>
    {children}
  </motion.div>
);
