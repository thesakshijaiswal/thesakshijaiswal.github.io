import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Educational background that built a strong foundation in technology and problem-solving, shaping the way I approach creating practical and scalable solutions.",
};

export default function EducationPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">My Academic Path</h1>
      <p className="mt-4 text-gray-500">
        This is the Education section content.
      </p>
    </div>
  );
}
