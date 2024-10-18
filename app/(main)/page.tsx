import { EnterPriceCard } from "@/components/EnterPriceCard";
import { FeatureDesign } from "@/components/FeatureDesign";
import { HeroSection } from "@/components/heroSection";
import { SolutionCard } from "@/components/SolutionCard";
import { H1 } from "@/components/ui/h1";
import { H4 } from "@/components/ui/h4";
import { enterPriceData } from "@/data/enterPriceData";
import { featureData } from "@/data/featuresData";
import { solutionCard } from "@/data/solutionData";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="main" className="container scroll-m-20">
        <H1 className="text-center">
          How enterprise customers are using{" "}
          <span className="">ZettaSurvey?</span>
        </H1>
        <div className="grid place-items-center gap-x-28 gap-y-4 py-14 md:grid-cols-2 lg:py-24">
          {enterPriceData.map((item) => (
            <EnterPriceCard item={item} key={item.title} />
          ))}
        </div>
        <div className="space-y-20">
          {featureData.map((item, ind) => (
            <FeatureDesign key={item.title} item={item} ind={ind} />
          ))}
        </div>
      </div>
      <div className="space-y-20 py-14 lg:py-28">
        <div className="text-center">
          <H1 className="py-5">Accelerate Your Success</H1>
          <H4 className="font-normal">
            empower your team to drive results quickly and effectively
          </H4>
        </div>
        <div className="flex flex-wrap gap-x-3 bg-secondary py-10 dark:bg-card">
          {solutionCard.map((item) => (
            <SolutionCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </>
  );
}
