import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import ExperienceFlip from "@/components/ExperienceFlip";
import { experienceData } from "@/data/experienceData";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience across full-stack development and product delivery, with a focus on building reliable solutions and working closely with teams to turn ideas into functional outcomes.",
};

export default function ExperiencePage() {
  return (
    <div className="sm:ml-8">
      <div className="flex mb-10 items-center gap-4">
        <LogoBox className="place-content-center size-20">
          <ExperienceFlip />
        </LogoBox>
        <h1 className="text-2xl font-bold">My Experience</h1>
      </div>

      <p className="mt-4 text-gray-500">
        This is the Experience section content.
      </p>

      <div className="mt-5 space-y-8">
        {experienceData.map((data) => (
          <LogoBox key={data.name} className="space-y-3 lg:px-5 py-3 px-3">
            <div className="flex justify-between items-center">
              <div className="flex lg:gap-4 gap-2 items-center">
                <LogoBox className="hidden sm:flex size-10 items-center justify-center text-xs">
                  Logo
                </LogoBox>
                <h2 className="md:text-lg font-semibold text-base">
                  {data.name}
                </h2>
              </div>
              <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400">
                {data.duration}
              </p>
            </div>

            <h3 className="text-sm font-medium">{data.role}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-500 text-sm">
              {data.description.map((point, i) => (
                <li key={i} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
          </LogoBox>
        ))}
      </div>
    </div>
  );
}
