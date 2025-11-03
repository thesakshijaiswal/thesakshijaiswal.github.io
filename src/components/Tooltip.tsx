"use client";
import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  description?: string;
  children: ReactNode;
}

export default function Tooltip({ description, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-2 hidden rounded-lg bg-white/90 px-1 py-1.5 text-center shadow-lg backdrop-blur-sm md:mr-40 md:block md:w-48 lg:mr-36 xl:mr-0 xl:w-56 dark:bg-black/80"
          >
            {description && (
              <p className="mt-1 text-[10px] leading-snug text-gray-700 lg:text-xs dark:text-gray-300">
                {description}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
