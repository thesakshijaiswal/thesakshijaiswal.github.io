"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PiStarFour } from "react-icons/pi";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { MdOfflineBolt } from "react-icons/md";
import { type ProjectData } from "@/data/ProjectData";
import Image from "next/image";
interface ProjectModalProps {
  selectedCard: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({
  selectedCard,
  onClose,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {selectedCard && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 cursor-pointer overflow-y-auto bg-black/40 p-3 backdrop-blur-sm sm:p-6"
        >
          <div className="flex min-h-full items-center justify-center py-6">
            <motion.div
              onClick={onClose}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 180, damping: 22 },
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                transition: { duration: 0.25 },
              }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-gray-900 shadow-2xl"
              style={{ willChange: "transform" }}
            >
              <div className="relative h-64 overflow-hidden sm:h-80">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="h-full w-full object-cover"
                  fill
                  style={{ willChange: "transform" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/30 to-black/60" />
                <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between">
                  <div className="w-fit rounded-full bg-black/20 p-2 text-white">
                    <PiStarFour className="size-5" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={selectedCard.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-fit rounded-full bg-black/20 p-2 text-white transition hover:bg-black/40"
                    >
                      <FiGithub className="size-5" />
                    </a>

                    <a
                      href={selectedCard.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-fit rounded-full bg-black/20 p-2 text-white transition hover:bg-black/40"
                    >
                      <FiGlobe className="size-5" />
                    </a>
                  </div>
                </div>

                <h3 className="absolute top-16 left-6 z-10 mt-2 max-w-xl text-3xl leading-tight font-bold text-white sm:text-4xl">
                  {selectedCard.title}
                </h3>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="bg-white p-5 text-white sm:p-8 dark:bg-[#242533]"
              >
                <p className="mb-5 text-sm leading-relaxed font-medium text-gray-700 sm:text-lg dark:text-gray-300">
                  {selectedCard.description}
                </p>

                <div className="mb-5 space-y-2 leading-relaxed text-gray-400 sm:text-lg">
                  {selectedCard.details.map((data, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <MdOfflineBolt className="mt-1 size-3 flex-shrink-0 text-emerald-400" />
                      <p className="text-sm text-gray-600 sm:text-base dark:text-gray-500">
                        {data}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedCard.skills.map((skill) => (
                    <motion.div
                      key={skill.label}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1 rounded-full bg-black/10 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur-md sm:text-sm dark:bg-white/10 dark:text-gray-200"
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
  );
}
