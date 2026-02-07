export const categories = ['Residential', 'Commercial', 'Interior', 'Urban'] as const;
export type Category = (typeof categories)[number];
