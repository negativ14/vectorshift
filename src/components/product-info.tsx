import RepeatIcon from "@/assets/icons/RepeatIcon";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import NotionIcon from "@/assets/icons/NotionIcon";
import AirtableIcon from "@/assets/icons/AirtableIcon";
import { CircleCheck, MessagesSquare, SmilePlus } from "lucide-react";
import AvatarPurple from "@/assets/icons/AvatarPurple";
import AvatarBlond from "@/assets/icons/AvatarBlond";
import GradientLines from "./gradient-line";

const productInfo = [
  {
    question: "When was this contract started?",
    notionName: "20230329-Product-Contract-Acme.pdf",
    answer: "The contract started on January 1, 2023.",
  },
  {
    question: "When was this contract last modified?",
    notionName: "20230329-Product-Contract-Acme.pdf",
    answer:
      "The contract was last modified by John D. on June 13, 2023. The modifications were done on page 3,4 and 16.",
  },
  {
    question: "What’s the contract ceiling?",
    notionName: "20230329-Product-Contract-Acme.pdf",
    answer: "The contract ceiling is USD$1,000,000.",
  },
];

const plans = [
  {
    planType: "BASIC PLAN",
    plans: ["$12 per month", "6 projects", "Unlimited revisions"],
  },
  {
    planType: "PRO PLAN",
    plans: ["$16 per month", "12 projects", "Unlimited revisions"],
  },
  {
    planType: "CUSTOM PLAN",
    plans: ["Varied pricing", "20 projects", "Unlimited revisions"],
  },
];

export default function ProductInfo() {
  return (
    <div className="relative border-y">
      <div className="border-y">
        <div className="h-20 md:h-30 border-x max-w-7xl mx-auto" />
      </div>

      <div className="border-b">
        <Heading className="md:text-center py-4 md:py-8 px-4 border-x mx-auto max-w-7xl">
          Leverage AI throughout your company and products
        </Heading>
      </div>

      <Container className="border-x relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-4 md:py-8 gap-16 relative">
          <div className="lg:mask-b-from-90%">
            <div className="flex items-center">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <RepeatIcon className="size-10 text-primary" />
                  <Heading variant="small">Assistants</Heading>
                  <SubHeading className="md:m-auto text-md md:text-md lg:text-md max-w-sm">
                    Integrate natural language search and live-sync databases
                    such as Notion and Airtable to automate information
                    retrieval.
                  </SubHeading>
                </div>

                <div className="flex items-center gap-4">
                  <NotionIcon className="size-6" />
                  <AirtableIcon className="size-6" />
                  <p className="bg-primary/60 font-poppins rounded-md text-sm font-medium flex items-center justify-center px-1.5 py-0.5">
                    +64
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-8">
              {productInfo.map((item, index) => (
                <NotionCard
                  answer={item.answer}
                  question={item.question}
                  notionName={item.notionName}
                  key={index}
                />
              ))}
            </div>
          </div>

          <GradientLines
            className="w-px h-[75%] bottom-0 rotate-180 translate-x-152 mask-b-from-50%"
            delay="0.5"
          />

          {/* second */}
          <div className="mask-b-from-80%">
            <div className="flex items-center">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <MessagesSquare className="size-10 text-primary" />
                  <Heading variant="small">Chatbot</Heading>
                  <SubHeading className="md:m-auto text-md md:text-md lg:text-md max-w-sm">
                    Prototype, customize, and deploy a customer facing chatbot
                    in minutes. Use cases including customer support, onboarding
                    flow, lead collection, and white-glove advisory.
                  </SubHeading>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8 border rounded-lg p-4 relative">
              <div className="flex items-center gap-2">
                <AvatarPurple className="shrink-0" />
                <p className="bg-secondary px-2 py-1 rounded-md">
                  I can help answer any questions about our product
                </p>
              </div>

              <div className="flex flex-row-reverse items-center justify-start gap-2">
                <AvatarBlond className="shrink-0" />
                <p className="bg-primary/80 px-2 py-1 rounded-md">
                  What are your pricing tiers?
                </p>
              </div>

              <div className="flex items-start gap-4">
                <AvatarPurple className="shrink-0" />
                <div className="bg-secondary px-2 py-1 rounded-md flex flex-col gap-2">
                  <p>
                    Sure , we offer 3 pricing tiers based on your usage of the
                    platform.
                  </p>

                  <div className="flex flex-col lg:flex-row gap-2">
                    {plans.map((plan) => (
                      <PlanCard
                        key={plan.planType}
                        plan={plan.planType}
                        list={plan.plans}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-row-reverse items-center justify-start gap-2">
                <AvatarBlond className="shrink-0" />
                <p className="bg-primary/80 px-2 py-1 rounded-md">
                  Thank you, which tier do you think works best for us?
                </p>
              </div>

              <div className="flex items-start gap-2">
                <AvatarPurple className="shrink-0" />
                <p className="bg-secondary px-2 py-1 rounded-md max-w-lg">
                  Based on the information you provided earlier, we think the
                  Pro plan will be the best fit for your situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export function NotionCard({
  question,
  answer,
  notionName,
}: {
  question: string;
  answer: string;
  notionName: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <SubHeading className="font-poppins text-foreground text-md md:text-md lg:text-md">
        {question}
      </SubHeading>
      <div className="bg-neutral-200/90 p-4 rounded-lg flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <NotionIcon className="size-5" />
          <p className="text-neutral-950/60 text-sm">{notionName}</p>
        </div>

        <p className="text-neutral-950 text-md md:text-md lg:text-md">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function AvatarIcon() {
  return (
    <div className="items-center justify-center p-1.5 bg-secondary border-px inline-flex rounded-full">
      <SmilePlus className="text-primary size-6" />
    </div>
  );
}

export function PlanCard({ plan, list }: { plan: string; list: string[] }) {
  return (
    <div className="flex flex-col gap-2 bg-background rounded-lg p-4 lg:my-3">
      <p className="text-sm">{plan}</p>
      <div>
        {list.map((text) => (
          <li
            key={text}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <CircleCheck className="size-3 text-primary shrink-0" />
            {text}
          </li>
        ))}
      </div>
    </div>
  );
}
