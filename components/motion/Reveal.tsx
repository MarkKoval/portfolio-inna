'use client';

import { motion } from 'framer-motion';

export const Reveal = ({ children }: React.PropsWithChildren) => <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.6 }}>{children}</motion.div>;
