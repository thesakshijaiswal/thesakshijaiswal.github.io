"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: FlipWordsProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(intervalId);
  }, [words, duration]);

  const wordContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "tween" as const,
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: "blur(8px)",
      transition: {
        type: "tween" as const,
        ease: [0.4, 0, 0.6, 1],
        duration: 0.4,
      },
    },
  };

  const currentWord = words[index];

  return (
    <div
      className={`inline-block h-[1.2em] overflow-hidden align-middle leading-none ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWord}
          variants={wordContainerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="inline-block whitespace-nowrap"
        >
          {currentWord.split("").map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              variants={letterVariants}
              className="inline-block translate-z-0 will-change-transform [backface-visibility:hidden]"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const FlipwordsAnimation = () => {
  const phrases = [
    "React.js",
    "Next.js",
    "Tailwind",
    "HTML",
    "CSS",
    "Javascript",
    "Motion",
  ];

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="-mb-1 inline-block"
    >
      <FlipWords words={phrases} duration={3000} />
    </motion.div>
  );
};

export default FlipwordsAnimation;
