import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Varnaya EXIM | Premium Export Import Company",
  description: "Born golden. Traded global. Premium Turmeric, Spices, and Agricultural Commodities exported worldwide from Karnataka, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-primary text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
        <Analytics />
      </body>
    </html>
  );
}
