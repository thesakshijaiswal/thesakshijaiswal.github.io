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
            <p className="text-xl">Hi I&apos;m</p>
            <h1 className="text-3xl font-light leading-normal  md:text-6xl">
              Sakshi Jaiswal
            </h1>
            <p className="max-w-xl font-mono text-sm font-normal leading-tight text-gray-200 md:text-[1.0625rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              impedit labore, velit similique laudantium eius!
            </p>
          </div>
        </div>
      </header>
    </section>
  );
}
