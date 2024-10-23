import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { H1 } from "@/components/ui/h1";
import { P } from "@/components/ui/p";
import { patientFirstData, plans } from "@/data/pricing";
import Featurestable from "../PricingTable";
import { H4 } from "../ui/h4";

import { Button } from "../ui/button";
import PricingTable from "../PricingTable";

export default function pricing() {
  return (
    <div className="container my-10 space-y-10">
      <div className="px-5 py-[10px]">
        <div className="space-y-5 py-24 text-center">
          <H1>Flexible Pricing for every business</H1>
          <P>
            With CheckMarket’s flexible monthly or annual pricing, simply pay
            for the number of survey responses you need, and launch your
            campaign.
          </P>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 py-6">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="shadow-[-1px_-1px_37px_0px_rgba(0,_0,_0,_0.1)]"
          >
            <div className="flex items-center py-6">
              <P className="mx-6 py-3">{plan.icon}</P>
              <div
                className={`w-full rounded-s-full border bg-gradient-to-r ${plan.bgGradient} py-3 text-center`}
              >
                <P>{plan.name}</P>
              </div>
            </div>
            <CardHeader>
              <CardTitle>{plan.priceMonthly}</CardTitle>
              <CardTitle>{plan.priceAnnually}</CardTitle>
            </CardHeader>
            <CardContent>
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <P className="text-red-400 my-4">{feature.icon && feature.icon}</P>
                  <P>{feature.text}</P>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                className={`rounded-full bg-gradient-to-r ${plan.buttonGradient} px-32 py-6`}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="space-y-10">
        <div className="py-4 text-center">
          <H1>Frequently Asked Questions</H1>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {patientFirstData.map((item, index) => (
            <Card
              key={index}
              className={cn(
                "max-w-sm transform rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 shadow-[-1px_-1px_37px_0px_rgba(0,_0,_0,_0.1)] transition-transform duration-300 ease-in-out hover:-translate-y-2",
              )}
            >
              <CardHeader className="flex items-center !text-black">
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

      <PricingTable />

      <div className="px-5 py-[150px]">
        <div className="space-y-5 py-24 text-center">
          <H1>
            Transform how you engage with students, parents and employees to
            boost educational performance.
          </H1>
          <P>
            Whether you are a head of faculty in a university, a teacher in a
            secondary school or an owner of a workplace training company, the
            ability to gather feedback from students, parents and employers is
            vital to highlighting how you are performing and enabling you to
            maintain and keep improving standards going forward.
          </P>
        </div>
      </div>
    </div>
  );
}
