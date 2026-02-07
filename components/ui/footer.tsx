import { Container } from './container';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <Container className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="font-display text-2xl">Architect Portfolio</p>
          <p className="mt-3 max-w-md text-sm text-muted">Spatial narratives for cultural, residential, and urban projects.</p>
        </div>
        <div className="text-sm text-muted md:text-right">
          <p>hello@astudio.example</p>
          <p>+1 (555) 010-4527</p>
          <p className="mt-4">© {new Date().getFullYear()} A|Studio. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
