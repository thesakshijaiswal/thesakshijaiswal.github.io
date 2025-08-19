import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";
import { LogoFlipDeck, LogoItem } from "@/components/LogoFlipAnimation";
import LogoBox from "@/components/LogoBox";

export default function SkillsPage() {
  return (
    <div className="relative flex">
      <div className="sm:ml-8">
        <div className="flex mb-10 items-center gap-4">
          <LogoBox className="place-content-center">
            <LogoFlipDeck
              items={[
                <LogoItem key="react" className="bg-sky-400 text-white">
                  <FaReact />
                </LogoItem>,
                <LogoItem
                  key="nextjs"
                  className="bg-black dark:bg-white dark:text-neutral-900 text-white"
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
                  className="dark:text-blue-400 text-neutral-900 bg-blue-400 dark:bg-white"
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
          </LogoBox>
          <h1 className="text-2xl font-bold">My SuperPowers</h1>
        </div>
      </div>
    </div>
  );
}
