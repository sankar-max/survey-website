export const surveyFormData: Array<{
  name: keyof FormFields; // Ensures 'name' is one of the keys in FormFields
  type: string;
  placeholder?: string;
  options?: string[];
  label?: string;
}> = [
  {
    name: "surveysPerMonth",
    type: "number",
    placeholder: "Surveys per month",
  },
  {
    name: "primaryGoal",
    type: "select",
    options: [
      "Market Research",
      "Customer Feedback",
      "Employee Engagement",
      "Academic Research",
      "Other",
    ],
  },
  {
    name: "expectedResponses",
    type: "number",
    placeholder: "Expected responses",
  },
  {
    name: "needsAnalytics",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    name: "integrations",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    name: "customBranding",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    name: "multipleTeamMembers",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    name: "dedicatedAccountManager",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    name: "receiveUpdates",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    name: "agreeToTerms",
    type: "checkbox",
    label: "Agree to Terms and Conditions",
  },
];
type FormFields = {
  surveysPerMonth: number;
  primaryGoal:
    | "Market Research"
    | "Customer Feedback"
    | "Employee Engagement"
    | "Academic Research"
    | "Other";
  expectedResponses: number;
  needsAnalytics: "Yes" | "No";
  integrations: "Yes" | "No";
  customBranding: "Yes" | "No";
  multipleTeamMembers: "Yes" | "No";
  dedicatedAccountManager: "Yes" | "No";
  receiveUpdates: "Yes" | "No";
  agreeToTerms: boolean;
};
