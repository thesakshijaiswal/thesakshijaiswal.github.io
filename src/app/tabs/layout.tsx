import Hero from "@/sections/Hero";
import BaseLayout from "@/sections/BaseLayout";
import Footer from "@/sections/Footer";

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen md:pb-20">
        <Hero />
        <BaseLayout>{children}</BaseLayout>
      </div>
      <Footer />
    </>
  );
}
