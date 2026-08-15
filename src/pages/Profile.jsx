import React from "react";
import {
  UserRound,
  Mail,
  CalendarDays,
  Pencil,
  KeyRound,
  ScanLine,
  FileDown,
  Brain,
  Activity,
} from "lucide-react";
import xrayImage from "../assets/xrayImage.jpg"
import { NavLink } from "react-router-dom";
import { useTheme } from "next-themes";

const predictionHistory = [
  {
    id: 1,
    scanID: "#12234F",
    images: [xrayImage, xrayImage, xrayImage],
    prediction: "Pneumonia detected",
    confidence: "96.8%",
    model: "X-ray Pneumonia Detection",
    date: "Aug 14, 2026",
  },
  {
    id: 2,
    scanID: "#12234F",
    images: [xrayImage, xrayImage],
    prediction: "Brain tumor detected",
    confidence: "94.2%",
    model: "MRI Brain Tumor Classification",
    date: "Aug 11, 2026",
  },
  {
    id: 3,
    scanID: "#12234F",
    images: [xrayImage],
    prediction: "Normal",
    confidence: "98.1%",
    model: "Chest Disease Classification",
    date: "Aug 08, 2026",
  },
];

export default function Profile() {
  const {theme, setTheme} = useTheme(); 
  return (
    <main className="min-h-screen bg-paper-1 sm:px-4 lg:px-8 xl:px-12 py-8 mt-15">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <p className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wide text-muted font-secondary font-semibold">
            Account
          </p>

          <h1 className="mt-3 text-3xl sm:text-2xl font-primary font-bold text-primary">
            Your profile
          </h1>

          <p className="mt-2 text-sm sm:text-base text-secondary font-secondary">
            Manage your personal information and view your medical imaging prediction history.
          </p>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Profile Card */}
          <section className="rounded-3xl border border-muted/20 bg-paper-2/20 sm:px-4 md:px-8 py-6 lg:p-12">
            <div className="flex flex-col items-center text-center">

              <div className="relative">
                <div className="size-28 sm:size-32 rounded-full border-2 border-muted/30 bg-paper-1 flex items-center justify-center overflow-hidden">
                  <UserRound className="size-14 sm:size-16 text-muted" />
                </div>

                <button type="button" className="absolute bottom-1 right-1 size-9 rounded-full bg-muted text-white flex items-center justify-center border-4 border-paper-1 hover:brightness-110 transition cursor-pointer">
                  <Pencil className="size-4" />
                </button>
              </div>

              <h2 className="mt-5 text-xl sm:text-2xl font-primary font-bold text-primary">
                Anmol Singh
              </h2>

              <p className="mt-1 text-sm text-secondary font-secondary">
                Medical Imaging Researcher
              </p>

            </div>

            <div className="mt-8 pt-6 border-t border-muted/15">
              <p className="text-xs uppercase tracking-wide text-secondary font-secondary">
                Member since
              </p>

              <div className="mt-2 flex items-center gap-2 text-primary font-primary">
                <CalendarDays className="size-4 text-muted" />
                August 2026
              </div>
            </div>
          </section>

          {/* Personal Information */}
          <section className="rounded-3xl border border-muted/20 bg-paper-2/20 sm:px-4 md:px-8 py-6 lg:p-12 lg:col-span-2">

            <div>
              <h2 className="text-xl sm:text-2xl font-primary font-semibold text-primary">
                Personal information
              </h2>

              <p className="mt-1 text-sm text-secondary font-secondary">
                Your account details and scanning activity.
              </p>
            </div>

            <div className="mt-7 grid sm:grid-cols-1 md:grid-cols-2 gap-4">

              {/* Name */}
              <div className="rounded-2xl border border-muted/15 bg-paper-1/40 p-5">
                <div className="flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-muted/10 flex items-center justify-center shrink-0">
                    <UserRound className="size-5 text-muted" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-secondary font-secondary">
                      Full name
                    </p>

                    <p className="mt-1 text-sm sm:text-base font-semibold text-primary font-primary">
                      Anmol Singh
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-muted/15 bg-paper-1/40 p-5">
                <div className="flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-muted/10 flex items-center justify-center shrink-0">
                    <Mail className="size-5 text-muted" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-secondary font-secondary">
                      Email address
                    </p>

                    <p className="mt-1 text-sm sm:text-base font-semibold text-primary font-primary truncate">
                      anmol@example.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Total Scans */}
              <div className="rounded-2xl border border-muted/15 bg-paper-1/40 p-5">
                <div className="flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-muted/10 flex items-center justify-center shrink-0">
                    <ScanLine className="size-5 text-muted" />
                  </div>

                  <div>
                    <p className="text-xs text-secondary font-secondary">
                      Total scans
                    </p>

                    <p className="mt-1 text-xl font-bold text-primary font-primary">
                      24
                    </p>
                  </div>
                </div>
              </div>

              {/* Account Status */}
              <div className="rounded-2xl border border-muted/15 bg-paper-1/40 p-5">
                <div className="flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-muted/10 flex items-center justify-center shrink-0">
                    <Activity className="size-5 text-muted" />
                  </div>

                  <div>
                    <p className="text-xs text-secondary font-secondary">
                      Account status
                    </p>

                    <p className="mt-1 text-sm sm:text-base font-semibold text-muted font-primary">
                      Active
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Security */}
            <div className="mt-8 pt-6 border-t border-muted/15">

              <h3 className="text-base sm:text-lg font-primary font-semibold text-primary">
                Account security
              </h3>

              <p className="mt-1 text-sm text-secondary font-secondary">
                Manage your profile information and account password.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3 items-center justify-center">

                <NavLink to={"/edit-profile"} className={`font-medium bg-muted ${theme==="light"? "text-white" : "text-paper-1"} flex lg:gap-2 items-center lg:px-4 lg:py-2 lg:text-lg rounded-md cursor-pointer ring-2 ring-muted sm:text-sm sm:px-2 sm:py-2 sm:gap-1 font-primary`}>
                  <Pencil className='sm:size-4'/>
                  <h3>Edit Profile</h3>
                </NavLink>
                <NavLink to={"/forgot-password"} className={`font-medium text-muted flex lg:gap-2 items-center lg:px-4 lg:py-2 lg:text-lg rounded-md ring-2  hover:bg-muted ${theme==="light"? "hover:text-white" : "hover:text-paper-1"} hover:ring-2 hover:ring-muted bg-muted/10 ring-muted/40 cursor-pointer sm:text-sm sm:px-2 sm:py-2 sm:gap-1 font-primary`}>
                  <KeyRound className="sm:size-4" />
                  Reset Password
                </NavLink>

              </div>
            </div>

          </section>
        </div>

        {/* Prediction History */}
        <section className="mt-5 rounded-3xl border border-muted/20 bg-paper-2/20 sm:px-4 md:px-8 py-6 lg:p-12">

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Brain className="size-4 sm:size-5 lg:size-6 text-muted shrink-0" />

              <h2 className="text-lg lg:text-2xl font-primary font-semibold text-primary">
                Prediction history
              </h2>
            </div>

            <p className="mt-1 text-xs sm:text-sm lg:text-base text-secondary font-secondary">
              Review your previous medical imaging predictions and reports.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:gap-4">

            {predictionHistory.map((prediction) => (

              <div
                key={prediction.id}
                className="rounded-2xl border border-muted/15 bg-paper-1/50 p-3 sm:p-4 lg:p-5 transition-all duration-300 hover:border-muted/30 hover:bg-paper-1"
              >

                {/* Images + Prediction */}
                <div className="flex items-start gap-3 sm:gap-4 sm:flex-col md:flex-row">

                  {/* Uploaded Images */}
                  <div className="flex shrink-0 -space-x-3">

                    {prediction.images.slice(0, 3).map((image, index) => (

                      <div
                        key={index}
                        className="relative size-16 sm:size-20 lg:size-24 rounded-xl overflow-hidden border-2 border-paper-1 bg-paper-2"
                      >
                        <img
                          src={image}
                          alt={`${prediction.prediction} scan ${index + 1}`}
                          className="w-full h-full object-cover"
                        />

                        {index === 2 && prediction.images.length > 3 && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-xs font-semibold text-white">
                              +{prediction.images.length - 3}
                            </span>
                          </div>
                        )}
                      </div>

                    ))}

                  </div>


                  {/* Prediction */}
                  <div className="flex-1 min-w-0">

                    <div className="flex flex-col gap-1.5">

                      <div className="flex flex-wrap items-center gap-2">

                        <h3 className="text-sm sm:text-base lg:text-lg font-primary font-semibold text-primary wrap-break-word">
                          {prediction.prediction}
                        </h3>

                        <span className="w-fit rounded-full bg-muted/10 border border-muted/20 px-2 py-0.5 lg:px-2.5 lg:py-1 text-[9px] sm:text-[10px] lg:text-xs font-bold text-muted font-secondary">
                          {prediction.confidence}
                        </span>

                      </div>

                      <p className="text-[10px] sm:text-xs lg:text-sm text-secondary font-secondary">
                        {prediction.images.length} uploaded {prediction.images.length === 1 ? "image" : "images"}
                      </p>

                    </div>

                  </div>

                </div>


                {/* Information */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">

                  <div className="rounded-xl bg-paper-2/30 px-3 py-2.5 sm:p-3 lg:p-3.5 border border-muted/10">

                    <p className="text-[9px] sm:text-[10px] lg:text-xs text-secondary font-secondary">
                      Scan ID
                    </p>

                    <p className="mt-0.5 text-[11px] sm:text-xs lg:text-sm font-semibold text-primary font-primary wrap-break-word">
                      {prediction.scanID}
                    </p>

                  </div>

                  <div className="rounded-xl bg-paper-2/30 px-3 py-2.5 sm:p-3 lg:p-3.5 border border-muted/10">

                    <p className="text-[9px] sm:text-[10px] lg:text-xs text-secondary font-secondary">
                      Detection model
                    </p>

                    <p className="mt-0.5 text-[11px] sm:text-xs lg:text-sm font-semibold text-primary font-primary wrap-break-word">
                      {prediction.model}
                    </p>

                  </div>


                  <div className="rounded-xl bg-paper-2/30 px-3 py-2.5 sm:p-3 lg:p-3.5 border border-muted/10">

                    <p className="text-[9px] sm:text-[10px] lg:text-xs text-secondary font-secondary">
                      Prediction date
                    </p>

                    <p className="mt-0.5 text-[11px] sm:text-xs lg:text-sm font-semibold text-primary font-primary wrap-break-word">
                      {prediction.date}
                    </p>

                  </div>

                </div>


                {/* Report */}
                <button
                  type="button"
                  className={`mt-3 w-full h-9 sm:h-10 lg:h-11 rounded-xl border border-muted/25 bg-muted/5 text-muted flex items-center justify-center gap-2 font-primary text-[11px] sm:text-xs lg:text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-muted ${theme==="light"? "hover:text-white": "hover:text-paper-1"}`}
                >
                  <FileDown className="size-3.5 sm:size-4 lg:size-4.5" />
                  Save Prediction Report
                </button>

              </div>

            ))}

          </div>

        </section>

      </div>
    </main>
  );
}