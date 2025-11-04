import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="border-t border-gray-300/20 bg-[#242533] text-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div>
          <div>
            <h4 className="text-2xl font-semibold">Let&apos;s Work Together</h4>
            <nav className="mt-4">
              <ul className="flex gap-3 text-gray-300">
                <li>
                  <FaXTwitter className="size-6" />
                </li>
                <li>
                  <FaGithub className="size-6" />
                </li>
                <li>
                  <FaLinkedin className="size-6" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
}
