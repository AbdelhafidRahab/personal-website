import { Geist, Geist_Mono, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";

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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const baseUrl = "https://abdelhafidrahab.net";
  const url = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    keywords: [
      "Full Stack Engineer",
      "Software Engineer",
      "Full Stack Developer",
      "Nest.js",
      "Angular.js",
      "React.js",
      "Next.js",
      "Node.js",
      "Flutter",
      "Abdelhafid Rahab",
      "Algeria",
      "Digital Solutions",
      "Expert",
    ],
    authors: [{ name: "Abdelhafid Rahab", url: baseUrl }],
    creator: "Abdelhafid Rahab",
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("title"),
      description: t("description"),
      siteName: "Abdelhafid Rahab",
      images: [
        {
          url: "/personal-website.png", // Needs to be added to public
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/personal-website.png"],
      creator: "@AbdelhafidRahab",
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// This function generates the static params for SSG (optional but recommended)
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  // Determine text direction
  const direction = locale === "ar" ? "rtl" : "ltr";

  const fontClass =
    locale === "ar" ? cairo.className : `${geistSans.variable} ${geistMono.variable} font-sans`;

  return (
    <html lang={locale} dir={direction} className="scroll-smooth">
      <body className={`${fontClass} antialiased bg-black text-neutral-200`}>
        <NextIntlClientProvider messages={messages}>
          <JsonLd />
          <Navbar />
          {children}
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
