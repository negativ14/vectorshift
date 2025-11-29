"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import Container from "./container";
import Heading from "./heading";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "Who can use VectorShift?",
    answer:
      "VectorShift is designed for teams looking to automate tasks with custom generative AI applications or to incorporate generative AI into their products. We work with companies ranging from fortune 500 companies to startups – and hopefully you too! ",
  },
  {
    question: "Can I try VectorShift for free?",
    answer:
      "Yes – please click here to get started. Our free version gives you access to our AI application builder and 50 runs per month.",
  },
  {
    question: "Is there a monthly plan available?",
    answer:
      "Yes – please view our pricing plans here. We offer both monthly subscriptions (can be canceled anytime) or annual subscriptions (20% discount).",
  },
  {
    question: "Can I use my own LLM API key?",
    answer:
      "Yes – you can provide your own LLM API key directly in our application builder (when you utilize a LLM component).",
  },
  {
    question: "Is VectorShift secure?",
    answer:
      "We take data security seriously and built our platform with security in mind. User data is end-to-end encrypted and uploaded files are securely store in encrypted S3 buckets. We have “zero data retention” agreements with our model providers (Open AI) to ensure that data is not stored or used for training purposes.",
  },
  {
    question: "Where can I learn more about how to use VectorShift?",
    answer:
      "Visit our knowledge base, join our discord, watch our tutorials, or book a demo!",
  },
  {
    question: "Can VectorShift integrate with my data?",
    answer:
      "Most likely, yes! VectorShift integrates with many common data sources such as Notion, Airtable, Google drive, and Onedrive. Can’t find an integration you need? Contact us here.",
  },
  {
    question: "Can VectorShift help built a solution for organization?",
    answer:
      "Yes – we have developed and implemented turn-key AI applications for companies ranging from fortune 500 to startups. Contact our sales team here for more information.",
  },
];

export default function FAQs() {
  const [active, setActive] = useState<null | number>(null);
  return (
    <div className="border-b">
      <Container className="border-x">
        <Heading className="text-center pt-4 md:pt-8">FAQs</Heading>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto py-4 md:py-8">
          {faqs.map((item, index) => (
            <FAQ
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export function FAQ({
  question,
  answer,
  active,
  setActive,
  index,
}: {
  question: string;
  answer: string;
  active: null | number;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
  index: number;
}) {
  return (
    <div
      onClick={() => setActive(active !== index ? index : null)}
      className="flex gap-2 bg-muted rounded-xl cursor-pointer p-4"
    >
      <div className="flex justify-center items-start">
        {active === index ? <Plus /> : <Minus />}
      </div>
      <div className="flex flex-col">
        <p className="text-muted-foreground font-mono">{question}</p>
        <AnimatePresence>
          {active === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <h2 className="font-poppins text-medium pt-2 tracking-wide">
                {answer}
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
