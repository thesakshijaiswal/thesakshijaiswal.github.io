import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import { MdConnectWithoutContact } from "react-icons/md";
import WIP from "@/components/WIP";
export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Let’s connect! Whether it’s a potential project, collaboration, or just sharing ideas, I’m always open to meaningful conversations.",
};

export default function ContactPage() {
  return (
    <section className="sm:ml-8" aria-labelledby="contact-me" role="tabpanel">
      <header className="mb-10 flex items-center gap-4">
        <LogoBox className="size-20 place-content-center">
          <MdConnectWithoutContact className="size-11" />
        </LogoBox>
        <h2 className="cursor-default text-2xl font-bold">Contact Me</h2>
      </header>
      <p className="mt-4 text-gray-500">This is the Contact section content.</p>

      <WIP />
    </section>
  );
}
