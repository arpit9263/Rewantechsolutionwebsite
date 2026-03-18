import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://rewantechsolutions.com"),
  title: {
    default: "Rewan Tech Solutions",
    template: "%s | Rewan Tech Solutions",
  },
  description:
    "Rewan Tech Solutions builds modern websites, mobile apps, SaaS products, and scalable digital solutions.",
  keywords: [
    "IT company",
    "web development",
    "mobile app development",
    "SaaS development",
    "UI UX design",
    "AI integration",
    "software company India",
  ],
  openGraph: {
    title: "Rewan Tech Solutions",
    description:
      "Modern web, mobile, SaaS, and AI-powered digital solutions for businesses.",
    url: "https://rewantechsolutions.com",
    siteName: "Rewan Tech Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewan Tech Solutions",
    description:
      "Modern web, mobile, SaaS, and AI-powered digital solutions for businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}