import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ScanSearch,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "next-themes";

import ModelSelector from "@/components/ModelSelector";
import UploadBox from "@/components/UploadBox";
import DetectionTips from "@/components/DetectionTips";
import Badge from "@/components/Badge";

import {
  useFractureDetectionMutation,
  useTumorDetectionMutation,
  useCancerDetectionMutation,
  useTbDetectionMutation,
} from "@/services/api.js";

export default function Detection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [selectedModel, setSelectedModel] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const [
    fractureDetection,
    { isLoading: isFractureLoading },
  ] = useFractureDetectionMutation();

  const [
    tumorDetection,
    { isLoading: isTumorLoading },
  ] = useTumorDetectionMutation();

  const [
    cancerDetection,
    { isLoading: isCancerLoading },
  ] = useCancerDetectionMutation();

  const [
    tbDetection,
    { isLoading: isTbLoading },
  ] = useTbDetectionMutation();

  const isLoading =
    isFractureLoading ||
    isTumorLoading ||
    isCancerLoading ||
    isTbLoading;

  const canAnalyze =
    selectedModel && images.length >= 1 && images.length <= 5;

  const handleAnalyze = async () => {
    if (!canAnalyze || isLoading) return;

    setError("");

    try {
      const files = images.map((image) => image.file);

      let response;

      switch (selectedModel) {
        case "X-ray — Bone fracture detection":
          response = await fractureDetection(files).unwrap();
          break;

        case "MRI — Brain tumor detection":
          response = await tumorDetection(files).unwrap();
          break;

        case "CT — Lung cancer detection":
          response = await cancerDetection(files).unwrap();
          break;

        case "X-ray — Tuberculosis detection":
          response = await tbDetection(files).unwrap();
          break;

        default:
          throw new Error("Invalid detection model selected.");
      }

      navigate("/results", {
        state: {
          results: response,
          images: images.map((image) => ({
            filename: image.file.name,
            preview: image.preview,
          })),
          diseaseType: selectedModel,
        },
      });

      console.log(response);
    } catch (err) {
      console.error("Detection error:", err);

      setError(
        err?.data?.detail ||
          err?.data?.message ||
          "Something went wrong while analyzing the images."
      );
    }
  };

  return (
    <main
      className="
        min-h-screen
        bg-paper-1
        px-3
        pt-20
        pb-10
        sm:px-5
        sm:pt-22.5
        sm:pb-12
        md:px-8
        lg:px-12
        lg:pt-25
        lg:pb-16
      "
    >
      <div className="mx-auto max-w-7xl">

        <section className="flex flex-col gap-4 mb-8">
          <Badge
            faIcon={"fa-search"}
            tag={"AI MEDICAL IMAGING"}
          />

          <h1
            className="
              font-primary
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              tracking-tight
              text-primary
            "
          >
            Analyze a medical image.
          </h1>

          <p
            className="
              mt-3
              max-w-2xl
              font-secondary
              text-sm
              sm:text-base
              leading-relaxed
              text-secondary
            "
          >
            Select an appropriate AI model, upload your medical images,
            and start the analysis workflow.
          </p>
        </section>

        <section
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1fr_340px]
            xl:grid-cols-[1fr_380px]
            gap-6
            lg:gap-8
            items-start
          "
        >

          {/* LEFT */}
          <div
            className="
              rounded-2xl
              border border-muted/20
              bg-paper-1
              p-4
              sm:p-6
              lg:p-7
              shadow-[0_8px_30px_color-mix(in_srgb,var(--color-muted)_6%,transparent)]
            "
          >

            {/* Model selection */}
            <ModelSelector
              value={selectedModel}
              onChange={(value) => {
                setSelectedModel(value);
                setError("");
              }}
            />

            {/* Selected model */}
            {selectedModel && (
              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-muted/5
                  border border-muted/10
                  px-4 py-3
                "
              >
                <div
                  className="
                    size-8
                    shrink-0
                    rounded-lg
                    bg-muted/15
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Sparkles className="size-4 text-muted" />
                </div>

                <div className="min-w-0">
                  <p className="font-secondary text-xs text-secondary">
                    Selected model
                  </p>

                  <p
                    className="
                      truncate
                      font-primary
                      text-sm
                      font-semibold
                      text-primary
                    "
                  >
                    {selectedModel}
                  </p>
                </div>
              </div>
            )}

            {/* Upload */}
            <div className="mt-5">
              <UploadBox
                images={images}
                setImages={setImages}
              />
            </div>

            {/* Error */}
            {error && (
              <div
                className="
                  mt-4
                  rounded-xl
                  border
                  border-red-500/20
                  bg-red-500/5
                  px-4
                  py-3
                  text-sm
                  text-red-500
                  font-secondary
                "
              >
                {error}
              </div>
            )}

            {/* Analyze */}
            <button
              type="button"
              disabled={!canAnalyze || isLoading}
              onClick={handleAnalyze}
              className={`
                group
                mt-5
                w-full
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                px-5
                py-3
                font-primary
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  canAnalyze && !isLoading
                    ? `
                      bg-muted
                      cursor-pointer
                      ${
                        theme === "light"
                          ? "text-white"
                          : "text-paper-1"
                      }
                      shadow-[0_6px_20px_color-mix(in_srgb,var(--color-muted)_20%,transparent)]
                      hover:-translate-y-0.5
                      hover:shadow-[0_10px_25px_color-mix(in_srgb,var(--color-muted)_30%,transparent)]
                    `
                    : `
                      bg-muted/10
                      ${
                        theme === "light"
                          ? "text-white/50"
                          : "text-paper-1/40"
                      }
                      cursor-not-allowed
                    `
                }
              `}
            >
              <ScanSearch className="size-4" />

              {isLoading ? "Analyzing..." : "Analyze Images"}

              {!isLoading && (
                <ArrowRight
                  className={`
                    size-4
                    transition-transform
                    duration-300
                    ${
                      canAnalyze
                        ? "group-hover:translate-x-1"
                        : ""
                    }
                  `}
                />
              )}
            </button>

            <p
              className="
                mt-3
                text-center
                font-secondary
                text-xs
                text-secondary/70
              "
            >
              {!selectedModel
                ? "Select a model to continue."
                : images.length === 0
                ? "Upload at least one image to continue."
                : images.length >= 5
                ? "Maximum 5 images selected."
                : `${images.length} image${images.length !== 1 ? "s" : ""} selected.`}
            </p>

          </div>

          <DetectionTips />

        </section>
      </div>
    </main>
  );
}