'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const RouteTransition = ({ children }: React.PropsWithChildren) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} initial={{ opacity: 0.95 }} animate={{ opacity: 1 }} exit={{ opacity: 0.95 }} transition={{ duration: 0.35 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
