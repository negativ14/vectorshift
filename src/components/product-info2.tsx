"use client";
import {
  IconFileTypePdf,
  IconFolderOpen,
  IconTableRow,
  IconVideo,
  IconVolume,
  IconWorldWww,
} from "@tabler/icons-react";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import { ElementType } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const dataFormats = [
  { icon: IconWorldWww, type: "Website" },
  { icon: IconTableRow, type: "Tables" },
  { icon: IconFileTypePdf, type: "PDFs" },
  { icon: IconVideo, type: "Videos" },
  { icon: IconVolume, type: "Audio" },
  { icon: IconFolderOpen, type: "Document" },
];

export default function ProductInfo2() {
  return (
    <div className="relative border-b">
      <div className="border-y">
        <div className="h-20 md:h-30 border-x max-w-7xl mx-auto" />
      </div>

      <Container className="py-8 border-x flex flex-col md:flex-row md:min-h-screen lg:min-h-[70vh] md:items-center md:justify-center gap-4 overflow-hidden mx-auto relative">
        <div className="flex flex-col gap-4 max-w-xs relative md:p-12">
          <Heading variant="mid" className="text-2xl md:text-xl lg:text-xl">
            Leverage AI across data of all formats
          </Heading>
          <SubHeading className="text-md md:text-md lg:text-md">
            Summarize and answer questions about documents, videos, audio files,
            and websites. Analyze and compare documents seamlessly.
          </SubHeading>

          <div className="absolute inset-0 bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] bg-size-[20px_20px] opacity-30 bg-repeat mask-radial-from-0%"></div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:hidden">
          {dataFormats.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: -10,
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.3,
                delay: 0.1 * index,
                ease: "easeInOut",
              }}
              key={index}
            >
              <DataTypeBox icon={item.icon} type={item.type} key={item.type} />{" "}
            </motion.div>
          ))}
        </div>

        <div className="absolute lg:-translate-x-18 -translate-x-12 translate-y-32 w-[350px] h-[350px] hidden md:block">
          {dataFormats.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: -10,
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.3,
                delay: 0.1 * index,
                ease: "easeInOut",
              }}
              key={index}
            >
              <CircularItem
                index={index}
                total={dataFormats.length}
                icon={item.icon}
                type={item.type}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export function DataTypeBox({
  icon: Icon,
  type,
  className,
}: {
  icon: ElementType;
  type: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 p-4 bg-linear-to-t from-neutral-100/10 to-transparent rounded-lg border",
        className
      )}
    >
      <Icon className="text-primary" />
      <p>{type}</p>
    </div>
  );
}

function CircularItem({
  index,
  total,
  icon: Icon,
  type,
}: {
  index: number;
  total: number;
  icon: ElementType;
  type: string;
}) {
  const angle = (360 / total) * index;
  const radius = 300;

  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        transform: `
          rotate(${angle}deg)
          translate(${radius}px)
          rotate(-${angle}deg)
        `,
      }}
    >
      <DataTypeBox icon={Icon} type={type} className="min-w-25" />
    </div>
  );
}
