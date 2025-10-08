"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

interface LogoFlipDeckProps {
  items: React.ReactNode[];
}

export const LogoFlipDeck: React.FC<LogoFlipDeckProps> = ({ items }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="relative h-20 w-16 shrink-0"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute top-1/2 left-1/2"
        >
          {items[index % items.length]}
        </motion.div>

        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute top-1/2 right-0 left-0 z-[999999999] -translate-y-1/2 border-t-2 border-white dark:border-neutral-800"
      />
    </div>
  );
};

interface LogoItemProps {
  children: React.ReactNode;
  className?: string;
}

export const LogoItem: React.FC<LogoItemProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`grid size-16 place-content-center rounded-lg text-5xl ${className}`}
    >
      {children}
    </div>
  );
};
