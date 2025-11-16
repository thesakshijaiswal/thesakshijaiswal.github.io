import Image from "next/image";
import Logo1 from "@/assets/projects/be-commerce.webp";
import Logo2 from "@/assets/projects/rewarder.svg";
import Logo3 from "@/assets/projects/fundverse.webp";
import Logo4 from "@/assets/projects/fusion.svg";
import { LogoFlipDeck, LogoItem } from "@/components/LogoFlipAnimation";

export default function ProjectFlip() {
  return (
    <LogoFlipDeck
      items={[
        <LogoItem
          key="be-commerce"
          className="bg-red-50 pr-1.5 pl-2 dark:bg-white"
        >
          <Image src={Logo1} alt="be-commerce" />
        </LogoItem>,
        <LogoItem key="rewarder" className="overflow-hidden bg-indigo-500">
          <Image src={Logo2} alt="rewarder" />
        </LogoItem>,
        <LogoItem key="fundverse" className="bg-[#22125b]">
          <Image src={Logo3} alt="fundverse" />
        </LogoItem>,
        <LogoItem key="fusion" className="bg-black">
          <Image src={Logo4} alt="fusion" />
        </LogoItem>,
      ]}
    />
  );
}
