import Ecosystem from "@/components/ecosystem/ecosystem";
import Hero from "@/components/hero";
import Integration from "@/components/integration";
import LLM from "@/components/llm";
import ProductInfo from "@/components/product-info";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ecosystem />
      <Integration />
      <LLM />
      <ProductInfo />
    </main>
  );
}
