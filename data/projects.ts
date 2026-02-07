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

const steps = [
  { title: 'Research', text: 'Surveying site patterns, daylight behavior, and user flows.' },
  { title: 'Concept', text: 'Building spatial narratives with massing and circulation tests.' },
  { title: 'Detail', text: 'Resolving materials, joints, and technical documentation.' },
  { title: 'Build', text: 'Coordinating contractors and refining quality during delivery.' }
];

const makeGallery = (start: number) =>
  Array.from({ length: 8 }).map((_, idx) => ({
    src: `/demo/projects/p${String(((start + idx - 1) % 30) + 1).padStart(2, '0')}.svg`,
    alt: `Project visual ${idx + 1}`
  }));

export const projects: Project[] = [
  {
    slug: 'north-courtyard-residences',
    title: 'North Courtyard Residences',
    subtitle: 'A calm housing cluster around a shared light court.',
    year: 2025, city: 'Lviv', country: 'Ukraine', categories: ['Residential'], areaM2: 4200, status: 'Built', role: 'Lead Architect', client: 'Nord Habitat',
    cover: { src: '/demo/projects/p01.svg', alt: 'North Courtyard cover' },
    hero: { type: 'image', src: '/demo/projects/p02.svg', alt: 'North Courtyard hero' },
    gallery: makeGallery(3), tags: ['Low-rise', 'Passive', 'Community'], materials: ['Lime plaster', 'Oak', 'Brass'], credits: ['Atelier Nord', 'Lumen Engineering'],
    metrics: [{ label: 'Budget', value: '€6.2M' }, { label: 'Timeline', value: '20 months' }, { label: 'Team', value: '11 specialists' }],
    overview: 'North Courtyard rethinks multi-family housing as a sequence of quiet thresholds. Shared circulation and planted voids provide orientation and social softness.',
    challenge: 'The dense parcel needed high yield without losing daylight and privacy.',
    solution: 'A stepped perimeter wraps a central courtyard, while recessed balconies reduce visual conflict.',
    outcome: 'Occupancy reached 98% in the first quarter with strong resident satisfaction scores.',
    processSteps: steps, locationCoords: { lat: 49.8397, lng: 24.0297 }
  },
  {
    slug: 'harbor-line-offices', title: 'Harbor Line Offices', subtitle: 'Adaptive office interiors for a waterfront tech campus.', year: 2024, city: 'Odesa', country: 'Ukraine', categories: ['Commercial', 'Interior'], areaM2: 3200, status: 'Built', role: 'Design Lead',
    cover: { src: '/demo/projects/p04.svg', alt: 'Harbor cover' }, hero: { type: 'image', src: '/demo/projects/p05.svg', alt: 'Harbor hero' }, gallery: makeGallery(6), tags: ['Workplace', 'Acoustics'], materials: ['Recycled felt', 'Steel', 'Glass'], credits: ['Atelier Nord', 'Forma Acoustics'],
    metrics: [{ label: 'Budget', value: '€2.9M' }, { label: 'Timeline', value: '11 months' }, { label: 'Team', value: '8 specialists' }],
    overview: 'A layered workplace balancing collaboration and deep-focus zones.', challenge: 'Open-plan noise and rapidly changing team structures.', solution: 'Flexible planning with modular acoustic enclosures and quiet belts.', outcome: 'Measured productivity and retention improved after relocation.', processSteps: steps
  },
  {
    slug: 'pine-ridge-house', title: 'Pine Ridge House', subtitle: 'Weekend home composed as framed views to the valley.', year: 2026, city: 'Yaremche', country: 'Ukraine', categories: ['Residential', 'Interior'], areaM2: 540, status: 'In Progress', role: 'Lead Architect', cover: { src: '/demo/projects/p07.svg', alt: 'Pine Ridge cover' }, hero: { type: 'image', src: '/demo/projects/p08.svg', alt: 'Pine Ridge hero' }, gallery: makeGallery(9), tags: ['Timber', 'Landscape'], materials: ['Thermowood', 'Limestone', 'Linen'], credits: ['Atelier Nord'], metrics: [{ label: 'Budget', value: '€1.4M' }, { label: 'Timeline', value: '14 months' }, { label: 'Team', value: '6 specialists' }], overview: 'A compact residence tuned to mountain climate and long horizons.', challenge: 'Steep topography and seasonal weather extremes.', solution: 'Split levels anchored to contour lines with robust envelope detailing.', outcome: 'Construction package completed with minimal site intervention.', processSteps: steps
  },
  {
    slug: 'forum-market-hall', title: 'Forum Market Hall', subtitle: 'A neighborhood food hall as civic interior.', year: 2023, city: 'Dnipro', country: 'Ukraine', categories: ['Commercial', 'Interior'], areaM2: 1900, status: 'Built', role: 'Visualization', cover: { src: '/demo/projects/p10.svg', alt: 'Forum cover' }, hero: { type: 'image', src: '/demo/projects/p11.svg', alt: 'Forum hero' }, gallery: makeGallery(12), tags: ['Hospitality', 'Adaptive Reuse'], materials: ['Terrazzo', 'Pine', 'Brick'], credits: ['Atelier Nord', 'Urban Kitchen Group'], metrics: [{ label: 'Budget', value: '€1.1M' }, { label: 'Timeline', value: '9 months' }, { label: 'Team', value: '7 specialists' }], overview: 'A former warehouse transformed into a public culinary destination.', challenge: 'Tight budget and mixed tenant requirements.', solution: 'Kit-of-parts stalls with robust shared infrastructure.', outcome: 'Footfall doubled within six months of opening.', processSteps: steps
  },
  {
    slug: 'river-terrace-lofts', title: 'River Terrace Lofts', subtitle: 'Loft residences with dual-aspect daylight strategy.', year: 2022, city: 'Kyiv', country: 'Ukraine', categories: ['Residential'], areaM2: 2800, status: 'Built', role: 'Lead Architect', cover: { src: '/demo/projects/p13.svg', alt: 'River Terrace cover' }, hero: { type: 'image', src: '/demo/projects/p14.svg', alt: 'River Terrace hero' }, gallery: makeGallery(15), tags: ['Lofts', 'Riverfront'], materials: ['Concrete', 'Ash wood', 'Patinated steel'], credits: ['Atelier Nord'], metrics: [{ label: 'Budget', value: '€3.8M' }, { label: 'Timeline', value: '18 months' }, { label: 'Team', value: '10 specialists' }], overview: 'Industrial shell adapted into high-performance waterfront housing.', challenge: 'Flood resilience and thermal upgrades.', solution: 'Raised plinth with ventilated facade retrofit.', outcome: 'Project achieved energy reduction above baseline targets.', processSteps: steps
  },
  {
    slug: 'atelier-archive-interiors', title: 'Atelier Archive Interiors', subtitle: 'Quiet office interiors for a creative archive studio.', year: 2021, city: 'Warsaw', country: 'Poland', categories: ['Interior'], areaM2: 760, status: 'Built', role: 'Design Lead', cover: { src: '/demo/projects/p16.svg', alt: 'Archive cover' }, hero: { type: 'image', src: '/demo/projects/p17.svg', alt: 'Archive hero' }, gallery: makeGallery(18), tags: ['Workspace', 'Archive'], materials: ['Birch plywood', 'Brass mesh', 'Wool'], credits: ['Atelier Nord'], metrics: [{ label: 'Budget', value: '€620K' }, { label: 'Timeline', value: '7 months' }, { label: 'Team', value: '5 specialists' }], overview: 'A restrained interior balancing storage density and tactile warmth.', challenge: 'Program demanded heavy storage with elegant visitor path.', solution: 'Perimeter shelving and a central lounge axis.', outcome: 'Client expanded with a second floor commission.', processSteps: steps
  },
  {
    slug: 'linen-house', title: 'Linen House', subtitle: 'Family residence focused on breathable materials.', year: 2020, city: 'Rivne', country: 'Ukraine', categories: ['Residential', 'Interior'], areaM2: 430, status: 'Built', role: 'Lead Architect', cover: { src: '/demo/projects/p19.svg', alt: 'Linen House cover' }, hero: { type: 'image', src: '/demo/projects/p20.svg', alt: 'Linen House hero' }, gallery: makeGallery(21), tags: ['Family', 'Healthy materials'], materials: ['Clay plaster', 'Linen textiles', 'Oak'], credits: ['Atelier Nord'], metrics: [{ label: 'Budget', value: '€890K' }, { label: 'Timeline', value: '13 months' }, { label: 'Team', value: '6 specialists' }], overview: 'A breathable, low-toxicity interior for a young family.', challenge: 'Maintain modern expression while using natural finishes.', solution: 'Monolithic geometry with warm, textured surfaces.', outcome: 'Indoor comfort metrics exceeded expectations.', processSteps: steps
  },
  {
    slug: 'axis-boutique-hotel', title: 'Axis Boutique Hotel', subtitle: 'Compact hospitality concept for old-town district.', year: 2019, city: 'Kraków', country: 'Poland', categories: ['Commercial', 'Interior'], areaM2: 1450, status: 'Built', role: 'Design Lead', cover: { src: '/demo/projects/p22.svg', alt: 'Axis cover' }, hero: { type: 'image', src: '/demo/projects/p23.svg', alt: 'Axis hero' }, gallery: makeGallery(24), tags: ['Hospitality', 'Renovation'], materials: ['Walnut', 'Limewash', 'Brushed brass'], credits: ['Atelier Nord'], metrics: [{ label: 'Budget', value: '€1.9M' }, { label: 'Timeline', value: '10 months' }, { label: 'Team', value: '9 specialists' }], overview: 'A small hotel with strong spatial identity and efficient operations.', challenge: 'Historic envelope restrictions and tiny floor plates.', solution: 'Custom millwork to integrate services and storage.', outcome: 'Design publication features across regional press.', processSteps: steps
  },
  {
    slug: 'linea-clinic', title: 'Linea Clinic', subtitle: 'Healthcare interior centered on dignity and clarity.', year: 2026, city: 'Vilnius', country: 'Lithuania', categories: ['Interior', 'Commercial'], areaM2: 1100, status: 'Concept', role: 'Visualization', cover: { src: '/demo/projects/p25.svg', alt: 'Linea cover' }, hero: { type: 'image', src: '/demo/projects/p26.svg', alt: 'Linea hero' }, gallery: makeGallery(27), tags: ['Healthcare', 'Wayfinding'], materials: ['Solid surface', 'Maple', 'Acoustic plaster'], credits: ['Atelier Nord'], metrics: [{ label: 'Budget', value: '€1.3M' }, { label: 'Timeline', value: '8 months' }, { label: 'Team', value: '6 specialists' }], overview: 'Outpatient clinic concept with stress-reducing circulation.', challenge: 'High throughput in limited area.', solution: 'Looped waiting and treatment sequence with visual anchors.', outcome: 'Client approved concept for phased implementation.', processSteps: steps
  },
  {
    slug: 'civic-pocket-square', title: 'Civic Pocket Square', subtitle: 'Small-scale urban intervention around mobility hub.', year: 2024, city: 'Kyiv', country: 'Ukraine', categories: ['Urban'], areaM2: 3200, status: 'In Progress', role: 'Lead Architect', cover: { src: '/demo/projects/p27.svg', alt: 'Pocket Square cover' }, hero: { type: 'image', src: '/demo/projects/p28.svg', alt: 'Pocket Square hero' }, gallery: makeGallery(5), tags: ['Public realm', 'Urban'], materials: ['Granite', 'Permeable pavers', 'Corten'], credits: ['Atelier Nord', 'City Mobility Office'], metrics: [{ label: 'Budget', value: '€2.4M' }, { label: 'Timeline', value: '16 months' }, { label: 'Team', value: '12 specialists' }], overview: 'A transit-adjacent square designed for daily pause and social activity.', challenge: 'Fragmented pedestrian flows and heat exposure.', solution: 'Tree canopy matrix with diagonal desire lines and seating edges.', outcome: 'Pilot phase showed increased dwell time and safer crossings.', processSteps: steps
  },
  {
    slug: 'vault-showroom', title: 'Vault Showroom', subtitle: 'Material-focused showroom for contract furniture.', year: 2023, city: 'Berlin', country: 'Germany', categories: ['Interior', 'Commercial'], areaM2: 880, status: 'Built', role: 'Art Direction', cover: { src: '/demo/projects/p29.svg', alt: 'Vault cover' }, hero: { type: 'image', src: '/demo/projects/p30.svg', alt: 'Vault hero' }, gallery: makeGallery(11), tags: ['Retail', 'Exhibition'], materials: ['Microcement', 'Travertine', 'Blackened steel'], credits: ['Atelier Nord'], metrics: [{ label: 'Budget', value: '€760K' }, { label: 'Timeline', value: '6 months' }, { label: 'Team', value: '4 specialists' }], overview: 'A flexible interior for rotating furniture collections.', challenge: 'Need for frequent reconfiguration without visual clutter.', solution: 'Neutral shell with integrated tracks and concealed utilities.', outcome: 'Sales conversion improved after launch season.', processSteps: steps
  },
  {
    slug: 'horizon-apartments', title: 'Horizon Apartments', subtitle: 'Mid-rise housing with layered balconies and shared amenities.', year: 2021, city: 'Brno', country: 'Czechia', categories: ['Residential'], areaM2: 5100, status: 'Built', role: 'Lead Architect', cover: { src: '/demo/projects/p12.svg', alt: 'Horizon cover' }, hero: { type: 'image', src: '/demo/projects/p09.svg', alt: 'Horizon hero' }, gallery: makeGallery(13), tags: ['Multifamily', 'Amenity'], materials: ['Brick', 'Aluminium', 'Timber'], credits: ['Atelier Nord'], metrics: [{ label: 'Budget', value: '€7.1M' }, { label: 'Timeline', value: '22 months' }, { label: 'Team', value: '13 specialists' }], overview: 'A residential block designed around privacy gradients and communal terraces.', challenge: 'Balancing density, privacy, and outdoor quality.', solution: 'Alternating loggia depths and distributed amenity rooms.', outcome: 'Project received regional housing commendation.', processSteps: steps
  }
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
