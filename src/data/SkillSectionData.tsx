import { ReactNode } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaStripeS,
  FaShopify,
  FaFigma,
} from "react-icons/fa";
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

export type SkillTag = {
  icon: ReactNode;
  label: string;
  className?: string;
};

export const SkillSections: { title: string; skills: SkillTag[] }[] = [
  {
    title: "Crafting Stunning Interfaces",
    skills: [
      {
        icon: <FaHtml5 size={17} className="text-orange-500" />,
        label: "HTML",
      },
      {
        icon: <FaCss3Alt size={17} className="text-blue-500" />,
        label: "CSS",
      },
      {
        icon: <SiJavascript size={13} className="text-yellow-400" />,
        label: "Javascript",
      },
      {
        icon: <SiTypescript size={13} className="text-blue-500" />,
        label: "Typescript",
      },
      {
        icon: <FaReact size={16} className="text-sky-400" />,
        label: "React.js",
      },
      {
        icon: <RiNextjsFill size={19} />,
        label: "Next.js",
      },
      {
        icon: <RiTailwindCssFill size={17} className="text-sky-400" />,
        label: "Tailwind CSS",
      },
      {
        icon: <TbBrandFramerMotion size={15} className="text-pink-500" />,
        label: "Framer Motion",
      },
      {
        icon: <SiRedux size={13} className="text-blue-500" />,
        label: "Redux",
      },
    ],
  },
  {
    title: "Building Robust Backends",
    skills: [
      {
        icon: <FaNodeJs size={16} className="text-green-500" />,
        label: "Node.js",
      },
      {
        icon: <SiExpress size={16} className="text-blue-500" />,
        label: "Express",
      },
      {
        icon: <SiMongodb size={16} className="text-green-500" />,
        label: "MongoDB",
      },
    ],
  },
  {
    title: "Modern Tooling",
    skills: [
      {
        icon: <FaGitAlt size={19} className="text-orange-500" />,
        label: "Git",
      },
      { icon: <FaGithub size={16} />, label: "Github" },
      {
        icon: <FaStripeS size={13} className="text-indigo-500" />,
        label: "Stripe",
      },
      {
        icon: <FaShopify size={16} className="text-lime-500" />,
        label: "Shopify",
      },
      {
        icon: <FaFigma size={13} className="text-pink-400" />,
        label: "Figma",
      },
      {
        icon: <SiPostman size={16} className="text-orange-400" />,
        label: "Postman",
      },
      {
        icon: <SiMailtrap size={16} className="text-green-500" />,
        label: "Mailtrap",
      },
      { icon: <SiVercel size={13} />, label: "Vercel" },
      { icon: <SiRender size={11} />, label: "Render" },
    ],
  },
];
