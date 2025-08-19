import { ReactNode } from "react";

interface LogoBoxProps {
  children: ReactNode;
  className?: string;
}

export default function LogoBox({ children, className }: LogoBoxProps) {
  return (
    <div
      className={`shrink-0 border-gray-300/70 grid size-20  dark:border-white/20 rounded-xl border bg-gradient-to-b from-white to-gray-100 shadow-md dark:bg-gradient-to-t dark:from-gray-900 dark:to-[#242533] ${className}`}
    >
      {children}
    </div>
  );
}
