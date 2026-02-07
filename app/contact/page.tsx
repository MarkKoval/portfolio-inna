'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@/components/ui/container';

const schema = z.object({
  name: z.string().min(2, 'Enter at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Please provide more details')
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="pb-24 pt-32">
      <Container className="grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="font-display text-5xl md:text-7xl">Contact</h1>
          <p className="mt-6 max-w-md text-muted">Tell us about your project scope, location and timing. We typically respond within 2 business days.</p>
          <div className="mt-8 text-sm text-muted">
            <p>hello@astudio.example</p>
            <p>Instagram / LinkedIn / Behance</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border border-white/10 bg-panel p-6">
          <label className="block text-sm">
            Name
            <input {...register('name')} className="focus-ring mt-1 w-full border border-white/20 bg-transparent px-3 py-2" />
            {errors.name && <span className="text-xs text-red-300">{errors.name.message}</span>}
          </label>
          <label className="block text-sm">
            Email
            <input {...register('email')} className="focus-ring mt-1 w-full border border-white/20 bg-transparent px-3 py-2" />
            {errors.email && <span className="text-xs text-red-300">{errors.email.message}</span>}
          </label>
          <label className="block text-sm">
            Message
            <textarea rows={6} {...register('message')} className="focus-ring mt-1 w-full border border-white/20 bg-transparent px-3 py-2" />
            {errors.message && <span className="text-xs text-red-300">{errors.message.message}</span>}
          </label>
          <button type="submit" className="focus-ring border border-white/20 px-5 py-2 text-sm uppercase tracking-[0.2em] hover:border-accent hover:text-accent">
            Send inquiry
          </button>
          {submitted && <p className="text-sm text-accent">Thanks! This demo form is client-only and does not send data.</p>}
        </form>
      </Container>
    </div>
  );
}
