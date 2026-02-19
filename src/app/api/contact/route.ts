import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas";
import { EmailTemplate } from "@/components/EmailTemplate";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("❌ ERROR: RESEND_API_KEY is missing");
    return NextResponse.json({ error: "Configuration Error" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();

    // 1. Validation
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const { name, email, subject, message, _gotcha } = result.data;

    // 2. Honeypot check
    if (_gotcha) return NextResponse.json({ success: true });

    // 3. ACTUAL Email Sending
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Resend provides this for testing
      to: ["mrabdelhafidrahab@gmail.com"], // Your actual email
      subject: `Personal Website: ${subject}`,
      react: EmailTemplate({ name, email, subject, message }),
    });

    if (error) {
      console.error("❌ Resend Error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
