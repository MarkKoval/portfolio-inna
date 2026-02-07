export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  colors: string[];
  specs: { temperature: string; flammability: string; thermal?: string };
  images: string[];
}
