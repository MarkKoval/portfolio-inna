import { createMetadata } from '@/lib/seo';
import ContactClient from './ContactClient';

export const metadata = createMetadata('Contact — Atelier Nord', 'Contact Atelier Nord for new architecture projects.');

export default function ContactPage() {
  return <ContactClient />;
}
