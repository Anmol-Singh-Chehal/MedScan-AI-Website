import InfoCard from "@/components/InfoCard";
import React from "react";
import {
  LuBrain,
  LuCode,
  LuScanSearch,
  LuShieldCheck,
  LuHeartPulse,
  LuSparkles,
  LuGithub,
  LuGraduationCap,
} from "react-icons/lu";

export default function AboutUs() {
  const technologies = [
    "Python",
    "PyTorch",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "React",
    "FastAPI",
  ];

  const goals = [
    {
      icon: LuScanSearch,
      title: "Medical Image Analysis",
      desc: "Exploring how deep learning can assist in analyzing different types of medical images.",
    },
    {
      icon: LuBrain,
      title: "AI & Computer Vision",
      desc: "Building practical applications around machine learning, deep learning and computer vision.",
    },
    {
      icon: LuShieldCheck,
      title: "Privacy First",
      desc: "Keeping patient information and medical images protected throughout the application workflow.",
    },
  ];

  return (
    <main
      className="
        min-h-screen
        bg-paper-1

        px-4
        py-12

        sm:px-6
        sm:py-14

        md:px-10

        lg:px-16
        lg:py-20
        mt-15
      "
    >

      <div className="max-w-6xl mx-auto">


        <section
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.2fr_0.8fr]

            gap-10
            lg:gap-16

            items-center
          "
        >

          <div className="flex flex-col gap-5">

            <div
              className="
                w-fit

                flex
                items-center
                gap-2

                rounded-full

                border
                border-muted/20

                bg-muted/10

                px-3
                py-1.5
              "
            >
              <LuSparkles className="size-4 text-muted" />

              <span
                className="
                  text-xs
                  sm:text-sm

                  font-primary
                  font-medium

                  text-muted
                "
              >
                About the Creator
              </span>
            </div>


            <h1
              className="
                font-primary
                font-semibold

                text-3xl
                sm:text-4xl
                lg:text-5xl

                leading-tight

                text-primary
              "
            >
              Building{" "}
              <span className="text-muted">
                MedScan AI
              </span>{" "}
              with a passion for AI.
            </h1>


            <p
              className="
                max-w-2xl

                font-secondary

                text-sm
                sm:text-base
                lg:text-lg

                leading-relaxed

                text-secondary
              "
            >
              I'm a computer science student interested in
              machine learning, deep learning and computer
              vision. I built MedScan AI as a personal project
              to explore how artificial intelligence can be
              applied to medical image analysis.
            </p>

          </div>


          <div
            className="
              relative
              overflow-hidden

              rounded-3xl

              border
              border-muted/20

              bg-paper-1

              p-6
              sm:p-8

              shadow-[0_10px_40px_color-mix(in_srgb,var(--color-muted)_10%,transparent)]
            "
          >

            <div
              className="
                absolute
                -right-16
                -top-16

                size-40

                rounded-full

                bg-muted/10
              "
            />

            <div
              className="
                relative

                flex
                flex-col
                items-center

                text-center

                gap-4
              "
            >

              <div
                className="
                  size-24
                  sm:size-28

                  flex
                  items-center
                  justify-center

                  rounded-full

                  bg-muted/15

                  border
                  border-muted/30

                  shadow-[0_5px_25px_color-mix(in_srgb,var(--color-muted)_15%,transparent)]
                "
              >
                <LuCode
                  className="
                    size-10
                    sm:size-12
                    text-muted
                  "
                />
              </div>


              <div>

                <h2
                  className="
                    font-primary
                    text-xl
                    sm:text-2xl
                    font-semibold
                    text-primary
                  "
                >
                  Anmol Singh
                </h2>

                <p
                  className="
                    mt-1

                    font-secondary
                    text-sm

                    text-muted
                  "
                >
                  Computer Science Student & AI Developer
                </p>

              </div>


              <div
                className="
                  flex
                  items-center
                  gap-2

                  font-secondary
                  text-sm

                  text-secondary
                "
              >
                <LuGraduationCap className="size-4 text-muted" />

                Exploring AI, ML & Computer Vision
              </div>


              <div className="flex gap-3 pt-2">

                <a
                  href="#"
                  className="
                    size-10

                    flex
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-muted/20

                    bg-muted/10

                    text-secondary

                    hover:bg-muted
                    hover:text-white

                    transition-all
                  "
                >
                  <LuGithub className="size-5" />
                </a>

              </div>

            </div>

          </div>

        </section>



        <section
          id="project"
          className="
            mt-20
            sm:mt-24
          "
        >

          <div className="max-w-3xl">

            <span
              className="
                font-primary
                text-sm
                font-semibold

                uppercase
                tracking-widest

                text-muted
              "
            >
              The Project
            </span>

            <h2
              className="
                mt-2

                font-primary
                font-semibold

                text-2xl
                sm:text-3xl

                text-primary
              "
            >
              Why I built MedScan AI
            </h2>

            <p
              className="
                mt-4

                font-secondary
                text-sm
                sm:text-base

                leading-relaxed

                text-secondary
              "
            >
              MedScan AI started as an exploration into the
              intersection of artificial intelligence and
              healthcare. The goal is to create a platform
              where different medical imaging modalities can
              be connected with specialized machine learning
              models.
            </p>

          </div>


          <div
            className="
              mt-8

              grid
              grid-cols-1
              lg:grid-cols-3

              gap-4
            "
          >

            {goals.map((goal, index) => {
              const Icon = goal.icon;

              return (
                <InfoCard Icon={Icon} title={goal.title} desc={goal.desc}/>
              );
            })}

          </div>

        </section>



        <section
          id="technology"
          className="
            mt-20
            sm:mt-24
          "
        >

          <div
            className="
              rounded-3xl

              border
              border-muted/20

              bg-paper-2/30

              p-6
              sm:p-8
              lg:p-10
            "
          >

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-2

                gap-8
                lg:gap-12

                items-center
              "
            >

              <div>

                <span
                  className="
                    font-primary
                    text-sm
                    font-semibold

                    uppercase
                    tracking-widest

                    text-muted
                  "
                >
                  Technology
                </span>

                <h2
                  className="
                    mt-2

                    font-primary
                    font-semibold

                    text-2xl
                    sm:text-3xl

                    text-primary
                  "
                >
                  Built around modern AI technologies
                </h2>

                <p
                  className="
                    mt-4

                    font-secondary
                    text-sm
                    sm:text-base

                    leading-relaxed

                    text-secondary
                  "
                >
                  The project combines machine learning,
                  deep learning, computer vision and modern
                  web technologies to create an end-to-end
                  medical imaging workflow.
                </p>

              </div>


              {/* Technologies */}
              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full

                      border
                      border-muted/20

                      bg-paper-1

                      px-4
                      py-2

                      font-secondary
                      text-sm
                      font-medium

                      text-secondary

                      transition-colors

                      hover:border-muted/50
                      hover:text-muted
                    "
                  >
                    {technology}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </section>



        <section
          className="
            mt-20
            sm:mt-24

            text-center
          "
        >

          <div
            className="
              mx-auto

              size-12

              flex
              items-center
              justify-center

              rounded-full

              bg-muted/10

              border
              border-muted/20
            "
          >
            <LuHeartPulse className="size-6 text-muted" />
          </div>


          <h2
            className="
              mt-5

              font-primary
              font-semibold

              text-2xl
              sm:text-3xl

              text-primary
            "
          >
            The vision behind the project
          </h2>


          <p
            className="
              mx-auto
              mt-4

              max-w-2xl

              font-secondary
              text-sm
              sm:text-base

              leading-relaxed

              text-secondary
            "
          >
            This project is an ongoing learning journey.
            The goal isn't to replace medical professionals,
            but to explore how responsible AI systems can
            support research, education and medical image
            analysis.
          </p>

        </section>

      </div>

    </main>
  );
}