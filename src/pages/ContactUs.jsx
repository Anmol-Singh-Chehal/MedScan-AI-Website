import React from "react";
import { Send, ShieldCheck } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import ContactInfoCard from "@/components/ContactInfoCard";
import Badge from "@/components/Badge";

export default function ContactUs() {
  return (
    <main
      className="
        bg-paper-1
        px-3
        pb-10
        sm:px-5
        sm:pb-12
        md:px-8
        lg:px-12
        lg:pb-16 pt-30
      "
    >

      <section className="mx-auto max-w-7xl text-center flex flex-col items-center gap-4">

        <Badge faIcon={"fa-bone"} tag={"MEDICAL IMAGING SUPPORT"}/>

        <h1
          className="
            font-primary
            text-3xl sm:text-4xl lg:text-5xl
            font-semibold
            tracking-tight
            text-primary
          "
        >
          Let's start a conversation.
        </h1>

        <p
          className="
            mx-auto 
            max-w-2xl
            font-secondary
            text-sm sm:text-base
            leading-relaxed
            text-secondary
          "
        >
          Whether you have a question about our medical imaging platform,
          research capabilities, or technical support, we're here to help.
        </p>

      </section>


      <section
        className="
          mx-auto mt-6
          max-w-7xl
          grid
          grid-cols-1
          lg:grid-cols-[1.25fr_0.75fr]
          gap-6 lg:gap-8
          items-start
        "
      >

        <div
          className="
            rounded-2xl
            border border-muted/20
            bg-paper-1
            p-5 sm:p-7 lg:p-8
            shadow-[0_8px_30px_color-mix(in_srgb,var(--color-muted)_7%,transparent)]
          "
        >

          <div className="mb-7">

            <h2
              className="
                mt-2
                font-primary
                text-2xl sm:text-3xl
                font-semibold
                text-primary
              "
            >
              How can we help?
            </h2>

            <p
              className="
                mt-2
                max-w-xl
                font-secondary
                text-sm
                leading-relaxed
                text-secondary
              "
            >
              Fill out the form and our team will get back to you as soon
              as possible.
            </p>

          </div>


          <form className="flex flex-col gap-5">

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-primary text-sm font-medium text-primary"
              >
                Name
              </label>

              <Input
                id="name"
                type="text"
                placeholder="Your name"
                className="
                  h-11
                  rounded-xl
                  bg-paper-2/40
                  border-muted/20
                  text-primary
                  placeholder:text-secondary/50
                  focus-visible:ring-muted/30
                "
              />
            </div>

            <div className="flex flex-col gap-2">

              <label
                htmlFor="subject"
                className="font-primary text-sm font-medium text-primary"
              >
                Subject
              </label>

              <Input
                id="subject"
                type="text"
                placeholder="What would you like to discuss?"
                className="
                  h-11
                  rounded-xl
                  bg-paper-2/40
                  border-muted/20
                  text-primary
                  placeholder:text-secondary/50
                  focus-visible:ring-muted/30
                "
              />

            </div>


            <div className="flex flex-col gap-2">

              <label
                htmlFor="message"
                className="font-primary text-sm font-medium text-primary"
              >
                Message
              </label>

              <Textarea
                id="message"
                placeholder="Write your message..."
                className="
                  min-h-36
                  resize-none
                  rounded-xl
                  bg-paper-2/40
                  border-muted/20
                  text-primary
                  placeholder:text-secondary/50
                  focus-visible:ring-muted/30
                "
              />

            </div>


            <div
              className="
                flex items-start gap-3
                rounded-xl
                bg-muted/5
                border border-muted/10
                p-3
              "
            >

              <ShieldCheck
                className="
                  size-5
                  shrink-0
                  text-muted
                  mt-0.5
                "
              />

              <p
                className="
                  font-secondary
                  text-xs
                  leading-relaxed
                  text-secondary
                "
              >
                Your information is used only to respond to your inquiry
                and is never shared without your permission.
              </p>

            </div>


            <button
              type="submit"
              className="
                group
                flex items-center justify-center gap-2
                w-full
                rounded-xl
                bg-muted
                px-5 py-3
                font-primary
                text-sm
                font-semibold
                text-paper-1
                shadow-[0_6px_20px_color-mix(in_srgb,var(--color-muted)_20%,transparent)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_10px_25px_color-mix(in_srgb,var(--color-muted)_28%,transparent)]
                active:translate-y-0
                cursor-pointer
              "
            >
              Send Message

              <Send
                className="
                  size-4
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

          </form>

        </div>


        <ContactInfoCard />

      </section>

    </main>
  );
}