import Ecosystem from "@/components/ecosystem/ecosystem";
import Hero from "@/components/hero";
import Integration from "@/components/integration";
import LLM from "@/components/llm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ecosystem />
      <Integration />
      <LLM />
    </main>
  );
}
