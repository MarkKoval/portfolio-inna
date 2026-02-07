import { Category } from './categories';
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

export const projects: Project[] = [
  {
    slug: 'north-residence',
    title: 'North Residence',
    subtitle: 'Family house focused on diffuse daylight',
    year: 2025,
    city: 'Lviv',
    country: 'Ukraine',
    categories: ['Residential', 'Interior'],
    areaM2: 320,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Client',
    cover: { src: '/demo/projects/p1.svg', alt: 'North Residence cover' },
    hero: { type: 'image', src: '/demo/projects/p13.svg', alt: 'North Residence hero' },
    gallery: [
      { src: '/demo/projects/p1.svg', alt: 'North Residence frame 1' },
      { src: '/demo/projects/p2.svg', alt: 'North Residence frame 2' },
      { src: '/demo/projects/p3.svg', alt: 'North Residence frame 3' },
      { src: '/demo/projects/p4.svg', alt: 'North Residence frame 4' },
      { src: '/demo/projects/p5.svg', alt: 'North Residence frame 5' },
      { src: '/demo/projects/p6.svg', alt: 'North Residence frame 6' },
      { src: '/demo/projects/p7.svg', alt: 'North Residence frame 7' },
      { src: '/demo/projects/p8.svg', alt: 'North Residence frame 8' },
      { src: '/demo/projects/p9.svg', alt: 'North Residence frame 9' },
      { src: '/demo/projects/p10.svg', alt: 'North Residence frame 10' },
    ],
    tags: ['Daylight', 'Spatial rhythm', 'Material calm'],
    materials: ['Limestone', 'Brushed oak', 'Textured plaster', 'Patinated brass'],
    credits: ['Architecture: Atelier Nord', 'Visualization: In-house'],
    metrics: [
      { label: 'Budget', value: '€3.4M' },
      { label: 'Timeline', value: '15 months' },
      { label: 'Team', value: '7 specialists' }
    ],
    overview: 'Atelier Nord developed a precise architectural response balancing material depth, natural light, and long-term operational clarity. The project language favours tactile restraint, clean lines, and adaptable spatial sequences.',
    challenge: 'The brief demanded high program density while preserving calm circulation and strong daylight autonomy.',
    solution: 'We used layered thresholds, integrated storage bands, and carefully tuned aperture proportions to keep spaces visually quiet.',
    outcome: 'The completed environment improved user comfort, reduced material waste through modular detailing, and elevated project identity.',
    processSteps: [
      { title: 'Research', text: 'Site mapping, climate readings, and behavior interviews formed the baseline model.' },
      { title: 'Concept', text: 'Three massing scenarios were tested against daylight and movement efficiency.' },
      { title: 'Detail', text: 'A full mockup cycle validated junctions, textures, and contractor tolerances.' },
      { title: 'Build', text: 'On-site reviews and phased handover ensured quality continuity.' }
    ],
    locationCoords: { lat: 49.300, lng: 30.400 }
  },
  {
    slug: 'riverside-lofts',
    title: 'Riverside Lofts',
    subtitle: 'Adaptive loft conversion near the embankment',
    year: 2024,
    city: 'Kyiv',
    country: 'Ukraine',
    categories: ['Residential'],
    areaM2: 210,
    status: 'In Progress',
    role: 'Lead Architect',
    client: 'Private Client',
    cover: { src: '/demo/projects/p2.svg', alt: 'Riverside Lofts cover' },
    hero: { type: 'image', src: '/demo/projects/p14.svg', alt: 'Riverside Lofts hero' },
    gallery: [
      { src: '/demo/projects/p4.svg', alt: 'Riverside Lofts frame 1' },
      { src: '/demo/projects/p5.svg', alt: 'Riverside Lofts frame 2' },
      { src: '/demo/projects/p6.svg', alt: 'Riverside Lofts frame 3' },
      { src: '/demo/projects/p7.svg', alt: 'Riverside Lofts frame 4' },
      { src: '/demo/projects/p8.svg', alt: 'Riverside Lofts frame 5' },
      { src: '/demo/projects/p9.svg', alt: 'Riverside Lofts frame 6' },
      { src: '/demo/projects/p10.svg', alt: 'Riverside Lofts frame 7' },
      { src: '/demo/projects/p11.svg', alt: 'Riverside Lofts frame 8' },
      { src: '/demo/projects/p12.svg', alt: 'Riverside Lofts frame 9' },
      { src: '/demo/projects/p13.svg', alt: 'Riverside Lofts frame 10' },
    ],
    tags: ['Daylight', 'Spatial rhythm', 'Material calm'],
    materials: ['Limestone', 'Brushed oak', 'Textured plaster', 'Patinated brass'],
    credits: ['Architecture: Atelier Nord', 'Visualization: In-house'],
    metrics: [
      { label: 'Budget', value: '€4.4M' },
      { label: 'Timeline', value: '16 months' },
      { label: 'Team', value: '8 specialists' }
    ],
    overview: 'Atelier Nord developed a precise architectural response balancing material depth, natural light, and long-term operational clarity. The project language favours tactile restraint, clean lines, and adaptable spatial sequences.',
    challenge: 'The brief demanded high program density while preserving calm circulation and strong daylight autonomy.',
    solution: 'We used layered thresholds, integrated storage bands, and carefully tuned aperture proportions to keep spaces visually quiet.',
    outcome: 'The completed environment improved user comfort, reduced material waste through modular detailing, and elevated project identity.',
    processSteps: [
      { title: 'Research', text: 'Site mapping, climate readings, and behavior interviews formed the baseline model.' },
      { title: 'Concept', text: 'Three massing scenarios were tested against daylight and movement efficiency.' },
      { title: 'Detail', text: 'A full mockup cycle validated junctions, textures, and contractor tolerances.' },
      { title: 'Build', text: 'On-site reviews and phased handover ensured quality continuity.' }
    ],
    locationCoords: { lat: 49.600, lng: 30.800 }
  },
  {
    slug: 'pine-courtyard-villa',
    title: 'Pine Courtyard Villa',
    subtitle: 'Compact villa around a planted courtyard',
    year: 2023,
    city: 'Warsaw',
    country: 'Poland',
    categories: ['Residential'],
    areaM2: 280,
    status: 'Concept',
    role: 'Lead Architect',
    client: 'Private Client',
    cover: { src: '/demo/projects/p3.svg', alt: 'Pine Courtyard Villa cover' },
    hero: { type: 'image', src: '/demo/projects/p15.svg', alt: 'Pine Courtyard Villa hero' },
    gallery: [
      { src: '/demo/projects/p7.svg', alt: 'Pine Courtyard Villa frame 1' },
      { src: '/demo/projects/p8.svg', alt: 'Pine Courtyard Villa frame 2' },
      { src: '/demo/projects/p9.svg', alt: 'Pine Courtyard Villa frame 3' },
      { src: '/demo/projects/p10.svg', alt: 'Pine Courtyard Villa frame 4' },
      { src: '/demo/projects/p11.svg', alt: 'Pine Courtyard Villa frame 5' },
      { src: '/demo/projects/p12.svg', alt: 'Pine Courtyard Villa frame 6' },
      { src: '/demo/projects/p13.svg', alt: 'Pine Courtyard Villa frame 7' },
      { src: '/demo/projects/p14.svg', alt: 'Pine Courtyard Villa frame 8' },
      { src: '/demo/projects/p15.svg', alt: 'Pine Courtyard Villa frame 9' },
      { src: '/demo/projects/p16.svg', alt: 'Pine Courtyard Villa frame 10' },
    ],
    tags: ['Daylight', 'Spatial rhythm', 'Material calm'],
    materials: ['Limestone', 'Brushed oak', 'Textured plaster', 'Patinated brass'],
    credits: ['Architecture: Atelier Nord', 'Visualization: In-house'],
    metrics: [
      { label: 'Budget', value: '€5.4M' },
      { label: 'Timeline', value: '17 months' },
      { label: 'Team', value: '9 specialists' }
    ],
    overview: 'Atelier Nord developed a precise architectural response balancing material depth, natural light, and long-term operational clarity. The project language favours tactile restraint, clean lines, and adaptable spatial sequences.',
    challenge: 'The brief demanded high program density while preserving calm circulation and strong daylight autonomy.',
    solution: 'We used layered thresholds, integrated storage bands, and carefully tuned aperture proportions to keep spaces visually quiet.',
    outcome: 'The completed environment improved user comfort, reduced material waste through modular detailing, and elevated project identity.',
    processSteps: [
      { title: 'Research', text: 'Site mapping, climate readings, and behavior interviews formed the baseline model.' },
      { title: 'Concept', text: 'Three massing scenarios were tested against daylight and movement efficiency.' },
      { title: 'Detail', text: 'A full mockup cycle validated junctions, textures, and contractor tolerances.' },
      { title: 'Build', text: 'On-site reviews and phased handover ensured quality continuity.' }
    ],
    locationCoords: { lat: 49.900, lng: 31.200 }
  },
  {
    slug: 'dune-house',
    title: 'Dune House',
    subtitle: 'Low-profile seaside retreat',
    year: 2022,
    city: 'Odesa',
    country: 'Ukraine',
    categories: ['Residential', 'Interior'],
    areaM2: 350,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Client',
    cover: { src: '/demo/projects/p4.svg', alt: 'Dune House cover' },
    hero: { type: 'image', src: '/demo/projects/p16.svg', alt: 'Dune House hero' },
    gallery: [
      { src: '/demo/projects/p10.svg', alt: 'Dune House frame 1' },
      { src: '/demo/projects/p11.svg', alt: 'Dune House frame 2' },
      { src: '/demo/projects/p12.svg', alt: 'Dune House frame 3' },
      { src: '/demo/projects/p13.svg', alt: 'Dune House frame 4' },
      { src: '/demo/projects/p14.svg', alt: 'Dune House frame 5' },
      { src: '/demo/projects/p15.svg', alt: 'Dune House frame 6' },
      { src: '/demo/projects/p16.svg', alt: 'Dune House frame 7' },
      { src: '/demo/projects/p17.svg', alt: 'Dune House frame 8' },
      { src: '/demo/projects/p18.svg', alt: 'Dune House frame 9' },
      { src: '/demo/projects/p19.svg', alt: 'Dune House frame 10' },
    ],
    tags: ['Daylight', 'Spatial rhythm', 'Material calm'],
    materials: ['Limestone', 'Brushed oak', 'Textured plaster', 'Patinated brass'],
    credits: ['Architecture: Atelier Nord', 'Visualization: In-house'],
    metrics: [
      { label: 'Budget', value: '€6.4M' },
      { label: 'Timeline', value: '18 months' },
      { label: 'Team', value: '10 specialists' }
    ],
    overview: 'Atelier Nord developed a precise architectural response balancing material depth, natural light, and long-term operational clarity. The project language favours tactile restraint, clean lines, and adaptable spatial sequences.',
    challenge: 'The brief demanded high program density while preserving calm circulation and strong daylight autonomy.',
    solution: 'We used layered thresholds, integrated storage bands, and carefully tuned aperture proportions to keep spaces visually quiet.',
    outcome: 'The completed environment improved user comfort, reduced material waste through modular detailing, and elevated project identity.',
    processSteps: [
      { title: 'Research', text: 'Site mapping, climate readings, and behavior interviews formed the baseline model.' },
      { title: 'Concept', text: 'Three massing scenarios were tested against daylight and movement efficiency.' },
      { title: 'Detail', text: 'A full mockup cycle validated junctions, textures, and contractor tolerances.' },
      { title: 'Build', text: 'On-site reviews and phased handover ensured quality continuity.' }
    ],
    locationCoords: { lat: 50.200, lng: 31.600 }
  },
  {
    slug: 'atelier-72-office',
    title: 'Atelier 72 Office',
    subtitle: 'Creative HQ with acoustic interiors',
    year: 2025,
    city: 'Berlin',
    country: 'Germany',
    categories: ['Commercial', 'Interior'],
    areaM2: 980,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Client',
    cover: { src: '/demo/projects/p5.svg', alt: 'Atelier 72 Office cover' },
    hero: { type: 'image', src: '/demo/projects/p17.svg', alt: 'Atelier 72 Office hero' },
    gallery: [
      { src: '/demo/projects/p13.svg', alt: 'Atelier 72 Office frame 1' },
      { src: '/demo/projects/p14.svg', alt: 'Atelier 72 Office frame 2' },
      { src: '/demo/projects/p15.svg', alt: 'Atelier 72 Office frame 3' },
      { src: '/demo/projects/p16.svg', alt: 'Atelier 72 Office frame 4' },
      { src: '/demo/projects/p17.svg', alt: 'Atelier 72 Office frame 5' },
      { src: '/demo/projects/p18.svg', alt: 'Atelier 72 Office frame 6' },
      { src: '/demo/projects/p19.svg', alt: 'Atelier 72 Office frame 7' },
      { src: '/demo/projects/p20.svg', alt: 'Atelier 72 Office frame 8' },
      { src: '/demo/projects/p21.svg', alt: 'Atelier 72 Office frame 9' },
      { src: '/demo/projects/p22.svg', alt: 'Atelier 72 Office frame 10' },
    ],
    tags: ['Daylight', 'Spatial rhythm', 'Material calm'],
    materials: ['Limestone', 'Brushed oak', 'Textured plaster', 'Patinated brass'],
    credits: ['Architecture: Atelier Nord', 'Visualization: In-house'],
    metrics: [
      { label: 'Budget', value: '€7.4M' },
      { label: 'Timeline', value: '19 months' },
      { label: 'Team', value: '11 specialists' }
    ],
    overview: 'Atelier Nord developed a precise architectural response balancing material depth, natural light, and long-term operational clarity. The project language favours tactile restraint, clean lines, and adaptable spatial sequences.',
    challenge: 'The brief demanded high program density while preserving calm circulation and strong daylight autonomy.',
    solution: 'We used layered thresholds, integrated storage bands, and carefully tuned aperture proportions to keep spaces visually quiet.',
    outcome: 'The completed environment improved user comfort, reduced material waste through modular detailing, and elevated project identity.',
    processSteps: [
      { title: 'Research', text: 'Site mapping, climate readings, and behavior interviews formed the baseline model.' },
      { title: 'Concept', text: 'Three massing scenarios were tested against daylight and movement efficiency.' },
      { title: 'Detail', text: 'A full mockup cycle validated junctions, textures, and contractor tolerances.' },
      { title: 'Build', text: 'On-site reviews and phased handover ensured quality continuity.' }
    ],
    locationCoords: { lat: 50.500, lng: 32.000 }
  },
  {
    slug: 'aurora-hotel-lobby',
    title: 'Aurora Hotel Lobby',
    subtitle: 'Hospitality interior with warm stone palette',
    year: 2024,
    city: 'Vienna',
    country: 'Austria',
    categories: ['Commercial', 'Interior'],
    areaM2: 640,
    status: 'In Progress',
    role: 'Lead Architect',
    client: 'Private Client',
    cover: { src: '/demo/projects/p6.svg', alt: 'Aurora Hotel Lobby cover' },
    hero: { type: 'image', src: '/demo/projects/p18.svg', alt: 'Aurora Hotel Lobby hero' },
    gallery: [
      { src: '/demo/projects/p16.svg', alt: 'Aurora Hotel Lobby frame 1' },
      { src: '/demo/projects/p17.svg', alt: 'Aurora Hotel Lobby frame 2' },
      { src: '/demo/projects/p18.svg', alt: 'Aurora Hotel Lobby frame 3' },
      { src: '/demo/projects/p19.svg', alt: 'Aurora Hotel Lobby frame 4' },
      { src: '/demo/projects/p20.svg', alt: 'Aurora Hotel Lobby frame 5' },
      { src: '/demo/projects/p21.svg', alt: 'Aurora Hotel Lobby frame 6' },
      { src: '/demo/projects/p22.svg', alt: 'Aurora Hotel Lobby frame 7' },
      { src: '/demo/projects/p23.svg', alt: 'Aurora Hotel Lobby frame 8' },
      { src: '/demo/projects/p24.svg', alt: 'Aurora Hotel Lobby frame 9' },
      { src: '/demo/projects/p25.svg', alt: 'Aurora Hotel Lobby frame 10' },
    ],
    tags: ['Daylight', 'Spatial rhythm', 'Material calm'],
    materials: ['Limestone', 'Brushed oak', 'Textured plaster', 'Patinated brass'],
    credits: ['Architecture: Atelier Nord', 'Visualization: In-house'],
    metrics: [
      { label: 'Budget', value: '€8.4M' },
      { label: 'Timeline', value: '20 months' },
      { label: 'Team', value: '12 specialists' }
    ],
    overview: 'Atelier Nord developed a precise architectural response balancing material depth, natural light, and long-term operational clarity. The project language favours tactile restraint, clean lines, and adaptable spatial sequences.',
    challenge: 'The brief demanded high program density while preserving calm circulation and strong daylight autonomy.',
    solution: 'We used layered thresholds, integrated storage bands, and carefully tuned aperture proportions to keep spaces visually quiet.',
    outcome: 'The completed environment improved user comfort, reduced material waste through modular detailing, and elevated project identity.',
    processSteps: [
      { title: 'Research', text: 'Site mapping, climate readings, and behavior interviews formed the baseline model.' },
      { title: 'Concept', text: 'Three massing scenarios were tested against daylight and movement efficiency.' },
      { title: 'Detail', text: 'A full mockup cycle validated junctions, textures, and contractor tolerances.' },
      { title: 'Build', text: 'On-site reviews and phased handover ensured quality continuity.' }
    ],
    locationCoords: { lat: 50.800, lng: 32.400 }
  },
  {
    slug: 'forum-retail-hall',
    title: 'Forum Retail Hall',
    subtitle: 'Retail flow redesign and modular kiosks',
    year: 2023,
    city: 'Prague',
    country: 'Czech Republic',
    categories: ['Commercial'],
    areaM2: 1200,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Client',
    cover: { src: '/demo/projects/p7.svg', alt: 'Forum Retail Hall cover' },
    hero: { type: 'image', src: '/demo/projects/p19.svg', alt: 'Forum Retail Hall hero' },
    gallery: [
      { src: '/demo/projects/p19.svg', alt: 'Forum Retail Hall frame 1' },
      { src: '/demo/projects/p20.svg', alt: 'Forum Retail Hall frame 2' },
      { src: '/demo/projects/p21.svg', alt: 'Forum Retail Hall frame 3' },
      { src: '/demo/projects/p22.svg', alt: 'Forum Retail Hall frame 4' },
      { src: '/demo/projects/p23.svg', alt: 'Forum Retail Hall frame 5' },
      { src: '/demo/projects/p24.svg', alt: 'Forum Retail Hall frame 6' },
      { src: '/demo/projects/p25.svg', alt: 'Forum Retail Hall frame 7' },
      { src: '/demo/projects/p26.svg', alt: 'Forum Retail Hall frame 8' },
      { src: '/demo/projects/p27.svg', alt: 'Forum Retail Hall frame 9' },
      { src: '/demo/projects/p28.svg', alt: 'Forum Retail Hall frame 10' },
    ],
    tags: ['Daylight', 'Spatial rhythm', 'Material calm'],
    materials: ['Limestone', 'Brushed oak', 'Textured plaster', 'Patinated brass'],
    credits: ['Architecture: Atelier Nord', 'Visualization: In-house'],
    metrics: [
      { label: 'Budget', value: '€9.4M' },
      { label: 'Timeline', value: '21 months' },
      { label: 'Team', value: '13 specialists' }
    ],
    overview: 'Atelier Nord developed a precise architectural response balancing material depth, natural light, and long-term operational clarity. The project language favours tactile restraint, clean lines, and adaptable spatial sequences.',
    challenge: 'The brief demanded high program density while preserving calm circulation and strong daylight autonomy.',
    solution: 'We used layered thresholds, integrated storage bands, and carefully tuned aperture proportions to keep spaces visually quiet.',
    outcome: 'The completed environment improved user comfort, reduced material waste through modular detailing, and elevated project identity.',
    processSteps: [
      { title: 'Research', text: 'Site mapping, climate readings, and behavior interviews formed the baseline model.' },
      { title: 'Concept', text: 'Three massing scenarios were tested against daylight and movement efficiency.' },
      { title: 'Detail', text: 'A full mockup cycle validated junctions, textures, and contractor tolerances.' },
      { title: 'Build', text: 'On-site reviews and phased handover ensured quality continuity.' }
    ],
    locationCoords: { lat: 51.100, lng: 32.800 }
  },
  {
    slug: 'harbor-cowork',
    title: 'Harbor Cowork',
    subtitle: 'Flexible co-working floorplates',
    year: 2022,
    city: 'Tallinn',
    country: 'Estonia',
    categories: ['Commercial', 'Interior'],
    areaM2: 890,
    status: 'Concept',
    role: 'Lead Architect',
    client: 'Private Client',
    cover: { src: '/demo/projects/p8.svg', alt: 'Harbor Cowork cover' },
    hero: { type: 'image', src: '/demo/projects/p20.svg', alt: 'Harbor Cowork hero' },
    gallery: [
      { src: '/demo/projects/p22.svg', alt: 'Harbor Cowork frame 1' },
      { src: '/demo/projects/p23.svg', alt: 'Harbor Cowork frame 2' },
      { src: '/demo/projects/p24.svg', alt: 'Harbor Cowork frame 3' },
      { src: '/demo/projects/p25.svg', alt: 'Harbor Cowork frame 4' },
      { src: '/demo/projects/p26.svg', alt: 'Harbor Cowork frame 5' },
      { src: '/demo/projects/p27.svg', alt: 'Harbor Cowork frame 6' },
      { src: '/demo/projects/p28.svg', alt: 'Harbor Cowork frame 7' },
      { src: '/demo/projects/p29.svg', alt: 'Harbor Cowork frame 8' },
      { src: '/demo/projects/p30.svg', alt: 'Harbor Cowork frame 9' },
      { src: '/demo/projects/p31.svg', alt: 'Harbor Cowork frame 10' },
    ],
    tags: ['Daylight', 'Spatial rhythm', 'Material calm'],
    materials: ['Limestone', 'Brushed oak', 'Textured plaster', 'Patinated brass'],
    credits: ['Architecture: Atelier Nord', 'Visualization: In-house'],
    metrics: [
      { label: 'Budget', value: '€10.4M' },
      { label: 'Timeline', value: '22 months' },
      { label: 'Team', value: '14 specialists' }
    ],
    overview: 'Atelier Nord developed a precise architectural response balancing material depth, natural light, and long-term operational clarity. The project language favours tactile restraint, clean lines, and adaptable spatial sequences.',
    challenge: 'The brief demanded high program density while preserving calm circulation and strong daylight autonomy.',
    solution: 'We used layered thresholds, integrated storage bands, and carefully tuned aperture proportions to keep spaces visually quiet.',
    outcome: 'The completed environment improved user comfort, reduced material waste through modular detailing, and elevated project identity.',
    processSteps: [
      { title: 'Research', text: 'Site mapping, climate readings, and behavior interviews formed the baseline model.' },
      { title: 'Concept', text: 'Three massing scenarios were tested against daylight and movement efficiency.' },
      { title: 'Detail', text: 'A full mockup cycle validated junctions, textures, and contractor tolerances.' },
      { title: 'Build', text: 'On-site reviews and phased handover ensured quality continuity.' }
    ],
    locationCoords: { lat: 51.400, lng: 33.200 }
  },
  {
    slug: 'mono-gallery',
    title: 'Mono Gallery',
    subtitle: 'Minimal exhibition interior concept',
    year: 2025,
    city: 'Milan',
    country: 'Italy',
    categories: ['Interior'],
    areaM2: 430,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Client',
    cover: { src: '/demo/projects/p9.svg', alt: 'Mono Gallery cover' },
    hero: { type: 'image', src: '/demo/projects/p21.svg', alt: 'Mono Gallery hero' },
    gallery: [
      { src: '/demo/projects/p25.svg', alt: 'Mono Gallery frame 1' },
      { src: '/demo/projects/p26.svg', alt: 'Mono Gallery frame 2' },
      { src: '/demo/projects/p27.svg', alt: 'Mono Gallery frame 3' },
      { src: '/demo/projects/p28.svg', alt: 'Mono Gallery frame 4' },
      { src: '/demo/projects/p29.svg', alt: 'Mono Gallery frame 5' },
      { src: '/demo/projects/p30.svg', alt: 'Mono Gallery frame 6' },
      { src: '/demo/projects/p31.svg', alt: 'Mono Gallery frame 7' },
      { src: '/demo/projects/p32.svg', alt: 'Mono Gallery frame 8' },
      { src: '/demo/projects/p33.svg', alt: 'Mono Gallery frame 9' },
      { src: '/demo/projects/p34.svg', alt: 'Mono Gallery frame 10' },
    ],
    tags: ['Daylight', 'Spatial rhythm', 'Material calm'],
    materials: ['Limestone', 'Brushed oak', 'Textured plaster', 'Patinated brass'],
    credits: ['Architecture: Atelier Nord', 'Visualization: In-house'],
    metrics: [
      { label: 'Budget', value: '€11.4M' },
      { label: 'Timeline', value: '23 months' },
      { label: 'Team', value: '15 specialists' }
    ],
    overview: 'Atelier Nord developed a precise architectural response balancing material depth, natural light, and long-term operational clarity. The project language favours tactile restraint, clean lines, and adaptable spatial sequences.',
    challenge: 'The brief demanded high program density while preserving calm circulation and strong daylight autonomy.',
    solution: 'We used layered thresholds, integrated storage bands, and carefully tuned aperture proportions to keep spaces visually quiet.',
    outcome: 'The completed environment improved user comfort, reduced material waste through modular detailing, and elevated project identity.',
    processSteps: [
      { title: 'Research', text: 'Site mapping, climate readings, and behavior interviews formed the baseline model.' },
      { title: 'Concept', text: 'Three massing scenarios were tested against daylight and movement efficiency.' },
      { title: 'Detail', text: 'A full mockup cycle validated junctions, textures, and contractor tolerances.' },
      { title: 'Build', text: 'On-site reviews and phased handover ensured quality continuity.' }
    ],
    locationCoords: { lat: 51.700, lng: 33.600 }
  },
  {
    slug: 'shelter-apartment',
    title: 'Shelter Apartment',
    subtitle: 'Calm city apartment renovation',
    year: 2024,
    city: 'Paris',
    country: 'France',
    categories: ['Interior', 'Residential'],
    areaM2: 140,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Client',
    cover: { src: '/demo/projects/p10.svg', alt: 'Shelter Apartment cover' },
    hero: { type: 'image', src: '/demo/projects/p22.svg', alt: 'Shelter Apartment hero' },
    gallery: [
      { src: '/demo/projects/p28.svg', alt: 'Shelter Apartment frame 1' },
      { src: '/demo/projects/p29.svg', alt: 'Shelter Apartment frame 2' },
      { src: '/demo/projects/p30.svg', alt: 'Shelter Apartment frame 3' },
      { src: '/demo/projects/p31.svg', alt: 'Shelter Apartment frame 4' },
      { src: '/demo/projects/p32.svg', alt: 'Shelter Apartment frame 5' },
      { src: '/demo/projects/p33.svg', alt: 'Shelter Apartment frame 6' },
      { src: '/demo/projects/p34.svg', alt: 'Shelter Apartment frame 7' },
      { src: '/demo/projects/p35.svg', alt: 'Shelter Apartment frame 8' },
      { src: '/demo/projects/p36.svg', alt: 'Shelter Apartment frame 9' },
      { src: '/demo/projects/p37.svg', alt: 'Shelter Apartment frame 10' },
    ],
    tags: ['Daylight', 'Spatial rhythm', 'Material calm'],
    materials: ['Limestone', 'Brushed oak', 'Textured plaster', 'Patinated brass'],
    credits: ['Architecture: Atelier Nord', 'Visualization: In-house'],
    metrics: [
      { label: 'Budget', value: '€12.4M' },
      { label: 'Timeline', value: '24 months' },
      { label: 'Team', value: '16 specialists' }
    ],
    overview: 'Atelier Nord developed a precise architectural response balancing material depth, natural light, and long-term operational clarity. The project language favours tactile restraint, clean lines, and adaptable spatial sequences.',
    challenge: 'The brief demanded high program density while preserving calm circulation and strong daylight autonomy.',
    solution: 'We used layered thresholds, integrated storage bands, and carefully tuned aperture proportions to keep spaces visually quiet.',
    outcome: 'The completed environment improved user comfort, reduced material waste through modular detailing, and elevated project identity.',
    processSteps: [
      { title: 'Research', text: 'Site mapping, climate readings, and behavior interviews formed the baseline model.' },
      { title: 'Concept', text: 'Three massing scenarios were tested against daylight and movement efficiency.' },
      { title: 'Detail', text: 'A full mockup cycle validated junctions, textures, and contractor tolerances.' },
      { title: 'Build', text: 'On-site reviews and phased handover ensured quality continuity.' }
    ],
    locationCoords: { lat: 52.000, lng: 34.000 }
  },
  {
    slug: 'timber-townhouse',
    title: 'Timber Townhouse',
    subtitle: 'Townhouse interiors and millwork detailing',
    year: 2021,
    city: 'Copenhagen',
    country: 'Denmark',
    categories: ['Interior', 'Residential'],
    areaM2: 190,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Client',
    cover: { src: '/demo/projects/p11.svg', alt: 'Timber Townhouse cover' },
    hero: { type: 'image', src: '/demo/projects/p23.svg', alt: 'Timber Townhouse hero' },
    gallery: [
      { src: '/demo/projects/p31.svg', alt: 'Timber Townhouse frame 1' },
      { src: '/demo/projects/p32.svg', alt: 'Timber Townhouse frame 2' },
      { src: '/demo/projects/p33.svg', alt: 'Timber Townhouse frame 3' },
      { src: '/demo/projects/p34.svg', alt: 'Timber Townhouse frame 4' },
      { src: '/demo/projects/p35.svg', alt: 'Timber Townhouse frame 5' },
      { src: '/demo/projects/p36.svg', alt: 'Timber Townhouse frame 6' },
      { src: '/demo/projects/p37.svg', alt: 'Timber Townhouse frame 7' },
      { src: '/demo/projects/p38.svg', alt: 'Timber Townhouse frame 8' },
      { src: '/demo/projects/p39.svg', alt: 'Timber Townhouse frame 9' },
      { src: '/demo/projects/p40.svg', alt: 'Timber Townhouse frame 10' },
    ],
    tags: ['Daylight', 'Spatial rhythm', 'Material calm'],
    materials: ['Limestone', 'Brushed oak', 'Textured plaster', 'Patinated brass'],
    credits: ['Architecture: Atelier Nord', 'Visualization: In-house'],
    metrics: [
      { label: 'Budget', value: '€13.4M' },
      { label: 'Timeline', value: '25 months' },
      { label: 'Team', value: '17 specialists' }
    ],
    overview: 'Atelier Nord developed a precise architectural response balancing material depth, natural light, and long-term operational clarity. The project language favours tactile restraint, clean lines, and adaptable spatial sequences.',
    challenge: 'The brief demanded high program density while preserving calm circulation and strong daylight autonomy.',
    solution: 'We used layered thresholds, integrated storage bands, and carefully tuned aperture proportions to keep spaces visually quiet.',
    outcome: 'The completed environment improved user comfort, reduced material waste through modular detailing, and elevated project identity.',
    processSteps: [
      { title: 'Research', text: 'Site mapping, climate readings, and behavior interviews formed the baseline model.' },
      { title: 'Concept', text: 'Three massing scenarios were tested against daylight and movement efficiency.' },
      { title: 'Detail', text: 'A full mockup cycle validated junctions, textures, and contractor tolerances.' },
      { title: 'Build', text: 'On-site reviews and phased handover ensured quality continuity.' }
    ],
    locationCoords: { lat: 52.300, lng: 34.400 }
  },
  {
    slug: 'micro-plaza-9',
    title: 'Micro Plaza 9',
    subtitle: 'Pocket urban plaza with rain-garden',
    year: 2026,
    city: 'Riga',
    country: 'Latvia',
    categories: ['Urban'],
    areaM2: 1600,
    status: 'In Progress',
    role: 'Lead Architect',
    client: 'Private Client',
    cover: { src: '/demo/projects/p12.svg', alt: 'Micro Plaza 9 cover' },
    hero: { type: 'image', src: '/demo/projects/p24.svg', alt: 'Micro Plaza 9 hero' },
    gallery: [
      { src: '/demo/projects/p34.svg', alt: 'Micro Plaza 9 frame 1' },
      { src: '/demo/projects/p35.svg', alt: 'Micro Plaza 9 frame 2' },
      { src: '/demo/projects/p36.svg', alt: 'Micro Plaza 9 frame 3' },
      { src: '/demo/projects/p37.svg', alt: 'Micro Plaza 9 frame 4' },
      { src: '/demo/projects/p38.svg', alt: 'Micro Plaza 9 frame 5' },
      { src: '/demo/projects/p39.svg', alt: 'Micro Plaza 9 frame 6' },
      { src: '/demo/projects/p40.svg', alt: 'Micro Plaza 9 frame 7' },
      { src: '/demo/projects/p1.svg', alt: 'Micro Plaza 9 frame 8' },
      { src: '/demo/projects/p2.svg', alt: 'Micro Plaza 9 frame 9' },
      { src: '/demo/projects/p3.svg', alt: 'Micro Plaza 9 frame 10' },
    ],
    tags: ['Daylight', 'Spatial rhythm', 'Material calm'],
    materials: ['Limestone', 'Brushed oak', 'Textured plaster', 'Patinated brass'],
    credits: ['Architecture: Atelier Nord', 'Visualization: In-house'],
    metrics: [
      { label: 'Budget', value: '€14.4M' },
      { label: 'Timeline', value: '26 months' },
      { label: 'Team', value: '18 specialists' }
    ],
    overview: 'Atelier Nord developed a precise architectural response balancing material depth, natural light, and long-term operational clarity. The project language favours tactile restraint, clean lines, and adaptable spatial sequences.',
    challenge: 'The brief demanded high program density while preserving calm circulation and strong daylight autonomy.',
    solution: 'We used layered thresholds, integrated storage bands, and carefully tuned aperture proportions to keep spaces visually quiet.',
    outcome: 'The completed environment improved user comfort, reduced material waste through modular detailing, and elevated project identity.',
    processSteps: [
      { title: 'Research', text: 'Site mapping, climate readings, and behavior interviews formed the baseline model.' },
      { title: 'Concept', text: 'Three massing scenarios were tested against daylight and movement efficiency.' },
      { title: 'Detail', text: 'A full mockup cycle validated junctions, textures, and contractor tolerances.' },
      { title: 'Build', text: 'On-site reviews and phased handover ensured quality continuity.' }
    ],
    locationCoords: { lat: 52.600, lng: 34.800 }
  },
];

export const projectMap = new Map(projects.map((project) => [project.slug, project]));
