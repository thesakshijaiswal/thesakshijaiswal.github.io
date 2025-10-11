"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectData } from "@/data/projectData";
import { PiStarFour } from "react-icons/pi";

export default function ProjectCards() {
  const [selectedCard, setSelectedCard] = useState<ProjectData | null>(null);

  const handleCardClick = (project: ProjectData) => {
    setSelectedCard((prev) => (prev?.id === project.id ? null : project));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setSelectedCard(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => {
          const isInactive = selectedCard && selectedCard.id !== project.id;
          return (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => handleCardClick(project)}
              whileHover={!selectedCard ? { scale: 1.02 } : {}}
              animate={{ opacity: isInactive ? 0.5 : 1 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.3, 1] }}
              className={`relative h-80 overflow-hidden rounded-3xl shadow-lg transition-shadow duration-300 sm:h-96 ${
                selectedCard
                  ? "cursor-default"
                  : "cursor-pointer hover:shadow-2xl"
              }`}
            >
              <motion.img
                layoutId={`image-${project.id}`}
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover will-change-transform"
              />
              <motion.div
                layoutId={`overlay-${project.id}`}
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              />
              <motion.div
                layoutId={`text-${project.id}`}
                className="absolute top-6 left-6"
              >
                <span className="text-white">
                  <PiStarFour />
                </span>
                <h3 className="mt-2 max-w-md text-2xl leading-tight font-bold text-white sm:text-3xl">
                  {project.title}
                </h3>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              layoutId={`card-${selectedCard.id}`}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl cursor-default overflow-hidden rounded-3xl shadow-2xl"
              onClick={() => handleCardClick(selectedCard)}
            >
              <motion.img
                layoutId={`image-${selectedCard.id}`}
                src={selectedCard.image}
                alt={selectedCard.title}
                className="absolute inset-0 h-full w-full object-cover will-change-transform"
              />
              <motion.div
                layoutId={`overlay-${selectedCard.id}`}
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              />
              <motion.div
                layoutId={`text-${selectedCard.id}`}
                className="absolute top-6 left-6 z-10"
              >
                <span className="text-white">
                  <PiStarFour />
                </span>
                <h3 className="mt-2 max-w-xl text-3xl leading-tight font-bold text-white sm:text-4xl">
                  {selectedCard.title}
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                transition={{ delay: 0.35, duration: 0.35 }}
                className="relative z-20 mt-72 bg-gray-900 p-5 text-white sm:mt-80 sm:p-8"
              >
                <p className="mb-3 text-sm leading-relaxed text-gray-300 sm:text-lg">
                  {selectedCard.description}
                </p>
                <p className="text-xs leading-relaxed text-gray-400 sm:text-base">
                  {selectedCard.details}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
