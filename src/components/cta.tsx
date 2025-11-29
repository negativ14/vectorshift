import { ChevronRight } from "lucide-react";
import Container from "./container";
import Heading from "./heading";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <div className="border-b">
      <Container className="border-x px-4 md:px-8 py-8 md:py-16">
        <div className="bg-linear-to-br from-neutral-100/10 via-transparent to-neutral-100/5 h-64 rounded-lg border overflow-hidden flex flex-col items-center justify-center gap-8 px-4 md:px-8 py-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] bg-size-[20px_20px] opacity-20 mask-radial-from-0% bg-repeat" />

          <Heading>Get started today</Heading>
          <div className="flex items-center gap-4">
            <Button variant={"primary"}>Get Started</Button>
            <Button variant={"ghost"}>Contact Sales <ChevronRight /> </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
