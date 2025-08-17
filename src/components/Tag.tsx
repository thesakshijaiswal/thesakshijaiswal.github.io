import { ReactNode } from "react";

interface TagProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export default function Tag({ icon, label, className }: TagProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-400/40 bg-transparent text-sm text-gray-700 dark:text-gray-300 cursor-pointer transition duration-300 ${className}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
