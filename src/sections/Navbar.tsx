"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Who am I ?", href: "/" },
  { label: "Skills", href: "/tabs/skills" },
  { label: "Experience", href: "/tabs/experience" },
  { label: "Projects", href: "/tabs/projects" },
  { label: "Education", href: "/tabs/education" },
  { label: "Contact", href: "/tabs/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="mt-11 hidden min-w-44 shrink-0 text-sm md:block">
      <ul>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={link.label}
              className="mb-2 ml-2 text-sm font-medium tracking-wider"
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1.5 rounded-md px-2 py-1 font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-gray-100"
                    : "hover:bg-gray-100/70 dark:hover:bg-[#2d2f3e]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
