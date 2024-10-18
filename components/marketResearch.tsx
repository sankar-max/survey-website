import React from 'react'
import { H1 } from './ui/h1';
import { P } from './ui/p';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface ClientTutorItem {
  title: string;
  description: string;
}

// interface SalesDataItem {
//   title: string;
//   img: string;
//   points: string[];
// }

interface PatientCareDesignProps {
  markSeconddata: ClientTutorItem[];
  //   salesData: SalesDataItem[];
}
export default function MarketResearchDesign({
  markSeconddata,
  salesData,
}: PatientCareDesignProps) {
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

      <div className="flex flex-wrap justify-center gap-6">
        {markSeconddata.map((item, index) => (
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

      <div className="space-y-10 text-center">
        <div className="space-y-5">
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
        <div className="col-span-4 h-[1200px] w-full">
          <div className="relative h-full w-full">
            <Image src="/marketimages/wrokflow.png" alt="hero-image" fill />
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <H1>Reach the right audience for your research</H1>
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
