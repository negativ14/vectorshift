import { IconBrandOpenai } from "@tabler/icons-react";
import Container from "./container";
import Heading from "./heading";
import IconBox from "./icon-box";
import SubHeading from "./sub-heading";
import AntropicIcon from "@/assets/icons/AntropicIcon";
import HuggingFaceIcon from "@/assets/icons/HuggingFaceIcon";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import MetaIcon from "@/assets/icons/MetaIcon";
import AWSIcon from "@/assets/icons/AWSIcon";
import MistralIcon from "@/assets/icons/MistralIcon";
import GridBackground from "./grid-background";

export default function LLM() {
  return (
    <div className="relative border-b">
      <div className="border-y">
        <div className="h-20 md:h-30 border-x max-w-7xl mx-auto" />
      </div>

      <Container className="py-8 border-x flex flex-col gap-4 overflow-hidden mx-auto">
        <Heading variant="mid" className="md:text-center">
          Large language models
        </Heading>
        <SubHeading className="md:m-auto text-md md:text-md lg:text-md">
          Access the latest models through the VectorShift platform
        </SubHeading>

        <div className="flex flex-wrap gap-6 md:hidden w-full mt-10">
          <IconBox
            icon={IconBrandOpenai}
            variant="ghost"
            iconClassName="size-10"
            title="Open AI"
          />
          <IconBox
            icon={AntropicIcon}
            variant="ghost"
            iconClassName="size-10"
            title="Antropic"
          />
          <IconBox
            icon={HuggingFaceIcon}
            variant="ghost"
            iconClassName="size-10"
            title="Huggingface"
          />
          <IconBox
            icon={GoogleIcon}
            variant="ghost"
            iconClassName="size-10"
            title="Google"
          />
          <IconBox
            icon={MetaIcon}
            variant="ghost"
            iconClassName="size-10"
            title="Meta"
          />
          <IconBox
            icon={AWSIcon}
            variant="ghost"
            iconClassName="size-10"
            title="AWS"
          />
          <IconBox
            icon={MistralIcon}
            variant="ghost"
            iconClassName="size-10"
            title="MistralIcon"
          />
        </div>

        <div className="relative w-160 h-96 mask-radial-from-0% mx-auto mt-25 hidden md:block">
          <IconBox
            icon={IconBrandOpenai}
            variant="ghost"
            className="translate-x-43 translate-y-20"
            iconClassName="size-10"
            title="Open AI"
          />
          <IconBox
            icon={AntropicIcon}
            variant="ghost"
            className="translate-x-82"
            iconClassName="size-10"
            title="Antropic"
          />
          <IconBox
            icon={HuggingFaceIcon}
            variant="ghost"
            className="translate-x-18.5 -translate-y-1.5"
            iconClassName="size-10"
            title="Huggingface"
          />
          <IconBox
            icon={GoogleIcon}
            variant="ghost"
            className="translate-x-63 -translate-y-22"
            iconClassName="size-10"
            title="Google"
          />
          <IconBox
            icon={MetaIcon}
            variant="ghost"
            className="translate-x-103 -translate-y-41"
            iconClassName="size-10"
            title="Meta"
          />
          <IconBox
            icon={AWSIcon}
            variant="ghost"
            className="translate-x-43 -translate-y-42"
            iconClassName="size-10"
            title="AWS"
          />
          <IconBox
            icon={MistralIcon}
            variant="ghost"
            className="translate-x-80.5 -translate-y-61.5"
            iconClassName="size-10"
            title="MistralIcon"
          />
          <GridBackground className="bg-size-[80px_80px]"/>
        </div>
      </Container>
    </div>
  );
}
