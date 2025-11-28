"use client";
import {
  Bot,
  Brain,
  ChevronRight,
  FileInput,
  Pencil,
  Search,
  User,
} from "lucide-react";
import Heading from "../heading";
import EcosystemCodeBox from "./ecosystem-code-box";
import { cn } from "@/lib/utils";
import IconBox from "../icon-box";
import { IconBrandOpenai } from "@tabler/icons-react";
import { ElementType } from "react";
import AtlassianIcon from "@/assets/icons/AtlassianIcon";
import DriveIcon from "@/assets/icons/DriveIcon";
import MongoDBIcon from "@/assets/icons/MongoDBIcon";
import NotionIcon from "@/assets/icons/NotionIcon";
import MetaIcon from "@/assets/icons/MetaIcon";
import { motion } from "motion/react";
import { AnimatedText } from "../animated-text";
import GradientLines from "../gradient-line";

const container = {
  idle: {},
  hover: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  idle: { filter: "blur(1px)", x: -10 },
  hover: { filter: "blur(0px)", x: 0 },
};

export default function EcosystemBento() {
  return (
    <div>
      <EcosystemCodeBox />
      <EcosystemCards />
    </div>
  );
}

export function EcosystemCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
      <EcosystemCardSkeleton title="Marketplace: pre-built use cases">
        <div>
          <Card1Content />
        </div>
      </EcosystemCardSkeleton>

      <EcosystemCardSkeleton title="Agents: execute complex tasks">
        <div className="pl-10">
          <GradientLines
            delay="0.2"
            className="h-full w-px translate-x-40 -translate-y-50 z-10 rotate-90 block md:hidden lg:block"
            gradientClassName="h-20"
          />
          <GradientLines
            delay="0.6"
            className="h-full w-px translate-x-40 -translate-y-45 z-10 rotate-90 block md:hidden lg:block"
            gradientClassName="h-20"
          />

          <GradientLines
            delay="0.9"
            className="h-full w-px -translate-y-15.5 -z-10 block md:hidden lg:block"
            gradientClassName="h-20"
          />
          <GradientLines
            delay="0.1"
            className="h-full w-px -translate-y-15.5 translate-x-5 -z-10"
            gradientClassName="h-20"
          />
          <Card2Content />
        </div>
      </EcosystemCardSkeleton>

      <EcosystemCardSkeleton title="Search: use the optimal data retrieval method">
        <div className="min-h-80">
          <Card3Content />
        </div>
      </EcosystemCardSkeleton>
    </div>
  );
}

export function EcosystemCardSkeleton({
  className,
  children,
  title,
}: {
  className?: string;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col relative overflow-hidden rounded-lg border group md:max-h-96 ",
        className
      )}
    >
      {" "}
      <Heading className="px-4 py-4 bg-none md:text-xl" variant="small">
        {title}
      </Heading>
      <div>{children}</div>
      <p className="absolute bottom-5 left-5 flex items-center text-shadow-lg z-10 cursor-pointer">
        Learn more <ChevronRight className="mt-0.5 size-4.5" />
      </p>
      <div className="absolute -z-10 inset-0 bg-linear-to-br from-neutral-100/10 to-transparent" />
    </div>
  );
}

export function Card1Content() {
  return (
    <div className="flex flex-col items-end gap-8 max-h-80 mask-b-from-50%">
      <div className="pt-4 border-l border-t border-dashed rounded-tl-xl mt-4">
        <div className="flex flex-wrap justify-center w-fit gap-1 border p-1 rounded-xl bg-neutral-950/80 ml-8">
          <IconBox
            icon={Brain}
            variant="outline"
            title="Memory"
            className="min-w-16 bg-secondary rounded-lg"
            iconClassName="text-primary"
          ></IconBox>
          <IconBox
            icon={FileInput}
            variant="outline"
            title="Input"
            className="min-w-16 bg-secondary"
            iconClassName="text-primary"
          ></IconBox>
          <IconBox
            icon={Pencil}
            variant="outline"
            title="Text"
            className="min-w-16 bg-secondary"
            iconClassName="text-primary"
          ></IconBox>
          <IconBox
            icon={IconBrandOpenai}
            variant="outline"
            title="OpenAI"
            className="min-w-16 bg-secondary"
            iconClassName="text-primary"
          ></IconBox>
        </div>
      </div>

      <ChatBox className="translate-x-10 md:translate-x-40 lg:translate-x-10 -translate-y-15 rounded-xl scale-[0.8]" />
    </div>
  );
}

