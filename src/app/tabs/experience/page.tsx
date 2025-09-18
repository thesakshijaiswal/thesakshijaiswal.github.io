import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import ExperienceFlip from "@/components/ExperienceFlip";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience across full-stack development and product delivery, with a focus on building reliable solutions and working closely with teams to turn ideas into functional outcomes.",
};

const experienceData = [
  {
    name: "Ansrsource",
    role: "Junior Frontend Developer",
    duration: "Sept 2024 — Jan 2025",
    description:
      "Delivered scalable, production-ready web applications, ensuring clean design, high performance, and seamless UX. Shipped features quickly with minimal supervision, consistently meeting deadlines in fast-paced environments. Developed a React-based portfolio platform with structured data handling, resulting in a 70% increase in client engagement.Created automation tools like data scrapers and workflow scripts to reduce manual work and speed up onboarding.",
  },
  {
    name: "D2L",
    role: "Web Developer",
    duration: "Nov 2024 — Jan 2025",
    description:
      "Developed 20+ interactive course units on Brightspace LMS, enhancing user engagement across global edtech learners. Leveraged AI tools to accelerate content delivery, reducing turnaround time while maintaining high quality standards. Contributed engineering insights in agile SCRUM calls, boosting team productivity and guiding peers with solutions.Solved UI/UX issues across Brightspace LMS modules using HTML, CSS, and JavaScript to ensure responsive design.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="sm:ml-8">
      <div className="flex mb-10 items-center gap-4">
        <LogoBox className="place-content-center">
          <ExperienceFlip />
        </LogoBox>
        <h1 className="text-2xl font-bold">My Experience</h1>
      </div>
      <p className="mt-4 text-gray-500">
        This is the Experience section content.
      </p>
      <div className="mt-5">
        {experienceData.map((data) => {
          return (
            <div key={data.name} className="space-y-4">
              <div className="flex justify-between">
                <h2>{data.name}</h2>
                <p>{data.duration}</p>
              </div>
              <h3>{data.role}</h3>
              <p>{data.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
