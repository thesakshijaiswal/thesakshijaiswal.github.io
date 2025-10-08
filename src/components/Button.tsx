import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  icon: ReactNode;
  title?: string;
  href?: string;
  className?: string;
  onClick?: (e?: React.MouseEvent) => void;
}

export default function Button({
  text,
  icon,
  title,
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const buttonClasses = `
    group relative flex items-center justify-center text-base rounded-xl 
    dark:bg-gray-900 bg-gray-800 px-8 py-2 font-semibold text-white 
    transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 
    hover:shadow-gray-600/30 whitespace-nowrap 
    w-full sm:w-auto ${className}  
  `;

  const content = (
    <>
      <span>{text}</span>
      <span className="ml-2 flex items-center">{icon}</span>
    </>
  );

  const isFileLink =
    href?.endsWith(".pdf") || href?.endsWith(".doc") || href?.endsWith(".txt");

  return (
    <div className="group relative flex w-full sm:w-auto">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-pink-300 to-indigo-500 opacity-60 blur-lg filter transition-all duration-1000 group-hover:duration-200 dark:opacity-45 dark:group-hover:opacity-65"></div>

      {href ? (
        isFileLink ? (
          <a href={href} download title={title} className={buttonClasses}>
            {content}
          </a>
        ) : (
          <Link href={href} title={title} className={buttonClasses}>
            {content}
          </Link>
        )
      ) : (
        <button onClick={onClick} title={title} className={buttonClasses}>
          {content}
        </button>
      )}
    </div>
  );
}
