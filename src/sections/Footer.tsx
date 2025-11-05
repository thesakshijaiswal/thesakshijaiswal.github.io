import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import { socialsData } from "@/data/SocialsData";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300/70 bg-gray-100/30 dark:border-white/20 dark:bg-[#242533]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div>
          <div>
            <h4 className="text-2xl font-semibold">Let&apos;s Work Together</h4>
            <p className="mt-1 text-sm text-gray-400">
              Collabs, roles, or big ideas? Let&apos;s make it happen
            </p>
            <nav className="mt-3">
              <ul className="flex items-center gap-3 text-gray-400">
                {socialsData.map(({ icon: Icon, link, label }) => {
                  return (
                    <a key={label} href={link}>
                      <Icon size={27} />
                    </a>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
}
