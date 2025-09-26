import { Metadata } from "next";
import WIP from "@/components/WIP";
export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Let’s connect! Whether it’s a potential project, collaboration, or just sharing ideas, I’m always open to meaningful conversations.",
};

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="mt-4 text-gray-500">This is the Contact section content.</p>
      <WIP />
    </div>
  );
}
