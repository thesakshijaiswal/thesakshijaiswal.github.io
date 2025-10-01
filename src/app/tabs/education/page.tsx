import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import { HiAcademicCap } from "react-icons/hi2";
import { educationData } from "@/data/educationData";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Educational background that built a strong foundation in technology and problem-solving, shaping the way I approach creating practical and scalable solutions.",
};

export default function EducationPage() {
  return (
    <div className="sm:ml-8">
      <div className="mb-10 flex items-center gap-4">
        <LogoBox className="size-20 place-content-center">
          <HiAcademicCap className="size-11" />
        </LogoBox>
        <h1 className="text-2xl font-bold">My Academic Path</h1>
      </div>
      <p className="mt-4 text-gray-500">
        This is the Education section content.
      </p>
      <div className="mt-5">
        {educationData.map((data) => {
          return (
            <LogoBox key={data.id} className="mb-5 p-4">
              <div className="space-y-1">
                <h2 className="text-sm font-medium">{data.name}</h2>
                <div className="flex flex-col justify-between text-sm text-gray-700 lg:flex-row dark:text-gray-400">
                  <h2>{data.degree}</h2>
                  <p className="">{data.location}</p>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <p>{data.score}</p>
                  <p>{data.duration}</p>
                </div>
              </div>
            </LogoBox>
          );
        })}
      </div>
    </div>
  );
}
