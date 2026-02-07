import { Category, ProjectStatus } from './categories';

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  city: string;
  country: string;
  categories: Category[];
  areaM2: number;
  status: ProjectStatus;
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
    slug: 'nordic-loft',
    title: 'Nordic Loft House',
    subtitle: 'Residential retreat balancing timber and daylight',
    year: 2017,
    city: 'Aarhus',
    country: 'Denmark',
    categories: ['Residential'],
    areaM2: 355,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Commission',
    cover: { src: '/demo/projects/p1.svg', alt: 'Nordic Loft House cover' },
    hero: { type: 'image', src: '/demo/projects/p1.svg', alt: 'Nordic Loft House hero' },
    gallery: [
      { src: '/demo/projects/p1-g1.svg', alt: 'Nordic Loft House frame 1' },
      { src: '/demo/projects/p1-g2.svg', alt: 'Nordic Loft House frame 2' },
      { src: '/demo/projects/p1-g3.svg', alt: 'Nordic Loft House frame 3' },
      { src: '/demo/projects/p1-g4.svg', alt: 'Nordic Loft House frame 4' },
      { src: '/demo/projects/p1-g5.svg', alt: 'Nordic Loft House frame 5' },
      { src: '/demo/projects/p1-g6.svg', alt: 'Nordic Loft House frame 6' },
      { src: '/demo/projects/p1-g7.svg', alt: 'Nordic Loft House frame 7' },
      { src: '/demo/projects/p1-g8.svg', alt: 'Nordic Loft House frame 8' }
    ],
    tags: ['Daylight', 'Materiality', 'Calm Spatial Flow'],
    materials: ['Oak veneer', 'Limestone', 'Brushed brass', 'Microcement'],
    credits: ['Architecture: Atelier Nord', 'Visualization: Studio Plain'],
    metrics: [
      { label: 'Budget', value: '€2.0M' },
      { label: 'Timeline', value: '9 months' },
      { label: 'Team', value: '5 people' }
    ],
    overview:
      'Nordic Loft House explores soft transitions between private and collective zones, using proportional geometry and restrained material contrast to maintain visual calm.',
    challenge:
      'The brief required high performance within a compact footprint while preserving generous light quality and long-term flexibility.',
    solution:
      'We introduced a modular planning grid, layered apertures, and robust detailing that simplifies construction while elevating user comfort.',
    outcome:
      'The delivered environment performs efficiently, photographs elegantly, and remains adaptable for future use scenarios.',
    processSteps: [
      { title: 'Research', text: 'Site climate mapping, behavioral interviews, and benchmark studies.' },
      { title: 'Concept', text: 'Massing options and atmosphere boards aligned to the core narrative.' },
      { title: 'Detail', text: 'Joinery, lighting, and finish packages developed with contractors.' },
      { title: 'Build', text: 'On-site review, mockups, and quality control through completion.' }
    ],
    locationCoords: { lat: 55.63, lng: 12.34 }
  },
  {
    slug: 'harbor-courtyard',
    title: 'Harbor Courtyard Residences',
    subtitle: 'Mixed-density housing around wind-sheltered courtyard',
    year: 2018,
    city: 'Copenhagen',
    country: 'Denmark',
    categories: ['Residential'],
    areaM2: 430,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Commission',
    cover: { src: '/demo/projects/p2.svg', alt: 'Harbor Courtyard Residences cover' },
    hero: { type: 'image', src: '/demo/projects/p2.svg', alt: 'Harbor Courtyard Residences hero' },
    gallery: [
      { src: '/demo/projects/p2-g1.svg', alt: 'Harbor Courtyard Residences frame 1' },
      { src: '/demo/projects/p2-g2.svg', alt: 'Harbor Courtyard Residences frame 2' },
      { src: '/demo/projects/p2-g3.svg', alt: 'Harbor Courtyard Residences frame 3' },
      { src: '/demo/projects/p2-g4.svg', alt: 'Harbor Courtyard Residences frame 4' },
      { src: '/demo/projects/p2-g5.svg', alt: 'Harbor Courtyard Residences frame 5' },
      { src: '/demo/projects/p2-g6.svg', alt: 'Harbor Courtyard Residences frame 6' },
      { src: '/demo/projects/p2-g7.svg', alt: 'Harbor Courtyard Residences frame 7' },
      { src: '/demo/projects/p2-g8.svg', alt: 'Harbor Courtyard Residences frame 8' }
    ],
    tags: ['Daylight', 'Materiality', 'Calm Spatial Flow'],
    materials: ['Oak veneer', 'Limestone', 'Brushed brass', 'Microcement'],
    credits: ['Architecture: Atelier Nord', 'Visualization: Studio Plain'],
    metrics: [
      { label: 'Budget', value: '€2.2M' },
      { label: 'Timeline', value: '10 months' },
      { label: 'Team', value: '6 people' }
    ],
    overview:
      'Harbor Courtyard Residences explores soft transitions between private and collective zones, using proportional geometry and restrained material contrast to maintain visual calm.',
    challenge:
      'The brief required high performance within a compact footprint while preserving generous light quality and long-term flexibility.',
    solution:
      'We introduced a modular planning grid, layered apertures, and robust detailing that simplifies construction while elevating user comfort.',
    outcome:
      'The delivered environment performs efficiently, photographs elegantly, and remains adaptable for future use scenarios.',
    processSteps: [
      { title: 'Research', text: 'Site climate mapping, behavioral interviews, and benchmark studies.' },
      { title: 'Concept', text: 'Massing options and atmosphere boards aligned to the core narrative.' },
      { title: 'Detail', text: 'Joinery, lighting, and finish packages developed with contractors.' },
      { title: 'Build', text: 'On-site review, mockups, and quality control through completion.' }
    ],
    locationCoords: { lat: 55.66, lng: 12.38 }
  },
  {
    slug: 'ridge-villa',
    title: 'Ridge Villa 27',
    subtitle: 'Cliffside villa with passive cooling',
    year: 2019,
    city: 'Oslo',
    country: 'Denmark',
    categories: ['Residential'],
    areaM2: 505,
    status: 'In Progress',
    role: 'Lead Architect',
    client: 'Private Commission',
    cover: { src: '/demo/projects/p3.svg', alt: 'Ridge Villa 27 cover' },
    hero: { type: 'image', src: '/demo/projects/p3.svg', alt: 'Ridge Villa 27 hero' },
    gallery: [
      { src: '/demo/projects/p3-g1.svg', alt: 'Ridge Villa 27 frame 1' },
      { src: '/demo/projects/p3-g2.svg', alt: 'Ridge Villa 27 frame 2' },
      { src: '/demo/projects/p3-g3.svg', alt: 'Ridge Villa 27 frame 3' },
      { src: '/demo/projects/p3-g4.svg', alt: 'Ridge Villa 27 frame 4' },
      { src: '/demo/projects/p3-g5.svg', alt: 'Ridge Villa 27 frame 5' },
      { src: '/demo/projects/p3-g6.svg', alt: 'Ridge Villa 27 frame 6' },
      { src: '/demo/projects/p3-g7.svg', alt: 'Ridge Villa 27 frame 7' },
      { src: '/demo/projects/p3-g8.svg', alt: 'Ridge Villa 27 frame 8' }
    ],
    tags: ['Daylight', 'Materiality', 'Calm Spatial Flow'],
    materials: ['Oak veneer', 'Limestone', 'Brushed brass', 'Microcement'],
    credits: ['Architecture: Atelier Nord', 'Visualization: Studio Plain'],
    metrics: [
      { label: 'Budget', value: '€2.4M' },
      { label: 'Timeline', value: '11 months' },
      { label: 'Team', value: '7 people' }
    ],
    overview:
      'Ridge Villa 27 explores soft transitions between private and collective zones, using proportional geometry and restrained material contrast to maintain visual calm.',
    challenge:
      'The brief required high performance within a compact footprint while preserving generous light quality and long-term flexibility.',
    solution:
      'We introduced a modular planning grid, layered apertures, and robust detailing that simplifies construction while elevating user comfort.',
    outcome:
      'The delivered environment performs efficiently, photographs elegantly, and remains adaptable for future use scenarios.',
    processSteps: [
      { title: 'Research', text: 'Site climate mapping, behavioral interviews, and benchmark studies.' },
      { title: 'Concept', text: 'Massing options and atmosphere boards aligned to the core narrative.' },
      { title: 'Detail', text: 'Joinery, lighting, and finish packages developed with contractors.' },
      { title: 'Build', text: 'On-site review, mockups, and quality control through completion.' }
    ],
    locationCoords: { lat: 55.69, lng: 12.42 }
  },
  {
    slug: 'forest-row',
    title: 'Forest Row Townhomes',
    subtitle: 'Urban infill townhomes with shared garden',
    year: 2020,
    city: 'Gothenburg',
    country: 'Denmark',
    categories: ['Residential'],
    areaM2: 580,
    status: 'Concept',
    role: 'Lead Architect',
    client: 'Private Commission',
    cover: { src: '/demo/projects/p4.svg', alt: 'Forest Row Townhomes cover' },
    hero: { type: 'image', src: '/demo/projects/p4.svg', alt: 'Forest Row Townhomes hero' },
    gallery: [
      { src: '/demo/projects/p4-g1.svg', alt: 'Forest Row Townhomes frame 1' },
      { src: '/demo/projects/p4-g2.svg', alt: 'Forest Row Townhomes frame 2' },
      { src: '/demo/projects/p4-g3.svg', alt: 'Forest Row Townhomes frame 3' },
      { src: '/demo/projects/p4-g4.svg', alt: 'Forest Row Townhomes frame 4' },
      { src: '/demo/projects/p4-g5.svg', alt: 'Forest Row Townhomes frame 5' },
      { src: '/demo/projects/p4-g6.svg', alt: 'Forest Row Townhomes frame 6' },
      { src: '/demo/projects/p4-g7.svg', alt: 'Forest Row Townhomes frame 7' },
      { src: '/demo/projects/p4-g8.svg', alt: 'Forest Row Townhomes frame 8' }
    ],
    tags: ['Daylight', 'Materiality', 'Calm Spatial Flow'],
    materials: ['Oak veneer', 'Limestone', 'Brushed brass', 'Microcement'],
    credits: ['Architecture: Atelier Nord', 'Visualization: Studio Plain'],
    metrics: [
      { label: 'Budget', value: '€2.6M' },
      { label: 'Timeline', value: '12 months' },
      { label: 'Team', value: '8 people' }
    ],
    overview:
      'Forest Row Townhomes explores soft transitions between private and collective zones, using proportional geometry and restrained material contrast to maintain visual calm.',
    challenge:
      'The brief required high performance within a compact footprint while preserving generous light quality and long-term flexibility.',
    solution:
      'We introduced a modular planning grid, layered apertures, and robust detailing that simplifies construction while elevating user comfort.',
    outcome:
      'The delivered environment performs efficiently, photographs elegantly, and remains adaptable for future use scenarios.',
    processSteps: [
      { title: 'Research', text: 'Site climate mapping, behavioral interviews, and benchmark studies.' },
      { title: 'Concept', text: 'Massing options and atmosphere boards aligned to the core narrative.' },
      { title: 'Detail', text: 'Joinery, lighting, and finish packages developed with contractors.' },
      { title: 'Build', text: 'On-site review, mockups, and quality control through completion.' }
    ],
    locationCoords: { lat: 55.72, lng: 12.46 }
  },
  {
    slug: 'atelier-sora',
    title: 'Atelier Sora Workspace',
    subtitle: 'Adaptive reuse office for creative teams',
    year: 2021,
    city: 'Berlin',
    country: 'Denmark',
    categories: ['Commercial'],
    areaM2: 655,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Commission',
    cover: { src: '/demo/projects/p5.svg', alt: 'Atelier Sora Workspace cover' },
    hero: { type: 'image', src: '/demo/projects/p5.svg', alt: 'Atelier Sora Workspace hero' },
    gallery: [
      { src: '/demo/projects/p5-g1.svg', alt: 'Atelier Sora Workspace frame 1' },
      { src: '/demo/projects/p5-g2.svg', alt: 'Atelier Sora Workspace frame 2' },
      { src: '/demo/projects/p5-g3.svg', alt: 'Atelier Sora Workspace frame 3' },
      { src: '/demo/projects/p5-g4.svg', alt: 'Atelier Sora Workspace frame 4' },
      { src: '/demo/projects/p5-g5.svg', alt: 'Atelier Sora Workspace frame 5' },
      { src: '/demo/projects/p5-g6.svg', alt: 'Atelier Sora Workspace frame 6' },
      { src: '/demo/projects/p5-g7.svg', alt: 'Atelier Sora Workspace frame 7' },
      { src: '/demo/projects/p5-g8.svg', alt: 'Atelier Sora Workspace frame 8' }
    ],
    tags: ['Daylight', 'Materiality', 'Calm Spatial Flow'],
    materials: ['Oak veneer', 'Limestone', 'Brushed brass', 'Microcement'],
    credits: ['Architecture: Atelier Nord', 'Visualization: Studio Plain'],
    metrics: [
      { label: 'Budget', value: '€2.8M' },
      { label: 'Timeline', value: '13 months' },
      { label: 'Team', value: '4 people' }
    ],
    overview:
      'Atelier Sora Workspace explores soft transitions between private and collective zones, using proportional geometry and restrained material contrast to maintain visual calm.',
    challenge:
      'The brief required high performance within a compact footprint while preserving generous light quality and long-term flexibility.',
    solution:
      'We introduced a modular planning grid, layered apertures, and robust detailing that simplifies construction while elevating user comfort.',
    outcome:
      'The delivered environment performs efficiently, photographs elegantly, and remains adaptable for future use scenarios.',
    processSteps: [
      { title: 'Research', text: 'Site climate mapping, behavioral interviews, and benchmark studies.' },
      { title: 'Concept', text: 'Massing options and atmosphere boards aligned to the core narrative.' },
      { title: 'Detail', text: 'Joinery, lighting, and finish packages developed with contractors.' },
      { title: 'Build', text: 'On-site review, mockups, and quality control through completion.' }
    ],
    locationCoords: { lat: 55.75, lng: 12.50 }
  },
  {
    slug: 'meridian-clinic',
    title: 'Meridian Wellness Clinic',
    subtitle: 'Healthcare interior with warm acoustic envelope',
    year: 2022,
    city: 'Hamburg',
    country: 'Denmark',
    categories: ['Interior'],
    areaM2: 730,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Commission',
    cover: { src: '/demo/projects/p6.svg', alt: 'Meridian Wellness Clinic cover' },
    hero: { type: 'image', src: '/demo/projects/p6.svg', alt: 'Meridian Wellness Clinic hero' },
    gallery: [
      { src: '/demo/projects/p6-g1.svg', alt: 'Meridian Wellness Clinic frame 1' },
      { src: '/demo/projects/p6-g2.svg', alt: 'Meridian Wellness Clinic frame 2' },
      { src: '/demo/projects/p6-g3.svg', alt: 'Meridian Wellness Clinic frame 3' },
      { src: '/demo/projects/p6-g4.svg', alt: 'Meridian Wellness Clinic frame 4' },
      { src: '/demo/projects/p6-g5.svg', alt: 'Meridian Wellness Clinic frame 5' },
      { src: '/demo/projects/p6-g6.svg', alt: 'Meridian Wellness Clinic frame 6' },
      { src: '/demo/projects/p6-g7.svg', alt: 'Meridian Wellness Clinic frame 7' },
      { src: '/demo/projects/p6-g8.svg', alt: 'Meridian Wellness Clinic frame 8' }
    ],
    tags: ['Daylight', 'Materiality', 'Calm Spatial Flow'],
    materials: ['Oak veneer', 'Limestone', 'Brushed brass', 'Microcement'],
    credits: ['Architecture: Atelier Nord', 'Visualization: Studio Plain'],
    metrics: [
      { label: 'Budget', value: '€3.0M' },
      { label: 'Timeline', value: '14 months' },
      { label: 'Team', value: '5 people' }
    ],
    overview:
      'Meridian Wellness Clinic explores soft transitions between private and collective zones, using proportional geometry and restrained material contrast to maintain visual calm.',
    challenge:
      'The brief required high performance within a compact footprint while preserving generous light quality and long-term flexibility.',
    solution:
      'We introduced a modular planning grid, layered apertures, and robust detailing that simplifies construction while elevating user comfort.',
    outcome:
      'The delivered environment performs efficiently, photographs elegantly, and remains adaptable for future use scenarios.',
    processSteps: [
      { title: 'Research', text: 'Site climate mapping, behavioral interviews, and benchmark studies.' },
      { title: 'Concept', text: 'Massing options and atmosphere boards aligned to the core narrative.' },
      { title: 'Detail', text: 'Joinery, lighting, and finish packages developed with contractors.' },
      { title: 'Build', text: 'On-site review, mockups, and quality control through completion.' }
    ],
    locationCoords: { lat: 55.78, lng: 12.54 }
  },
  {
    slug: 'arc-market-hall',
    title: 'Arc Market Hall',
    subtitle: 'Neighborhood food hall and public plaza',
    year: 2023,
    city: 'Helsinki',
    country: 'Denmark',
    categories: ['Commercial'],
    areaM2: 805,
    status: 'In Progress',
    role: 'Lead Architect',
    client: 'Private Commission',
    cover: { src: '/demo/projects/p7.svg', alt: 'Arc Market Hall cover' },
    hero: { type: 'image', src: '/demo/projects/p7.svg', alt: 'Arc Market Hall hero' },
    gallery: [
      { src: '/demo/projects/p7-g1.svg', alt: 'Arc Market Hall frame 1' },
      { src: '/demo/projects/p7-g2.svg', alt: 'Arc Market Hall frame 2' },
      { src: '/demo/projects/p7-g3.svg', alt: 'Arc Market Hall frame 3' },
      { src: '/demo/projects/p7-g4.svg', alt: 'Arc Market Hall frame 4' },
      { src: '/demo/projects/p7-g5.svg', alt: 'Arc Market Hall frame 5' },
      { src: '/demo/projects/p7-g6.svg', alt: 'Arc Market Hall frame 6' },
      { src: '/demo/projects/p7-g7.svg', alt: 'Arc Market Hall frame 7' },
      { src: '/demo/projects/p7-g8.svg', alt: 'Arc Market Hall frame 8' }
    ],
    tags: ['Daylight', 'Materiality', 'Calm Spatial Flow'],
    materials: ['Oak veneer', 'Limestone', 'Brushed brass', 'Microcement'],
    credits: ['Architecture: Atelier Nord', 'Visualization: Studio Plain'],
    metrics: [
      { label: 'Budget', value: '€3.2M' },
      { label: 'Timeline', value: '15 months' },
      { label: 'Team', value: '6 people' }
    ],
    overview:
      'Arc Market Hall explores soft transitions between private and collective zones, using proportional geometry and restrained material contrast to maintain visual calm.',
    challenge:
      'The brief required high performance within a compact footprint while preserving generous light quality and long-term flexibility.',
    solution:
      'We introduced a modular planning grid, layered apertures, and robust detailing that simplifies construction while elevating user comfort.',
    outcome:
      'The delivered environment performs efficiently, photographs elegantly, and remains adaptable for future use scenarios.',
    processSteps: [
      { title: 'Research', text: 'Site climate mapping, behavioral interviews, and benchmark studies.' },
      { title: 'Concept', text: 'Massing options and atmosphere boards aligned to the core narrative.' },
      { title: 'Detail', text: 'Joinery, lighting, and finish packages developed with contractors.' },
      { title: 'Build', text: 'On-site review, mockups, and quality control through completion.' }
    ],
    locationCoords: { lat: 55.81, lng: 12.58 }
  },
  {
    slug: 'canvas-hotel',
    title: 'Canvas Micro Hotel',
    subtitle: 'Compact hotel concept with layered privacy',
    year: 2024,
    city: 'Stockholm',
    country: 'Denmark',
    categories: ['Interior'],
    areaM2: 880,
    status: 'Concept',
    role: 'Lead Architect',
    client: 'Private Commission',
    cover: { src: '/demo/projects/p8.svg', alt: 'Canvas Micro Hotel cover' },
    hero: { type: 'image', src: '/demo/projects/p8.svg', alt: 'Canvas Micro Hotel hero' },
    gallery: [
      { src: '/demo/projects/p8-g1.svg', alt: 'Canvas Micro Hotel frame 1' },
      { src: '/demo/projects/p8-g2.svg', alt: 'Canvas Micro Hotel frame 2' },
      { src: '/demo/projects/p8-g3.svg', alt: 'Canvas Micro Hotel frame 3' },
      { src: '/demo/projects/p8-g4.svg', alt: 'Canvas Micro Hotel frame 4' },
      { src: '/demo/projects/p8-g5.svg', alt: 'Canvas Micro Hotel frame 5' },
      { src: '/demo/projects/p8-g6.svg', alt: 'Canvas Micro Hotel frame 6' },
      { src: '/demo/projects/p8-g7.svg', alt: 'Canvas Micro Hotel frame 7' },
      { src: '/demo/projects/p8-g8.svg', alt: 'Canvas Micro Hotel frame 8' }
    ],
    tags: ['Daylight', 'Materiality', 'Calm Spatial Flow'],
    materials: ['Oak veneer', 'Limestone', 'Brushed brass', 'Microcement'],
    credits: ['Architecture: Atelier Nord', 'Visualization: Studio Plain'],
    metrics: [
      { label: 'Budget', value: '€3.4M' },
      { label: 'Timeline', value: '16 months' },
      { label: 'Team', value: '7 people' }
    ],
    overview:
      'Canvas Micro Hotel explores soft transitions between private and collective zones, using proportional geometry and restrained material contrast to maintain visual calm.',
    challenge:
      'The brief required high performance within a compact footprint while preserving generous light quality and long-term flexibility.',
    solution:
      'We introduced a modular planning grid, layered apertures, and robust detailing that simplifies construction while elevating user comfort.',
    outcome:
      'The delivered environment performs efficiently, photographs elegantly, and remains adaptable for future use scenarios.',
    processSteps: [
      { title: 'Research', text: 'Site climate mapping, behavioral interviews, and benchmark studies.' },
      { title: 'Concept', text: 'Massing options and atmosphere boards aligned to the core narrative.' },
      { title: 'Detail', text: 'Joinery, lighting, and finish packages developed with contractors.' },
      { title: 'Build', text: 'On-site review, mockups, and quality control through completion.' }
    ],
    locationCoords: { lat: 55.84, lng: 12.62 }
  },
  {
    slug: 'north-bank-hq',
    title: 'North Bank HQ',
    subtitle: 'Timber-first HQ with collaborative atrium',
    year: 2025,
    city: 'Amsterdam',
    country: 'Denmark',
    categories: ['Commercial'],
    areaM2: 955,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Commission',
    cover: { src: '/demo/projects/p9.svg', alt: 'North Bank HQ cover' },
    hero: { type: 'image', src: '/demo/projects/p9.svg', alt: 'North Bank HQ hero' },
    gallery: [
      { src: '/demo/projects/p9-g1.svg', alt: 'North Bank HQ frame 1' },
      { src: '/demo/projects/p9-g2.svg', alt: 'North Bank HQ frame 2' },
      { src: '/demo/projects/p9-g3.svg', alt: 'North Bank HQ frame 3' },
      { src: '/demo/projects/p9-g4.svg', alt: 'North Bank HQ frame 4' },
      { src: '/demo/projects/p9-g5.svg', alt: 'North Bank HQ frame 5' },
      { src: '/demo/projects/p9-g6.svg', alt: 'North Bank HQ frame 6' },
      { src: '/demo/projects/p9-g7.svg', alt: 'North Bank HQ frame 7' },
      { src: '/demo/projects/p9-g8.svg', alt: 'North Bank HQ frame 8' }
    ],
    tags: ['Daylight', 'Materiality', 'Calm Spatial Flow'],
    materials: ['Oak veneer', 'Limestone', 'Brushed brass', 'Microcement'],
    credits: ['Architecture: Atelier Nord', 'Visualization: Studio Plain'],
    metrics: [
      { label: 'Budget', value: '€3.6M' },
      { label: 'Timeline', value: '17 months' },
      { label: 'Team', value: '8 people' }
    ],
    overview:
      'North Bank HQ explores soft transitions between private and collective zones, using proportional geometry and restrained material contrast to maintain visual calm.',
    challenge:
      'The brief required high performance within a compact footprint while preserving generous light quality and long-term flexibility.',
    solution:
      'We introduced a modular planning grid, layered apertures, and robust detailing that simplifies construction while elevating user comfort.',
    outcome:
      'The delivered environment performs efficiently, photographs elegantly, and remains adaptable for future use scenarios.',
    processSteps: [
      { title: 'Research', text: 'Site climate mapping, behavioral interviews, and benchmark studies.' },
      { title: 'Concept', text: 'Massing options and atmosphere boards aligned to the core narrative.' },
      { title: 'Detail', text: 'Joinery, lighting, and finish packages developed with contractors.' },
      { title: 'Build', text: 'On-site review, mockups, and quality control through completion.' }
    ],
    locationCoords: { lat: 55.87, lng: 12.66 }
  },
  {
    slug: 'lumen-penthouse',
    title: 'Lumen Penthouse',
    subtitle: 'Quiet interior renovation over city skyline',
    year: 2026,
    city: 'Vienna',
    country: 'Denmark',
    categories: ['Interior'],
    areaM2: 1030,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Commission',
    cover: { src: '/demo/projects/p10.svg', alt: 'Lumen Penthouse cover' },
    hero: { type: 'image', src: '/demo/projects/p10.svg', alt: 'Lumen Penthouse hero' },
    gallery: [
      { src: '/demo/projects/p10-g1.svg', alt: 'Lumen Penthouse frame 1' },
      { src: '/demo/projects/p10-g2.svg', alt: 'Lumen Penthouse frame 2' },
      { src: '/demo/projects/p10-g3.svg', alt: 'Lumen Penthouse frame 3' },
      { src: '/demo/projects/p10-g4.svg', alt: 'Lumen Penthouse frame 4' },
      { src: '/demo/projects/p10-g5.svg', alt: 'Lumen Penthouse frame 5' },
      { src: '/demo/projects/p10-g6.svg', alt: 'Lumen Penthouse frame 6' },
      { src: '/demo/projects/p10-g7.svg', alt: 'Lumen Penthouse frame 7' },
      { src: '/demo/projects/p10-g8.svg', alt: 'Lumen Penthouse frame 8' }
    ],
    tags: ['Daylight', 'Materiality', 'Calm Spatial Flow'],
    materials: ['Oak veneer', 'Limestone', 'Brushed brass', 'Microcement'],
    credits: ['Architecture: Atelier Nord', 'Visualization: Studio Plain'],
    metrics: [
      { label: 'Budget', value: '€3.8M' },
      { label: 'Timeline', value: '18 months' },
      { label: 'Team', value: '4 people' }
    ],
    overview:
      'Lumen Penthouse explores soft transitions between private and collective zones, using proportional geometry and restrained material contrast to maintain visual calm.',
    challenge:
      'The brief required high performance within a compact footprint while preserving generous light quality and long-term flexibility.',
    solution:
      'We introduced a modular planning grid, layered apertures, and robust detailing that simplifies construction while elevating user comfort.',
    outcome:
      'The delivered environment performs efficiently, photographs elegantly, and remains adaptable for future use scenarios.',
    processSteps: [
      { title: 'Research', text: 'Site climate mapping, behavioral interviews, and benchmark studies.' },
      { title: 'Concept', text: 'Massing options and atmosphere boards aligned to the core narrative.' },
      { title: 'Detail', text: 'Joinery, lighting, and finish packages developed with contractors.' },
      { title: 'Build', text: 'On-site review, mockups, and quality control through completion.' }
    ],
    locationCoords: { lat: 55.90, lng: 12.70 }
  },
  {
    slug: 'fjord-library',
    title: 'Fjord Reading Rooms',
    subtitle: 'Library interiors tuned for focus and flow',
    year: 2027,
    city: 'Bergen',
    country: 'Denmark',
    categories: ['Interior'],
    areaM2: 1105,
    status: 'In Progress',
    role: 'Lead Architect',
    client: 'Private Commission',
    cover: { src: '/demo/projects/p11.svg', alt: 'Fjord Reading Rooms cover' },
    hero: { type: 'image', src: '/demo/projects/p11.svg', alt: 'Fjord Reading Rooms hero' },
    gallery: [
      { src: '/demo/projects/p11-g1.svg', alt: 'Fjord Reading Rooms frame 1' },
      { src: '/demo/projects/p11-g2.svg', alt: 'Fjord Reading Rooms frame 2' },
      { src: '/demo/projects/p11-g3.svg', alt: 'Fjord Reading Rooms frame 3' },
      { src: '/demo/projects/p11-g4.svg', alt: 'Fjord Reading Rooms frame 4' },
      { src: '/demo/projects/p11-g5.svg', alt: 'Fjord Reading Rooms frame 5' },
      { src: '/demo/projects/p11-g6.svg', alt: 'Fjord Reading Rooms frame 6' },
      { src: '/demo/projects/p11-g7.svg', alt: 'Fjord Reading Rooms frame 7' },
      { src: '/demo/projects/p11-g8.svg', alt: 'Fjord Reading Rooms frame 8' }
    ],
    tags: ['Daylight', 'Materiality', 'Calm Spatial Flow'],
    materials: ['Oak veneer', 'Limestone', 'Brushed brass', 'Microcement'],
    credits: ['Architecture: Atelier Nord', 'Visualization: Studio Plain'],
    metrics: [
      { label: 'Budget', value: '€4.0M' },
      { label: 'Timeline', value: '19 months' },
      { label: 'Team', value: '5 people' }
    ],
    overview:
      'Fjord Reading Rooms explores soft transitions between private and collective zones, using proportional geometry and restrained material contrast to maintain visual calm.',
    challenge:
      'The brief required high performance within a compact footprint while preserving generous light quality and long-term flexibility.',
    solution:
      'We introduced a modular planning grid, layered apertures, and robust detailing that simplifies construction while elevating user comfort.',
    outcome:
      'The delivered environment performs efficiently, photographs elegantly, and remains adaptable for future use scenarios.',
    processSteps: [
      { title: 'Research', text: 'Site climate mapping, behavioral interviews, and benchmark studies.' },
      { title: 'Concept', text: 'Massing options and atmosphere boards aligned to the core narrative.' },
      { title: 'Detail', text: 'Joinery, lighting, and finish packages developed with contractors.' },
      { title: 'Build', text: 'On-site review, mockups, and quality control through completion.' }
    ],
    locationCoords: { lat: 55.93, lng: 12.74 }
  },
  {
    slug: 'river-link-pocket-park',
    title: 'River Link Pocket Park',
    subtitle: 'Small urban corridor reconnecting waterfront paths',
    year: 2028,
    city: 'Copenhagen',
    country: 'Denmark',
    categories: ['Urban'],
    areaM2: 1180,
    status: 'Built',
    role: 'Lead Architect',
    client: 'Private Commission',
    cover: { src: '/demo/projects/p12.svg', alt: 'River Link Pocket Park cover' },
    hero: { type: 'image', src: '/demo/projects/p12.svg', alt: 'River Link Pocket Park hero' },
    gallery: [
      { src: '/demo/projects/p12-g1.svg', alt: 'River Link Pocket Park frame 1' },
      { src: '/demo/projects/p12-g2.svg', alt: 'River Link Pocket Park frame 2' },
      { src: '/demo/projects/p12-g3.svg', alt: 'River Link Pocket Park frame 3' },
      { src: '/demo/projects/p12-g4.svg', alt: 'River Link Pocket Park frame 4' },
      { src: '/demo/projects/p12-g5.svg', alt: 'River Link Pocket Park frame 5' },
      { src: '/demo/projects/p12-g6.svg', alt: 'River Link Pocket Park frame 6' },
      { src: '/demo/projects/p12-g7.svg', alt: 'River Link Pocket Park frame 7' },
      { src: '/demo/projects/p12-g8.svg', alt: 'River Link Pocket Park frame 8' }
    ],
    tags: ['Daylight', 'Materiality', 'Calm Spatial Flow'],
    materials: ['Oak veneer', 'Limestone', 'Brushed brass', 'Microcement'],
    credits: ['Architecture: Atelier Nord', 'Visualization: Studio Plain'],
    metrics: [
      { label: 'Budget', value: '€4.2M' },
      { label: 'Timeline', value: '20 months' },
      { label: 'Team', value: '6 people' }
    ],
    overview:
      'River Link Pocket Park explores soft transitions between private and collective zones, using proportional geometry and restrained material contrast to maintain visual calm.',
    challenge:
      'The brief required high performance within a compact footprint while preserving generous light quality and long-term flexibility.',
    solution:
      'We introduced a modular planning grid, layered apertures, and robust detailing that simplifies construction while elevating user comfort.',
    outcome:
      'The delivered environment performs efficiently, photographs elegantly, and remains adaptable for future use scenarios.',
    processSteps: [
      { title: 'Research', text: 'Site climate mapping, behavioral interviews, and benchmark studies.' },
      { title: 'Concept', text: 'Massing options and atmosphere boards aligned to the core narrative.' },
      { title: 'Detail', text: 'Joinery, lighting, and finish packages developed with contractors.' },
      { title: 'Build', text: 'On-site review, mockups, and quality control through completion.' }
    ],
    locationCoords: { lat: 55.96, lng: 12.78 }
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
