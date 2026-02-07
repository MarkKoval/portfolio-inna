import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { baseMetadata } from '@/lib/seo';

export const metadata: Metadata = baseMetadata('Contact — Atelier Nord', 'Start a residential, commercial, or urban project with Atelier Nord.');

export default function ContactPage() {
  return <ContactForm />;
}
