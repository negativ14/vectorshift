"use client";
import Image from "next/image";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import dashboard from "@/assets/images/vs_dashboard.avif";
import { Button } from "./ui/button";
import { IconCarambolaFilled } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <main>
      <Container className="py-10 md:py-20 lg:py-32 relative overflow-hidden">
        <Heading className="text-center" as="h1" variant="big">
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

        <div className="absolute top-96 left-1/2 transition-all duration-200 ease-in-out">
          <IconCarambolaFilled className="absolute -translate-x-33 translate-y-9 rotate-12 scale-50 opacity-60 animate-pulse" />
          <IconCarambolaFilled className="absolute translate-x-80 -translate-y-39 rotate-[-18deg] scale-65 opacity-55 animate-pulse" />
          <IconCarambolaFilled className="absolute translate-x-13 translate-y-23 rotate-25 scale-30 opacity-35 animate-pulse" />
          <IconCarambolaFilled className="absolute translate-x-110 translate-y-23 rotate-[8deg] scale-70 opacity-50 animate-pulse" />
          <IconCarambolaFilled className="absolute -translate-x-80 -translate-y-20 rotate-[-32deg] scale-45 opacity-40 animate-pulse" />
          <IconCarambolaFilled className="absolute translate-x-91 -translate-y-74 rotate-40 scale-35 opacity-30 animate-pulse" />
          <IconCarambolaFilled className="absolute -translate-x-99 -translate-y-63 rotate-[-10deg] scale-55 opacity-45 animate-pulse" />
          <IconCarambolaFilled className="absolute translate-x-66 -translate-y-13 rotate-18 scale-35 opacity-36 animate-pulse" />
          <IconCarambolaFilled className="absolute -translate-x-110 translate-y-28 rotate-32 scale-60 opacity-50 animate-pulse" />
          <IconCarambolaFilled className="absolute translate-x-121 -translate-y-4 rotate-[-25deg] scale-40 opacity-30 animate-pulse" />
          <IconCarambolaFilled className="absolute -translate-x-149 -translate-y-23 rotate-14 scale-30 opacity-25 animate-pulse" />
          <IconCarambolaFilled className="absolute translate-x-136 -translate-y-53 rotate-28 scale-30 opacity-20 animate-pulse" />
          <IconCarambolaFilled className="absolute -translate-x-49 -translate-y-85 rotate-[-35deg] scale-50 opacity-35 animate-pulse" />
        </div>
      </Container>
    </main>
  );
}
