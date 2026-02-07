'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'At least 10 characters')
});

type FormValues = z.infer<typeof schema>;

export const ContactSection = () => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  return (
    <section className="mx-auto max-w-6xl px-6 py-24" id="contact">
      <h2 className="text-3xl sm:text-4xl">Let&apos;s build your next standout product.</h2>
      <form className="mt-8 grid gap-4 rounded-3xl border border-border bg-background-secondary p-6" onSubmit={handleSubmit(() => undefined)}>
        <input aria-label="Name" placeholder="Name" className="rounded-xl border border-border bg-background p-3" {...register('name')} />
        {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
        <input aria-label="Email" placeholder="Email" className="rounded-xl border border-border bg-background p-3" {...register('email')} />
        {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
        <textarea aria-label="Message" placeholder="Tell me about your idea" rows={5} className="rounded-xl border border-border bg-background p-3" {...register('message')} />
        {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
        <Button type="submit" className="w-fit">Send message</Button>
        {isSubmitSuccessful && <p className="text-green-400">Thanks! I will get back to you soon.</p>}
      </form>
    </section>
  );
};
