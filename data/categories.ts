export const categories = ['Residential', 'Commercial', 'Interior', 'Urban'] as const;
export type Category = (typeof categories)[number];

export const statuses = ['Concept', 'In Progress', 'Built'] as const;
export type ProjectStatus = (typeof statuses)[number];
