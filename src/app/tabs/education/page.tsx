import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
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
