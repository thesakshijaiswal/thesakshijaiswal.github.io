import { ReactNode } from "react";

interface TagProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export default function Tag({ icon, label, className }: TagProps) {
  return (
    <div
      className={`inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-400/40 bg-transparent px-3 py-1 text-sm text-gray-700 transition duration-300 dark:text-gray-300 ${className}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
