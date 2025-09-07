import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience across full-stack development and product delivery, with a focus on building reliable solutions and working closely with teams to turn ideas into functional outcomes.",
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
