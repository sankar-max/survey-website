import React from "react";
import { PatientCareDesign } from "../patientCare";
import {
  MdOutlineCastForEducation,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { GiTrade } from "react-icons/gi";
import { TbIrregularPolyhedronPlus } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiHealthBookLine, RiHomeOfficeLine } from "react-icons/ri";
import { SiLocal } from "react-icons/si";

  const patientFirstData = [
    {
      id: 1,
      title: "Private healthcare",
      icon: MdOutlineHealthAndSafety,
      description:
        "From medical clinicians and practices including GP surgeries, dentists, opticians and pharmacies to commercial healthcare providers. SmartSurvey works with a growing number of customers in private healthcare.Charities",
    },
    {
      id: 2,
      title: "Charities",
      icon: RiHomeOfficeLine,
      description:
        "The charity and VCSE sector has an increasingly important role in communicating the needs of local service users and communities. It's why SmartSurvey is increasingly called upon to support this sector.",
    },
    {
      id: 3,
      title: "Educators",
      icon: MdOutlineCastForEducation,
      description:
        "From large government agency's to specialist training hospitals, colleges and universities. SmartSurvey supports national and local educators at the forefront of the UK's healthcare training provision.",
    },
    {
      id: 4,
      title: "Healthwatch",
      icon: RiHealthBookLine,
      description:
        "Giving patient's a sufficient voice is vital to raising standards across the healthcare industry. That's why SmartSurvey works with the UK's primary health and social care champion.",
    },
    {
      id: 5,
      title: "Local authorities",
      icon: SiLocal,
      description:
        "Local authorities have an increasingly important role in collecting feedback from local service users. It's why more of them are coming to SmartSurvey, knowing we already have a strong and trusted presence in their sector.",
    },
    {
      id: 6,
      title: "Trade bodies",
      icon: GiTrade,
      description:
        "To maintain industry standards, healthcare professionals as well as the patients they care for need a voice. It's why SmartSurvey supports trade bodies representing the industry's professions.",
    },
    {
      id: 7,
      title: "Regulatory bodies",
      icon: TbIrregularPolyhedronPlus,
      description:
        "Regulatory bodies rely on effective data collection to gather patient feedback and maintain professional practitioner standards. It's another arm of the healthcare sector where SmartSurvey is strong.",
    },
    {
      id: 8,
      title: "NHS trusts",
      icon: VscWorkspaceTrusted,
      description:
        "SmartSurvey works with a growing number of NHS Trusts and NHS Community Trusts, supporting them with key patient feedback initiatives including FFT.",
    },
  ];
const patientSecondData = [
  {
    id: 1,
    title: "We always prioritise your security",
    img: "/staysafe.svg",
    content:
      "Adheres to the highest standards of IT security and data protection Put powerful customer insight in the hands of your operational teams, use APIs, web hooks or our native Salesforce integration to share feedback in the systems they already work in Complies with GDPR, the Data protection Act and the NHS Data Security and Protection Toolkit Is built by a software provider that is ISO27001 and Cyber Essentials Plus accredited",
  },
  {
    id: 2,
    title: "Smart security features for teams",
    img: "/smartsecurity.svg",
    content:
      "Access control tools including Two-Factor Authentication (2FA) and password policies Team management features that include user permissions and a master user who can manage these permissions and the activities of sub-user accounts Password protection on survey report links that your teams share with others, so that its content can only be seen by those who need to view it",
  },
  {
    id: 3,
    title: "Drive more co-ordinated action and engagement",
    img: "/Drivemoreco-ordinated.svg",
    content:
      "Create custom stakeholder reports and share real-time access to user stories and insight, without need for additional user licences Set up project teams of all shapes and sizes for success with the means to share templates, themes, and your preferred questions Empower team members to work more effectively and seamlessly together through detailed user permissions",
  },
];
    
export default function PatientCare() {
  return (
    <>
      <PatientCareDesign
        patientFirstData={patientFirstData}
        patientSecondData={patientSecondData}
      />
    </>
  );
}
