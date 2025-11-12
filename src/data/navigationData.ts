import {
  FaUserTie,
  FaCode,
  FaBriefcase,
  FaFileCode,
  FaUserGraduate,
  FaComments,
} from "react-icons/fa";
import { IconType } from "react-icons";

export interface navLinks {
  label: string;
  href: string;
  icon: IconType;
}

export const navigationData: navLinks[] = [
  { 
    label: "Who am I ?",
    href: "/",
    icon: FaUserTie 
  },
  { 
    label: "My Superpowers",
    href: "/tabs/skills",
    icon: FaCode 
  },
  { label: "Experience & Impact",
    href: "/tabs/experience",
    icon: FaBriefcase 
  },
  { 
    label: "Things I've Built",
    href: "/tabs/projects",
    icon: FaFileCode 
  },
  { 
    label: "Academic Path",
    href: "/tabs/education",
    icon: FaUserGraduate 
  },
  { 
    label: "Let's Talk",
    href: "/tabs/contact",
    icon: FaComments 
  },
];
