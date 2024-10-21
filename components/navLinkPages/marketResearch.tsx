import React from "react";
import MarketResearchDesign from "../marketResearch";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsBarChart, BsMegaphone } from "react-icons/bs";

const markSeconddata = [
  {
    title: "43 Built-In Question Types",
    description:
      "Collect exactly the data you need with customizable market research question types from multiple choice to Likert Scales.",
  },
  {
    title: "Branching & Skip Logic",
    description:
      "Show only the questions and pages that matter to your respondents with easy to design advanced logic.",
  },
  {
    title: "Virtually Unlimited Questions & Responses",
    description:
      "Ask as many questions as you want to as many people as you need. No hidden fees or additional charges. Just data.",
  },
  {
    title: "Advanced Reporting Tools",
    description:
      "Create and customize advanced reports like TURF, cross tabs, and comparison faster than ever before. Even export directly to SPSS for deeper analysis.",
  },
];

const surveyServices = [
  {
    id: 1,
    title: "Buy survey responses",
    description:
      "Need people to take your survey but don’t have contacts in your address book? Get responses with our Live Audience service.",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    id: 2,
    title: "Product development",
    description:
      "Review customer feedback on products and services throughout the buying lifecycle to drive improvements.",
    icon: VscWorkspaceTrusted,
  },
  {
    id: 3,
    title: "Market trends",
    description:
      "Gather accurate data to develop a clear industry picture in order to make smart, informed decisions fast.",
    icon: BsBarChart,
  },
  {
    id: 4,
    title: "Brand awareness",
    description:
      "Accrue feedback to benchmark your brand against your competitors in order to increase your market share.",
    icon: BsMegaphone,
  },
];
export default function MarketResearch() {
  return (
    <div>
      <MarketResearchDesign
        markSeconddata={markSeconddata}
        surveyServices={surveyServices}
      />
    </div>
  );
}
