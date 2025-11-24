"use client";
import React, { useState } from "react";
import SubHeading from "../sub-heading";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import { IconBrandOpenai } from "@tabler/icons-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import GradientLines from "../gradient-line";

export default function EcosystemCodeBox() {
  const [box1, setBox1] = useState<boolean>(false);
  const [box2, setBox2] = useState<boolean>(false);
  const [box3, setBox3] = useState<boolean>(false);
  const [box4, setBox4] = useState<boolean>(false);
  const [box5, setBox5] = useState<boolean>(false);

  const leftColumnBoxes = [
    {
      title: "Instruction text",
      description: "Describe this file to me",
    },
    {
      title: "OpenAI LLM",
      description: "Model: gpt-4.0-turbo (processes input)",
      icon: <IconBrandOpenai className="size-5 text-primary" />,
    },
    {
      title: "Results",
      description: "Generates output",
      icon: <FileText className="size-5 text-primary" />,
    },
  ];

  const rightColumnBoxes = [
    {
      title: "File input",
      description: "JSON, CSV, PDF",
    },
    {
      title: "File loader",
      description: "Reads the input file",
      icon: <FileText className="size-5 text-primary" />,
    },
  ];

  const code1 = `from vectorshift.node import *
from vectorshift.pipeline import *`;

  const code2 = `file_node = InputNode(name='file_input', input_type='file')`;

  const code3 = `model_text_node = TextNode(text='Describe this file to me.')`;

  const code4 = `fileloader_node = FileLoaderNode(file_input=file_node.output())`;

  const code5 = `llm_node = OpenAI_LLMNode(
    model='gpt-4.0-turbo',
    system_input=model_text_node.output(),
    prompt_input=fileloader_node.output()
)`;

  const code6 = `output_node = OutputNode(
    name="my_output",
    output_type="text",
    input=llm_node.output()
)`;

  const codeArray = [code1, code2, code3, code4, code5, code6];
  const boxStates = [
    { hovered: box1, setHovered: setBox1 },
    { hovered: box2, setHovered: setBox2 },
    { hovered: box3, setHovered: setBox3 },
    { hovered: box4, setHovered: setBox4 },
    { hovered: box5, setHovered: setBox5 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SkeletonBox
        title="No code"
        description="Build and deploy powerful applications with drag and drop components and customizable deployment interfaces. No coding required. "
      >
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-6 md:gap-20 relative">
            {leftColumnBoxes.map((box, index) => (
              <NoCodeBox
                key={index}
                title={box.title}
                description={box.description}
                icon={box.icon}
                hovered={boxStates[index].hovered}
                setHovered={boxStates[index].setHovered}
              />
            ))}
          </div>

          <GradientLines
            className="h-20 lg:translate-x-30 lg:translate-y-75 rotate-180"
            gradientClassName="h-10"
            delay="0.3"
          />

          <GradientLines
            className="h-20 lg:translate-x-30 lg:translate-y-27.5"
            delay="0.9"
            gradientClassName="h-10"
          />

          <GradientLines
            className="h-24 lg:translate-x-70.5 lg:translate-y-60.5 -rotate-20"
            delay="1.1"
            gradientClassName="h-10"
          />

          <div className="flex flex-col gap-6 md:gap-20 md:mt-30 relative">
            {rightColumnBoxes.map((box, index) => (
              <NoCodeBox
                key={index}
                title={box.title}
                description={box.description}
                icon={box.icon}
                hovered={boxStates[index + 3].hovered}
                setHovered={boxStates[index + 3].setHovered}
              />
            ))}

            <GradientLines
              className="h-20 translate-x-30 translate-y-25.5 lg:translate-x-30 lg:translate-y-21.5"
              delay="0.5"
              gradientClassName="h-15"
            />
          </div>

          <div className="flex flex-col gap-4"></div>
        </div>
      </SkeletonBox>

      <SkeletonBox
        title="Code SDK"
        description="Access all functionality of the VectorShift platform through your IDE through simple, intuitive APIs. Complete interoperability between No-code and Code SDK."
      >
        <div className="flex flex-col gap-2">
          {codeArray?.map((code, index) => (
            <SyntaxHighLightedCode
              key={code}
              index={index}
              code={code}
              hovered={index === 0 ? false : boxStates[index - 1].hovered}
              setHovered={
                index === 0 ? () => {} : boxStates[index - 1].setHovered
              }
            />
          ))}
        </div>
      </SkeletonBox>
    </div>
  );
}

export const SkeletonBox = ({
  children,
  className,
  title,
  description,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 rounded-md border p-4 relative",
        className
      )}
    >
      {" "}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-primary font-poppins">
          {title}
        </h3>{" "}
        <SubHeading className="text-md md:text-md lg:text-md font-poppins">
          {description}
        </SubHeading>
      </div>
      {children}
      <div className="absolute inset-0 bg-linear-to-br from-neutral-100/10 via-transparent to-neutral-100/10 rounded-md" />
    </div>
  );
};

export const NoCodeBox = ({
  title,
  icon,
  description,
  className,
  hovered,
  setHovered,
}: {
  title: string;
  icon?: React.ReactNode;
  description: string;
  className?: string;
  hovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={cn(
        "border rounded-lg flex flex-col overflow-hidden relative z-10",
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3
        className={cn(
          "text-lg font-medium tracking-tight text-background bg-foreground py-1 text-center font-poppins px-4 rounded-t-lg",
          hovered && "bg-primary text-foreground",
          "transition-all duration-300 ease-in-out"
        )}
      >
        {title}
      </h3>

      <div className="flex items-center gap-2 py-3 px-4">
        <span className="shrink-0">{icon}</span>

        <SubHeading className="text-md md:text-md lg:text-md overflow-hidden line-clamp-2">
          {description}
        </SubHeading>
      </div>
    </div>
  );
};

export const SyntaxHighLightedCode = ({
  code,
  hovered,
  setHovered,
  index,
}: {
  code: string;
  hovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
}) => {
  return (
    <div
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className={cn(
        "rounded-lg text-sm transition-colors relative",
        index !== 0 &&
          hovered &&
          "bg-green-400/10 border-[0.5px] border-green-400"
      )}
    >
      <div className="relative z-10">
        <SyntaxHighlighter
          language="python"
          style={a11yDark}
          customStyle={{
            background: "transparent",
            margin: 0,
            padding: "0.5rem",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
