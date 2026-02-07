'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Container } from '@/components/ui/Container';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { site } from '@/data/site';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  message: z.string().min(12, 'Please describe your project')
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    clearErrors();
    const validated = formSchema.safeParse(data);
    if (!validated.success) {
      validated.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;
        setError(field, { message: issue.message });
      });
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 700));
    setDone(true);
  };

  return (
    <Container className='py-20'>
      <h1 className='font-display text-6xl'>Contact</h1>
      <div className='mt-10 grid gap-10 md:grid-cols-2'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 rounded-3xl border border-line bg-card p-6'>
          <div>
            <Input placeholder='Your name' {...register('name')} />
            {errors.name && <p className='mt-1 text-sm text-red-300'>{errors.name.message}</p>}
          </div>
          <div>
            <Input placeholder='Email' {...register('email')} />
            {errors.email && <p className='mt-1 text-sm text-red-300'>{errors.email.message}</p>}
          </div>
          <div>
            <Textarea placeholder='Tell us about your project' {...register('message')} />
            {errors.message && <p className='mt-1 text-sm text-red-300'>{errors.message.message}</p>}
          </div>
          <button disabled={isSubmitting} className='rounded-full border border-accent px-5 py-2 text-accent disabled:opacity-50'>
            {isSubmitting ? 'Sending...' : done ? 'Sent' : 'Send'}
          </button>
          {done && <p className='text-sm text-green-300'>Thanks — we will reply within 2 business days.</p>}
        </form>
        <div>
          <p className='text-[var(--muted)]'>Email: {site.email}</p>
          <p className='text-[var(--muted)]'>Phone: {site.phone}</p>
          <p className='text-[var(--muted)]'>City: {site.city}</p>
        </div>
      </div>
    </Container>
  );
};
