import { ReactNode } from "react";

interface LogoBoxProps {
  children: ReactNode;
  className?: string;
}

export default function LogoBox({ children, className }: LogoBoxProps) {
  return (
    <div
      className={`grid shrink-0 rounded-xl border border-gray-300/70 bg-gradient-to-b from-white to-gray-100 shadow-md dark:border-white/20 dark:bg-gradient-to-t dark:from-gray-900 dark:to-[#242533] ${className}`}
    >
      {children}
    </div>
  );
}
