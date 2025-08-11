import Hero from "@/sections/Hero";
import BaseLayout from "@/sections/BaseLayout";

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero />
      <BaseLayout>{children}</BaseLayout>
    </>
  );
}
