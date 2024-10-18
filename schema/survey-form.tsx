import { z } from "zod";

export const surveySchema = z.object({
  surveysPerMonth: z.number().min(0, "Must be at least 0"),
  primaryGoal: z.enum([
    "Market Research",
    "Customer Feedback",
    "Employee Engagement",
    "Academic Research",
    "Other",
  ]),
  expectedResponses: z.number().min(0, "Must be at least 0"),
  needsAnalytics: z.enum(["Yes", "No"]),
  integrations: z.enum(["Yes", "No"]),
  customBranding: z.enum(["Yes", "No"]),
  multipleTeamMembers: z.enum(["Yes", "No"]),
  dedicatedAccountManager: z.enum(["Yes", "No"]),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
  receiveUpdates: z.enum(["Yes", "No"]),
});
