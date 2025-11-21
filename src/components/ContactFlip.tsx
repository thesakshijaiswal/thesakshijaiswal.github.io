import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { LogoFlipDeck, LogoItem } from "@/components/LogoFlipAnimation";
export default function ContactFlip() {
  return (
    <LogoFlipDeck
      items={[
        <LogoItem key="gmail" className="bg-green-100 text-blue-500">
          <SiGmail />
        </LogoItem>,
        <LogoItem
          key="github"
          className="bg-black text-white dark:bg-white dark:text-neutral-900"
        >
          <FaGithub />
        </LogoItem>,
        <LogoItem key="linkedin" className="bg-blue-500 text-white">
          <FaLinkedinIn />
        </LogoItem>,
        <LogoItem
          key="twitter"
          className="bg-black text-white dark:bg-white dark:text-neutral-900"
        >
          <FaXTwitter />
        </LogoItem>,
        <LogoItem key="phone" className="bg-indigo-500 text-white">
          <BiSolidPhoneCall />
        </LogoItem>,
      ]}
    />
  );
}
