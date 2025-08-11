import Hero from "@/sections/Hero";
import BaseLayout from "@/sections/BaseLayout";

export default function Home() {
  return (
    <>
      <Hero />
      <BaseLayout>
        <div className="p-6">
          <h1 className="text-2xl font-bold">About Me</h1>
          <p className="mt-4 text-gray-600">
            This is the About section content.
          </p>
        </div>
      </BaseLayout>
    </>
  );
}
