import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="mt-4 text-gray-500">This is the Contact section content.</p>
    </div>
  );
}
