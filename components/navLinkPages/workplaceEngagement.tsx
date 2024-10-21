import Image from "next/image";
import React from "react";
import { H1 } from "@/components/ui/h1";
import { P } from "@/components/ui/p";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { H4 } from "@/components/ui/h4";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { workFristData, workSecondData } from "@/data/workplaceEngagement";


export default function WorkplaceEngagementDesign() {
  return (
    <div className="container">
      <div className="grid place-items-center py-16 lg:py-36">
        <div className="h- grid items-center gap-x-2 gap-y-7 md:grid-cols-7">
          <div className="col-span-3 space-y-7">
            <H1>Employee Experience</H1>
            <P className="">
              Create the experiences your employees love to attract the best
              talent, boost staff retention and increase your business success.
            </P>

            <div className="flex items-center gap-x-3">
              <Button className="group">
                Sign Up
                <span className="ml-2 text-xl duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </Button>
            </div>
          </div>
          <div className="col-span-4 h-[400px] w-full">
            <div className="relative h-full w-full">
              <Image
                src="/empimages/employeelifecycle.svg"
                alt="hero-image"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        {workFristData.map((item, ind) => (
          <div
            key={ind}
            className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2"
          >
            <div className={cn("space-y-2", ind % 2 == 0 && "order-2")}>
              <H4 className="font-bold">{item?.title}</H4>
              {item.description.map((desc, index) => (
                <div key={index}>
                  <P className="font-semibold">{desc.heading}</P>
                  <P className="text-justify">{desc.subitem}</P>
                </div>
              ))}
            </div>
            <div
              className={cn("relative h-96 w-full", ind % 2 == 0 && "order-1")}
            >
              <Image src={item.img} alt={item.title} fill />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {workSecondData.map((item, index) => (
          <Card
            key={index}
            className={cn(
              "flex-1 transform p-4 shadow-[-1px_-1px_37px_0px_rgba(0,_0,_0,_0.1)] transition-transform duration-300 ease-in-out hover:-translate-y-2 rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 ",
            )}
          >
            <CardHeader className="flex items-center !text-black">
              <div className="ml-3">
                <CardTitle className="flex items-center gap-x-3 font-bold">
                  {item.title}
                </CardTitle>
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
    </div>
  );
}
