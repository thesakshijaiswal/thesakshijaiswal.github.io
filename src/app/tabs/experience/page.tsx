import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import ExperienceFlip from "@/components/ExperienceFlip";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience across full-stack development and product delivery, with a focus on building reliable solutions and working closely with teams to turn ideas into functional outcomes.",
};

export default function ExperiencePage() {
  return (
    <div className="sm:ml-8">
      <div className="flex mb-10 items-center gap-4">
        <LogoBox className="place-content-center">
          <ExperienceFlip />
        </LogoBox>
        <h1 className="text-2xl font-bold">My Experience</h1>
      </div>
      <p className="mt-4 text-gray-500">
        This is the Experience section content.
      </p>
    </div>
  );
}
