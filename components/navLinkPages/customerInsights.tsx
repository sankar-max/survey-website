import {
  ArrowRight,
  CalendarPlus,
  ChartNoAxesCombined,
  LibraryBig,
} from "lucide-react";
import { Button } from "../ui/button";
import { H1 } from "../ui/h1";
import { P } from "../ui/p";
import Image from "next/image";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { FeatureDesign } from "../FeatureDesign";
import { H4 } from "../ui/h4";

const CustomerInsights = () => {
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
};

export default CustomerInsights;

const clientTutorData = [
  {
    icon: CalendarPlus,
    title: "Create",
    description:
      "Get your CX survey program up and running quickly and effectively:",
    points: [
      "Take advantage of out-of-the-box CSAT, CES, and NPS questions and automatic score calculations",
      "Leverage prebuilt voice of the customer survey templates designed by experts to collect the emotion and feelings that drive the experience",
      "Follow CX survey best practice and gather context and sentiment alongside your tracking measures and scores",
    ],
  },
  {
    icon: ChartNoAxesCombined,
    title: "Analyse",
    description:
      "Get straight to the insight that matters across the end-to-end customer experience:",
    points: [
      "Holistically analyse data and feedback across the entire customer journey",
      "Quickly visualise data and spot trends with out-of-the-box CX charts",
      "Drill into and categorise complex qualitative data, sentiment, and customer anecdotes",
    ],
  },
  {
    icon: LibraryBig,
    title: "Collect",
    description:
      "Capture feedback from your customers across any channel, at any time:",
    points: [
      "Collect online and offline feedback across the entire customer journey",
      "Automate in-the-moment feedback collection at key customer touchpoints",
      "Differentiate and understand feedback collected across all channels",
    ],
  },
];
const salesData = [
  {
    title: "Sales",
    img: "/customerimage/sale.jpg",
    points: [
      "Collect information about prospects: what they want to solve, team size, budget.",
      "Deliver a highly personalized sales experience.",
      "Integrate collected information into CRM using Alchemer.",
      "Sales team knows the customer, even if the rep is new to the account.",
    ],
  },
  {
    img: "/customerimage/accountmanagement.png",
    title: "Account Management",
    points: [
      "Manage the hand-off from business development to account management.",
      "Collect and integrate every detail into the CRM account database.",
      "Show customers that the team values them by doing their homework.",
      "Essential when an account manager leaves or when a customer contact departs.",
      "Collect information on the next contact for smooth transitions.",
      "Alchemer helps collect and update customer profile information.",
    ],
  },
  {
    title: "Customer Service",
    img: "/customerimage/customerservice.png",
    points: [
      "Customer experience often involves customer service interactions.",
      "Address customer feelings after resolving their questions or problems.",
      "Promptly act on feedback to retain customers.",
      "Track and collect data on service interactions with Alchemer.",
      "Integrate with other systems for quick actions.",
    ],
  },
  {
    title: "Marketing",
    img: "/customerimage/Frame (1).png",
    points: [
      "Understand what customers want to learn and the problems they face.",
      "Ensure website and marketing materials address customer needs.",
      "Marketing teams must know how to reach and provide information to prospects.",
      "Use Alchemer to measure interactions and ask pointed questions on web pages.",
    ],
  },
  {
    title: "Holistic Customer Experience",
    img: "/customerimage/marketing.png",

    points: [
      "Deliver exceptional experiences from the first interaction to long-term growth.",
      "Map customer journeys and break them down into segments for clarity.",
      "Identify improvements in the customer experience program for greater benefits.",
    ],
  },
];
