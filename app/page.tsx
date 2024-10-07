import { EnterPriceCard } from "@/components/EnterPriceCard";
import { HeroSection } from "@/components/heroSection";
import { H1 } from "@/components/ui/h1";
import { enterPriceData } from "@/data/enterPriceData";
import { HeroImage } from "@/public/assets/images/hero";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="main" className="container space-y-20">
        <HeroImage />
        <H1 className="text-center">
          How enterprise customers are using ZettaSurvey?
        </H1>
        <div className="grid gap-x-28 gap-y-4 md:grid-cols-2 md:gap-x-20">
          {enterPriceData.map((item) => (
            <EnterPriceCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </>
  );
}
