import Container from "../container";
import Heading from "../heading";
import EcosystemBento from "./ecosystem-bento";

export default function Ecosystem() {
  return (
    <section className="border-b">
      <div className="border-y">
        <Heading className="text-center max-w-7xl mx-auto py-4 md:py-8 px-4 border-x">
          An ecosystem to build, deploy, and manage AI applications
        </Heading>
      </div>

      <Container className="border-x py-4 md:py-8">
        <EcosystemBento />
      </Container>
    </section>
  );
}
