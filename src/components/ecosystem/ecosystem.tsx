import Container from "../container";
import Heading from "../heading";
import EcosystemCodeBox from "./ecosystem-code-box";

export default function Ecosystem() {
  return (
    <section>
      <div className="border-y">
        <Heading className="text-center max-w-7xl mx-auto py-4 lg:text-4xl md:py-8 border-x px-4 md:px-8 lg:px-16">
          An ecosystem to build, deploy, and manage AI applications
        </Heading>
      </div>

      <Container className="border-x py-4 md:py-8 lg:py-16">
        <EcosystemCodeBox />
      </Container>
    </section>
  );
}
