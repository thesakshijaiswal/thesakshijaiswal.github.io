import { socialsData } from "@/data/socialsData";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300/70 bg-gray-100/30 dark:border-white/20 dark:bg-[#242533]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div>
          <div>
            <h4 className="text-2xl font-semibold">Let&apos;s Work Together</h4>
            <p className="mt-1 text-sm text-gray-800 dark:text-gray-400">
              Collabs, roles, or big ideas? Let&apos;s make it happen
            </p>
            <nav className="mt-3 flex items-center gap-3">
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
          </div>
        </div>
      </section>
    </footer>
  );
}
