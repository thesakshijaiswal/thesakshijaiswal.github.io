import Navbar from "./Navbar";

export default function BaseLayout() {
  return (
    <section className="mx-auto flex max-w-5xl gap-14 md:px-4">
      <Navbar />
    </section>
  );
}
