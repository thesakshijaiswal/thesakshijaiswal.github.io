"use client";

import { useRef, useState, useCallback } from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
}

export default function SkillCard({ icon, label }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    x: 0,
    y: 0,
    glowX: 50,
    glowY: 50,
    isHovered: false,
  });

  const maxRotation = 30;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;

      setTransform({
        x: yPct * -1 * maxRotation,
        y: xPct * maxRotation,
        glowX: ((e.clientX - rect.left) / rect.width) * 100,
        glowY: ((e.clientY - rect.top) / rect.height) * 100,
        isHovered: true,
      });
    },
    [maxRotation]
  );

  const resetTransform = useCallback(() => {
    setTransform({ x: 0, y: 0, glowX: 50, glowY: 50, isHovered: false });
  }, []);

  return (
    <div className="w-full h-full [perspective:1000px] flex justify-center">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
        className="
          relative group cursor-pointer
          w-32 h-40 xs:w-36 xs:h-44 sm:w-40 sm:h-48 md:w-44 md:h-52
          flex flex-col items-center justify-center
          rounded-xl backdrop-blur-md
          border border-white/20 dark:border-white/10
          bg-white/10 dark:bg-white/5
          shadow-[0_8px_16px_rgba(0,0,0,0.15)] sm:shadow-[0_16px_24px_rgba(0,0,0,0.2)] md:shadow-[0_25px_25px_rgba(0,0,0,0.25)]
          transition-all duration-500 ease-out
          overflow-hidden
          touch-manipulation
          select-none
        "
        style={{
          transform: `rotateX(${transform.x}deg) rotateY(${transform.y}deg)`,
          boxShadow: `${transform.y * 2}px ${
            20 - transform.x * 1.5
          }px 35px rgba(0,0,0,0.35)`,
        }}
      >
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${transform.glowX}% ${transform.glowY}%, rgba(255,255,255,0.25), transparent)`,
            opacity: transform.isHovered ? 1 : 0,
            transition: "opacity 0.4s ease-in-out",
          }}
        />

        <div
          className="
            relative z-10 mb-2 sm:mb-3 md:mb-4
            text-3xl xs:text-4xl sm:text-4xl md:text-5xl
            text-black dark:text-white
            transition-transform duration-300
          "
          style={{
            transform: `translateZ(${transform.isHovered ? 40 : 0}px)`,
          }}
        >
          {icon}
        </div>

        <div
          className="
            relative z-10 px-2 sm:px-3
            text-xs xs:text-sm sm:text-sm md:text-base
            font-medium text-center
            text-gray-900 dark:text-white
            leading-tight
          "
        >
          {label}
        </div>
      </div>
    </div>
  );
}
