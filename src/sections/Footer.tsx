export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-gray-300/20 bg-[#242533] py-4 text-center text-white">
      <p className="text-sm tracking-wide">
        © {new Date().getFullYear()} Sakshi Jaiswal. All rights reserved.
      </p>
    </footer>
  );
}
