import { FiMoon } from "react-icons/fi";
import FlipwordsAnimation from "@/components/FlipwordsAnimation";

export default function Hero() {
  return (
    <section className="hero-gradient">
      <header>
        <div className="max-w-5xl px-4 py-8 text-white md:mx-auto md:pb-40 md:pt-16">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-lg md:text-3xl font-bold tracking-wider"
            >
              Sakshi
            </a>
            <button
              aria-label="Switch to dark mode"
              className="p-2 rounded-lg hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 text-xl text-slate-200"
            >
              <FiMoon />
            </button>
          </div>
          <div className="mt-9 md:mt-28">
            <p className="text-sm md:text-xl lg:text-2xl font-medium tracking-wide text-slate-200 mb-2">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.15] text-white mb-2 -ml-1">
              Sakshi Jaiswal
            </h1>
            <div className="font-mono md:text-lg lg:text-xl text-xs font-normal text-slate-300 leading-snug hero-tagline">
              <div className="flex flex-wrap items-center gap-x-2">
                <span>Web browsers are my canvas and</span>
                <span className="flex items-center gap-2">
                  <span>I love to paint them with</span>
                  <FlipwordsAnimation />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
