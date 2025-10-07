import Navbar from "./Navbar";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto flex max-w-5xl gap-14 md:px-4">
      <Navbar />
      <div className="min-w-0 flex-1 md:-mt-16">
        <main className="flex-1" aria-label="Portfolio content area">
          <div className="relative divide-y rounded-none border border-x-0 border-gray-300/70 bg-white shadow-2xl md:rounded-xl md:border-x dark:border-white/20 dark:bg-[#242533]">
            <div className="p-6">{children}</div>
          </div>
        </main>
      </div>
    </section>
  );
}
