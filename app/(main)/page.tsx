import { EnterPriceCard } from "@/components/EnterPriceCard";
import { FeatureDesign } from "@/components/FeatureDesign";
import { HeroSection } from "@/components/heroSection";
import { SolutionCard } from "@/components/SolutionCard";
import { H1 } from "@/components/ui/h1";
import { H4 } from "@/components/ui/h4";
import { enterPriceData } from "@/data/enterPriceData";
import { featureData } from "@/data/featuresData";
import { solutionCard } from "@/data/solutionData";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  
  return (
    <>
      <HeroSection />
      <div id="main" className="container  mt-16 scroll-m-20">
        <H1 className="text-center  !text-4xl tracking-wide  text-black dark:text-white ">
          How Leading Enterprises Unlock Insights with Zsurvey?
        </H1>
        <div className="grid place-items-center gap-x-28 gap-y-4 py-14 md:grid-cols-2 lg:py-14">
          {enterPriceData.map((item) => (
            <EnterPriceCard item={item} key={item.title} />
          ))}
        </div>
        <div className="space-y-20">
          {featureData.map((item, ind) => (
            <div key={item.title}>
              <FeatureDesign item={item} ind={ind} />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-20 pt-14 lg:pt-28">
        <div className="text-center">
          <H1 className="py-5">Accelerate Your Success</H1>
          <H4 className="font-normal">
            empower your team to drive results quickly and effectively
          </H4>
        </div>
        <div className="flex flex-wrap gap-x-3 bg-[#0f0c29] bg-[linear-gradient(108.7deg,rgba(221,22,224,1)11%,rgba(111,22,190,1)88.2%)] py-14 dark:bg-card px-5">
          {solutionCard.map((item) => (
            <SolutionCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </>
  );
}
