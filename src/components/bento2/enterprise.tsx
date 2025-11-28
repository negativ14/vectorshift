import Container from "../container";
import {
  CardContent1,
  CardContent2,
  CardContent3,
  CardContent4,
  CardContent5,
  CardContent6,
  EnterpriseCardSkeleton,
} from "./enterprise-skeletons";

export default function Enterprise() {
  return (
    <div className="border-b">
      <div className="border-y">
        <div className="h-20 md:h-30 border-x max-w-7xl mx-auto" />
      </div>
      <Container className="py-8 border-x">
        <div className="flex gap-8 overflow-x-auto lg:grid lg:grid-cols-3 lg:auto-rows-[9rem] lg:overflow-visible">
          <EnterpriseCardSkeleton className="lg:row-span-3 lg:row-start-1 lg:row-end-4 lg:col-start-1 shrink-0">
            <CardContent1 />
          </EnterpriseCardSkeleton>

          <EnterpriseCardSkeleton
            className="shrink-0 lg:row-start-4 lg:row-end-6 lg:col-start-1"
            title="Report generation"
          >
            <CardContent2 />
          </EnterpriseCardSkeleton>

          <EnterpriseCardSkeleton
            className="shrink-0 lg:row-start-1 lg:row-end-3 lg:col-start-2"
            title="High volume chatbot"
          >
            <CardContent3 />
          </EnterpriseCardSkeleton>

          <EnterpriseCardSkeleton
            className="shrink-0 lg:row-start-3 lg:row-end-6 lg:col-start-2"
            title="Personalized email outbound"
          >
            <CardContent4 />
          </EnterpriseCardSkeleton>

          <EnterpriseCardSkeleton
            className="shrink-0 lg:row-start-1 lg:row-end-4 lg:col-start-3"
            title="RFP and proposal generators"
          >
            <CardContent5 />
          </EnterpriseCardSkeleton>

          <EnterpriseCardSkeleton
            className="shrink-0 lg:row-start-4 lg:row-end-6 lg:col-start-3 relative"
            title="Knowledge search"
          >
            <CardContent6 />
          </EnterpriseCardSkeleton>
        </div>
      </Container>
    </div>
  );
}
