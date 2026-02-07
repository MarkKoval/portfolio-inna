'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@/components/ui/Container';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Please provide a brief message')
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = () => setSubmitted(true);

  return (
    <Container className="pt-32 pb-20">
      <h1 className="section-title">Contact</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-xl border border-line bg-panel p-6">
          <div>
            <input {...register('name')} placeholder="Name" className="focus-ring w-full border border-line bg-bg px-3 py-2" />
            {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name.message}</p>}
          </div>
          <div>
            <input {...register('email')} placeholder="Email" className="focus-ring w-full border border-line bg-bg px-3 py-2" />
            {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email.message}</p>}
          </div>
          <div>
            <textarea {...register('message')} placeholder="Message" rows={6} className="focus-ring w-full border border-line bg-bg px-3 py-2" />
            {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message.message}</p>}
          </div>
          <button className="focus-ring border border-line px-4 py-2 text-sm uppercase tracking-[0.16em] hover:border-accent" type="submit">Send inquiry</button>
          {submitted && <p className="text-sm text-accent">Thanks! Demo form submitted.</p>}
        </form>
        <div className="space-y-4 rounded-xl border border-line bg-panel p-6 text-muted">
          <p>hello@inna-architects.studio</p>
          <p>+380 00 000 0000</p>
          <p>Instagram / LinkedIn / Behance</p>
          <p className="pt-6 text-sm">Map embed is optional in this MVP and intentionally omitted to keep the project keyless.</p>
        </div>
      </div>
    </Container>
  );
}
