import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">My Experience</h1>
      <p className="mt-4 text-gray-500">
        This is the Experience section content.
      </p>
    </div>
  );
}
