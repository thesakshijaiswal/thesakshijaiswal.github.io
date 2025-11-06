import SocialHandles from "@/components/SocialHandles";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300/70 bg-gray-100/30 dark:border-white/20 dark:bg-[#242533]">
      <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-7 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-2xl font-semibold">Let&apos;s Work Together</h4>
            <p className="mt-1 text-center text-sm text-gray-800 dark:text-gray-400">
              Collabs, roles, or big ideas? Let&apos;s make it happen
            </p>
            <SocialHandles />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-md font-semibold tracking-wide text-gray-600 uppercase dark:text-gray-300">
              Response Time
            </p>
            <p className="mt-1 text-2xl font-semibold text-emerald-500 dark:text-emerald-400">
              &lt; 24 hours
            </p>
            <p className="mt-1 text-sm text-gray-800 dark:text-gray-400">
              You&apos;ll hear back from me quickly!
            </p>
          </div>
        </div>
        <div>
          <p className="mt-14 text-center text-sm tracking-wide">
            © {new Date().getFullYear()} Sakshi Jaiswal. All rights reserved.
          </p>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs">
            <span>Made With</span>{" "}
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png"
              alt="Red Heart"
              width="20"
              height="20"
            />
          </p>
        </div>
      </section>
    </footer>
  );
}
