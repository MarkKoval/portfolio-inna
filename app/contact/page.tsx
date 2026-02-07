'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@/components/ui/Container';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { site } from '@/data/site';

const schema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(10) });
type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  return (
    <Container className="pt-32 pb-20">
      <h1 className="font-display text-6xl">Contact</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit(async () => { await new Promise((r) => setTimeout(r, 700)); setSuccess(true); })} className="space-y-4">
          <Input placeholder="Name" {...register('name')} />
          {errors.name && <p className="text-sm text-red-300">{errors.name.message}</p>}
          <Input placeholder="Email" {...register('email')} />
          {errors.email && <p className="text-sm text-red-300">{errors.email.message}</p>}
          <Textarea rows={6} placeholder="Message" {...register('message')} />
          {errors.message && <p className="text-sm text-red-300">{errors.message.message}</p>}
          <button disabled={isSubmitting} className="rounded-full border border-accent px-5 py-3">{isSubmitting ? 'Sending...' : 'Send message'}</button>
          {success && <p className="text-green-300">Thanks — we will respond shortly.</p>}
        </form>
        <aside className="rounded-3xl border border-line bg-card p-6">
          <p>{site.email}</p><p>{site.city}</p>
          <ul className="mt-4 space-y-2">{site.socials.map((s) => <li key={s.label}>{s.label}</li>)}</ul>
        </aside>
      </div>
    </Container>
  );
}
