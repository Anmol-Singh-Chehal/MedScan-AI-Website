import React from "react";
import { Send, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import ContactInfoCard from "@/components/ContactInfoCard";
import Badge from "@/components/Badge";
import { useContactUsMutation } from "@/services/api.js";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactUs() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });
  const [contactUs, { isLoading }] = useContactUsMutation();

  const onSubmit = async (data) => {
    try {
      const result = await contactUs({
        name: data.name.trim(),
        subject: data.subject.trim(),
        message: data.message.trim(),
      }).unwrap();

      console.log("Message sent successfully:", result);

      alert(
        result?.message ||
        "Your message has been sent successfully."
      );

      reset();

    } catch (error) {
      console.error("Contact form error:", error);

      alert(
        error?.data?.detail ||
        "Failed to send your message. Please try again."
      );
    }
  };

  return (
    <main className="bg-paper-1 px-3 pb-10 pt-30 sm:px-5 sm:pb-12 md:px-8 lg:px-12 lg:pb-16">

      <section className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
        <Badge faIcon={"fa-bone"} tag={"MEDICAL IMAGING SUPPORT"} />

        <h1 className="font-primary text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl">
          Let's start a conversation.
        </h1>

        <p className="mx-auto max-w-2xl font-secondary text-sm leading-relaxed text-secondary sm:text-base">
          Whether you have a question about our medical imaging platform,
          research capabilities, or technical support, we're here to help.
        </p>
      </section>

      <section className="mx-auto mt-6 grid max-w-7xl grid-cols-1 items-start gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">

        <div className="rounded-2xl border border-muted/20 bg-paper-1 p-5 shadow-[0_8px_30px_color-mix(in_srgb,var(--color-muted)_7%,transparent)] sm:p-7 lg:p-8">

          <div className="mb-7">
            <h2 className="mt-2 font-primary text-2xl font-semibold text-primary sm:text-3xl">
              How can we help?
            </h2>

            <p className="mt-2 max-w-xl font-secondary text-sm leading-relaxed text-secondary">
              Fill out the form and our team will get back to you as soon
              as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-primary text-sm font-medium text-primary">
                Name
              </label>

              <Input id="name" type="text" placeholder="Your name" {...register("name")} className="h-11 rounded-xl border-muted/20 bg-paper-2/40 text-primary placeholder:text-secondary/50 focus-visible:ring-muted/30" />

              {errors.name && (
                <p className="font-secondary text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-primary text-sm font-medium text-primary">
                Subject
              </label>

              <Input id="subject" type="text" placeholder="What would you like to discuss?" {...register("subject")} className="h-11 rounded-xl border-muted/20 bg-paper-2/40 text-primary placeholder:text-secondary/50 focus-visible:ring-muted/30" />

              {errors.subject && (
                <p className="font-secondary text-xs text-red-500">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-primary text-sm font-medium text-primary">
                Message
              </label>

              <Textarea id="message" placeholder="Write your message..." {...register("message")} className="min-h-36 resize-none rounded-xl border-muted/20 bg-paper-2/40 text-primary placeholder:text-secondary/50 focus-visible:ring-muted/30" />

              {errors.message && (
                <p className="font-secondary text-xs text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-muted/10 bg-muted/5 p-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-muted" />

              <p className="font-secondary text-xs leading-relaxed text-secondary">
                Your information is used only to respond to your inquiry
                and is never shared without your permission.
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-muted px-5 py-3 font-primary text-sm font-semibold text-paper-1 shadow-[0_6px_20px_color-mix(in_srgb,var(--color-muted)_20%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_color-mix(in_srgb,var(--color-muted)_28%,transparent)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Sending..." : "Send Message"}

              {!isLoading && (
                <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </button>

          </form>
        </div>

        <ContactInfoCard />

      </section>

    </main>
  );
}