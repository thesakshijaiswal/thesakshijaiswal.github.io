"use client";
import React, { useEffect, useState } from "react";

interface GlowLineProps {
  orientation: "vertical" | "horizontal";
  position: string;
  className?: string;
}

interface GlowLayer {
  size: string;
  blur: string;
  opacity: string;
}

const GlowLine: React.FC<GlowLineProps> = ({
  orientation,
  position,
  className = "",
}) => {
  const isVertical = orientation === "vertical";
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrolled = scrollTop / (docHeight - winHeight);
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerClasses = isVertical
    ? "absolute w-px h-full"
    : "absolute w-full h-px";

  const positionStyle: React.CSSProperties = isVertical
    ? { left: position }
    : { top: position };

  const gradientDirection = isVertical
    ? "bg-gradient-to-b"
    : "bg-gradient-to-r";

  const glowColor = "var(--glow-color)";

  const glowLayers: GlowLayer[] = [
    {
      size: isVertical ? "w-1 -ml-0.5" : "h-1 -mt-0.5",
      blur: "blur-sm",
      opacity: "opacity-100",
    },
    {
      size: isVertical ? "w-2 -ml-1" : "h-2 -mt-1",
      blur: "blur-md",
      opacity: "opacity-80",
    },
    {
      size: isVertical ? "w-4 -ml-2" : "h-4 -mt-2",
      blur: "blur-lg",
      opacity: "opacity-60",
    },
  ];

  return (
    <div className={`${containerClasses} ${className}`} style={positionStyle}>
      <div
        className={`absolute ${gradientDirection}`}
        style={{
          background: `linear-gradient(to ${
            isVertical ? "bottom" : "right"
          }, transparent, ${glowColor}, transparent)`,
          height: isVertical ? `${progress * 100}%` : "100%",
          width: isVertical ? "100%" : `${progress * 100}%`,
        }}
      />

      <div
        className={`absolute ${
          isVertical ? "-ml-px w-0.5" : "-mt-px h-0.5"
        } ${gradientDirection} opacity-60`}
        style={{
          background: `linear-gradient(to ${
            isVertical ? "bottom" : "right"
          }, transparent, white, transparent)`,
          height: isVertical ? `${progress * 100}%` : "100%",
          width: isVertical ? "100%" : `${progress * 100}%`,
        }}
      />

      {glowLayers.map((layer, index) => (
        <div
          key={index}
          className={`absolute ${layer.size} ${layer.blur} ${layer.opacity}`}
          style={{
            background: `linear-gradient(to ${
              isVertical ? "bottom" : "right"
            }, transparent, ${glowColor}, transparent)`,
            height: isVertical ? `${progress * 100}%` : "100%",
            width: isVertical ? "100%" : `${progress * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default GlowLine;
