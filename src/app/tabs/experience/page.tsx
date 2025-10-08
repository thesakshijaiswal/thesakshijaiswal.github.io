import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import ExperienceFlip from "@/components/ExperienceFlip";
import ExperienceCard from "@/components/ExperienceCard";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience across full-stack development and product delivery, with a focus on building reliable solutions and working closely with teams to turn ideas into functional outcomes.",
};

export default function ExperiencePage() {
  return (
    <div className="sm:ml-8">
      <div className="mb-10 flex items-center gap-4">
        <LogoBox className="size-20 place-content-center">
          <ExperienceFlip />
        </LogoBox>
        <h1 className="text-2xl font-bold">My Experience</h1>
      </div>

      <p className="mt-4 text-gray-500">
        It&apos;s all about building things that matter, from crafting clean,
        production ready web apps to shaping engaging learning experiences for
        global audiences. Along the way I&apos;ve learned to move fast, solve
        real problems, and create work that leaves an impact.
      </p>

      <div className="mt-5 space-y-8">
        <ExperienceCard />
      </div>
    </div>
  );
}
