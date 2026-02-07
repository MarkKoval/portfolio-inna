'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  message: z.string().min(20, 'Please provide at least 20 characters')
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof FormValues;
        setError(path, { type: 'manual', message: issue.message });
      });
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSuccess(true);
      setApiError(null);
    } catch {
      setApiError('Unable to submit right now. Please email us directly.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-3xl border border-line p-6">
      <Input placeholder="Name" {...register('name')} />
      {errors.name && <p className="text-sm text-[--danger]">{errors.name.message}</p>}
      <Input placeholder="Email" {...register('email')} />
      {errors.email && <p className="text-sm text-[--danger]">{errors.email.message}</p>}
      <Textarea rows={6} placeholder="Message" {...register('message')} />
      {errors.message && <p className="text-sm text-[--danger]">{errors.message.message}</p>}
      <button disabled={isSubmitting} className="rounded-full border border-accent px-6 py-3">
        {isSubmitting ? 'Sending...' : 'Send request'}
      </button>
      {success && <p className="text-[--success]">Thank you — we will reply within 1 business day.</p>}
      {apiError && <p className="text-[--danger]">{apiError}</p>}
    </form>
  );
}
