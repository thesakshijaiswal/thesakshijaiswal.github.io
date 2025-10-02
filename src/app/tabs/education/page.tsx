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

      <div className="relative mt-8">
        <div className="absolute top-0 bottom-0 left-5 w-px bg-slate-300 dark:bg-gray-700" />

        <ol className="space-y-8">
          {educationData.map((data) => (
            <li key={data.id} className="relative pl-14">
              <div className="absolute top-6 left-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-600">
                <HiAcademicCap className="size-4" />
              </div>

              <LogoBox className="p-4">
                <div className="space-y-1">
                  <h2 className="text-sm font-medium">{data.name}</h2>

                  <div className="flex flex-col justify-between text-sm text-gray-700 lg:flex-row dark:text-gray-400">
                    <span>{data.degree}</span>
                    <span>{data.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{data.score}</span>
                    <span>{data.duration}</span>
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
