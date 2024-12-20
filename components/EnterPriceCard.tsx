import { enterPriceData } from "@/data/enterPriceData";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { P } from "./ui/p";

type Props = {
  item: (typeof enterPriceData)[number];
};
export const EnterPriceCard = ({ item }: Props) => {
  return (
    <Card className="hover:scale-y-105 hover:shadow-gray-500 shadow-md shadow-gray-300 hover:cursor-pointer hover:transition-all ease-in-out duration-300">
      <CardHeader className="space-y-3 pb-3">
        <CardTitle className="flex items-center  gap-x-4 !text-xl font-bold">
          <span>
            <item.icon className="size-7 text-blue-500" />
          </span>
          {item.title}
        </CardTitle>
        <CardContent className="pl-8">
          <P className="">{item.description}</P>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
