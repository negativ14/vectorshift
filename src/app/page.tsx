import Ecosystem from "@/components/ecosystem/ecosystem";
import Hero from "@/components/hero";
import Integration from "@/components/integration";
import LLM from "@/components/llm";
import ProductInfo from "@/components/product-info";
import ProductInfo2 from "@/components/product-info2";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ecosystem />
      <Integration />
      <LLM />
      <ProductInfo />
      <ProductInfo2 />
    </main>
  );
}
