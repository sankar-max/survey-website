import { solutionCard } from "@/data/solutionData";
import { H4 } from "./ui/h4";
import { P } from "./ui/p";

type Props = {
  item: (typeof solutionCard)[number];
};
export const SolutionCard = ({ item }: Props) => {
  return (
    <div className="flex-1 text-center">
      <H4 className=" !text-white">{item?.title}</H4>
      <P className="py-3 !text-white">{item.description}</P>
    </div>
  );
};
