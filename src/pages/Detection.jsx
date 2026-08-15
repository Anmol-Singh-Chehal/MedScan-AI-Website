import React, { useState } from "react";

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

export default function Detection() {
  const {theme, setTheme} = useTheme();

  const [selectedModel, setSelectedModel] = useState("");
  const [images, setImages] = useState([]);

  const canAnalyze = selectedModel && images;

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

          <Badge faIcon={"fa-search"} tag={"AI MEDICAL IMAGING"}/>

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
            Select an appropriate AI model, upload your medical image,
            and start the analysis workflow.
          </p>

        </section>


        {/* ================= MAIN GRID ================= */}

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

          {/* ================= LEFT ================= */}

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
              onChange={setSelectedModel}
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

                  <p
                    className="
                      font-secondary
                      text-xs
                      text-secondary
                    "
                  >
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


            {/* Analyze button */}

            <button
              disabled={!canAnalyze}
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
                  canAnalyze
                    ? `
                      bg-muted
                      cursor-pointer
                      ${theme==="light"? "text-white": "text-paper-1"}
                      shadow-[0_6px_20px_color-mix(in_srgb,var(--color-muted)_20%,transparent)]

                      hover:-translate-y-0.5
                      hover:shadow-[0_10px_25px_color-mix(in_srgb,var(--color-muted)_30%,transparent)]
                    `
                    : `
                      ${theme==="light"? "text-white": "text-paper-1"}
                      bg-muted/10
                      text-paper-1
                      cursor-not-allowed
                    `
                }
              `}
            >

              <ScanSearch className="size-4" />

              Analyze Image

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

            </button>


            {/* Bottom note */}

            <p
              className="
                mt-3
                text-center
                font-secondary
                text-xs
                text-secondary/70
              "
            >
              Select a model and upload an image to continue.
            </p>

          </div>



          <DetectionTips />

        </section>

      </div>

    </main>
  );
}