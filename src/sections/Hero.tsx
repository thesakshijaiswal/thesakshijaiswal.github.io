import FlipwordsAnimation from "@/components/FlipwordsAnimation";
import ThemeToggle from "@/components/ThemeToggle";

export default function Hero() {
  return (
    <section className="hero-gradient">
      <header>
        <div className="max-w-5xl px-4 py-8 text-white md:mx-auto md:pt-16 md:pb-40">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-lg font-bold tracking-wider md:text-3xl"
            >
              Sakshi
            </a>
            <ThemeToggle />
          </div>
          <div className="mt-9 md:mt-28">
            <p className="mb-2 text-sm font-medium tracking-wide text-slate-200 md:text-xl lg:text-2xl">
              Hi, I&apos;m
            </p>
            <h1 className="mb-2 -ml-1 text-4xl leading-tight text-white md:text-6xl md:leading-[1.15] lg:text-7xl">
              Sakshi Jaiswal
            </h1>
            <div className="hero-tagline font-mono text-xs leading-snug font-normal text-slate-300 md:text-lg lg:text-xl">
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
