import Ecosystem from "@/components/bento1/ecosystem";
import Enterprise from "@/components/bento2/enterprise";
import FAQs from "@/components/faq";
import Hero from "@/components/hero";
import Integration from "@/components/integration";
import LLM from "@/components/llm";
import ProductInfo from "@/components/product-info";
import ProductInfo2 from "@/components/product-info2";
import WorkSteps from "@/components/work-steps";
import Workflow from "@/components/workflow";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ecosystem />
      <Integration />
      <LLM />
      <ProductInfo />
      <Workflow />
      <ProductInfo2 />
      <WorkSteps />
      <Enterprise />
      <FAQs />
    </main>
  );
}
