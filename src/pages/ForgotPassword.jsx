import React from "react";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen bg-paper-1 flex items-center justify-center  sm:px-4 lg:px-8 xl:px-12 py-8">
      <section className="w-full max-w-2xl rounded-3xl border border-muted/20 bg-paper-2/20 sm:px-4 md:px-8 py-6 lg:p-12 shadow-[0_20px_60px_color-mix(in_srgb,var(--muted)_8%,transparent)]">

        <div className="mb-8">
          <div className="flex items-center gap-2 text-muted text-xs sm:text-sm font-secondary font-semibold uppercase tracking-wide">
            Account Recovery
          </div>

          <h1 className="mt-4 lg:text-3xl sm:text-2xl font-primary font-bold text-primary">
            Reset your password
          </h1>

          <p className="mt-3 text-sm sm:text-base text-secondary font-secondary leading-relaxed">
            Enter the email tied to your account and we'll send a reset link.
          </p>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-primary font-primary">
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-secondary" />

              <Input
                type="email"
                placeholder="you@example.com"
                className="w-full h-12 rounded-xl border border-muted/25 bg-paper-2/20 pl-11 pr-4 text-sm text-primary placeholder:text-secondary/60 outline-none transition focus:border-muted focus:ring-2 focus:ring-muted/15 font-secondary"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full h-12 rounded-full bg-muted ${theme === "light" ? "text-white" : "text-paper-1"} flex items-center justify-center gap-2 font-primary font-semibold cursor-pointer transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_8px_25px_color-mix(in_srgb,var(--muted)_25%,transparent)]`}
          >
            Send Reset Link
            <ArrowRight className="size-4" />
          </button>
        </form>

        <div className="mt-7 flex justify-center">
          <NavLink
            to={"/log-in"}
            className="flex items-center gap-2 text-sm text-secondary hover:text-muted font-secondary transition-colors cursor-pointer"
          >
            <ArrowLeft className="size-4" />
            Back to login
          </NavLink>
        </div>

      </section>
    </main>
  );
}