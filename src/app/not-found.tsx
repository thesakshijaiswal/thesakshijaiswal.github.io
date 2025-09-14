import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/Button";
import { HiArrowRight } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="hero-gradient">
      <div className="max-w-5xl px-4 py-8 text-white mx-auto text-center md:pt-16 pb-40">
        <div className="flex justify-between items-center">
          <a href="#" className="text-lg md:text-3xl font-bold tracking-wider">
            Sakshi
          </a>
          <ThemeToggle />
        </div>

        <div className="mt-28 flex flex-col items-center">
          <h3 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-2 -ml-1">
            404
          </h3>
          <div className="font-mono md:text-lg lg:text-xl text-xs text-slate-300 leading-snug md:w-2xl pb-12">
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
