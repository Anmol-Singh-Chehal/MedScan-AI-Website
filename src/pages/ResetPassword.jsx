import React, { useState } from "react";
import { Eye, EyeOff, LockKeyhole, ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";
import { useTheme } from "next-themes";

export default function ResetPassword() {
  const {theme, setTheme} = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = confirmPassword === "" || password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return;
    }

    console.log("Password reset");
  };

  return (
    <main className="min-h-screen bg-paper-1 flex items-center justify-center sm:px-4 lg:px-8 xl:px-12 py-8 mt-15">

      <div className="w-full max-w-md">

        <div className="rounded-3xl border border-muted/20 bg-paper-2/20 sm:px-4 md:px-8 py-6 lg:p-12 shadow-[0_20px_60px_color-mix(in_srgb,var(--muted)_8%,transparent)]">

          <div className="text-center">

            <div className="mx-auto size-14 sm:size-16 rounded-2xl bg-muted/10 border border-muted/20 flex items-center justify-center">
              <LockKeyhole className="size-7 sm:size-8 text-muted" />
            </div>

            <h1 className="mt-5 text-2xl sm:text-3xl font-primary font-bold text-primary">
              Reset your password
            </h1>

            <p className="mt-2 text-sm sm:text-base text-secondary font-secondary leading-relaxed">
              Create a new password to secure your MedScan AI account.
            </p>

          </div>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">

            <div className="flex flex-col gap-2">

              <label className="text-sm font-semibold text-primary font-primary">
                New password
              </label>

              <div className="relative">

                <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-secondary" />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your new password"
                  required
                  minLength={8}
                  className="w-full h-12 rounded-xl border border-muted/25 bg-paper-2/20 pl-10 pr-11 text-sm text-primary placeholder:text-secondary/60 outline-none transition focus:border-muted focus:ring-2 focus:ring-muted/15 font-secondary"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-muted cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>

              </div>

              <p className="text-xs text-secondary font-secondary">
                Use at least 8 characters with a combination of letters and numbers.
              </p>

            </div>

            <div className="flex flex-col gap-2">

              <label className="text-sm font-semibold text-primary font-primary">
                Confirm new password
              </label>

              <div className="relative">

                <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-secondary" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                  required
                  minLength={8}
                  className={`w-full h-12 rounded-xl border bg-paper-2/20 pl-10 pr-11 text-sm text-primary placeholder:text-secondary/60 outline-none transition focus:ring-2 focus:ring-muted/15 font-secondary ${passwordsMatch ? "border-muted/25 focus:border-muted" : "border-red-400 focus:border-red-400"}`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-muted cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>

              </div>

              {!passwordsMatch && (
                <p className="text-xs text-red-500 font-secondary">
                  Passwords do not match.
                </p>
              )}

            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-muted/15 bg-muted/5 p-4">

              <ShieldCheck className="size-5 shrink-0 text-muted mt-0.5" />

              <p className="text-xs sm:text-sm leading-relaxed text-secondary font-secondary">
                Your password will be securely updated after verification.
              </p>

            </div>

            <button
              type="submit"
              disabled={!password || !confirmPassword || !passwordsMatch}
              className={`w-full h-12 rounded-xl bg-muted flex items-center justify-center gap-2 font-primary font-semibold cursor-pointer transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_8px_25px_color-mix(in_srgb,var(--muted)_25%,transparent)] ${theme==="light"? "text-white": "text-paper-1"} ${!password || !confirmPassword || !passwordsMatch ? "opacity-50 cursor-not-allowed hover:translate-y-0" : "text-white"}`}
            >
              Reset Password
              <ArrowRight className="size-4" />
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}