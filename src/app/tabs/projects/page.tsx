import { Metadata } from "next";
import SkillFlip from "@/components/SkillFlip";
import LogoBox from "@/components/LogoBox";
import WIP from "@/components/WIP";

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
        <div className="mb-10 flex items-center gap-4">
          <LogoBox className="size-20 place-content-center">
            <SkillFlip />
          </LogoBox>
          <h1 className="text-2xl font-bold">Things I&apos;ve Built</h1>
        </div>
      </section>

      <WIP />
    </>
  );
}
