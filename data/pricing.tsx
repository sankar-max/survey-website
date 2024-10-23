
import {  RiSurveyLine } from "react-icons/ri";
import { IoReloadSharp, IoTimerOutline } from "react-icons/io5";
import { AiOutlineFileProtect, AiOutlineFileSync, AiOutlineFileText } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { SiEnterprisedb, SiLinuxprofessionalinstitute } from "react-icons/si";
import { LiaBusinessTimeSolid } from "react-icons/lia";


export const plans = [
  {
    name: "Enterprise Plan",
    icon: <SiEnterprisedb size={40} />,
    bgGradient: "from-blue-400 to-blue-700",
    priceMonthly: "$100/month Billed",
    priceAnnually: "$1200 Annually",
    features: [
      {
        icon: <BsCheckCircle className="text-red-400" />,
        text: "One named account user",
      },
      { text: "Great for individuals who want to create simple surveys." },
    ],
    buttonText: "Sign Up",
    buttonGradient: "from-blue-400 to-blue-700",
  },
  {
    name: "Business",
    icon: <LiaBusinessTimeSolid size={40} />,
    bgGradient: "from-blue-700 to-indigo-800",
    priceMonthly: "$100/month Billed",
    priceAnnually: "$1200 Annually",
    features: [
      {
        icon: <BsCheckCircle className="text-red-400" />,
        text: "One named account user",
      },
      { text: "Great for individuals who want to create simple surveys." },
    ],
    buttonText: "Sign Up",
    buttonGradient: "from-blue-700 to-indigo-800",
  },
  {
    name: "Professional",
    icon: <SiLinuxprofessionalinstitute size={40} />,
    bgGradient: "from-red-300 to-red-500",
    priceMonthly: "$100/month Billed",
    priceAnnually: "$1200 Annually",
    features: [
      {
        icon: <BsCheckCircle className="text-red-400" />,
        text: "One named account user",
      },
      { text: "Great for individuals who want to create simple surveys." },
    ],
    buttonText: "Sign Up",
    buttonGradient: "from-red-300 to-red-500",
  },
];
export const patientFirstData = [
  {
    id: 1,
    title: "What counts as a survey response?",
    icon: RiSurveyLine,
    description:
      "A survey response is counted each time someone begins answering one of your surveys. So, if someone opens the survey but doesn’t take any other action, that doesn’t count as a response.",
  },
  {
    id: 2,
    title: "What if I go over my plan limits?",
    icon: AiOutlineFileText,
    description:
      "If you receive more survey responses than expected, there’s no need to panic. We always warn you before it’s likely to happen, upgrading your plan is easy, and any excess responses are simply charged according to our standard rates.",
  },
  {
    id: 3,
    title: "How long is the free plan?",
    icon: AiOutlineFileProtect,
    description:
      "CheckMarket’s free plan is free forever, and provides you with the ability to collect 200 survey responses per month. Looking to explore a particular use case? Contact our sales team to learn more.",
  },
  {
    id: 4,
    title: "What payment types are accepted?",
    icon: IoReloadSharp,
    description:
      "We accept most credit cards and, for high-volume senders and larger organizations, we can support invoicing as well.",
  },
  {
    id: 5,
    title: "Which currencies are accepted?",
    icon: BsCheckCircle,
    description:
      "We accept USD, EUR, GBP, and can work with you to accept alternative currencies too. Contact our sales team to learn more.",
  },
  {
    id: 6,
    title: "Is there an annual plan?",
    icon: AiOutlineFileSync,
    description:
      "Absolutely. All of our plans grant the option to pay annually, and doing so will land you a nice 20% discount. Contact our sales team to learn more.",
  },
];

export const features = [
  {
    name: "professional survey themes",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "add your logo",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "skip logic branching",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "customizable thank you page",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "multiple thank-you pages",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "data export",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "net promoter score(nps)",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "dynamic text-box",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "repeatable sections",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "multilingual surveys",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "advanced branching logic",
    professional: false,
    business: true,
    enterprise: true,
  },
  {
    name: "mobile app",
    professional: false,
    business: true,
    enterprise: true,
  },
  {
    name: "user roles & permissions",
    professional: false,
    business: true,
    enterprise: true,
  },
  {
    name: "recurring surveys & schedule later",
    professional: false,
    business: true,
    enterprise: true,
  },
  {
    name: "formula and summary",
    professional: false,
    business: true,
    enterprise: true,
  },
];


export const featuresfrist = [
  {
    name: "professional survey themes",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "add your logo",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "skip logic branching",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "customizable thank you page",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "multiple thank-you pages",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "data export",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "net promoter score(nps)",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "dynamic text-box",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "repeatable sections",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "multilingual surveys",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    name: "advanced branching logic",
    professional: false,
    business: true,
    enterprise: true,
  },
  {
    name: "mobile app",
    professional: false,
    business: true,
    enterprise: true,
  },
  {
    name: "user roles & permissions",
    professional: false,
    business: true,
    enterprise: true,
  },
  {
    name: "recurring surveys & schedule later",
    professional: false,
    business: true,
    enterprise: true,
  },
  {
    name: "formula and summary",
    professional: false,
    business: true,
    enterprise: true,
  },
];


export const featuressecond = [
  { question: "Question validation", validations: [true, true, true] },
  { question: "Text limit validation", validations: [true, true, true] },
  { question: "Email address validation", validations: [true, true, true] },
  { question: "Skip logic branching", validations: [false, true, true] },
  { question: "Text Piping", validations: [false, true, true] },
  { question: "Looping logic", validations: [false, true, true] },
  {
    question: "Quiz scoring and instant results",
    validations: [false, false, true],
  },
  { question: "Advanced branching logic", validations: [false, false, true] },
  { question: "Dynamic Category", validations: [false, false, true] },
  { question: "Piping & Variables", validations: [false, false, true] },
];
