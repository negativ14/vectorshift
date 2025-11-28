import { ChevronRight } from "lucide-react";
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
      <SubHeading>
        We leverage our secure infrastructure and development platform to build
        and deploy high-ROI AI solutions for your organizations.
      </SubHeading>
    </div>
  );
}

export function CardContent2() {
  return <div></div>;
}

export function CardContent3() {
  return (
    <div className="-translate-y-30">
      <Card1Content />
    </div>
  );
}

export function CardContent4() {
  return <div></div>;
}

export function CardContent5() {
  return <div></div>;
}

export function CardContent6() {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <Circle className="">
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
