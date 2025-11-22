"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef<AnimationPlaybackControls>(null);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity },
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  const items = Array.from({ length: 10 }).map((_, i) => (
    <div key={i} className="flex items-center gap-3">
      <span>&#10038;</span>
      <span className="bg-gradient-to-r from-rose-300 to-blue-800 bg-clip-text group-hover:text-transparent">
        Let&apos;s Connect
      </span>
    </div>
  ));

  return (
    <div className="flex -rotate-90 overflow-x-clip">
      <motion.div
        ref={scope}
        className="group flex flex-none cursor-pointer gap-3 pr-5 text-2xl font-medium sm:text-3xl lg:text-4xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {items}
        {items}
      </motion.div>
    </div>
  );
}
