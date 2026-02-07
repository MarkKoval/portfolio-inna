export type ProjectCategory = "Residential" | "Commercial" | "Interior" | "Urban";

export type Project = {
  slug: string;
  title: string;
  year: number;
  city: string;
  country: string;
  category: ProjectCategory[];
  areaM2: number;
  role: string;
  status: "Concept" | "In Progress" | "Built";
  client?: string;
  coverImage: string;
  heroMedia: {
    type: "image" | "video";
    src: string;
    poster?: string;
  };
  gallery: string[];
  descriptionShort: string;
  descriptionLong: string;
  tags: string[];
  materials: string[];
  credits: string[];
};
