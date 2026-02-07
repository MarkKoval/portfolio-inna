import Link from 'next/link';

export default function NotFound() {
  return <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 pt-24 text-center"><h1 className="font-display text-6xl">404</h1><p className="text-muted">The page you requested was not found.</p><Link href="/" className="focus-ring border-b border-white/50 pb-1">Back home</Link></div>;
}
