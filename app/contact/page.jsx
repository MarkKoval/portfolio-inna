'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Container } from '@/components/ui/Container';

const schema = z.object({ name: z.string().min(2, 'Name is too short'), email: z.string().email('Enter valid email'), message: z.string().min(10, 'Please describe your request') });

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setError, formState: { errors }, reset } = useForm();

  const onSubmit = (values) => {
    const result = schema.safeParse(values);
    if (!result.success) {
      result.error.issues.forEach((issue) => setError(issue.path[0], { message: issue.message }));
      return;
    }
    console.log(result.data);
    setSubmitted(true);
    reset();
  };

  return <Container className="pt-32 pb-20"><h1 className="font-display text-5xl md:text-7xl">Contact</h1><div className="mt-8 grid gap-10 md:grid-cols-2"><form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-lg border border-white/10 bg-panel/40 p-6"><div><label htmlFor="name" className="mb-1 block text-sm text-muted">Name</label><input id="name" {...register('name')} className="focus-ring w-full rounded border border-white/20 bg-black/30 px-3 py-2" />{errors.name && <p className="mt-1 text-xs text-red-300">{errors.name.message}</p>}</div><div><label htmlFor="email" className="mb-1 block text-sm text-muted">Email</label><input id="email" {...register('email')} className="focus-ring w-full rounded border border-white/20 bg-black/30 px-3 py-2" />{errors.email && <p className="mt-1 text-xs text-red-300">{errors.email.message}</p>}</div><div><label htmlFor="message" className="mb-1 block text-sm text-muted">Message</label><textarea id="message" rows={5} {...register('message')} className="focus-ring w-full rounded border border-white/20 bg-black/30 px-3 py-2" />{errors.message && <p className="mt-1 text-xs text-red-300">{errors.message.message}</p>}</div><button className="focus-ring rounded border border-white/20 px-5 py-2 uppercase tracking-[0.16em] hover:border-accent">Send inquiry</button>{submitted && <p className="text-sm text-accent">Thanks! Demo form submitted.</p>}</form><div className="space-y-4 text-muted"><p>Email: hello@architect-portfolio.demo</p><p>Instagram: @architectportfolio</p><p>Behance: /architect-portfolio</p><div className="h-64 rounded-lg border border-white/10 bg-gradient-to-br from-slate-700/40 to-zinc-900/40 p-4">Map placeholder</div></div></div></Container>;
}
