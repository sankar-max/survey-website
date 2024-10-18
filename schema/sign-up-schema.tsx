import { z } from "zod";

export const signUpSchema = z
  .object({
    emailAddress: z
      .string()
      .email("Invalid email address")
      .nonempty("Email address is required"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .nonempty("Password is required"),

    confirmPassword: z.string().nonempty("Please confirm your password"),

    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters long")
      .nonempty("First name is required"),

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters long")
      .nonempty("Last name is required"),

    companyName: z.string().nonempty("Company name is required"),

    phoneNumber: z
      .string()
      .regex(/^\+?[0-9\s]+$/, "Phone number is invalid")
      .min(10, { message: "Phone number must be exactly 10 digits" })
      .max(10, { message: "Phone number must be exactly 10 digits" })
      .nonempty("Phone number is required")
      .optional()
      .nullable(),

    verificationCode: z.string().min(6, {
      message: "Your one-time password must be 6 characters.",
    }),

    accountType: z.enum(["Personal", "Work", "Education", ""]),

    uploadLogo: z.instanceof(File).optional(),

    themePrimaryColor: z.string().nonempty("Primary color is required"),

    themeSecondaryColor: z.string().nonempty("Secondary color is required"),

    font: z.enum(
      ["Arial", "Helvetica", "Times New Roman", "Courier New", "Verdana"],
      {
        required_error: "Font selection is required",
      },
    ),

    plan: z.enum(["Basic Plan", "Premium Plan", "Enterprise Plan"], {
      required_error: "Plan selection is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
