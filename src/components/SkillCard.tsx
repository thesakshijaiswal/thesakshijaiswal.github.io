"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
}

export default function SkillCard({ icon, label }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [20, -20]), {
    stiffness: 300,
    damping: 30,
  });

  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), {
    stiffness: 300,
    damping: 30,
  });

  const shadowX = useTransform(rotateY, [-30, 30], [-60, 60]);
  const shadowY = useTransform(rotateX, [-30, 30], [35, 5]);
  const boxShadow = useTransform(
    [shadowX, shadowY],
    ([x, y]) => `${x}px ${y}px 30px rgba(0,0,0,0.25)`
  );

  const background = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.25), transparent)`
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const xPct = (event.clientX - centerX) / (rect.width / 2);
    const yPct = (event.clientY - centerY) / (rect.height / 2);

    x.set(xPct);
    y.set(yPct);

    glowX.set(((event.clientX - rect.left) / rect.width) * 100);
    glowY.set(((event.clientY - rect.top) / rect.height) * 100);

    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glowX.set(50);
    glowY.set(50);
    setIsHovered(false);
  };

  return (
    <div className="w-full h-full [perspective:1000px] flex justify-center">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative group cursor-pointer
         w-full aspect-[3/4] max-w-sm md:max-w-md lg:max-w-lg
          flex flex-col items-center justify-center
          rounded-xl backdrop-blur-md
          border border-white/20 dark:border-white/10
          bg-white/10 dark:bg-white/5
          overflow-hidden touch-manipulation select-none px-2
        "
        style={{ rotateX, rotateY, boxShadow }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{ background }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        )}

        <motion.div
          className="relative z-10 mb-2 text-[clamp(1.25rem,4vw,2.5rem)] text-black dark:text-white"
          animate={{
            z: isHovered ? 40 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {icon}
        </motion.div>

        <motion.div
          className="relative z-10 px-1 text-[clamp(0.6rem,2vw,0.9rem)] font-medium text-center leading-snug text-gray-900 dark:text-white"
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {label}
        </motion.div>
      </motion.div>
    </div>
  );
}
