'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { siteConfig } from '@/data/site';
import { Section } from '@/components/ui/Section';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

const schema = z.object({
  name: z.string().min(2, 'Enter your name'),
  email: z.string().email('Enter valid email'),
  message: z.string().min(10, 'Tell us more about your project')
});

type FormValues = z.infer<typeof schema>;

export default function ContactClient() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 700));
    setSuccess(true);
    reset();
    console.log(data);
  };

  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="font-display text-6xl">Contact</h1>
          <p className="mt-4 text-muted">{siteConfig.email}<br />{siteConfig.city}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-[24px] border border-line bg-card p-6">
          <Input placeholder="Name" {...register('name')} />
          {errors.name && <p className="text-sm text-danger">{errors.name.message}</p>}
          <Input placeholder="Email" {...register('email')} />
          {errors.email && <p className="text-sm text-danger">{errors.email.message}</p>}
          <Textarea placeholder="Message" rows={6} {...register('message')} />
          {errors.message && <p className="text-sm text-danger">{errors.message.message}</p>}
          <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send inquiry'}</Button>
          {success && <p className="text-sm text-success">Thanks — we’ll reply within 24 hours.</p>}
        </form>
      </div>
    </Section>
  );
}
