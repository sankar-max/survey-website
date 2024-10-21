import { PlanPriceT } from "@/app/sign-up/_components/signUpCard";

import { Button } from "./ui/button";
import { Check, Zap } from "lucide-react";
import { H1 } from "./ui/h1";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "./ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  data: PlanPriceT;
};

export const PricingPlan = ({ data }: Props) => {
  const [selectedPlan, setSelected] = useState<number | null>(null);
  const plans = [
    {
      id: "b6c4a8f5-cb6d-478d-ac19-c8de87e3d072",
      name: "Enterprise Plan",
      description:
        "Advanced tools ideal for businesses, teams and large groups",
      header: "Enterprise Plan",
      subHeader: "$100/month Billed $1200 Annually",
      features: [
        "Custom integrations",
        "Advanced analytics",
        "Standard integrations",
        "Basic analytics",
      ],
    },
    {
      id: "59deb082-322f-4402-94bc-c1ece9d64a0f",
      name: "Business",
      description: "Business",
      header: "Business",
      subHeader: "$100/month Billed $1200 Annually",
      features: [
        "Up to 100 users",
        "Priority support",
        "Standard integrations",
        "Basic analytics",
        "Team collaboration tools",
      ],
    },
  ];
  return (
    <div className="h-full overflow-x-auto overflow-y-auto pb-20 text-center">
      <H1 className="pb-6 text-center !text-3xl font-bold !text-black">
        Choose a plan that works best for you
      </H1>
      <div className="grid grid-cols-1 gap-8 pt-1 md:grid-cols-2">
        {[data[0], data[1]].map((plan, planIdx) => (
          <div key={plan.id} className="transform transition-all duration-300">
            <Card
              className={`} 4 flex h-full flex-col overflow-hidden bg-gradient-to-r from-gray-800 to-teal-400 text-primary-foreground transition-all duration-300`}
            >
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center text-2xl font-bold">
                  <Zap className="mr-2 animate-pulse" />
                  {plan.header}
                </CardTitle>
                <CardDescription className={"text-primary-foreground/80"}>
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {plan.subHeader.split(" ")[0]}
                  </span>
                  <span className="ml-2 text-xl">
                    {plan.subHeader.split(" ").slice(1).join(" ")}
                  </span>
                </div>
                <ul className="space-y-2">
                  {plans[0]?.features?.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center opacity-0 transition-all duration-300"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <Check
                        className={`mr-2 h-5 w-5 text-primary-foreground`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button
                  onClick={() => setSelected(planIdx)}
                  className={cn(
                    "w-full !bg-white py-6 text-lg !text-black transition-all duration-300 ease-in",
                    selectedPlan === planIdx &&
                      "!bg-black font-medium !text-white",
                  )}
                  variant={"secondary"}
                >
                  {selectedPlan === planIdx ? "Selected" : "Choose Plan"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        li {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};
