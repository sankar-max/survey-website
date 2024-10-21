import React from "react";
import { H1 } from "@/components/ui/h1";
import { P } from "@/components/ui/p";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import marketres from "@/public/marketimages/paperwork (1).jpg";
import marketres2 from "@/public/marketimages/business-concept-discussing-graphs-showing-results-their.jpg";
import marketres3 from "@/public/marketimages/colleagues-working-together-financial-report-using-modern-gadget.jpg";
import { H4 } from "@/components/ui/h4";
import {
  markCarddata,
  markSeconddata,
  markThirddata,
} from "@/data/marketResearch";

export default function MarketResearchDesign() {
  return (
    <div className="container">
      <div className="grid place-items-center py-16 lg:py-36">
        <div className="h- grid items-center gap-x-2 gap-y-7 md:grid-cols-7">
          <div className="col-span-3 space-y-7">
            <H1>Market Research Get deeper insight</H1>
            <P className="">
              For companies of any size, our market research surveys can help
              gather feedback, measure consumer awareness or assist in the
              development of new products. Get the insights you need to grow
              your business fast.
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
                src="/marketimages/business-team-planning-marketing-strategy.jpg"
                alt="hero-image"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 py-16">
        {markSeconddata.map((item, index) => (
          <Card
            key={index}
            className={cn(
              "max-w-sm transform rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 shadow-[0px_0px_13px_-1px_rgba(0,_0,_0,_0.1)] transition-transform duration-300 ease-in-out hover:-translate-y-2",
            )}
          >
            <CardHeader className="flex items-center">
              <div className="ml-3">
                <CardTitle className="flex items-center gap-x-3 font-bold">
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

      <div className="flex justify-center gap-x-16 py-16">
        <div className="relative h-[400px] w-[400px] sm:hidden md:hidden lg:block">
          <div className="absolute left-[-2rem] top-[-2rem] z-[-1] h-[100px] w-[100px] rounded-full bg-[orangered] shadow-lg"></div>
          <div className="absolute left-[-9rem] top-[18rem] z-[-1] h-[300px] w-[300px] rounded-full bg-[#342bdd] shadow-lg"></div>
          <Image
            src={marketres2}
            alt=""
            className="h-full w-full rounded-lg shadow-lg"
          />

          <Image
            src={marketres3}
            alt="marketres"
            className="absolute left-[-2rem] top-[11rem] h-[300px] w-[300px] rounded-lg shadow-lg"
          />
          <Image
            src={marketres}
            alt="marketres"
            className="absolute right-[7rem] top-[24rem] h-[200px] w-[200px] rounded-lg shadow-lg"
          />
        </div>
        <div className="w-[500px] rounded-lg bg-white">
          <div className="space-y-2">
            <H4 className="text-[35px] font-bold text-[#263146]">
              Market research surveys
            </H4>
            <P>Get accurate insights to make informed decisions</P>
          </div>
          {markThirddata.map((item, index) => (
            <div key={index}>
              <div className="">
                <div className="flex items-center gap-x-3 pt-5 font-bold">
                  <item.icon className="size-7 text-blue-500" />
                  <H4> {item.title}</H4>
                </div>
                <div className="mt-5 text-lg text-black">
                  <P>{item.description}</P>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-5 text-center">
          <H1>Connect with your customers effectively</H1>
          <div className="">
            <P>
              Distribute mobile responsive customer satisfaction surveys via web
              links, emails, social media or QR codes and collect
            </P>
            <P>
              results in real-time. Send by SMS, collect data offline or capture
              data from web site visitors. Gather customer feedback
            </P>
            <P>anytime, anywhere.</P>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 py-16">
          {markCarddata.map((item, index) => (
            <Card
              key={index}
              className={cn(
                "max-w-sm transform rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2",
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

      <div className="space-y-5 py-10 text-center">
        <H1 className="px-36">Reach the right audience for your research</H1>
        <div className="">
          <P>
            ZettaSurvey’s Live Consumer Audience service gives you instant
            access to more than 20
          </P>
          <P>
            million respondents in over 70 countries. Interview any demographic
            group, from general
          </P>
          <P>
            consumers to niche audiences. Start getting real opinions from real
            people.
          </P>
        </div>
      </div>
    </div>
  );
}
