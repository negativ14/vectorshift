"use client";
import { Check, ChevronRight } from "lucide-react";
import Heading from "../heading";
import { cn } from "@/lib/utils";
import SubHeading from "../sub-heading";
import { Card1Content } from "../bento1/ecosystem-bento";
import NotionIcon from "@/assets/icons/NotionIcon";
import AirtableIcon from "@/assets/icons/AirtableIcon";
import HubspotIcon from "@/assets/icons/HubspotIcon";
import DriveIcon from "@/assets/icons/DriveIcon";
import SalesForceIcon from "@/assets/icons/SalesForceIcon";
import OneDriveIcon from "@/assets/icons/OneDriveIcon";
import Chat from "@/assets/icons/chat";
import { DataTypeBox } from "../product-info2";
import { IconBulb, IconLeaf, IconMusic, IconUsers } from "@tabler/icons-react";
import { motion } from "motion/react";
import GradientLines from "../gradient-line";

export function EnterpriseCardSkeleton({
  className,
  children,
  title,
}: {
  className?: string;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 relative overflow-hidden rounded-lg border group h-96 w-80 lg:w-full lg:h-full cursor-pointer",
        className
      )}
    >
      {" "}
      <div className="">{children}</div>
      {!title ? (
        <p className="absolute bottom-5 left-5 flex items-center text-shadow-lg z-10">
          Learn more <ChevronRight className="mt-0.5 size-4.5" />
        </p>
      ) : (
        <Heading
          className="absolute bottom-2 left-2 z-10 px-4 py-4 bg-none md:text-xl"
          variant="small"
        >
          {title}
        </Heading>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-primary/50 via-transparent to-neutral-50/5 -z-10" />
    </div>
  );
}

export function CardContent1() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Heading variant="mid">
        Enterprise
        <br /> solutions
      </Heading>
      <SubHeading className="pr-4">
        We leverage our secure infrastructure and development platform to build
        and deploy high-ROI AI solutions for your organizations.
      </SubHeading>
    </div>
  );
}

export function CardContent2() {
  return (
    <div className="scale-[1.2] translate-x-9.5 mask-b-from-0% translate-y-6 relative">
        <GradientLines className="-rotate-90 h-100 translate-x-36 -translate-y-40 block" delay="0.3" />
      <Chat />
    </div>
  );
}

export function CardContent3() {
  return (
    <div className="-translate-y-30 md:scale-[1.2] md:-translate-x-8">
      <Card1Content />
    </div>
  );
}

const emailLines = [
  "w-60",
  "w-30",
  "w-50",
  "w-40",
  "w-58",
  "w-42",
  "w-66",
  "w-60",
  "w-30",
  "w-50",
  "w-40",
  "w-58",
];

export function CardContent4() {
  return (
    <div className="p-8 ">
      <div className="flex flex-col gap-4 p-4 border rounded-lg mask-b-from-0%  bg-neutral-950">
        <p className="font-poppins text-lg font-medium">
          Subject line: Hi John Doe, join top companies who use App to automate
          their marketing campigns.
        </p>

        <div className="overflow-hidden flex flex-col gap-4">
          {emailLines.map((width, i) => (
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.1 * i,
              }}
              key={i}
              className={cn(
                "h-4 rounded-full bg-linear-to-br from-neutral-100/10 via-neutral-50/5 to-neutral-100/8",
                width
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CardContent5() {
  return (
    <div className="mask-b-from-0%">
      <div className="grid grid-cols-2 gap-4 p-4">
        <DataTypeBox icon={IconLeaf} type="Style" className="border-none " />
        <DataTypeBox
          icon={IconUsers}
          type="Audience"
          className="border-none "
        />
        <DataTypeBox icon={IconBulb} type="Topic" className="border-none " />
        <DataTypeBox icon={IconMusic} type="Tone" className="border-none " />
      </div>

      <div className="overflow-hidden flex flex-col gap-4 p-4 mask-b-from-0%">
        <p className="font-poppins font-medium text-md">RPF response</p>
        {emailLines.map((width, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="size-6 p-px rounded-lg relative overflow-hidden">
              <div
                className={cn(
                  "absolute inset-0 bg-conic from-primary via-transparent to-transparent animate-spin scale-[1.4]",
                  i % 2 === 0 ? "delay-1000 duration-3000" : "duration-4000"
                )}
              />
              <span className="flex items-center justify-center h-full rounded-[9px] relative z-0 bg-background">
                <Check className="text-primary size-4"/>
              </span>
            </div>

            <motion.div
            initial={{
              opacity: 0,
              x: -60,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * i,
            }}
            
            className={cn(
              "h-4 rounded-full bg-linear-to-br from-neutral-100/10 via-neutral-50/5 to-neutral-100/8",
              width
            )}
          />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CardContent6() {
  return (
    <div className="absolute inset-0 flex justify-center items-center mask-b-from-0%">
      <Circle>
        <AirtableIcon className="size-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit [--translate-position:60px] [animation-delay:0s]" />
        <SalesForceIcon className="size-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit [--translate-position:60px] [animation-delay:3s]" />
      </Circle>

      <Circle className="size-50 z-9">
        <NotionIcon className="size-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit [--translate-position:100px] [animation-delay:6s]" />
        <OneDriveIcon className="size-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit [--translate-position:100px] [animation-delay:2s]" />
      </Circle>

      <Circle className="size-70 z-8">
        <HubspotIcon className="size-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit [--translate-position:140px] [animation-delay:9s]" />
        <HubspotIcon className="size-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit [--translate-position:140px] [animation-delay:6s]" />
      </Circle>

      <Circle className="size-90 z-7">
        <DriveIcon className="size-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit [--translate-position:180px] [animation-delay:1s]" />
        <DriveIcon className="size-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit [--translate-position:180px] [animation-delay:5s]" />
      </Circle>
    </div>
  );
}

export function Circle({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "size-30 bg-neutral-600/20 z-10 border border-dashed rounded-full inset-0 m-auto absolute",
        className
      )}
    >
      {children}
    </div>
  );
}
