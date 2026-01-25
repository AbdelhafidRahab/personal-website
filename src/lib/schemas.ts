import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  // Honeypot field (hidden from users, filled by bots)
  _gotcha: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;