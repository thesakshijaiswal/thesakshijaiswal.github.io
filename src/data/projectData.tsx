import { ReactNode } from "react";
import { FaReact, FaNodeJs, FaFigma, FaHardHat } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiSolidity,
  SiThirdweb,
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
  repo: string;
  live: string;
  details: string[];
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
    repo: "https://github.com/thesakshijaiswal/be-commerce",
    live: "https://be-commerce-q7nw.onrender.com/",
    details: [
      "BE-Commerce started as my attempt to build a complete online shopping experience from scratch, something that went beyond static product listings. I wanted users to browse, review, and actually make purchases in real time.",
      "I designed a clean, responsive UI with Tailwind CSS that feels natural on any device. The product pages, category filters, and cart flow were all built with a focus on smooth transitions and accessibility.",
      "On the backend, I created a secure authentication system using JWT and bcrypt, ensuring users could safely register, log in, and manage their profiles.",
      "Built on the MERN stack with Express and MongoDB, the system handles products, users, and images efficiently through a well structured REST API and Cloudinary integration.",
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
    repo: "https://github.com/thesakshijaiswal/rewarder",
    live: "https://rewarder-dashboard.onrender.com/",
    details: [
      "Rewarder was my take on making social media more purposeful a gamified MERN-based app where users earn rewards for consistent engagement and meaningful activity.",
      "I integrated Twitter and Reddit APIs to bring real-time content into the platform, allowing users to explore, save, report, and share posts while maintaining a smooth and responsive experience.",
      "The system uses secure, role-based authentication with JWT and bcrypt, along with protected admin routes for efficient user and content moderation.",
      "An analytics-driven admin dashboard displays charts and metrics for posts, users, and platform activity, all optimized for performance with a 100/100 PageSpeed score.",
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
      {
        icon: <RiTailwindCssFill size={16} className="text-sky-400" />,
        label: "Tailwind CSS",
      },
      {
        icon: <SiSolidity size={16} className="text-white" />,
        label: "Solidity",
      },
      {
        icon: <FaHardHat size={16} className="text-yellow-300" />,
        label: "Hardhat",
      },
      {
        icon: <SiThirdweb size={16} className="text-pink-600" />,
        label: "ThirdWeb",
      },
    ],
    repo: "https://github.com/thekiranmahajan/FundVerse",
    live: "https://fundverse-by-us.vercel.app",
    details: [],
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
    repo: "https://github.com/thesakshijaiswal/fusion",
    live: "https://fusion-dashboard-ten.vercel.app/",
    details: [],
  },
];
