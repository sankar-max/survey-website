import React from 'react'
import MarketResearchDesign from '../marketResearch'


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
export default function MarketResearch() {
  return (
    <div>
      <MarketResearchDesign markSeconddata={markSeconddata} />
    </div>
  );
}
