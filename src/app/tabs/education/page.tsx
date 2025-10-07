import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import { HiAcademicCap } from "react-icons/hi2";
import EducationCard from "@/components/EducationCard";
import { GoTrophy } from "react-icons/go";
import { LiaMedalSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Educational background that built a strong foundation in technology and problem-solving, shaping the way I approach creating practical and scalable solutions.",
};

export default function EducationPage() {
  return (
    <section
      className="sm:ml-8"
      aria-labelledby="my-academic-path"
      role="tabpanel"
      tabIndex={0}
    >
      <header className="mb-10 flex items-center gap-4">
        <LogoBox className="size-20 place-content-center">
          <HiAcademicCap className="size-11" />
        </LogoBox>
        <h2 className="text-2xl font-bold">My Academic Path</h2>
      </header>
      <p className="mt-4 text-gray-500">
        From a curious learner to the Academic topper, my college journey was
        all about growth. Along the way, I balanced grades with passion, leading
        technical events that honed my leadership and creativity.
      </p>

      <section className="relative mt-8" aria-labelledby="Academic-timeline">
        <h3 id="timeline-heading" className="sr-only">
          Education Timeline
        </h3>
        <EducationCard />
      </section>

      <section className="mt-8" aria-labelledby="achievements">
        <h3 className="text-lg font-bold">Academic Achievements</h3>

        <div className="mt-6 grid h-96 grid-cols-4 grid-rows-4 gap-4">
          <LogoBox
            className="col-span-2 row-span-2 place-content-center p-3 md:p-5"
            aria-label="Final Year Rank Achievement"
          >
            <GoTrophy
              className="size-9 text-pink-500/70 dark:text-pink-300"
              aria-hidden="true"
            />
            <div className="mt-3 text-sm font-medium sm:text-base">
              2nd Rank in Final Year University Exams
            </div>
          </LogoBox>
          <LogoBox
            className="col-span-2 col-start-1 row-span-2 row-start-3 place-content-center p-3 md:p-5"
            aria-label="Tech Expo Award"
          >
            <IoSettingsOutline
              className="size-9 text-emerald-500 dark:text-emerald-300"
              aria-hidden="true"
            />
            <div className="mt-3 text-sm font-medium sm:text-base">
              National Tech Expo Winner (FundVerse)
            </div>
          </LogoBox>
          <LogoBox
            className="col-span-2 col-start-3 row-span-4 row-start-1 place-content-center p-3 md:p-5"
            aria-label="Academic Excellence Award"
          >
            <LiaMedalSolid
              className="size-11 text-orange-400 dark:text-orange-300"
              aria-hidden="true"
            />
            <div className="mt-3 text-sm font-medium sm:text-base">
              Consistent Academic Excellence Award
            </div>
          </LogoBox>
        </div>
      </section>
    </section>
  );
}
