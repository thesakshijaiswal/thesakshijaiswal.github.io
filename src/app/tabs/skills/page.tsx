import SkillFlip from "@/components/SkillFlip";
import LogoBox from "@/components/LogoBox";
import SkillCard from "@/components/SkillCard";
import Tag from "@/components/Tag";
import { LuBrainCircuit } from "react-icons/lu";
import { FaLaptopCode, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { SiJavascript, SiTypescript } from "react-icons/si";
export default function SkillsPage() {
  return (
    <div className="relative flex">
      <div className="sm:ml-8">
        <div className="flex mb-10 items-center gap-4">
          <LogoBox className="place-content-center">
            <SkillFlip />
          </LogoBox>
          <h1 className="text-2xl font-bold">My SuperPowers</h1>
        </div>

        <div className="mt-4 text-gray-600 dark:text-gray-500 space-y-6 leading-relaxed text-sm md:text-base">
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

        <div className="space-y-4 mt-6">
          <h4 className="flex items-center gap-2 text-lg font-bold">
            Crafting Stunning Interfaces
          </h4>

          <div className="flex gap-2 flex-wrap">
            <Tag
              icon={<FaHtml5 size={17} className="text-orange-500" />}
              label="HTML"
              className="text-xs"
            />
            <Tag
              icon={<FaCss3Alt size={17} className="text-blue-500" />}
              label="CSS"
              className="text-xs"
            />
            <Tag
              icon={<SiJavascript size={13} className="text-yellow-400" />}
              label="Javascript"
              className="text-xs"
            />
            <Tag
              icon={<SiTypescript size={13} className="text-blue-500" />}
              label="Typescript"
              className="text-xs"
            />
          </div>

          <h4 className="flex items-center gap-2 text-lg font-bold">
            Building Robust Backends
          </h4>

          <h4 className="flex items-center gap-2 text-lg font-bold">
            Modern Tooling
          </h4>
        </div>
      </div>
    </div>
  );
}
