import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, UserRound, Camera, Trash2, ArrowRight, ShieldCheck } from "lucide-react";import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import googleIcon from "@/assets/googleIcon.png"
import facebookIcon from "@/assets/facebookIcon.png"

export default function SignUp() {
  const {theme, setTheme} = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const profileInputRef = useRef(null);

  const handleProfileImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) return;

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  const removeProfileImage = () => {
    if (profileImage) {
      URL.revokeObjectURL(profileImage);
    }

    setProfileImage(null);

    if (profileInputRef.current) {
      profileInputRef.current.value = "";
    }
  };

  return (
    <main className="min-h-screen bg-paper-1 flex items-center justify-center sm:px-4 lg:px-8 xl:px-12 py-8 mt-15 ">
      
      <div className="w-full max-w-6xl min-h-162.5 lg:grid lg:grid-cols-2 rounded-3xl overflow-hidden bg-paper-1 border border-muted/20 shadow-[0_15px_60px_color-mix(in_srgb,var(--muted)_12%,transparent)]">

        <div className={`hidden lg:flex relative ${theme==="light"? "bg-teal-900": "bg-paper-2"} overflow-hidden`}>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--muted)_30%,transparent),transparent_45%)]"></div>

          <div className="absolute -right-24 -bottom-24 size-80 rounded-full border border-muted/20"></div>
          <div className="absolute -right-12 -bottom-12 size-56 rounded-full border border-muted/20"></div>

          <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14">
            
            <div className="flex items-center gap-2">
              <div className="size-10 rounded-xl bg-muted/15 border border-muted/30 flex items-center justify-center">
                <ShieldCheck className="size-5 text-muted" />
              </div>
              <span className="text-white text-xl font-semibold font-primary">MedScan AI</span>
            </div>

            <div className="max-w-md">
              <span className="inline-flex items-center gap-2 rounded-full border border-muted/30 bg-muted/10 px-3 py-1.5 text-sm text-muted font-secondary">
                <span className="size-1.5 rounded-full bg-muted"></span>
                AI-powered medical imaging
              </span>

              <h1 className="mt-6 text-4xl xl:text-5xl font-semibold leading-tight text-white font-primary">
                Smarter analysis.
                <span className="block text-muted">Better insights.</span>
              </h1>

              <p className="mt-5 text-sm xl:text-base leading-relaxed text-white/65 font-secondary">
                Create your MedScan AI account and explore intelligent
                analysis workflows for X-ray, MRI, CT and other medical
                imaging modalities.
              </p>
            </div>

            <div className="flex items-center gap-3 text-white/45 text-xs font-secondary">
              <ShieldCheck className="size-4 text-muted" />
              Your account information is protected.
            </div>

          </div>
        </div>

        <div className="flex items-center justify-center bg-paper-1 sm:px-4 py-6 lg:p-12">
          
          <div className="w-full max-w-lg">

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.18em] text-muted font-secondary font-semibold">
                Get started
              </p>

              <h2 className="mt-2 text-3xl sm:text-2xl font-semibold text-primary font-primary">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-secondary font-secondary">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-muted hover:underline">
                  Log in
                </Link>
              </p>
            </div>

            <form className="space-y-5">
              <div className="flex flex-col sm:flex-row gap-5">

                <div className="flex flex-col items-center justify-center shrink-0">
                  <label className="text-sm font-semibold text-primary font-primary mb-2">
                    Profile Photo
                  </label>

                  <input ref={profileInputRef} type="file" accept="image/*" onChange={handleProfileImage} className="hidden" />

                  <div className="relative">
                    <button type="button" onClick={() => profileInputRef.current?.click()} className="size-28 rounded-full overflow-hidden border-2 border-muted bg-paper-2/20 flex items-center justify-center cursor-pointer hover:bg-muted/10 transition-all duration-300">
                      {profileImage ? (
                        <img src={profileImage} alt="Profile preview" className="w-full h-full object-cover" />
                      ) : (
                        <UserRound className="size-14 text-secondary" />
                      )}
                    </button>

                    <button type="button" onClick={() => profileInputRef.current?.click()} className="absolute bottom-1 right-1 size-8 rounded-full bg-muted text-white flex items-center justify-center border-2 border-paper-1 cursor-pointer hover:scale-105 transition">
                      <Camera className="size-4" />
                    </button>

                    {profileImage && (
                      <button type="button" onClick={removeProfileImage} className="absolute top-0 right-0 size-7 rounded-full bg-red-500 text-white flex items-center justify-center cursor-pointer hover:bg-red-600 transition">
                        <Trash2 className="size-3.5" />
                      </button>
                    )}
                  </div>

                  <p className="mt-2 text-[11px] text-secondary font-secondary text-center">
                    Optional
                  </p>
                </div>


                <div className="flex-1 flex flex-col gap-5">

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary font-primary">
                      Full name
                    </label>

                    <div className="relative">
                      <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-secondary" />
                      <Input type="text" placeholder="Enter your full name" className="w-full h-12 rounded-xl border border-muted/25 bg-paper-2/20 pl-10 pr-4 text-sm text-primary placeholder:text-secondary/60 outline-none transition focus:border-muted focus:ring-2 focus:ring-muted/15 font-secondary" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary font-primary">
                      Email address
                    </label>

                    <Input type="email" placeholder="you@example.com" className="w-full h-12 rounded-xl border border-muted/25 bg-paper-2/20 px-4 text-sm text-primary placeholder:text-secondary/60 outline-none transition focus:border-muted focus:ring-2 focus:ring-muted/15 font-secondary" />
                  </div>

                </div>

              </div>


              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-primary font-primary">
                  Password
                </label>

                <div className="relative">
                  <Input type={showPassword ? "text" : "password"} placeholder="Create a strong password" className="w-full h-12 rounded-xl border border-muted/25 bg-paper-2/20 px-4 pr-11 text-sm text-primary placeholder:text-secondary/60 outline-none transition focus:border-muted focus:ring-2 focus:ring-muted/15 font-secondary" />

                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-muted cursor-pointer">
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>


              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-muted" />

                <p className="text-xs leading-relaxed text-secondary font-secondary">
                  I agree to the{" "}
                  <span className="text-muted font-medium cursor-pointer hover:underline">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-muted font-medium cursor-pointer hover:underline">
                    Privacy Policy
                  </span>.
                </p>
              </div>


              <button type="submit" className={`w-full h-12 rounded-xl bg-muted ${theme === "light" ? "text-white" : "text-paper-1"} flex items-center justify-center gap-2 font-primary font-semibold cursor-pointer transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_8px_25px_color-mix(in_srgb,var(--muted)_25%,transparent)]`}>
                Create Account
                <ArrowRight className="size-4" />
              </button>

            </form>

            <div className="flex items-center gap-3 my-7">
              <div className="h-px flex-1 bg-muted/20"></div>
              <span className="text-xs text-secondary font-secondary">or continue with</span>
              <div className="h-px flex-1 bg-muted/20"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="h-11 rounded-xl border border-muted/20 bg-paper-2/10 text-primary font-secondary text-sm font-medium hover:bg-muted/10 transition cursor-pointer flex items-center justify-center gap-2">
                <img src={googleIcon} alt="google" className="sm:size-6 lg:size-8"/>
                Google
              </button>

              <button type="button" className="h-11 rounded-xl border border-muted/20 bg-paper-2/10 text-primary font-secondary text-sm font-medium hover:bg-muted/10 transition cursor-pointer flex items-center justify-center gap-2">
                <img src={facebookIcon} alt="facebook" className="sm:size-6 lg:size-8"/>
                Facebook
              </button>
            </div>

            <p className="mt-6 text-center text-xs text-secondary font-secondary">
              By creating an account, you can securely access your
              medical imaging analysis workspace.
            </p>

          </div>
        </div>

      </div>
    </main>
  );
}