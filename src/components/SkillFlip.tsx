import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";
import { LogoFlipDeck, LogoItem } from "@/components/LogoFlipAnimation";
export default function SkillFlip() {
  return (
    <LogoFlipDeck
      items={[
        <LogoItem key="react" className="bg-sky-400 text-white">
          <FaReact />
        </LogoItem>,
        <LogoItem
          key="nextjs"
          className="bg-black text-white dark:bg-white dark:text-neutral-900"
        >
          <SiNextdotjs />
        </LogoItem>,
        <LogoItem
          key="javascript"
          className="bg-yellow-300 text-neutral-900 dark:text-white"
        >
          <SiJavascript />
        </LogoItem>,
        <LogoItem
          key="typescript"
          className="bg-blue-400 text-neutral-900 dark:bg-white dark:text-blue-400"
        >
          <SiTypescript />
        </LogoItem>,
        <LogoItem key="tailwind" className="bg-sky-500 text-white">
          <SiTailwindcss />
        </LogoItem>,
        <LogoItem key="html" className="bg-orange-500 text-white">
          <SiHtml5 />
        </LogoItem>,
      ]}
    />
  );
}
