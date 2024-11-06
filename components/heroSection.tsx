import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/h1";
import { P } from "@/components/ui/p";
import { HeroImage } from "@/public/assets/images/hero";
import { ArrowRight } from "lucide-react";
export const HeroSection = () => {
 
  return (
    <div className=" flex  flex-col justify-end  pt-20 bg-[#0f0c29] bg-[linear-gradient(108.7deg,rgba(221,22,224,1)11%,rgba(111,22,190,1)88.2%)]">
      <div className="grid  container items-center gap-x-2 gap-y-7 md:grid-cols-7">
        <div className="col-span-3 space-y-7 ">
          <H1 className="!text-white ">Power Your Decisions with Precise Data Collection.</H1>
          <P className="!text-white text-2xl">
          Transforming Data Collection into Actionable Insights
          </P>

          <div className="flex items-center gap-x-3">
            <Button className="group">
              Get Start
              <span className="ml-2 text-xl duration-300 group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </Button>
            <a href="#main">
              <Button variant={"secondary"} className="group">
                Explore Feature
                <span className="ml-2 text-xl duration-300 group-hover:translate-y-1">
                  <ArrowRight size={18} className="rotate-90" />
                </span>
              </Button>
            </a>
          </div>
        </div>
        <div className="col-span-4">
          <div className="h-full w-full">
            <HeroImage />
          </div>
        </div>
      </div>
      <div className=" w-full overflow-hidden leading-none transform rotate-180">
        <svg
          className="relative block w-[calc(139%+1.3px)] h-[194px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
          </svg>
      </div>
    </div>
  );
};
