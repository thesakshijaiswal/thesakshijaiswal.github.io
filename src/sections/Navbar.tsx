"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaUserTie,
  FaCode,
  FaBriefcase,
  FaFileCode,
  FaUserGraduate,
  FaComments,
} from "react-icons/fa";

const navLinks = [
  {
    label: "Who am I ?",
    href: "/",
    icon: FaUserTie,
  },
  {
    label: "My Superpowers",
    href: "/tabs/skills",
    icon: FaCode,
  },
  {
    label: "Experience & Impact",
    href: "/tabs/experience",
    icon: FaBriefcase,
  },
  {
    label: "Things I've Built",
    href: "/tabs/projects",
    icon: FaFileCode,
  },
  {
    label: "Academic Path",
    href: "/tabs/education",
    icon: FaUserGraduate,
  },
  {
    label: "Let's Talk",
    href: "/tabs/contact",
    icon: FaComments,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="mt-11 hidden min-w-44 shrink-0 text-sm md:block">
      <ul>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const IconComponent = link.icon;

          return (
            <li
              key={link.label}
              className="mb-2 ml-2 text-sm font-medium tracking-wider"
            >
              <Link
                href={link.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-500 text-gray-100"
                    : "text-gray-600 hover:bg-gray-100/70 hover:text-gray-950 dark:text-gray-300 dark:hover:bg-[#2d2f3e] dark:hover:text-gray-100"
                }`}
              >
                <IconComponent
                  className={`shrink-0 text-base ${
                    isActive
                      ? "text-gray-100"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                />
                <span className="leading-none">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
