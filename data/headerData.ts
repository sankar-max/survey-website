import { SquareLibrary } from "lucide-react";
import { GrUserExpert } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import { SiWorkplace } from "react-icons/si";

export const headerData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Solutions",
    dropdown: [
      {
        title: "Customer Insights",
        description: "Enhance customer loyalty through deep understanding.",
        href: "/nav/customerInsights",
        icon: RiCustomerService2Line,
      },
      {
        title: "Patient Care",
        description:
          "Improve patient satisfaction and overall care experience.",
        href: "/nav/patientCare",
        icon: GrUserExpert,
      },
      {
        title: "Workplace Engagement",
        description: "Boost employee motivation and retention effectively.",
        href: "/",
        icon: SiWorkplace,
      },
      {
        title: "Market Research",
        description: "Leverage insights to drive smart business strategies.",
        href: "/",
        icon: SquareLibrary,
      },
    ],
  },
  {
    name: "Features",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
];
