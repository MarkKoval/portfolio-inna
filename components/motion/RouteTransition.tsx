'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const RouteTransition = ({ children }: React.PropsWithChildren) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} initial={{ opacity: 0.92, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0.96, y: -10 }} transition={{ duration: 0.45 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
