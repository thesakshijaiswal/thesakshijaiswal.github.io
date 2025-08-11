import Navbar from "./Navbar";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto flex max-w-5xl gap-14 md:px-4">
      <Navbar />
      <div className="flex-1">{children}</div>
    </section>
  );
}
