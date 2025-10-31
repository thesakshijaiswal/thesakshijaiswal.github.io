import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  icon: ReactNode;
  title?: string;
  href?: string;
  newTab?: boolean;
  className?: string;
  onClick?: (e?: React.MouseEvent) => void;
}

export default function Button({
  text,
  icon,
  title,
  href,
  newTab = false,
  className = "",
  onClick,
}: ButtonProps) {
  const buttonClasses = `
    group relative flex items-center justify-center text-base rounded-xl 
    dark:bg-gray-900 bg-gray-800 px-8 py-2 font-semibold text-white 
    transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 
    hover:shadow-gray-600/30 whitespace-nowrap ${className}`;

  const content = (
    <>
      <span>{text}</span>
      <span className="ml-2 flex items-center">{icon}</span>
    </>
  );

  const isFileLink =
    href?.endsWith(".pdf") || href?.endsWith(".doc") || href?.endsWith(".txt");

  const renderLink = () => {
    if (!href) return null;

    if (isFileLink) {
      return (
        <a href={href} download title={title} className={buttonClasses}>
          {content}
        </a>
      );
    }

    if (newTab) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
          className={buttonClasses}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} title={title} className={buttonClasses}>
        {content}
      </Link>
    );
  };

  return (
    <div className="group relative flex w-fit select-none">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-pink-300 to-indigo-500 opacity-60 blur-lg filter transition-all duration-1000 group-hover:duration-200 dark:opacity-45 dark:group-hover:opacity-65"></div>

      {href ? (
        renderLink()
      ) : (
        <button onClick={onClick} title={title} className={buttonClasses}>
          {content}
        </button>
      )}
    </div>
  );
}
