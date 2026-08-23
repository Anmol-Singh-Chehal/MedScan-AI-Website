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
import { useGetPredictionHistoryQuery } from "@/services/api";


export default function Profile() {
  const {theme, setTheme} = useTheme(); 
  const {
    data,
    isLoading,
    isError,
  } = useGetPredictionHistoryQuery();

  const predictionHistory = data?.history || [];

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

              <div className="size-28 sm:size-32 rounded-full border-2 border-muted/30 bg-paper-1 flex items-center justify-center overflow-hidden">
                <UserRound className="size-14 sm:size-16 text-muted" />
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

          {/* Header */}
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Brain className="size-4 sm:size-5 lg:size-6 text-muted shrink-0" />

              <h2 className="text-lg lg:text-2xl font-primary font-semibold text-primary">
                Prediction history
              </h2>
            </div>

            <p className="mt-1 text-xs sm:text-sm lg:text-base text-secondary font-secondary">
              Review your previous medical imaging predictions and confidence scores.
            </p>
          </div>

          {/* Loading */}
          {isLoading && (
            <div className="mt-6 rounded-2xl border border-muted/15 bg-paper-1/50 p-8 text-center">
              <p className="text-sm text-secondary font-secondary">
                Loading prediction history...
              </p>
            </div>
          )}

          {/* Error */}
          {isError && (
            <div className="mt-6 rounded-2xl border border-muted/15 bg-paper-1/50 p-8 text-center">
              <p className="text-sm text-secondary font-secondary">
                Failed to load prediction history.
              </p>
            </div>
          )}

          {/* Empty */}
          {!isLoading && !isError && predictionHistory.length === 0 && (
            <div className="mt-6 rounded-2xl border border-muted/15 bg-paper-1/50 p-8 text-center">
              <ScanLine className="mx-auto size-10 text-muted" />

              <p className="mt-3 text-base font-semibold text-primary font-primary">
                No predictions yet
              </p>

              <p className="mt-1 text-sm text-secondary font-secondary">
                Your medical imaging predictions will appear here.
              </p>
            </div>
          )}

          {/* Results */}
          {!isLoading && !isError && predictionHistory.length > 0 && (
            <section className="mt-5 grid gap-6">

              {predictionHistory.map((scan, scanIndex) => {
                const images = Array.isArray(scan?.images)
                  ? scan.images
                  : [];

                const totalImages = scan?.total_images ?? images.length;

                const diseaseType = String(
                  scan?.disease_type || "Medical Scan"
                ).replaceAll("_", " ");

                return (
                  <article
                    key={scan?.id || `scan-${scanIndex}`}
                    className="bg-paper-2 border border-muted/20 rounded-2xl overflow-hidden shadow-sm"
                  >

                    {/* ======================================================
                        SCAN HEADER
                    ====================================================== */}

                    <div className="px-5 py-5 md:px-7 md:py-6 border-b border-muted/20">

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        <div>
                          <p className="text-secondary font-secondary text-xs uppercase tracking-wider mb-1">
                            Scan
                          </p>

                          <h2 className="text-primary text-xl md:text-2xl font-semibold capitalize">
                            {diseaseType}
                          </h2>

                          <p className="mt-1 text-sm text-secondary font-secondary">
                            {totalImages}{" "}
                            {totalImages === 1 ? "image" : "images"} analyzed
                          </p>

                          {/* Model */}
                          {scan?.model && (
                            <p className="mt-2 text-xs sm:text-sm text-secondary font-secondary">
                              Model:{" "}
                              <span className="text-primary font-semibold">
                                {scan.model}
                              </span>
                            </p>
                          )}
                        </div>

                        <div className="text-left sm:text-right">
                          <p className="text-secondary font-secondary text-xs uppercase tracking-wider mb-1">
                            Prediction date
                          </p>

                          <p className="text-primary font-secondary text-sm sm:text-base">
                            {scan?.created_at
                              ? new Date(scan.created_at).toLocaleString()
                              : "N/A"}
                          </p>
                        </div>

                      </div>
                    </div>


                    {/* ======================================================
                        IMAGES
                    ====================================================== */}

                    <div className="p-5 md:p-7 grid gap-6">

                      {images.map((image, imageIndex) => {

                        /*
                        * Your actual API structure:
                        *
                        * image = {
                        *   filename,
                        *   image: {
                        *      public_id,
                        *      url
                        *   },
                        *   prediction: {
                        *      predicted_class,
                        *      class_index,
                        *      confidence,
                        *      class_confidence
                        *   }
                        * }
                        */

                        const prediction = image?.prediction || {};

                        const classConfidence =
                          prediction?.class_confidence || {};

                        const imageUrl =
                          image?.image?.url || "";

                        const filename =
                          image?.filename ||
                          `Image ${imageIndex + 1}`;

                        const predictedClass =
                          String(
                            prediction?.predicted_class || "Unknown"
                          ).replaceAll("_", " ");

                        const confidence = Number(
                          prediction?.confidence ?? 0
                        );

                        return (
                          <div
                            key={
                              image?.image?.public_id ||
                              `${scan?.id}-image-${imageIndex}`
                            }
                            className="rounded-2xl border border-muted/15 bg-paper-1/40 overflow-hidden"
                          >

                            {/* ==================================================
                                IMAGE + MAIN RESULT
                            ================================================== */}

                            <div className="grid lg:grid-cols-[42%_58%]">

                              {/* Image */}

                              <div className="h-[260px] sm:h-[300px] lg:h-[330px] bg-black/5 flex items-center justify-center p-3">

                                {imageUrl ? (
                                  <img
                                    src={imageUrl}
                                    alt={filename}
                                    className="w-full h-full object-contain rounded-lg"
                                    loading="lazy"
                                  />
                                ) : (
                                  <div className="text-secondary text-sm text-center">
                                    Image unavailable
                                  </div>
                                )}

                              </div>


                              {/* Main Result */}

                              <div className="p-5 md:p-7 flex flex-col justify-center gap-5">

                                {/* Filename */}

                                <div>
                                  <p className="text-secondary font-secondary text-xs uppercase tracking-wider mb-1">
                                    Image
                                  </p>

                                  <p className="text-primary font-secondary text-base break-all">
                                    {filename}
                                  </p>
                                </div>


                                {/* Prediction */}

                                <div>
                                  <p className="text-secondary font-secondary text-xs uppercase tracking-wider mb-1">
                                    Predicted Class
                                  </p>

                                  <h2 className="text-primary text-2xl md:text-3xl font-semibold capitalize">
                                    {predictedClass}
                                  </h2>
                                </div>


                                {/* Confidence */}

                                <div className="flex items-center gap-3">

                                  <Activity
                                    size={27}
                                    className="text-muted shrink-0"
                                  />

                                  <div>
                                    <p className="text-secondary text-xs font-secondary">
                                      Prediction Confidence
                                    </p>

                                    <p className="text-primary text-2xl font-semibold">
                                      {confidence.toFixed(2)}%
                                    </p>
                                  </div>

                                </div>


                                {/* Model */}

                                <div>
                                  <p className="text-secondary font-secondary text-xs uppercase tracking-wider mb-1">
                                    Detection Model
                                  </p>

                                  <p className="text-primary font-secondary text-sm sm:text-base break-words">
                                    {scan?.model || "N/A"}
                                  </p>
                                </div>

                              </div>
                            </div>


                            {/* ==================================================
                                CLASS CONFIDENCE
                            ================================================== */}

                            {Object.keys(classConfidence).length > 0 && (
                              <div className="px-5 py-5 md:px-7 md:py-6 border-t border-muted/20">

                                <h3 className="text-primary text-lg font-semibold mb-5">
                                  Class Confidence Scores
                                </h3>

                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">

                                  {Object.entries(classConfidence).map(
                                    ([className, classValue]) => {

                                      const numericConfidence = Number(
                                        classValue ?? 0
                                      );

                                      const progress = Math.min(
                                        Math.max(
                                          numericConfidence,
                                          0
                                        ),
                                        100
                                      );

                                      return (
                                        <div key={className}>

                                          {/* Label + Percentage */}

                                          <div className="flex justify-between items-center mb-1.5">

                                            <span className="text-primary font-medium font-secondary text-sm capitalize">
                                              {String(className).replaceAll(
                                                "_",
                                                " "
                                              )}
                                            </span>

                                            <span className="text-secondary font-secondary text-sm">
                                              {numericConfidence.toFixed(2)}%
                                            </span>

                                          </div>


                                          {/* Progress Bar */}

                                          <div className="w-full h-2.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">

                                            <div
                                              className="h-full bg-muted rounded-full transition-all duration-500"
                                              style={{
                                                width: `${progress}%`,
                                              }}
                                            />

                                          </div>

                                        </div>
                                      );
                                    }
                                  )}

                                </div>
                              </div>
                            )}


                            {/* ==================================================
                                IMAGE INFORMATION
                            ================================================== */}

                            <div className="px-5 pb-5 md:px-7 md:pb-6">

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">

                                {/* Scan ID */}

                                <div className="rounded-xl bg-paper-2/30 px-3 py-2.5 sm:p-3 lg:p-3.5 border border-muted/10">

                                  <p className="text-[9px] sm:text-[10px] lg:text-xs text-secondary font-secondary">
                                    Scan ID
                                  </p>

                                  <p className="mt-0.5 text-[11px] sm:text-xs lg:text-sm font-semibold text-primary font-primary break-all">
                                    {scan?.id || "N/A"}
                                  </p>

                                </div>


                                {/* Detection Model */}

                                <div className="rounded-xl bg-paper-2/30 px-3 py-2.5 sm:p-3 lg:p-3.5 border border-muted/10">

                                  <p className="text-[9px] sm:text-[10px] lg:text-xs text-secondary font-secondary">
                                    Detection model
                                  </p>

                                  <p className="mt-0.5 text-[11px] sm:text-xs lg:text-sm font-semibold text-primary font-primary break-words">
                                    {scan?.model || "N/A"}
                                  </p>

                                </div>


                                {/* Disease Type */}

                                <div className="rounded-xl bg-paper-2/30 px-3 py-2.5 sm:p-3 lg:p-3.5 border border-muted/10">

                                  <p className="text-[9px] sm:text-[10px] lg:text-xs text-secondary font-secondary">
                                    Detection type
                                  </p>

                                  <p className="mt-0.5 text-[11px] sm:text-xs lg:text-sm font-semibold text-primary font-primary capitalize">
                                    {String(
                                      scan?.disease_type || "N/A"
                                    ).replaceAll("_", " ")}
                                  </p>

                                </div>

                              </div>
                            </div>


                            {/* ==================================================
                                REPORT BUTTON
                            ================================================== */}

                            <button
                              type="button"
                              onClick={() =>
                                console.log(
                                  "Save PDF:",
                                  scan
                                )
                              }
                              className={`mx-5 mb-5 md:mx-7 md:mb-6 w-[calc(100%-2.5rem)] md:w-[calc(100%-3.5rem)] h-9 sm:h-10 lg:h-11 rounded-xl border border-muted/25 bg-muted/5 text-muted flex items-center justify-center gap-2 font-primary text-[11px] sm:text-xs lg:text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-muted ${
                                theme === "light"
                                  ? "hover:text-white"
                                  : "hover:text-paper-1"
                              }`}
                            >

                              <FileDown className="size-3.5 sm:size-4 lg:size-4.5" />

                              Save Prediction Report

                            </button>

                          </div>
                        );
                      })}

                    </div>

                  </article>
                );
              })}

            </section>
          )}

        </section>

      </div>
    </main>
  );
}