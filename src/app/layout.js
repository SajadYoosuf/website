import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Novox Edtech | Learn. Build. Get Placed.",
  description: "Future-ready software training institute offering courses in Flutter, MERN, Python, and UI/UX with AI-powered learning tools.",
};

import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
