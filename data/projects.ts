import type { Category } from './categories';

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  city: string;
  country: string;
  categories: Category[];
  areaM2: number;
  status: 'Concept' | 'In Progress' | 'Built';
  role: string;
  client?: string;
  cover: { src: string; alt: string };
  hero: { type: 'image' | 'video'; src: string; poster?: string; alt?: string };
  gallery: { src: string; alt: string }[];
  tags: string[];
  materials: string[];
  credits: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  processSteps: { title: string; text: string }[];
  locationCoords?: { lat: number; lng: number };
};

const names = [
  'North Light Residence','Courtyard House 17','Riverside Lofts','Birch Terrace Homes',
  'Monolith Office Hub','Harbor Retail Pavilion','Kinetic Co-Work Hall','Atelier Café Flagship',
  'Gallery Loft No.3','Pine Wellness Interior','Lumen Apartment','Civic Pocket Square'
];
const cities = ['Kyiv','Lviv','Warsaw','Berlin','Prague','Vilnius'];
const typeMap: Category[][] = [
  ['Residential'],['Residential'],['Residential','Interior'],['Residential'],
  ['Commercial'],['Commercial'],['Commercial','Interior'],['Commercial','Interior'],
  ['Interior'],['Interior'],['Interior'],['Urban']
];

export const projects: Project[] = names.map((title, i) => {
  const id = i + 1;
  return {
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    title,
    subtitle: 'A restrained architectural composition balancing daylight, circulation, and material tactility.',
    year: 2016 + i,
    city: cities[i % cities.length],
    country: 'Ukraine',
    categories: typeMap[i],
    areaM2: 120 + i * 35,
    status: i % 3 === 0 ? 'Concept' : i % 3 === 1 ? 'In Progress' : 'Built',
    role: i % 2 ? 'Lead Architect' : 'Design Lead',
    client: 'Private / Confidential',
    cover: { src: `/demo/projects/p${id}-1.svg`, alt: `${title} cover` },
    hero: { type: 'image', src: `/demo/projects/p${id}-2.svg`, alt: `${title} hero` },
    gallery: Array.from({ length: 10 }, (_, g) => ({ src: `/demo/projects/p${id}-${g + 1}.svg`, alt: `${title} image ${g + 1}` })),
    tags: ['Daylight strategy', 'Material palette', 'Human scale'],
    materials: ['Brushed oak', 'Lime plaster', 'Anodized aluminum', 'Textured concrete'],
    credits: ['Atelier Nord — Architecture', 'Studio Forge — Visualization', 'Local contractor team'],
    metrics: [
      { label: 'Budget', value: `€${(0.6 + i * 0.15).toFixed(1)}M` },
      { label: 'Timeline', value: `${8 + i} months` },
      { label: 'Team', value: `${5 + (i % 4)} specialists` }
    ],
    overview: 'This project aligns spatial calm with practical performance. The brief required a compact footprint while retaining generous daylight and adaptable zoning.',
    challenge: 'The site had strict setbacks, fragmented neighboring context, and an ambitious program-to-area ratio.',
    solution: 'We established a layered plan with controlled apertures, integrated storage walls, and a warm-neutral material stack to amplify depth.',
    outcome: 'The completed result delivered higher occupancy comfort, lower operational load, and a durable visual identity.',
    processSteps: [
      { title: 'Research', text: 'Context scans, light studies, and interviews with the client team.' },
      { title: 'Concept', text: 'Three massing options tested through daylight and circulation simulations.' },
      { title: 'Detail', text: 'Joinery detailing, finish prototyping, and construction package alignment.' },
      { title: 'Build', text: 'Site supervision with iterative refinements during installation.' }
    ],
    locationCoords: { lat: 50.45 + i * 0.01, lng: 30.52 + i * 0.01 }
  };
});

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
