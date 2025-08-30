import { Metadata } from "next";
import SkillFlip from "@/components/SkillFlip";
import LogoBox from "@/components/LogoBox";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="relative flex">
      <div className="sm:ml-8">
        <div className="flex mb-10 items-center gap-4">
          <LogoBox className="place-content-center">
            <SkillFlip />
          </LogoBox>
          <h1 className="text-2xl font-bold">Things I&apos;ve Built</h1>
        </div>
      </div>
    </div>
  );
}
