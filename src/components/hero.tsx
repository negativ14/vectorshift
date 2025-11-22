"use client";
import Image from "next/image";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import dashboard from "@/assets/images/Hero-frame.png";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <main>
      <Container className="py-10 md:py-20 lg:py-32">
        <Heading className="text-center" as="h1">
          The{" "}
          <motion.span
            initial={{
              backgroundPositionX: -100,
            }}
            animate={{
              backgroundPositionX: 100,
            }}
            transition={{
              duration: 1,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="bg-linear-to-l from-primary via-[#abb2f3] to-primary bg-clip-text text-transparent w-[150%]"
          >
            Fastest
          </motion.span>{" "}
          Way to Build <br />
          AI Apps and <span className="text-primary">Workflow</span>
        </Heading>

        <SubHeading className="text-center min-w-full py-6">
          Automate workflow and back office <br /> processes without code
        </SubHeading>

        <div className="flex items-center justify-center gap-6">
          <Button variant={"primary"}>Get started</Button>
          <Button variant={"outline"}>Book a demo</Button>
        </div>

        <div className="relative pt-20 md:pt-30 lg:pt-40">
          <Image
            src={dashboard}
            alt={"dashboard image"}
            height={1080}
            width={1920}
            className="rounded-xl shadow-xl mask-b-from-50% object-cover z-0 border"
          />

          <div className="absolute h-100 w-250 dark:bg-compliment bg-compliment/30 rounded-full top-15 translate-x-20 blur-[100px] -z-10" />
        </div>
      </Container>
    </main>
  );
}
