import Link, { LinkProps } from "next/link";
import { ArrowUpRight } from "lucide-react";

export const ButtonLink = ({ children, ...props }: LinkProps & { children: React.ReactNode; className?: string }) => (
  <Link
    {...props}
    className="focus-ring inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-xs uppercase tracking-[0.2em] transition hover:border-copper hover:text-copper"
  >
    {children}
    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
  </Link>
);
