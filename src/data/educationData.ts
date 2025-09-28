export interface Education {
  id: string;
  name: string;
  degree: string;
  duration: string;
  location: string;
  score: string;
}

export const educationData: Education[] = [
  {
    id: "1",
    name: "Sant Gadge Baba Amravati University",
    degree: "B.E in Computer Science and Engineering",
    duration: "July 2020 — June 2024",
    location: "Malkapur, Maharashtra",
    score: "8.49 CGPA",
  },
  {
    id: "2",
    name: "Municipal Jr. College",
    degree: "Senior Secondary (HSC)",
    duration: "Nov 2024 — Jan 2025",
    location: "Malkapur, Maharashtra",
    score: "82.63%"
  },
  {
    id: "3",
    name: "G.V.M Vidyalaya",
    degree: "Junior Secondary (SSC)",
    duration: "Nov 2024 — Jan 2025",
    location: "Malkapur, Maharashtra", 
    score: "89.40%"
  },
];
