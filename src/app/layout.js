import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Novox Edtech | AI-Powered Tech Education & Placements",
  description: "Transforming students into career-ready professionals with AI-driven learning. Join Novox Edtech for premium courses in Flutter, MERN stack, UI/UX, and Digital Marketing with guaranteed placement support.",
  keywords: [
    "Best software training institute in calicut",
    "digital marketing institute in calicut",
    "digital marketing course in calicut",
    "best digitalmarkeing course in calicut",
    "MERN Stack development course in calicut",
    "best mern stack course in calicut",
    "flutter app development course",
    "flutter institute near me",
    "flutter course in calicut",
    "software training institute near me",
    "best flutter course in calicut",
    "best software training institute in kerala",
    "best software training institute in kozhikode",
    "Novox Edtech",
    "AI learning",
    "Flutter course Kerala",
    "MERN stack training",
    "UI/UX design academy",
    "Software development placements",
    "Career growth framework"
  ],
  authors: [{ name: "Novox Edtech Team" }],
  openGraph: {
    title: "Novox Edtech | Future-Ready Software Training",
    description: "Learn the latest tech with our AI-powered 5-Pillar Growth Framework. Real projects, live mentorship, and 100% placement support.",
    url: "https://novoxedtech.com",
    siteName: "Novox Edtech",
    images: [
      {
        url: "/novox-logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novox Edtech | AI-Driven Tech Academy",
    description: "Kerala's leading Edtech academy for Flutter, MERN, and Design. Elevate your career with AI-powered mentorship.",
    images: ["/novox-logo.png"],
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
  icons: {
    icon: '/brand-logo.png',
    apple: '/brand-logo.png',
  },
};

import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
