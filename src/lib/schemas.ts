import { z } from "zod";

// the shape static for TypeScript types
const baseSchemaShape = {
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  message: z.string(),
  _gotcha: z.string().optional(),
};

// 1. Export the TYPE for form validation (used by react-hook-form)
export type ContactFormData = z.infer<typeof contactFormSchema>;

// 2. Export a FUNCTION that creates the schema with translations
// We pass the 't' translator function to it
export const createContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(3, { message: t("name_min") }),
    email: z.string().email({ message: t("email_invalid") }),
    subject: z.string().min(5, { message: t("subject_min") }),
    message: z.string().min(10, { message: t("message_min") }),
    // Honeypot field (hidden from users, filled by bots)
    _gotcha: z.string().optional(),
  });

// 3. Export a default schema for Server-Side Validation (route.ts)
// The API route doesn't need translated error messages, just validation logic.
export const contactFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
  _gotcha: z.string().optional(),
});
