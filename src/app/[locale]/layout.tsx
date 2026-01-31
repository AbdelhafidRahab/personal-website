import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Abdelhafid Rahab | Full Stack Engineer & AI Enthusiast",
  description: "Full Stack Engineer & AI Enthusiast building digital solutions. I architect, code, and ship scalable systems that solve real user problems.",
};

// This function generates the static params for SSG (optional but recommended)
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Await the params object
  const { locale } = await params;

  // Security check: If locale is invalid, trigger 404
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  // Determine text direction
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  const fontClass = locale === 'ar' ? cairo.className : `${geistSans.variable} ${geistMono.variable} font-sans`;

  return (
    <html lang={locale} dir={direction} className="scroll-smooth">
      <body className={`${fontClass} antialiased bg-black text-neutral-200`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
