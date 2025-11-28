"use client";
import copy from "@/assets/images/copy.png";
import summaries from "@/assets/images/summaries.png";
import analytics from "@/assets/images/analytics.png";
import outbound from "@/assets/images/outbound.png";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import Container from "./container";
import { IconFileTextSpark } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const workflow = [
  { name: "Outbound", image: outbound },
  { name: "Copy", image: copy },
  { name: "Summaries", image: summaries },
  { name: "Analytics", image: analytics },
] as const;

type WorkflowName = (typeof workflow)[number]["name"];

export default function Workflow() {
  const [active, setActive] = useState<WorkflowName>("Outbound");

  return (
    <div className="border-b">
      <div className="border-y">
        <div className="h-20 md:h-30 border-x max-w-7xl mx-auto" />
      </div>

      <Container className="border-x px-4 md:px-8 py-4 md:py-8 flex flex-col gap-8 lg:flex-row md:items-center lg:justify-between lg:items-center lg:min-h-[60vh]">
        <div className="flex flex-col gap-4">
          <IconFileTextSpark className=" text-primary size-12 shrink-0 md:self-center-safe lg:self-start" />
          <Heading className="md:text-center lg:text-start" variant="small">
            Workflow Automation
          </Heading>
          <SubHeading className="text-md md:text-md lg:text-md max-w-sm md:text-center md:max-w-md lg:text-start">
            Automate the creation of marketing copy, personalized outbound
            emails, call summaries, and graphics at scale.
          </SubHeading>
        </div>

        <div className="flex flex-col gap-10 md:gap-20 mx-auto pb-10">
          <div className="md:flex md:items-center md:justify-center grid grid-cols-2 gap-4 md:gap-8">
            {workflow.map((item) => (
              <motion.div layout key={item.name}>
                <Button
                  onClick={() => setActive(item.name)}
                  variant={active === item.name ? "primary" : "ghost"}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </div>
          <div>
            {workflow.map((item) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                  x: 10,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  ease: "easeIn",
                }}
                key={item.name}
                className={cn(active === item.name ? "" : "hidden")}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="md:h-40 h-20 w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
