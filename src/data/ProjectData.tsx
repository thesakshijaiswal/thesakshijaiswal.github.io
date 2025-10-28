import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaHardHat,
  FaRedditAlien,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiSolidity,
  SiThirdweb,
} from "react-icons/si";

import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiTwitterXLine,
} from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

import ProjectImg4 from "@/assets/projects/fusion-mock.webp";

export interface SkillTag {
  icon: ReactNode;
  label: string;
  className?: string;
}

export interface ProjectData {
  id: number;
  title: string;
  image: StaticImageData;
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
    image: ProjectImg4,
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
        icon: <SiExpress size={15} className="text-blue-500" />,
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
      {
        icon: <TbBrandFramerMotion size={16} className="text-pink-600" />,
        label: "Framer Motion",
      },
    ],
    repo: "https://github.com/thesakshijaiswal/be-commerce",
    live: "https://be-commerce-q7nw.onrender.com/",
    details: [
      "BE-Commerce started as my attempt to build a complete online shopping experience from scratch. I wanted users to browse, review, and actually make purchases in real time with stripe.",
      "I designed a clean, responsive UI with Tailwind CSS that feels natural on any device. Featuring shimmer loaders, pagination, and real-time order tracking timeline.",
      "On the backend, I created a secure authentication system using JWT, bcrypt, Google OAuth and mailtrap, ensuring users could safely register, log in, and manage their profiles.",
      "Built on the MERN stack with Express and MongoDB, the system handles products, users, and images efficiently through a well structured REST API and Cloudinary integration.",
    ],
  },
  {
    id: 2,
    title: "Rewarder",
    image: ProjectImg4,
    description:
      "A gamified task reward app designed to build consistency with micro-goals.",
    skills: [
      {
        icon: <FaReact size={16} className="text-sky-400" />,
        label: "React.js",
      },
      {
        icon: <SiExpress size={15} className="text-blue-500" />,
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
      {
        icon: <SiMongodb size={16} className="text-green-500" />,
        label: "MongoDB",
      },
      {
        icon: (
          <RiTwitterXLine size={16} className="text-black dark:text-white" />
        ),
        label: "Twitter API",
      },
      {
        icon: <FaRedditAlien size={16} className="text-orange-500" />,
        label: "Reddit API",
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
    image: ProjectImg4,
    description:
      "A platform enabling transparent fundraising with secure transactions and project updates.",
    skills: [
      {
        icon: <FaReact size={16} className="text-sky-400" />,
        label: "React.js",
      },
      {
        icon: (
          <SiJavascript
            size={13}
            className="text-yellow-500 dark:text-yellow-300"
          />
        ),
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
        icon: <SiSolidity size={16} className="text-black dark:text-white" />,
        label: "Solidity",
      },
      {
        icon: (
          <FaHardHat
            size={16}
            className="text-yellow-500 dark:text-yellow-300"
          />
        ),
        label: "Hardhat",
      },
      {
        icon: <SiThirdweb size={16} className="text-pink-600" />,
        label: "ThirdWeb",
      },
    ],
    repo: "https://github.com/thekiranmahajan/FundVerse",
    live: "https://fundverse-by-us.vercel.app",
    details: [
      "FundVerse started as my curiosity to see if crowdfunding could exist without middleman, built purely on trust and transparency through blockchain.",
      "I built it as a decentralized application on Ethereum using Solidity and React, deploying smart contracts on the Sepolia testnet to simulate real world blockchain transactions.",
      "Using Thirdweb and Hardhat, my team tackled challenges around gas optimization ensuring that every campaign from creation to donation or deletion remained secure and traceable.",
      "What began as an experiment evolved into a fully functional DApp counting 30+ active campaigns, earning 3rd prize at a national level expo for innovation in blockchain based systems.",
    ],
  },
  {
    id: 4,
    title: "Fusion",
    image: ProjectImg4,
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
      {
        icon: <RiTailwindCssFill size={17} className="text-indigo-400" />,
        label: "Tailwind Merge",
      },
      { icon: <FaFigma size={13} className="text-pink-400" />, label: "Figma" },
    ],
    repo: "https://github.com/thesakshijaiswal/fusion",
    live: "https://fusion-dashboard-ten.vercel.app/",
    details: [
      "This project started as an interactive experiment to create a playful, collaborative interface, inspired by Figma's real time multiplayer experience.",
      "I designed a custom multiplayer cursor and animated hero cards with drag-and-drop, giving users a sense of direct interaction and control.",
      "Infinite scroll effects, scroll triggered text reveals, and interactive hover animations were added with Framer Motion to keep the interface lively and engaging.",
      "Even supporting elements like FAQs and integrations were brought to life with smooth animations and bidirectional scrolling, delivering a polished, startup grade user experience.",
    ],
  },
];
