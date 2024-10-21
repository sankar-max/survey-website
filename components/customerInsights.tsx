import {
  ArrowRight,
  CalendarPlus,
  ChartNoAxesCombined,
  LibraryBig,
} from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FeatureDesign } from "./FeatureDesign";
import { H4 } from "./ui/h4";
import { H1 } from "./ui/h1";
import { P } from "./ui/p";
import { Button } from "./ui/button";

interface ClientTutorItem {
  icon: React.ElementType;
  title: string;
  description: string;
  points: string[];
}

interface SalesDataItem {
  title: string;
  points: string[];
}

interface PatientCareDesignProps {
  clientTutorData: ClientTutorItem[];
  salesData: SalesDataItem[];
}

export default function CustomerInsightsDesign({
  clientTutorData,
  salesData,
}: PatientCareDesignProps) {
  return (
    <>
      <div className="container grid place-items-center py-16 lg:py-36">
        <div className="h- grid items-center gap-x-2 gap-y-7 md:grid-cols-7">
          <div className="col-span-3 space-y-7">
            <H1>Customer Experience</H1>
            <P className="">
              Collect customer feedback at every touch point on any channel with
              tools that help you understand your customers so you can deliver
              experiences they love.
            </P>

            <div className="flex items-center gap-x-3">
              <Button className="group">
                Get Start
                <span className="ml-2 text-xl duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </Button>
            </div>
          </div>
          <div className="col-span-4 h-[400px] w-full">
            <div className="relative h-full w-full">
              <Image src="/customerWelcome.svg" alt="hero-image" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {clientTutorData.map((item, index) => (
          <Card
            key={index}
            className={cn(
              "max-w-sm transform p-4 shadow-[-1px_-1px_37px_0px_rgba(0,_0,_0,_0.1)] transition-transform duration-300 ease-in-out hover:-translate-y-2",
              "rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-md",
            )}
          >
            <CardHeader className="flex items-center">
              <div className="ml-3">
                <CardTitle className="flex items-center gap-x-3 font-bold">
                  <item.icon className="size-7 text-blue-500" />
                  {item.title}
                </CardTitle>
                <CardDescription className="mt-5 text-lg text-black">
                  {item.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="list-disc space-y-3 pl-5">
                {item.points.map((point, i) => (
                  <li key={i} className="text-lg leading-relaxed text-black">
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="container space-y-7 pt-12">
        {salesData.map((item, ind) => ( 
          <div
            key={ind}
            className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2"
          >
            <div className={cn("space-y-2", ind % 2 !== 0 && "order-2")}>
              <H4 className="font-bold">{item?.title}</H4>
              <ul className="mt-10 list-disc space-y-3 pl-5">
                {item.points.map((point, i) => (
                  <li key={i} className="text-lg leading-relaxed text-black">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={cn("relative h-96 w-full", ind % 2 !== 0 && "order-1")}
            >
              <Image src={item.img} alt={item.title} fill />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
