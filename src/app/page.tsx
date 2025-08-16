import Hero from "@/sections/Hero";
import BaseLayout from "@/sections/BaseLayout";
import AboutPage from "./tabs/AboutPage";

export default function Home() {
  return (
    <>
      <Hero />
      <BaseLayout>
        <AboutPage />
      </BaseLayout>
    </>
  );
}
