"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectData } from "@/data/projectData";

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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => handleCardClick(project)}
            whileHover={!selectedCard ? { scale: 1.02 } : {}}
            animate={{
              opacity: selectedCard && selectedCard.id !== project.id ? 0.4 : 1,
            }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.3, 1] }}
            className="relative h-96 cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl"
          >
            <motion.img
              layoutId={`image-${project.id}`}
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <motion.div
              layoutId={`overlay-${project.id}`}
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            />
            <motion.div
              layoutId={`text-${project.id}`}
              className="absolute top-6 left-6"
            >
              <span className="text-sm font-medium text-white/80">
                {project.category}
              </span>
              <h3 className="mt-2 max-w-md text-3xl leading-tight font-bold text-white">
                {project.title}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm sm:p-8"
          >
            <motion.div
              layoutId={`card-${selectedCard.id}`}
              transition={{
                duration: 0.6,
                ease: [0.25, 1, 0.3, 1],
              }}
              className="relative w-full max-w-4xl cursor-pointer overflow-hidden rounded-3xl shadow-2xl"
              onClick={() => handleCardClick(selectedCard)}
            >
              <motion.img
                layoutId={`image-${selectedCard.id}`}
                src={selectedCard.image}
                alt={selectedCard.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <motion.div
                layoutId={`overlay-${selectedCard.id}`}
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              />
              <motion.div
                layoutId={`text-${selectedCard.id}`}
                className="absolute top-6 left-6 z-10"
              >
                <span className="text-sm font-medium text-white/80">
                  {selectedCard.category}
                </span>
                <h3 className="mt-2 max-w-xl text-3xl leading-tight font-bold text-white sm:text-4xl">
                  {selectedCard.title}
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="relative z-20 mt-80 bg-gray-900 p-6 text-white sm:p-8"
              >
                <p className="mb-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                  {selectedCard.description}
                </p>
                <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
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
