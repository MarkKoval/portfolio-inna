import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Inna Architects</p>
          <p className="mt-3 text-sm text-muted">Architecture + Interiors + Urban Strategies</p>
        </div>
        <div className="text-sm text-muted">
          <p>hello@inna-architects.studio</p>
          <p>Kyiv · Lviv · EU Remote</p>
        </div>
        <div className="flex gap-4 text-sm uppercase tracking-[0.14em] text-muted">
          <Link href="#" className="focus-ring hover:text-white">Instagram</Link>
          <Link href="#" className="focus-ring hover:text-white">Behance</Link>
          <Link href="#" className="focus-ring hover:text-white">LinkedIn</Link>
        </div>
      </Container>
    </footer>
  );
}