export function Card3Content({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "perspective-[4000px] absolute inset-0 mask-b-from-50% min-w-sm",
        className
      )}
    >
      <div
        className="bg-neutral-950 px-6 py-8 rounded-xl translate-y-28 lg:translate-x-5 scale-[0.9] group-hover:scale-[1] transition-all duration-500 ease-in-out"
        style={{
          transform: "rotateY(20deg) rotateX(10deg) rotateZ(-10deg)",
        }}
      >
        <div className="flex items-center gap-4 px-4 py-2 bg-neutral-500/20 rounded-full relative group">
          <Search className="size-4" />{" "}
          <span className="text-sm whitespace-nowrap">Product launch</span>
        </div>
        <motion.div
          className="divide-y pt-2 ml-2"
          variants={container}
          initial="idle"
          whileHover="hover"
        >
          {searchArray.map((itemData, index) => (
            <motion.div key={index} variants={item}>
              <SearchTag icon={itemData.icon} search={itemData.search} />
            </motion.div>
          ))}
        </motion.div>

        <p className="text-xl font-poppins font-medium group-hover:opacity-0 absolute top-42 right-38 animate-bounce pointer-events-none">
          {" "}
          Hover Me!!
        </p>
      </div>
    </div>
  );
}

export function SearchTag({
  icon: Icon,
  search,
}: {
  icon: ElementType;
  search: string;
}) {
  return (
    <div className="flex items-center gap-2 py-2">
      <Icon className="size-4" />
      <p className="text-xs text-muted-foreground">{search}</p>
    </div>
  );
}

const searchArray = [
  { icon: AtlassianIcon, search: "Product launch strategy 2023" },
  { icon: DriveIcon, search: "Product launch checklist" },
  { icon: MongoDBIcon, search: "Marketing for product launch" },
  { icon: NotionIcon, search: "Product release notes" },
  { icon: MetaIcon, search: "Product launch advertisement" },
];

export function ChatBox({ className }: { className?: string }) {
  const messages = [
    {
      sender: "bot",
      text: "I can help answer any questions about our product",
    },
    {
      sender: "user",
      text: "What are you pricing tiers.",
    },
    {
      sender: "bot",
      text: `Sure,                                                    
      Checking products pricing...            
      compiling results`,
    },
    {
      sender: "bot",
      text: "We offer three pricing tier based on your usage of platform.",
    },
  ];

  return (
    <div
      className={cn(
        "border bg-neutral-950/80 rounded-tl-md p-4 min-w-sm",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex gap-3 items-start",
              message.sender === "user" ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div
              className={cn(
                "rounded-full p-2 shrink-0 bg-primary",
                message.sender === "user" && "bg-neutral-800"
              )}
            >
              {message.sender === "user" ? (
                <User className="size-4 text-white" />
              ) : (
                <Bot className="size-4 text-white" />
              )}
            </div>

            <div
              className={cn(
                "flex flex-col gap-1 max-w-[80%]",
                message.sender === "user" ? "items-end" : "items-start"
              )}
            >
              <div
                className={cn(
                  "rounded-2xl px-4 py-2",
                  message.sender === "user"
                    ? "bg-primary text-white rounded-tr-sm"
                    : "bg-neutral-800 text-neutral-100 rounded-tl-sm"
                )}
              >
                <AnimatedText text={message.text} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Card2Content() {
  const messages = [
    {
      sender: "user",
      text: "Why should i choose vector.",
    },
    {
      sender: "bot",
      text: "Here is what choosing VectorShift for Your AI",
      list: [
        "Advanced AI",
        "No-code Builder",
        "Deep Integration",
        "Continous Learning",
        "Customization",
        "Scalability",
        "Security and Compliance",
      ],
    },
  ];

  return (
    <div className="border bg-neutral-950/80 rounded-tl-xl p-4 scale-[0.9] min-w-sm lg:translate-x-10 md:-translate-x-5 translate-y-5 mask-b-from-50%">
      <div className="flex flex-col gap-4 overflow-hidden">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex gap-3 items-start",
              message.sender === "user" ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div
              className={cn(
                "rounded-full p-2 shrink-0 bg-primary",
                message.sender === "user" && "bg-neutral-800"
              )}
            >
              {message.sender === "user" ? (
                <User className="size-4 text-white" />
              ) : (
                <Bot className="size-4 text-white" />
              )}
            </div>

            <div
              className={cn(
                "flex flex-col gap-1 max-w-[70%]",
                message.sender === "user" ? "items-end" : "items-start"
              )}
            >
              <div
                className={cn(
                  "rounded-md px-4 py-2",
                  message.sender === "user"
                    ? "bg-primary text-white rounded-tr-none"
                    : "bg-neutral-800 text-neutral-100 rounded-tl-none"
                )}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                {message.list && (
                  <ul className="mt-2 space-y-1 text-sm">
                    {message.list.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
