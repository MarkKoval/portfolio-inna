"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/ui/container";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(12, "Please describe your project")
});

type ContactForm = z.infer<typeof schema>;

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactForm>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSent(true);
    reset();
  };

  return (
    <Container className="pt-28 pb-20">
      <h1 className="font-heading text-5xl md:text-7xl">Contact</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-white/15 p-6">
          <div>
            <label className="mb-1 block text-sm text-white/70">Name</label>
            <input {...register("name")} className="focus-ring w-full rounded-md border border-white/20 bg-transparent px-3 py-2" />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Email</label>
            <input {...register("email")} className="focus-ring w-full rounded-md border border-white/20 bg-transparent px-3 py-2" />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Message</label>
            <textarea {...register("message")} rows={5} className="focus-ring w-full rounded-md border border-white/20 bg-transparent px-3 py-2" />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
          </div>
          <button disabled={isSubmitting} className="focus-ring rounded-md border border-white/30 px-4 py-2 text-sm uppercase tracking-[0.18em] hover:border-copper hover:text-copper">
            {isSubmitting ? "Sending..." : "Send inquiry"}
          </button>
          {sent && <p className="text-sm text-copper">Thanks! We will reply within 48h.</p>}
        </form>
        <aside className="space-y-3 text-white/70">
          <p>hello@inna-atelier.com</p>
          <p>+380 50 000 00 00</p>
          <p>Kyiv / Warsaw / Remote</p>
          <p>Instagram: @innaatelier (placeholder)</p>
        </aside>
      </div>
    </Container>
  );
}
