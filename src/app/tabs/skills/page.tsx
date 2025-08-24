import SkillFlip from "@/components/SkillFlip";
import LogoBox from "@/components/LogoBox";
import SkillCard from "@/components/SkillCard";
import Tag from "@/components/Tag";
import { LuBrainCircuit } from "react-icons/lu";
import {
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaStripeS,
  FaShopify,
  FaFigma,
  FaReact,
} from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiMailtrap,
  SiVercel,
  SiRender,
  SiRedux,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function SkillsPage() {
  return (
    <div className="relative flex">
      <div className="sm:ml-8">
        <div className="flex mb-10 items-center gap-4">
          <LogoBox className="place-content-center">
            <SkillFlip />
          </LogoBox>
          <h1 className="text-2xl font-bold">My SuperPowers</h1>
        </div>

        <div className="mt-4 text-gray-600 dark:text-gray-500 space-y-6 leading-relaxed text-sm md:text-base">
          <p>
            Every creator has their toolkit, but I like to think of mine as
            superpowers. From weaving clean UIs to powering up backends, these
            are the skills that help me turn ideas into experiences.
          </p>
        </div>

        <div className="py-8 lg:px-2">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <SkillCard icon={<LuBrainCircuit />} label="Problem Solving" />
            <SkillCard
              icon={<MdAutoGraph />}
              label="Performance Optimization"
            />
            <SkillCard icon={<FaLaptopCode />} label="Responsive Design" />
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <h4 className="flex items-center gap-2 text-lg font-bold">
            Crafting Stunning Interfaces
          </h4>

          <div className="flex gap-2 flex-wrap mb-8">
            <Tag
              icon={<FaHtml5 size={17} className="text-orange-500" />}
              label="HTML"
              className="text-xs"
            />
            <Tag
              icon={<FaCss3Alt size={17} className="text-blue-500" />}
              label="CSS"
              className="text-xs"
            />
            <Tag
              icon={<SiJavascript size={13} className="text-yellow-400" />}
              label="Javascript"
              className="text-xs"
            />
            <Tag
              icon={<SiTypescript size={13} className="text-blue-500" />}
              label="Typescript"
              className="text-xs"
            />
            <Tag
              icon={<FaReact size={16} className="text-sky-400" />}
              label="React.js"
              className="text-xs"
            />
            <Tag
              icon={<RiNextjsFill size={19} />}
              label="Next.js"
              className="text-xs"
            />
            <Tag
              icon={<RiTailwindCssFill size={17} className="text-sky-400" />}
              label="Tailwind CSS"
              className="text-xs"
            />
            <Tag
              icon={<TbBrandFramerMotion size={15} className="text-pink-500" />}
              label="Framer Motion"
              className="text-xs"
            />
            <Tag
              icon={<SiRedux size={13} className="text-blue-500" />}
              label="Redux"
              className="text-xs"
            />
          </div>

          <h4 className="flex items-center gap-2 text-lg font-bold">
            Building Robust Backends
          </h4>

          <div className="flex gap-2 flex-wrap mb-8">
            <Tag
              icon={<FaNodeJs size={16} className="text-green-500" />}
              label="Node.js"
              className="text-xs"
            />
            <Tag
              icon={<SiExpress size={16} className="text-blue-500" />}
              label="Express"
              className="text-xs"
            />
            <Tag
              icon={<SiMongodb size={16} className="text-green-500" />}
              label="MongoDB"
              className="text-xs"
            />
          </div>

          <h4 className="flex items-center gap-2 text-lg font-bold">
            Modern Tooling
          </h4>

          <div className="flex gap-2 flex-wrap mb-8">
            <Tag
              icon={<FaGitAlt size={19} className="text-orange-500" />}
              label="Git"
              className="text-xs"
            />
            <Tag
              icon={<FaGithub size={16} />}
              label="Github"
              className="text-xs"
            />
            <Tag
              icon={<FaStripeS size={13} className="text-indigo-500" />}
              label="Stripe"
              className="text-xs"
            />
            <Tag
              icon={<FaShopify size={16} className="text-lime-500" />}
              label="Shopify"
              className="text-xs"
            />
            <Tag
              icon={<FaFigma size={13} className="text-pink-400" />}
              label="Figma"
              className="text-xs"
            />
            <Tag
              icon={<SiPostman size={16} className="text-orange-400" />}
              label="Postman"
              className="text-xs"
            />
            <Tag
              icon={<SiMailtrap size={16} className="text-green-500" />}
              label="Mailtrap"
              className="text-xs"
            />
            <Tag
              icon={<SiVercel size={13} />}
              label="Vercel"
              className="text-xs"
            />
            <Tag
              icon={<SiRender size={11} />}
              label="Render"
              className="text-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
