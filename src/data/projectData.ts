export interface ProjectData {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
  details: string;
}

export const projects: ProjectData[] = [
  {
    id: 1,
    category: "1",
    title: "BE Commerce",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, alias qui. Modi accusantium quaerat suscipit. Dicta nam animi alias facere.",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, alias qui. Modi accusantium quaerat suscipit."
  },
  {
    id: 2,
    category: "2",
    title: "Rewarder",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, alias qui. Modi accusantium quaerat suscipit. Dicta nam animi alias facere.",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, alias qui. Modi accusantium quaerat suscipit."
  },
  {
    id: 3,
    category: "3",
    title: "FundVerse",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, alias qui. Modi accusantium quaerat suscipit. Dicta nam animi alias facere.",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, alias qui. Modi accusantium quaerat suscipit."
  },
  {
    id: 4,
    category: "4",
    title: "Fusion",
    image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800&q=80",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, alias qui. Modi accusantium quaerat suscipit. Dicta nam animi alias facere.",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, alias qui. Modi accusantium quaerat suscipit."
  }
];