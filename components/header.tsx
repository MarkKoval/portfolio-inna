"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-ink/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="focus-ring text-xs uppercase tracking-[0.3em] text-sand">
          Inna Atelier
        </Link>
        <nav className="flex items-center gap-5 text-xs uppercase tracking-[0.18em]">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={cn("focus-ring text-white/70 transition hover:text-white", pathname === item.href && "text-copper")}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
};
