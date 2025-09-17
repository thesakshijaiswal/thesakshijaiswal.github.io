import Image from "next/image";
import Logo1 from "@/assets/experience/exp_logo_1.webp";
import Logo2 from "@/assets/experience/exp_logo_2.webp";
import Logo3 from "@/assets/experience/exp_logo_3.svg";
import { LogoFlipDeck, LogoItem } from "@/components/LogoFlipAnimation";

export default function ExperienceFlip() {
  return (
    <LogoFlipDeck
      items={[
        <LogoItem key="react" className="bg-red-50 dark:bg-white pl-2 pr-1.5">
          <Image src={Logo1} alt="ansrsouce" />
        </LogoItem>,
        <LogoItem key="nextjs" className="overflow-hidden">
          <Image src={Logo2} alt="d2l" />
        </LogoItem>,
        <LogoItem key="javascript" className="bg-[#22125b] px-1">
          <Image src={Logo3} alt="freelance" />
        </LogoItem>,
      ]}
    />
  );
}
