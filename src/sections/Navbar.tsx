const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
export default function Navbar() {
  return (
    <section>
      <nav className="text-muted mt-11 hidden min-w-44 shrink-0 text-sm md:block">
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="text-strong mb-3 ml-2 text-sm font-medium tracking-wider"
            >
              <a
                href={link.href}
                className="flex items-center gap-1.5 rounded-md px-2 py-1 focus:outline-none font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
