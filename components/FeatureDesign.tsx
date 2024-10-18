import { featureData } from "@/data/featuresData";
import { cn } from "@/lib/utils";
import { P } from "./ui/p";
import { H4 } from "./ui/h4";
import { CardDescription } from "./ui/card";

type Props = {
  item: (typeof featureData)[number];
  ind: number;
};
export const FeatureDesign = ({ item, ind }: Props) => {
  return (
    <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
      <div className={cn("space-y-2", ind % 2 !== 0 && "order-2")}>
        <H4>{item?.title}</H4>
        <P>{item.description}</P>
      </div>
      <div className={cn("h-96 w-full", ind % 2 !== 0 && "order-1")}>
        <item.img />
      </div>
    </div>
  );
};
