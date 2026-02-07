import { Container } from "@/components/ui/container";

export const Footer = () => (
  <footer className="border-t border-white/10 py-12">
    <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-copper">Architect Portfolio</p>
        <p className="mt-2 max-w-md text-sm text-white/70">Designing civic, residential, and interior environments focused on climate-ready futures.</p>
      </div>
      <div className="text-sm text-white/70">
        <p>hello@inna-atelier.com</p>
        <p>+380 50 000 00 00</p>
      </div>
    </Container>
  </footer>
);
