import SocialHandles from "@/components/SocialHandles";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300/70 md:bg-gray-100/30 dark:border-white/20 md:dark:bg-[#242533]">
      <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-7 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold text-gray-600 md:text-2xl dark:text-gray-300">
              Let&apos;s Work Together
            </h2>
            <p className="mt-1 text-center text-xs whitespace-nowrap text-gray-800 md:text-sm dark:text-gray-400">
              Collabs, roles, or big ideas? Let&apos;s make it happen
            </p>
            <SocialHandles />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm font-semibold tracking-wide text-gray-600 uppercase md:text-base dark:text-gray-300">
              Response Time
            </p>
            <p className="mt-1 text-xl font-semibold text-emerald-500 md:text-2xl dark:text-emerald-400">
              &lt;3 hours
            </p>
            <p className="mt-1 text-xs text-gray-800 md:text-sm dark:text-gray-400">
              You&apos;ll hear back from me quickly!
            </p>
          </div>
        </div>
        <div>
          <p className="mt-9 text-center text-xs tracking-wide text-gray-800 md:mt-14 md:text-sm dark:text-gray-400">
            © {new Date().getFullYear()} Sakshi Jaiswal. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-800 md:mt-3 dark:text-gray-400">
            <span>Made With</span>
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png"
              alt="Red Heart"
              width="18"
              height="18"
            />
          </p>
        </div>
      </section>
    </footer>
  );
}
