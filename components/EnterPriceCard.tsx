import { enterPriceData } from "@/data/enterPriceData";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { P } from "./ui/p";

type Props = {
  item: (typeof enterPriceData)[number];
};
export const EnterPriceCard = ({ item }: Props) => {
  return (
    <Card>
      <CardHeader className="space-y-5">
        <CardTitle className="flex items-center gap-x-4">
          <span>
            <item.icon size={23} />
          </span>
          {item.title}
        </CardTitle>
        <CardContent className="pl-8">
          <P className="text-lg">{item.description}</P>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
