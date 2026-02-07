import { cn } from '@/lib/utils';
import { Container } from './Container';

export const Section = ({
  className,
  containerClassName,
  children
}: React.PropsWithChildren<{ className?: string; containerClassName?: string }>) => (
  <section className={cn('py-20 md:py-28', className)}>
    <Container className={containerClassName}>{children}</Container>
  </section>
);
