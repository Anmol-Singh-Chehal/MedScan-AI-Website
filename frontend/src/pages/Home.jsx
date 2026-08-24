import React from "react";
import Badge from "@/components/Badge";
import {
  ArrowRight,
  Brain,
  ScanLine,
  Bone,
  Activity,
  CircleAlert,
} from "lucide-react";
import homeImageLight from "@/assets/homeImageLight.jpg";
import InfoCard from "@/components/InfoCard";
import StepCard from "@/components/StepCard";
import FeatureCard from "@/components/FeatureCard";
import FadeIn from "@/components/FadeIn";
import { useTheme } from "next-themes";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="pt-15">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <FadeIn id="home-hero" duration={0.8}>
        <section className="lg:px-8 lg:py-20 xl:px-12 flex lg:gap-8 items-center justify-center bg-paper-1 sm:py-10 sm:px-4">
          <div className="lg:w-1/2 xl:w-3/5 flex flex-col lg:gap-8 xl:gap-12 sm:gap-6">
            <Badge
              faIcon={"fa-microscope"}
              tag={"AI-POWERED MEDICAL IMAGING"}
            />

            <div>
              <h1 className="sm:text-3xl lg:text-4xl xl:text-5xl text-primary font-bold font-primary">
                Smarter Medical Imaging.
              </h1>

              <h1 className="sm:text-3xl lg:text-4xl xl:text-5xl text-muted font-bold font-primary">
                Clearer AI-Assisted Insights.
              </h1>
            </div>

            <h3 className="sm:text-sm md:text-lg xl:text-xl text-secondary font-medium font-secondary">
              MedScan AI is a medical imaging platform that lets you analyze
              X-ray, CT, and MRI images using dedicated AI classification
              models for fracture, tuberculosis, brain tumor, and lung cancer
              detection.
            </h3>

            <div className="flex lg:gap-4 sm:gap-4">
              <NavLink
                to={"/detection"}
                className={`font-medium bg-muted ${
                  theme === "light" ? "text-white" : "text-paper-1"
                } flex lg:gap-2 items-center lg:px-4 lg:py-2 lg:text-lg rounded-md cursor-pointer ring-2 ring-muted sm:text-sm sm:px-2 sm:py-2 sm:gap-1 font-primary transition-all duration-400 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted/50`}
              >
                <h3>Start Scanning</h3>
                <ArrowRight className="sm:size-4" />
              </NavLink>

              <NavLink
                to={"/about-us"}
                className={`transition-all duration-400 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted/50 font-medium text-muted flex lg:gap-2 items-center lg:px-4 lg:py-2 lg:text-lg rounded-md ring-2 hover:bg-muted ${
                  theme === "light"
                    ? "hover:text-white"
                    : "hover:text-paper-1"
                } hover:ring-2 hover:ring-muted bg-muted/10 ring-muted/40 cursor-pointer sm:text-sm sm:px-2 sm:py-2 sm:gap-1 font-primary`}
              >
                Learn About MedScan AI
              </NavLink>
            </div>
          </div>

          <div className="lg:w-1/2 xl:w-2/5 hidden lg:flex lg:p-2 rounded-lg bg-white">
            <img
              src={homeImageLight}
              alt="MedScan AI medical imaging analysis"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </section>
      </FadeIn>

      {/* =====================================================
          AVAILABLE MODELS
      ====================================================== */}

      <FadeIn id="home-models" duration={0.6} delay={0.1}>
        <section className="sm:py-10 sm:px-4 lg:px-8 lg:py-20 xl:px-12 flex flex-col sm:gap-10">
          <div className="flex flex-col text-center sm:gap-2">
            <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary font-primary">
              Choose the Right Model for Your Scan
            </h1>

            <p className="sm:text-sm lg:text-lg font-medium text-secondary font-secondary">
              Select the model that matches the type of medical image you want
              to analyze.
            </p>
          </div>

          <div className="flex flex-col sm:gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-4">
            <InfoCard
              Icon={Bone}
              title={"Fracture Detection"}
              desc={
                "Analyze suitable X-ray images to classify whether a fracture is present or not."
              }
            />

            <InfoCard
              Icon={Activity}
              title={"Tuberculosis Detection"}
              desc={
                "Analyze chest X-ray images using the tuberculosis classification model."
              }
            />

            <InfoCard
              Icon={Brain}
              title={"Brain Tumor Detection"}
              desc={
                "Analyze appropriate brain imaging scans with the brain tumor classification model."
              }
            />

            <InfoCard
              Icon={ScanLine}
              title={"Lung Cancer Detection"}
              desc={
                "Analyze suitable lung imaging scans using the lung cancer classification model."
              }
            />
          </div>
        </section>
      </FadeIn>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <FadeIn id="home-workflow" duration={0.6} delay={0.15}>
        <section className="sm:py-10 sm:px-4 lg:px-8 lg:py-20 xl:px-12 flex flex-col sm:gap-10 bg-paper-1">
          <div className="flex flex-col text-center sm:gap-2">
            <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary font-primary">
              How It Works
            </h1>

            <p className="sm:text-sm lg:text-lg font-medium text-secondary font-secondary">
              Analyze your medical images in a few simple steps.
            </p>
          </div>

          <div className="flex flex-col sm:gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-4">
            <StepCard
              faIcon="fa-list-check"
              title={"1. Select a Model"}
              desc={
                "Choose the appropriate model according to the scan you want to analyze, such as fracture, tuberculosis, brain tumor, or lung cancer."
              }
            />

            <StepCard
              faIcon="fa-cloud-arrow-up"
              title={"2. Upload Images"}
              desc={
                "Upload clear and suitable X-ray, CT, or MRI images. Avoid blurry images, excessive flash, or images that are difficult to interpret."
              }
            />

            <StepCard
              faIcon="fa-magnifying-glass-chart"
              title={"3. Analyze Images"}
              desc={
                "Click Analyze Images and MedScan AI processes the uploaded scans using the selected classification model."
              }
            />

            <StepCard
              faIcon="fa-file-medical"
              title={"4. View & Download Results"}
              desc={
                "Review the prediction results and confidence on the results page, then access and download individual scan reports from your profile."
              }
            />
          </div>
        </section>
      </FadeIn>

      {/* =====================================================
          PLATFORM FEATURES
      ====================================================== */}

      <FadeIn id="home-features" duration={0.6} delay={0.2}>
        <section className="sm:py-10 sm:px-4 lg:px-8 lg:py-20 xl:px-12 flex flex-col sm:gap-10">
          <div className="flex flex-col text-center sm:gap-2">
            <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary font-primary">
              Built for Simple Medical Image Analysis
            </h1>

            <p className="sm:text-sm lg:text-lg font-medium text-secondary font-secondary">
              A single platform for accessing multiple medical imaging
              classification models and managing your prediction results.
            </p>
          </div>

          <FeatureCard
            points={[
              {
                icon: "fa-layer-group",
                text: "Access multiple specialized classification models from one medical imaging platform.",
              },
              {
                icon: "fa-images",
                text: "Upload and analyze multiple suitable medical images through a simple workflow.",
              },
              {
                icon: "fa-chart-simple",
                text: "View the predicted result and model confidence after image analysis.",
              },
              {
                icon: "fa-clock-rotate-left",
                text: "Keep track of previous scans and prediction results through your profile.",
              },
              {
                icon: "fa-file-arrow-down",
                text: "Download individual image reports from your prediction history whenever needed.",
              },
            ]}
          />
        </section>
      </FadeIn>

      {/* =====================================================
          AI NOTICE
      ====================================================== */}

      <FadeIn id="home-ai-notice" duration={0.6} delay={0.25}>
        <section className="sm:py-10 sm:px-4 lg:px-8 lg:py-16 xl:px-12 flex flex-col sm:gap-6 bg-paper-1">
          <div className="flex flex-col text-center sm:gap-2">
            <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary font-primary">
              AI-Assisted Results
            </h1>

            <p className="sm:text-sm lg:text-lg font-medium text-secondary font-secondary">
              MedScan AI is designed to assist with image classification and
              provide quick model-based predictions.
            </p>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-muted/20 bg-paper-2/20 p-5 sm:p-6 max-w-4xl mx-auto">
            <CircleAlert className="size-6 text-muted shrink-0 mt-0.5" />

            <p className="text-sm sm:text-base text-secondary font-secondary leading-relaxed">
              AI predictions can be affected by image quality, scan type, and
              other factors. Results should therefore be interpreted
              carefully and should not be treated as a substitute for
              professional medical evaluation.
            </p>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}