"use client";
import { cn } from "@/lib/utils";
import Container from "./container";
import { motion } from "motion/react";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import GradientLines from "./gradient-line";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Start with a template",
    description:
      "Leverage dozens of pre-built templates for end use cases - ranging from research report generators to resume screeners.",
  },
  {
    step: 2,
    title: "Connect data",
    description:
      "Allow your AI application to leverage raw data in any format (websites, documents, or CSVs) or directly connect with your database.",
  },
  {
    step: 3,
    title: "Intuitive drag and drop builder",
    description:
      "Build and rapidly iterate on your application’s architecture with a large library of drag and drop components. Transfer your work seamlessly between no-code and our python SDK.",
  },
  {
    step: 4,
    title: "Customize and deploy to end users",
    description:
      "Export a chatbot or generate an API endpoint instantly. Customize the look and feel of the application.",
  },
];

export default function WorkSteps() {
  return (
    <div>
      <div className="border-y">
        <div className="h-20 md:h-30 border-x max-w-7xl mx-auto" />
      </div>
      <Container className="border-x overflow-hidden">
        <Heading
          variant="mid"
          className="px-4 md:px-8 py-4 md:py-8 md:text-center"
        >
          How it works
        </Heading>

        <div className="flex items-center lg:justify-center gap-4 ">
          {steps.map((item) => (
            <motion.div key={item.step}>
              <StepCards
                step={item.step}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export function StepCards({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 p-4 h-96 w-72 relative border rounded-lg bg-linear-to-tl from-neutral-100/10 via-transparent to-neutral-50/5">
      <div className="size-10 p-px rounded-lg relative overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-conic from-primary via-transparent to-transparent animate-spin scale-[1.4]",
            step % 2 === 0 ? "delay-1000 duration-3000" : "duration-4000"
          )}
        />
        <span className="flex items-center justify-center h-full rounded-[9px] relative z-0 bg-background">
          {step}
        </span>
      </div>

      {step !== 4 && (
        <div className="flex absolute right-25 top-9 items-center gap-2 bg-red-300">
          <GradientLines
            className="h-65 w-0.5 -rotate-90"
            gradientClassName="w-1"
            delay={`${step}`}
          />

          <ChevronRight className="absolute -right-35 text-primary/80" />
        </div>
      )}

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
          filter: "blur(5px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{once: false}}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.1 * step,
        }}
        className="flex flex-col gap-4"
      >
        <Heading variant="small">{title}</Heading>
        <SubHeading className="text-md md:text-md lg:text-md">
          {description}
        </SubHeading>
      </motion.div>
    </div>
  );
}
