import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import ContactFlip from "@/components/ContactFlip";
import ContactForm from "@/components/ContactForm";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Let’s connect! Whether it’s a potential project, collaboration, or just sharing ideas, I’m always open to meaningful conversations.",
};

export default function ContactPage() {
  return (
    <section
      className="sm:ml-8"
      aria-labelledby="contact-heading"
      role="region"
    >
      <header className="mb-10 flex items-center gap-4">
        <LogoBox aria-hidden="true" className="size-20 place-content-center">
          <ContactFlip />
        </LogoBox>

        <h2 id="contact-heading" className="cursor-default text-2xl font-bold">
          Contact Me
        </h2>
      </header>
      <p className="mt-4 cursor-default text-gray-500">
        Great work starts with great conversations. Whether you want to
        brainstorm ideas, collaborate on something exciting, or just say hi!
        I&apos;m always open to meaningful chats. Let&apos;s connect and build
        something worth talking about.
      </p>
      <div className="relative h-full overflow-hidden">
        <div className="absolute top-1/2 w-[490px] -translate-x-[230px] -translate-y-1/2">
          <CallToAction />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
