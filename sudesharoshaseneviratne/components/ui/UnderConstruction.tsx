"use client";

import { motion } from "framer-motion";

interface UnderConstructionProps {
  isVisible?: boolean;
}

export function UnderConstruction({ isVisible = true }: UnderConstructionProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90"
    >
      <div className="text-center p-8 rounded-lg">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >

        </motion.div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Under Maintenence
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-300 text-lg mb-8"
        >
          This portfolio is currently being updated with new awesome content!
          <br />
          Please check back soon.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400"
        >
          Expected completion: Coming Soon
        </motion.div>
      </div>
    </motion.div>
  );
} 