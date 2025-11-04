import Hero from "@/sections/Hero";
import BaseLayout from "@/sections/BaseLayout";
import AboutPage from "./tabs/AboutPage";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen md:pb-20">
        <Hero />
        <BaseLayout>
          <AboutPage />
        </BaseLayout>
      </div>
      <Footer />
    </>
  );
}
