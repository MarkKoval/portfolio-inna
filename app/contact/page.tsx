import { ContactForm } from '@/components/sections/ContactForm';
import { site } from '@/data/site';

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-content gap-10 px-6 py-14 md:grid-cols-2 lg:px-10">
      <div>
        <h1 className="font-display text-6xl">Contact</h1>
        <p className="mt-4 text-[--muted]">Share your project scope, location, and timeline. We will respond with a tailored process proposal.</p>
        <p className="mt-8 text-[--muted]">{site.email}<br />{site.city}</p>
      </div>
      <ContactForm />
    </div>
  );
}
