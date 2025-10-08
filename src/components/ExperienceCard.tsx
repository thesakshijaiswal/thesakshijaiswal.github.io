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
          <LogoBox key={data.name} className="space-y-3 px-3 py-3 lg:px-5">
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => toggleCard(index)}
            >
              <div className="flex items-center gap-2 lg:gap-4">
                <LogoBox className="hidden size-10 items-center justify-center overflow-hidden text-xs sm:flex">
                  <Image
                    src={data.logo}
                    alt={data.name}
                    className="bg-white p-0.5"
                  />
                </LogoBox>
                <h2 className="text-base font-semibold md:text-lg">
                  {data.name}
                </h2>
              </div>

              <div className="flex items-center sm:gap-2">
                <p className="text-[11.5px] text-gray-700 sm:text-sm dark:text-gray-400">
                  {data.duration}
                </p>
                {isOpen ? (
                  <MdExpandLess className="size-5 text-gray-600 transition group-hover:text-emerald-500 dark:text-gray-400" />
                ) : (
                  <MdExpandMore className="size-5 text-gray-600 transition group-hover:text-emerald-500 dark:text-gray-400" />
                )}
              </div>
            </div>

            <h3 className="text-sm font-medium">{data.role}</h3>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-500">
                {data.description.map((point, i) => (
                  <div className="flex gap-2" key={i}>
                    <span>
                      <MdOfflineBolt className="mt-1 size-3 text-emerald-500 dark:text-emerald-300" />
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
