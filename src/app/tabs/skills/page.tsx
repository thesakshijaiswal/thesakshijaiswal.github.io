import { Metadata } from "next";
import SkillFlip from "@/components/SkillFlip";
import LogoBox from "@/components/LogoBox";
import SkillCard from "@/components/SkillCard";
import { LuBrainCircuit } from "react-icons/lu";
import { MdAutoGraph } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import SkillTags from "@/components/SkillsTags";

export const metadata: Metadata = {
  title: "My Skills",
  description:
    "Versatile across front-end and back-end development, creating interfaces that feel intuitive and systems that scale with ease.",
};

export default function SkillsPage() {
  return (
    <div className="relative flex">
      <div className="sm:ml-8">
        <div className="mb-10 flex items-center gap-4">
          <LogoBox className="size-20 place-content-center">
            <SkillFlip />
          </LogoBox>
          <h1 className="text-2xl font-bold">My SuperPowers</h1>
        </div>

        <div className="mt-4 space-y-6 text-sm leading-relaxed text-gray-600 md:text-base dark:text-gray-500">
          <p>
            Every creator has their toolkit, but I like to think of mine as
            superpowers. From weaving clean UIs to powering up backends, these
            are the skills that help me turn ideas into experiences.
          </p>
        </div>

        <div className="py-8 lg:px-2">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <SkillCard icon={<LuBrainCircuit />} label="Problem Solving" />
            <SkillCard
              icon={<MdAutoGraph />}
              label="Performance Optimization"
            />
            <SkillCard icon={<FaLaptopCode />} label="Responsive Design" />
          </div>
        </div>

        <SkillTags />
      </div>
    </div>
  );
}
