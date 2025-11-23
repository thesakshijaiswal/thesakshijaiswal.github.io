import { FaLaptopCode } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { GoTrophy } from "react-icons/go";
import { LiaMedalSolid } from "react-icons/lia";
import { LogoFlipDeck, LogoItem } from "@/components/LogoFlipAnimation";
export default function EducationFlip() {
  return (
    <LogoFlipDeck
      items={[
        <LogoItem
          key="laptop"
          className="bg-neutral-900 text-emerald-300 dark:bg-emerald-300 dark:text-neutral-900"
        >
          <FaLaptopCode />
        </LogoItem>,
        <LogoItem key="academic cap" className="bg-slate-200 text-black">
          <HiAcademicCap />
        </LogoItem>,
        <LogoItem key="trophy" className="bg-blue-500 text-white">
          <GoTrophy />
        </LogoItem>,
        <LogoItem key="medal" className="bg-orange-400 text-white">
          <LiaMedalSolid />
        </LogoItem>,
      ]}
    />
  );
}
