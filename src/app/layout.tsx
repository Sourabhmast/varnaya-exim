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
  title: "Varnaya Exim | Premium Turmeric Exporters from India",
  description: "Varnaya Exim exports premium turmeric powder and spices from Karnataka, India to global buyers.",
  keywords: [
    "turmeric exporters india", 
    "turmeric powder export", 
    "spices exporter", 
    "Karnataka turmeric",
    "premium agricultural commodities",
    "B2B agriculture export India",
    "export import company Karnataka",
    "wholesale turmeric powder",
    "fresh ginger exporters",
    "Indian spices wholesale",
    "global food commodities",
    "jaggery exporters India",
    "pulses export Karnataka",
    "Varnaya EXIM"
  ],
  robots: {
    index: true,
    follow: true,
  },
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
