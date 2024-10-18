/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlanPriceT } from "@/app/sign-up/_components/signUpCard";
import { Building2, Lock, LucideIcon, Mail, Phone, User } from "lucide-react";
import { IconType } from "react-icons/lib";

export type signUpCardT = {
  name?: keyof FormFields;
  type: string;
  placeholder?: string;
  options?: string[];
  label?: string;
  accept?: string;
  plans?: PlanPriceT;
  icon?: IconType | LucideIcon;
  require?: boolean;
  other?: any[];
}[];

export const signUpDataList: signUpCardT[] = [
  // Page 1
  [
    {
      name: "emailAddress",
      type: "email",
      placeholder: "Email address",
      icon: Mail,
      require: true,
    },
  ],

  // Page 2
  [
    {
      name: "firstName",
      type: "text",
      placeholder: "First name",
      icon: User,
      require: true,
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Last name",
      icon: User,
      require: true,
    },
  ],
  // Page 3

  [
    {
      name: "password",
      type: "password",
      placeholder: "Password",

      icon: Lock,
      require: true,
    },

    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      require: true,
      icon: Lock,
    },
  ],

  // Page 4
  [
    {
      name: "companyName",
      type: "text",
      placeholder: "Company name",
      require: true,
      icon: Building2,
    },
    {
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone number",
      icon: Phone,
    },
  ],

  // Page 5
  [
    {
      name: "verificationCode",
      type: "otp",
      label:
        "Please check your e-mail account for the Verification code we just sent you and enter that code in the box below .",
      placeholder: "Enter your six digit code",
      require: true,
      icon: Lock,
    },
  ],

  // Page 6
  [
    {
      name: "accountType",
      type: "select",
      options: ["Personal", "Work", "Education"],
      label: "Let's get started with your account type",
      require: true,
    },
  ],

  // Page 7
  [
    {
      name: "plan",
      type: "pricingPlan",
      options: ["Basic Plan", "Premium Plan", "Enterprise Plan"],
      label: "Choose your plan",
      require: true,
    },
  ],
  // Page 8
  [
    {
      type: "theme",
      other: [
        {
          name: "uploadLogo",
          type: "theme",
          placeholder: "Upload logo",
          accept: "image/*",
          require: true,
        },
        {
          name: "themePrimaryColor",
          type: "theme",
          label: "Choose primary color",
          require: true,
        },

        {
          name: "font",
          type: "theme",
          options: [
            "Arial",
            "Helvetica",
            "Times New Roman",
            "Courier New",
            "Verdana",
          ],
          label: "Choose font",
          require: true,
        },
      ],
    },
  ],

  // [
  //   {
  //     name: "themePrimaryColor",
  //     type: "color",
  //     label: "Choose primary color",
  //     require: true,
  //   },
  //   {
  //     name: "themeSecondaryColor",
  //     type: "color",
  //     label: "Choose secondary color",
  //     require: true,
  //   },
  //   {
  //     name: "font",
  //     type: "select",
  //     options: [
  //       "Arial",
  //       "Helvetica",
  //       "Times New Roman",
  //       "Courier New",
  //       "Verdana",
  //     ],
  //     label: "Choose font",
  //     require: true,
  //   },
  // ],
];

type FormFields = {
  emailAddress: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  companyName: string;
  phoneNumber: string;
  verificationCode: string;
  accountType: "Personal" | "Work" | "Education";
  plan: "Basic Plan" | "Premium Plan" | "Enterprise Plan";
};
