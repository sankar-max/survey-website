"use client";

import { z } from "zod";

export const userFormSchema = z
  .object({
    fullName: z.string().min(1, { message: "Full Name is required" }),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .nonempty({ message: "Email is required" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character",
      }),

    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),

    companyName: z.string().optional(),

    role: z.enum(["Manager", "Developer", "Designer", "Sales", "Other"], {
      required_error: "Role is required",
      invalid_type_error: "Invalid role selected",
    }),

    industry: z.string().min(1, { message: "Industry is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password does not match",
  });
