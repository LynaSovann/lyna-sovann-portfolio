import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Sovann Lyna - Fullstack Developer & DevOps Engineer",
    template: "%s | Sovann Lyna",
  },
  description:
    "A Computer Science student graduating in 2025 with skills in DevOps Engineering and Full-stack Development.",
  keywords: [
    "សុវណ្ណ លីណា",
    "Sovann Lyna",
    "Lyna Sovann",
    "Portfolio",
    "Fullstack Developer",
    "DevOps Engineer",
    "Web Development",
    "Software Engineer",
    "Cambodia",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Cloud Infrastructure",
    "Portfolio",
    "Cambodian Developer",

    "Fullstack Developer in Cambodia",
    "DevOps Engineer in Cambodia",
  ],
  authors: [{ name: "Sovann Lyna" }],
  creator: "Sovann Lyna",
  publisher: "Sovann Lyna",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.lynasovann.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.lynasovann.site",
    title: "Sovann Lyna - Fullstack Developer & DevOps Engineer",
    description:
      "A Computer Science student graduating in 2025 with skills in DevOps Engineering and Full-stack Development.",
    siteName: "Sovann Lyna Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sovann Lyna - Fullstack Developer & DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovann Lyna - Fullstack Developer & DevOps Engineer",
    description:
      "A Computer Science student graduating in 2025 with skills in DevOps Engineering and Full-stack Development.",
    images: ["/og-image.jpg"],
    creator: "@lyna_sovann",
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
  verification: {
    google: "1K4a8qO3b-Ckx9lN4brKCEZma3guMQqXJrgjAeAkMuU",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark light",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Sovann Lyna",
    "application-name": "Sovann Lyna Portfolio",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
