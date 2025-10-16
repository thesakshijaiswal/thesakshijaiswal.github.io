"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects, type ProjectData } from "@/data/projectData";
import { PiStarFour } from "react-icons/pi";
import ProjectModal from "./ProjectModal";

export default function ProjectCards() {
  const [selectedCard, setSelectedCard] = useState<ProjectData | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleCardClick = (project: ProjectData) => {
    setSelectedCard((prev) => (prev?.id === project.id ? null : project));
  };

  useEffect(() => {
    if (selectedCard) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [selectedCard]);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => {
          const isInactive = selectedCard && selectedCard.id !== project.id;
          return (
            <motion.div
              key={project.id}
              onClick={() => handleCardClick(project)}
              animate={{ opacity: isInactive ? 0.5 : 1 }}
              whileHover={
                !isTouch && !selectedCard ? { scale: 1.04, y: -2 } : {}
              }
              transition={{
                type: "spring",
                stiffness: isTouch ? 220 : 280,
                damping: isTouch ? 24 : 20,
              }}
              className="group relative h-80 overflow-hidden rounded-3xl shadow-lg sm:h-96"
              style={{ willChange: "transform" }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
                style={{ willChange: "transform" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
              <div className="absolute top-6 left-6">
                <div className="w-fit rounded-full bg-black/20 p-2 text-white">
                  <PiStarFour className="transition-transform duration-300 ease-in group-hover:rotate-180" />
                </div>
                <h3 className="mt-6 max-w-md text-3xl leading-tight font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 max-w-xs text-xs text-white/90">
                  {project.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <ProjectModal
        selectedCard={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </div>
  );
}
