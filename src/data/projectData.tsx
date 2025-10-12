import { ReactNode } from "react";
import { FaReact, FaNodeJs, FaShopify, FaFigma } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

export interface SkillTag {
  icon: ReactNode;
  label: string;
  className?: string;
}

export interface ProjectData {
  id: number;
  title: string;
  image: string;
  description: string;
  skills: SkillTag[];
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "BE Commerce",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description:
      "A full-stack eCommerce platform with payments, product management, and reviews.",
    skills: [
      {
        icon: <FaReact size={16} className="text-sky-400" />,
        label: "React.js",
      },
      { icon: <SiRedux size={13} className="text-blue-500" />, label: "Redux" },
      {
        icon: <FaNodeJs size={16} className="text-green-500" />,
        label: "Node.js",
      },
      {
        icon: <SiExpress size={15} className="text-gray-500" />,
        label: "Express",
      },
      {
        icon: <SiMongodb size={16} className="text-green-500" />,
        label: "MongoDB",
      },
      {
        icon: <RiTailwindCssFill size={16} className="text-sky-400" />,
        label: "Tailwind CSS",
      },
    ],
  },
  {
    id: 2,
    title: "Rewarder",
    image:
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80",
    description:
      "A gamified task reward app designed to build consistency with micro-goals.",
    skills: [
      {
        icon: <FaReact size={16} className="text-sky-400" />,
        label: "React.js",
      },
      {
        icon: <SiExpress size={13} className="text-blue-500" />,
        label: "Express",
      },
      {
        icon: <RiTailwindCssFill size={16} className="text-sky-400" />,
        label: "Tailwind CSS",
      },
      {
        icon: <FaNodeJs size={16} className="text-green-500" />,
        label: "Node.js",
      },
    ],
  },
  {
    id: 3,
    title: "FundVerse",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description:
      "A platform enabling transparent fundraising with secure transactions and project updates.",
    skills: [
      {
        icon: <FaReact size={16} className="text-sky-400" />,
        label: "React.js",
      },
      {
        icon: <SiJavascript size={13} className="text-yellow-400" />,
        label: "JavaScript",
      },
      {
        icon: <FaNodeJs size={16} className="text-green-500" />,
        label: "Node.js",
      },
    ],
  },
  {
    id: 4,
    title: "Fusion",
    image:
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800&q=80",
    description:
      "A curated UI showcase built with Next.js and TypeScript to experiment with animations and layouts.",
    skills: [
      { icon: <RiNextjsFill size={19} />, label: "Next.js" },
      {
        icon: <SiTypescript size={13} className="text-blue-500" />,
        label: "TypeScript",
      },
      {
        icon: <RiTailwindCssFill size={17} className="text-sky-400" />,
        label: "Tailwind CSS",
      },
      {
        icon: <TbBrandFramerMotion size={15} className="text-pink-500" />,
        label: "Framer Motion",
      },
      { icon: <FaFigma size={13} className="text-pink-400" />, label: "Figma" },
    ],
  },
];
