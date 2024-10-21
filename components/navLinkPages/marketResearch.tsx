import React from "react";
import MarketResearchDesign from "../marketResearch";
import { HiOutlineChatBubbleLeftRight, HiOutlineLightBulb } from "react-icons/hi2";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsBarChart, BsMegaphone, BsTelephone } from "react-icons/bs";
import { MdLiveTv, MdOutlineHealthAndSafety } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { LiaShareAltSolid, LiaSmsSolid } from "react-icons/lia";
import { GoRepoPush } from "react-icons/go";

import { LuLightbulbOff } from "react-icons/lu";

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

const markThirddata = [
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

 const markCarddata = [
   {
     id: 1,
     title: "Web Intercept",
     icon: HiOutlineLightBulb,
     description:
       "Get real-time feedback from your website visitors with targeted surveys. Trigger them to appear based on the pages visited.",
   },
   {
     id: 2,
     title: "Offline",
     icon: LuLightbulbOff,
     description:
       "Extend the reach of your surveys by collecting data at the point of experience. Save feedback ready to download when you're connected.",
   },
   {
     id: 3,
     title: "Mobile",
     icon: CiMobile3,
     description:
       "All surveys created with SmartSurvey software are mobile responsive, Catch people on the move and capture information when it matters.",
   },
   {
     id: 4,
     title: "Popups",
     icon: GoRepoPush,
     description:
       "Capture information about your business from web site visitors. Use relevant triggers to get opinion directly from the people that matter.",
   },
   {
     id: 5,
     title: "Kiosk",
     icon: MdLiveTv,
     description:
       "Collect in-the-moment feedback from any location. Gather honest consumer insight at the point of experience, when it matters most.",
   },
   {
     id: 6,
     title: "Telephone surveys",
     icon: BsTelephone,
     description:
       "Generate unique survey links to get answers on your customer's behalf. Merge results with data gathered elsewhere to build the full picture.",
   },
   {
     id: 7,
     title: "SMS Invitation ",
     icon: LiaSmsSolid,
     description:
       "Send your survey by SMS and target users on the move. Reach your audience anywhere, at anytime and capture feedback instantly.",
   },
   {
     id: 8,
     title: "Social Media ",
     icon: LiaShareAltSolid,
     description:
       "Engage with like-minded people and collect their feedback. Share surveys directly onto any social media platform and gather opinion fast.",
   },
 ];
export default function MarketResearch() {
  return (
    <div>
      <MarketResearchDesign
        markSeconddata={markSeconddata}
        markThirddata={markThirddata}
        markCarddata={markCarddata}
      />
    </div>
  );
}
