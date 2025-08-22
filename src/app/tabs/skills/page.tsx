import SkillFlip from "@/components/SkillFlip";
import LogoBox from "@/components/LogoBox";
import SkillCard from "@/components/SkillCard";
import { LuBrainCircuit } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
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

        <section className="px-2 py-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <SkillCard icon={<LuBrainCircuit />} label="Problem Solving" />
            <SkillCard
              icon={<MdAutoGraph />}
              label="Performance Optimization"
            />
            <SkillCard icon={<FaLaptopCode />} label="Responsive Design" />
          </div>
        </section>

        <div>
          <ul>
            <li>Problem Solving </li>
            <li>Performance Optimization</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
