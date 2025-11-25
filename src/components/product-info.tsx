import RepeatIcon from "@/assets/icons/RepeatIcon";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import NotionIcon from "@/assets/icons/NotionIcon";
import AirtableIcon from "@/assets/icons/AirtableIcon";

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

export default function ProductInfo() {
  return (
    <div className="relative border-y">
      <div className="border-y">
        <div className="h-20 md:h-30 border-x max-w-7xl mx-auto" />
      </div>

      <div className="border-b">
        <Heading className="md:text-center py-4 md:py-8 border-x mx-auto max-w-7xl">
          Leverage AI throughout your company and products
        </Heading>
      </div>

      <Container className="border-x">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <RepeatIcon className="size-12 text-primary" />
                <Heading variant="small">Assistants</Heading>
                <SubHeading className="md:m-auto text-md md:text-md lg:text-md max-w-sm">
                  Integrate natural language search and live-sync databases such
                  as Notion and Airtable to automate information retrieval.
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
          <div className="flex-1 bg-amber-100/10">
            {productInfo.map((item) => (
              <NotionCard
                answer={item.answer}
                question={item.question}
                notionName={item.notionName}
                key={item.notionName}
              />
            ))}
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
    <div>
      <Heading variant="small">{question}</Heading>
      <div>
        <div>
          <NotionIcon />
          <p>{notionName}</p>
        </div>

        <SubHeading>{answer}</SubHeading>
      </div>
    </div>
  );
}
