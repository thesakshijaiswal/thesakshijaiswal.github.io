export interface Experience {
  name: string;
  role: string;
  duration: string;
  description: string[];
}

export const experienceData: Experience[] = [
  {
    name: "Ansrsource",
    role: "Junior Frontend Developer",
    duration: "Sept 2024 — Jan 2025",
    description: [
      "Delivered scalable, production-ready web applications, ensuring clean design, high performance, and seamless UX.",
      "Shipped features quickly with minimal supervision, consistently meeting deadlines in fast-paced environments.",
      "Developed a React-based portfolio platform with structured data handling, resulting in a 70% increase in client engagement.",
      "Created automation tools like data scrapers and workflow scripts to reduce manual work and speed up onboarding.",
    ],
  },
  {
    name: "D2L",
    role: "Web Developer",
    duration: "Nov 2024 — Jan 2025",
    description: [
      "Developed 20+ interactive course units on Brightspace LMS, enhancing user engagement across global edtech learners.",
      "Leveraged AI tools to accelerate content delivery, reducing turnaround time while maintaining high quality standards.",
      "Contributed engineering insights in agile SCRUM calls, boosting team productivity and guiding peers with solutions.",
      "Solved UI/UX issues across Brightspace LMS modules using HTML, CSS, and JavaScript to ensure responsive design.",
    ],
  },
];
