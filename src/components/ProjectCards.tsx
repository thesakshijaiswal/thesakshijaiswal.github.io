"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectData } from "@/data/projectData";
import { PiStarFour } from "react-icons/pi";

export default function ProjectCards() {
  const [selectedCard, setSelectedCard] = useState<ProjectData | null>(null);

  const handleCardClick = (project: ProjectData) => {
    setSelectedCard((prev) => (prev?.id === project.id ? null : project));
  };

  useEffect(() => {
    if (selectedCard) {
      document.body.style.touchAction = "none";
    } else {
      document.body.style.touchAction = "";
    }
  }, [selectedCard]);

  return (
    <div className="relative cursor-pointer">
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
              className="group relative h-80 overflow-hidden rounded-3xl shadow-lg transition-shadow duration-300 sm:h-96"
            >
              <motion.img
                layoutId={`image-${project.id}`}
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <motion.div
                layoutId={`overlay-${project.id}`}
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent"
              />
              <motion.div
                layoutId={`text-${project.id}`}
                className="absolute top-6 left-6"
              >
                <div className="w-fit rounded-full bg-black/20 p-2 text-white">
                  <PiStarFour className="transition-transform duration-300 ease-in group-hover:rotate-180" />
                </div>
                <h3 className="mt-6 max-w-md text-3xl leading-tight font-bold text-white sm:text-lg md:text-xl lg:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 max-w-xs overflow-hidden text-xs text-ellipsis text-white/90">
                  {project.description}
                </p>
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
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/40 p-3 backdrop-blur-sm sm:p-6"
          >
            <div className="flex min-h-full items-center justify-center py-6">
              <motion.div
                layoutId={`card-${selectedCard.id}`}
                transition={{
                  duration: 0.4,
                  ease: [0.32, 0.72, 0, 1],
                  layout: { duration: 0.4 },
                }}
                className="relative w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden sm:h-80">
                  <motion.img
                    layoutId={`image-${selectedCard.id}`}
                    src={selectedCard.image}
                    alt={selectedCard.title}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="h-full w-full object-cover"
                    style={{ willChange: "auto" }}
                  />
                  <motion.div
                    layoutId={`overlay-${selectedCard.id}`}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                  />
                  <motion.div
                    layoutId={`text-${selectedCard.id}`}
                    className="absolute top-6 left-6 z-10"
                  >
                    <div className="w-fit rounded-full bg-black/20 p-2 text-white">
                      <PiStarFour className="transition-transform duration-300 ease-in hover:rotate-180" />
                    </div>
                    <h3 className="mt-2 max-w-xl text-3xl leading-tight font-bold text-white sm:text-4xl">
                      {selectedCard.title}
                    </h3>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="relative z-20 bg-gray-900 p-5 text-white sm:p-8"
                >
                  <p className="mb-5 text-sm leading-relaxed text-gray-300 sm:text-lg">
                    {selectedCard.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCard.skills.map((skill) => (
                      <motion.div
                        key={skill.label}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-md sm:text-sm"
                      >
                        {skill.icon}
                        <span>{skill.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
