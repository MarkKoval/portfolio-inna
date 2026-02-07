'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';

const schema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(12) });

type Values = z.infer<typeof schema>;

export function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<Values>({ resolver: zodResolver(schema) });

  return (
    <section className="container-p py-24" aria-label="Contact">
      <h2 className="text-4xl font-semibold">Contact</h2>
      <form onSubmit={handleSubmit(() => {})} className="mt-6 grid gap-4 md:max-w-xl">
        <input aria-label="Name" className="focus-ring rounded-xl border border-border bg-background-secondary p-3" placeholder="Name" {...register('name')} />
        <input aria-label="Email" className="focus-ring rounded-xl border border-border bg-background-secondary p-3" placeholder="Email" {...register('email')} />
        <textarea aria-label="Message" className="focus-ring min-h-32 rounded-xl border border-border bg-background-secondary p-3" placeholder="Message" {...register('message')} />
        <Button type="submit">Send message</Button>
        {(errors.name || errors.email || errors.message) && <p className="text-red-400">Please fill all fields correctly.</p>}
        {isSubmitSuccessful && <p className="text-green-400">Message sent.</p>}
      </form>
    </section>
  );
}
