import { socialsData } from "@/data/socialsData";

export default function SocialHandles() {
  return (
    <nav className="mt-3 flex items-center gap-4">
      {socialsData.map(({ icon: Icon, link, label }) => {
        return (
          <a
            className="text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-gray-800 active:scale-95 sm:text-2xl dark:text-gray-400 dark:hover:text-white"
            key={label}
            target="_blank"
            href={link}
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon className="size-7" />
          </a>
        );
      })}
    </nav>
  );
}
