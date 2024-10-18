import React from "react";
import { CalendarPlus, ChartNoAxesCombined, LibraryBig } from "lucide-react";
import PatientCareDesign from "../customerInsights";
import CustomerInsightsDesign from "../customerInsights";



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

export default function customerInsights() {
  return (
    <CustomerInsightsDesign clientTutorData={clientTutorData} salesData={salesData} />
  );
}