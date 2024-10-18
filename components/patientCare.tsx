import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconType } from "react-icons/lib";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { H4 } from "./ui/h4";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { H1 } from "./ui/h1";
import { P } from "./ui/p";

interface PatientFirst {
  id: number;
  title: string;
  icon: IconType;
  description: string;
}

interface PatientSecond {
  id: number;
  title: string;
  img: string;
  content: string;
}

interface PatientCareDesignProps {
  patientFirstData: PatientFirst[];
  patientSecondData: PatientSecond[];
}

export function PatientCareDesign({
  patientFirstData,
  patientSecondData,
}: PatientCareDesignProps) {
  return (
    <>
      <div className="container grid place-items-center py-16 lg:py-36">
        <div className="h- grid items-center gap-x-2 gap-y-7 md:grid-cols-7">
          <div className="col-span-3 space-y-7">
            <H1>Patient Experience</H1>
            <P className="">
              In a changing healthcare environment, the need for timely and
              reliable feedback remains a constant. With ZettaSurvey you can
              quickly identify issues that matter most to service users,
              communities and populations.
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
              <Image src="/Patientexperience.svg" alt="hero-image" fill />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-5 text-center">
          <H1>Who’s using ZettaSurvey?</H1>
          <div className="">
            <P>
              From public and private healthcare organisations to educators,
              healthcare
            </P>
            <P>
              bodies, charities and suppliers to the industry . Wherever you
              work in
            </P>
            <P>
              healthcare, we’ve got your feedback data collection needs covered.
            </P>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {patientFirstData.map((item, index) => (
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
            </Card>
          ))}
        </div>
      </div>

      <div className="container space-y-7 pt-12">
        {patientSecondData.map((item, ind) => (
          <div
            key={ind}
            className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2"
          >
            <div className={cn("space-y-2", ind % 2 !== 0 && "order-2")}>
              <H4 className="font-bold">{item?.title}</H4>
              <P className="pt-3 text-justify">{item.content}</P>
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
