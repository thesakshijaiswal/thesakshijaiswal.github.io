import { HiOutlineMoon } from "react-icons/hi2";
export default function Hero() {
  return (
    <section className="hero-gradient">
      <header>
        <div className="container max-w-5xl px-4 py-8 text-white md:mx-auto md:pb-40 md:pt-16">
          <div className="flex justify-between items-center">
            <a href="#" className="text-3xl font-extrabold">
              Sakshi
            </a>
            <button className="cursor-pointer focus:outline-none focus-visible:ring-4 text-xl rotate-6">
              <HiOutlineMoon />
            </button>
          </div>
          <div className="mt-10 md:mt-20">
            <p className="text-xl font-semibold">Hi, I&apos;m</p>
            <h1 className="text-3xl font-light leading-normal  md:text-7xl">
              Sakshi Jaiswal
            </h1>
            <div className="font-mono text-2xl font-normal leading-tight text-slate-300">
              Web browsers are my canvas and I love to paint them with Next.js
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
