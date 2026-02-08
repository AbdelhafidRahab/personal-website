import { z } from "zod";

// the shape static for TypeScript types
const baseSchemaShape = {
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  message: z.string(),
  _gotcha: z.string().optional(),
};

// 1. Export the Type based on the shape (No changes to how types work)
export type ContactFormData = z.infer<typeof contactFormSchemaStatic>;
const contactFormSchemaStatic = z.object(baseSchemaShape);

// 2. Export a FUNCTION that creates the schema with translations
// We pass the 't' translator function to it
export const createContactSchema = (t: any) => z.object({
  name: z.string().min(3, { message: t("name_min") }),
  email: z.string().email({ message: t("email_invalid") }),
  subject: z.string().min(5, { message: t("subject_min") }),
  message: z.string().min(10, { message: t("message_min") }),
  // Honeypot field (hidden from users, filled by bots)
  _gotcha: z.string().optional(),
});