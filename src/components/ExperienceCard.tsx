"use client";

import { useState } from "react";
import { experienceData } from "@/data/experienceData";
import LogoBox from "@/components/LogoBox";
import Image from "next/image";
import { MdOfflineBolt, MdExpandMore, MdExpandLess } from "react-icons/md";

export default function ExperienceCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {experienceData.map((data, index) => {
        const isOpen = openIndex === index;

        return (
          <LogoBox key={data.name} className="space-y-3 lg:px-5 py-3 px-3">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div className="flex lg:gap-4 gap-2 items-center">
                <LogoBox className="hidden sm:flex size-10 items-center justify-center text-xs overflow-hidden">
                  <Image
                    src={data.logo}
                    alt={data.name}
                    className="bg-white p-0.5"
                  />
                </LogoBox>
                <h2 className="md:text-lg font-semibold text-base">
                  {data.name}
                </h2>
              </div>

              <div className="flex items-center sm:gap-2">
                <p className="text-[11.5px] sm:text-sm text-gray-700 dark:text-gray-400">
                  {data.duration}
                </p>
                {isOpen ? (
                  <MdExpandLess className="size-5 text-gray-600 dark:text-gray-400 group-hover:text-emerald-500 transition" />
                ) : (
                  <MdExpandMore className="size-5 text-gray-600 dark:text-gray-400 group-hover:text-emerald-500 transition" />
                )}
              </div>
            </div>

            <h3 className="text-sm font-medium">{data.role}</h3>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="space-y-1 text-gray-600 dark:text-gray-500 text-sm mt-2">
                {data.description.map((point, i) => (
                  <div className="flex gap-2" key={i}>
                    <span>
                      <MdOfflineBolt className="mt-1 dark:text-emerald-300 text-emerald-500 size-3" />
                    </span>
                    <li className="mb-2">{point}</li>
                  </div>
                ))}
              </ul>
            </div>
          </LogoBox>
        );
      })}
    </>
  );
}
