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
        <LogoBox className="place-content-center">
          <ExperienceFlip />
        </LogoBox>
        <h1 className="text-2xl font-bold">My Experience</h1>
      </div>

      <p className="mt-4 text-gray-500">
        This is the Experience section content.
      </p>

      <div className="mt-5 space-y-8">
        {experienceData.map((data) => (
          <div key={data.name} className="space-y-3">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">{data.name}</h2>
              <p className="text-sm text-gray-500">{data.duration}</p>
            </div>
            <h3 className="text-md font-medium">{data.role}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {data.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
