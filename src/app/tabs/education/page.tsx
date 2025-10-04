import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import { HiAcademicCap } from "react-icons/hi2";
import { educationData } from "@/data/educationData";
import GlowLine from "@/components/GlowLine";
import { GiAchievement } from "react-icons/gi";

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

      <div className="relative mt-8">
        <GlowLine orientation="vertical" position="13px" fallbackProgress={1} />
        <ol className="space-y-8">
          {educationData.map((data) => (
            <li key={data.id} className="relative cursor-pointer pl-8 md:pl-10">
              <div className="absolute top-6 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-600">
                <HiAcademicCap className="size-4" />
              </div>
              <LogoBox className="p-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap justify-between space-y-1 gap-x-4 text-sm text-gray-700 dark:text-gray-400">
                    <h2 className="font-medium dark:text-pink-200/80">
                      {data.name}
                    </h2>
                    <span>{data.duration}</span>
                  </div>

                  <div className="flex flex-wrap justify-between gap-x-4 text-sm lg:space-y-1.5">
                    <span>{data.degree}</span>
                    <span className="text-gray-700 dark:text-gray-400">
                      {data.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <GiAchievement className="size-4 text-orange-300" />
                    <span>{data.score}</span>
                  </div>
                </div>
              </LogoBox>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
