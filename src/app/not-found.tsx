import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/Button";
import { HiArrowRight } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="hero-gradient">
      <div className="mx-auto max-w-5xl px-4 py-8 pb-40 text-center text-white md:pt-16">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-wider md:text-3xl">
            Sakshi
          </a>
          <ThemeToggle />
        </div>

        <div className="mt-28 flex flex-col items-center">
          <h3 className="mb-2 -ml-1 text-4xl leading-tight md:text-6xl lg:text-7xl">
            404
          </h3>
          <div className="pb-12 font-mono text-xs leading-snug text-slate-300 md:w-2xl md:text-lg lg:text-xl">
            Like a broken link in code, this path leads nowhere. Let&apos;s get
            back to the journey and keep exploring.
          </div>
          <Button
            text="Go Back Home"
            icon={<HiArrowRight size={16} />}
            href="/"
            title="Go Back Home"
          />
        </div>
      </div>
    </div>
  );
}
