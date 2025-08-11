"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Skills", href: "/tabs/skills" },
  { label: "Projects", href: "/tabs/projects" },
  { label: "Experience", href: "/tabs/experience" },
  { label: "Contact", href: "/tabs/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="text-muted mt-11 hidden min-w-44 shrink-0 text-sm md:block">
      <ul>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={link.label}
              className="mb-3 ml-2 text-sm font-medium tracking-wider"
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1.5 rounded-md px-2 py-1 font-medium transition-colors ${
                  isActive
                    ? "bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
                    : "hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100"
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
