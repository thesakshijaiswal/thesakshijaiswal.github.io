import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import { HiAcademicCap } from "react-icons/hi2";
import EducationCard from "@/components/EducationCard";

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
        From a curious learner to the Academic topper, my college journey was
        all about growth. Along the way, I balanced grades with passion, leading
        technical events that honed my leadership and creativity.
      </p>

      <div className="relative mt-8">
        <EducationCard />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold">Academic Achievements</h3>

        <div className="mt-6 grid h-96 grid-cols-4 grid-rows-4 gap-4">
          <LogoBox className="col-span-2 row-span-2">1</LogoBox>
          <LogoBox className="col-span-2 col-start-1 row-span-2 row-start-3">
            2
          </LogoBox>
          <LogoBox className="col-span-2 col-start-3 row-span-4 row-start-1">
            3
          </LogoBox>
        </div>
      </div>
    </div>
  );
}
