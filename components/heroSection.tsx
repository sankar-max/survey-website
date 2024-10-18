import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/h1";
import { P } from "@/components/ui/p";
import { HeroImage } from "@/public/assets/images/hero";
import { ArrowRight } from "lucide-react";
export const HeroSection = () => {
  return (
    <div className="container grid place-items-center py-20 lg:py-40">
      <div className="grid items-center gap-x-2 gap-y-7 md:grid-cols-7">
        <div className="col-span-3 space-y-7">
          <H1>A Better Future Uncover the difference you will make.</H1>
          <P className="">
            ZettaSurvey is packed with features to help you quickly and easily
            reach respondents and capture feedback and opinions.
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
    </div>
  );
};
