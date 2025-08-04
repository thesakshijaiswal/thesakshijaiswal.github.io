import { FiMoon } from "react-icons/fi";
import FlipwordsAnimation from "@/components/FlipwordsAnimation";

export default function Hero() {
  return (
    <section className="hero-gradient">
      <header>
        <div className="container max-w-5xl px-4 py-8 text-white md:mx-auto md:pb-40 md:pt-16 pb-20">
          <div className="flex justify-between items-center">
            <a href="#" className="md:text-3xl text-xl font-extrabold">
              Sakshi
            </a>
            <button className="cursor-pointer focus:outline-none focus-visible:ring-4 text-xl rotate-6 text-slate-200">
              <FiMoon />
            </button>
          </div>
          <div className="mt-10 md:mt-20">
            <p className="md:text-xl font-semibold text-md">Hi, I&apos;m</p>
            <h1 className="text-4xl font-light leading-normal md:text-7xl">
              Sakshi Jaiswal
            </h1>
            <div className="font-mono md:text-2xl font-normal leading-tight text-slate-300 flex items-center gap-1 flex-wrap text-sm">
              <span>
                Web browsers are my canvas and I love to paint them with
              </span>
              <FlipwordsAnimation />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
