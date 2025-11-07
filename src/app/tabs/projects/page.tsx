import { Metadata } from "next";
import SkillFlip from "@/components/SkillFlip";
import LogoBox from "@/components/LogoBox";
import ProjectCards from "@/components/ProjectCards";
import Button from "@/components/Button";
import { HiArrowRight } from "react-icons/hi";
import { PiShootingStar, PiCoffeeBold } from "react-icons/pi";
import Tag from "@/components/Tag";

export const metadata: Metadata = {
  title: "My Projects",
  description:
    "Showcasing real-world applications and experiments that combine design, usability, and engineering to deliver polished solutions.",
};

export default function ProjectsPage() {
  return (
    <>
      <section
        className="sm:ml-8"
        aria-labelledby="my-projects"
        role="tabpanel"
      >
        <header className="mb-10 flex items-center gap-4">
          <LogoBox className="size-20 place-content-center">
            <SkillFlip />
          </LogoBox>
          <h2 className="cursor-default text-2xl font-bold">
            Things I&apos;ve Built
          </h2>
        </header>
        <div className="mb-5 flex flex-wrap gap-3">
          <Tag
            icon={
              <PiShootingStar
                size={16}
                className="text-purple-500/70 dark:text-purple-300"
              />
            }
            label="Quality Projects"
            className="dark:border-purple-300/40 dark:hover:bg-purple-300/10"
          />
          <Tag
            icon={
              <PiCoffeeBold
                size={16}
                className="text-indigo-500/70 dark:text-indigo-300"
              />
            }
            label="Powered by Coffee"
            className="dark:border-indigo-300/40 dark:hover:bg-indigo-300/10"
          />
        </div>
        <p className="mt-4 mb-10 cursor-default text-gray-500">
          Every project is a story of curiosity turned into code. I&apos;ve
          built things that not only function but feel right, blending design,
          logic, and a bit of obsession for detail to bring ideas to life from
          the first line to the final deploy.
        </p>

        <ProjectCards />
        <div className="mt-12 flex justify-center">
          <Button
            text="View Full Projects"
            icon={<HiArrowRight size={18} />}
            href="https://github.com/thesakshijaiswal"
            title="View Full Projects"
            newTab
          />
        </div>
      </section>
    </>
  );
}
