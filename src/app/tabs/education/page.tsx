import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import { HiAcademicCap } from "react-icons/hi2";
import WIP from "@/components/WIP";
export const metadata: Metadata = {
  title: "Education",
  description:
    "Educational background that built a strong foundation in technology and problem-solving, shaping the way I approach creating practical and scalable solutions.",
};

export default function EducationPage() {
  return (
    <div className="sm:ml-8">
      <div className="flex mb-10 items-center gap-4">
        <LogoBox className="place-content-center size-20">
          <HiAcademicCap className="size-11" />
        </LogoBox>
        <h1 className="text-2xl font-bold">My Academic Path</h1>
      </div>
      <p className="mt-4 text-gray-500">
        This is the Education section content.
      </p>
      <WIP />
    </div>
  );
}
