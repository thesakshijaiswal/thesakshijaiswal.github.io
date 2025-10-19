"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects, type ProjectData } from "@/data/projectData";
import { PiStarFour } from "react-icons/pi";
import ProjectModal from "./ProjectModal";
import { FiGithub, FiGlobe } from "react-icons/fi";

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
              className="group relative h-80 cursor-pointer overflow-hidden rounded-3xl shadow-lg"
              style={{ willChange: "transform" }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
                style={{ willChange: "transform" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
              <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between">
                <div className="w-fit rounded-full bg-black/20 p-2 text-white">
                  <PiStarFour className="size-5 transition-transform duration-300 ease-in group-hover:rotate-180 md:size-4 lg:size-5" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={selectedCard?.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-fit rounded-full bg-black/20 p-2 text-white transition hover:bg-black/40"
                  >
                    <FiGithub className="size-5 md:size-4 lg:size-5" />
                  </a>

                  <a
                    href={selectedCard?.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-fit rounded-full bg-black/20 p-2 text-white transition hover:bg-black/40"
                  >
                    <FiGlobe className="size-5 md:size-4 lg:size-5" />
                  </a>
                </div>
              </div>

              <h3 className="absolute top-16 left-6 mt-6 max-w-md text-3xl leading-tight font-bold text-white md:text-xl lg:text-3xl">
                {project.title}
              </h3>
              <p className="absolute top-32 left-6 mt-2 line-clamp-2 max-w-xs text-xs text-white/90 md:top-[7rem] lg:top-32">
                {project.description}
              </p>
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
